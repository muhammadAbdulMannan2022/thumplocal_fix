import React, { useState, useMemo, useRef, useLayoutEffect } from "react";
import ServiceCard from "./ServiceCard";
import RangeBar from "./RangeBar";
import SummaryPanel from "./SummaryPanel";

const initialServices = [
  { id: 1, title: "Online Foundation", price: 1000, position: "top" },
  {
    id: 2,
    title: "Online Reviews Management",
    price: 1000,
    position: "bottom",
  },
  { id: 3, title: "Social Media Posting", price: 3000, position: "top" },
  {
    id: 4,
    title: "SEO - Search Engine Optimization",
    price: 3000,
    position: "bottom",
  },
  {
    id: 5,
    title: "New Website Build",
    price: 10000,
    position: "top",
    adjustable: true,
    minPrice: 5000,
    maxPrice: 20000,
  },
  {
    id: 6,
    title: "Location Service Pages",
    price: 4000,
    position: "bottom",
    adjustable: true,
    minPrice: 1000,
    maxPrice: 10000,
  },
  {
    id: 7,
    title: "Google AdWords Campaign",
    price: 25000,
    position: "top",
    adjustable: true,
    minPrice: 10000,
    maxPrice: 50000,
  },
  {
    id: 8,
    title: "Google Local Service Ads Campaign",
    price: 25000,
    position: "bottom",
    adjustable: true,
    minPrice: 5000,
    maxPrice: 50000,
  },
  {
    id: 9,
    title: "My Ads Campaign",
    price: 25000,
    position: "top",
    adjustable: true,
    minPrice: 5000,
    maxPrice: 50000,
  },
];

const ServiceSelector = () => {
  const [services, setServices] = useState(initialServices);
  const [sliderValue, setSliderValue] = useState(1);
  const [svgPaths, setSvgPaths] = useState([]);

  // Refs to measure DOM element positions
  const containerRef = useRef(null);
  const rangeBarRef = useRef(null);
  const serviceCardRefs = useRef({});

  const handleSliderChange = (e) => setSliderValue(parseInt(e.target.value));

  const handlePriceChange = (id, newPrice) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, price: newPrice } : s))
    );
  };

  const handleRemoveService = (idToRemove) => {
    setServices((prevServices) => {
      const newServices = prevServices.filter((s) => s.id !== idToRemove);
      setSliderValue((prevSlider) => {
        const maxSlider = newServices.length > 0 ? newServices.length : 1;
        return Math.min(prevSlider, maxSlider);
      });
      delete serviceCardRefs.current[idToRemove];
      return newServices;
    });
  };

  // Memoized calculations for services and their states
  const orderedServices = useMemo(() => {
    const top = services.filter((s) => s.position === "top");
    const bottom = services.filter((s) => s.position === "bottom");
    const ordered = [];
    const maxLength = Math.max(top.length, bottom.length);
    for (let i = 0; i < maxLength; i++) {
      if (i < top.length) ordered.push(top[i]);
      if (i < bottom.length) ordered.push(bottom[i]);
    }
    return ordered;
  }, [services]);

  const topServices = useMemo(
    () => services.filter((s) => s.position === "top"),
    [services]
  );
  const bottomServices = useMemo(
    () => services.filter((s) => s.position === "bottom"),
    [services]
  );
  const activeServices = useMemo(
    () => orderedServices.slice(0, sliderValue),
    [sliderValue, orderedServices]
  );
  const activeServiceIds = useMemo(
    () => new Set(activeServices.map((s) => s.id)),
    [activeServices]
  );
  const totalAmount = useMemo(
    () => activeServices.reduce((sum, s) => sum + s.price, 0),
    [activeServices]
  );
  const hasServices = services.length > 0;

  const stepPositions = useMemo(() => {
    if (orderedServices.length <= 1) return [50];
    return orderedServices.map(
      (_, i) => (i / (orderedServices.length - 1)) * 100
    );
  }, [orderedServices]);

  // This effect calculates the SVG path coordinates after the layout is painted
  useLayoutEffect(() => {
    const calculatePaths = () => {
      if (!containerRef.current || !rangeBarRef.current) return;
      const containerRect = containerRef.current.getBoundingClientRect();
      const rangeBarRect = rangeBarRef.current.getBoundingClientRect();
      const newPaths = services
        .map((service) => {
          const cardElement = serviceCardRefs.current[service.id];
          const serviceIndex = orderedServices.findIndex(
            (s) => s.id === service.id
          );
          if (!cardElement || serviceIndex === -1) return null;
          const cardRect = cardElement.getBoundingClientRect();
          const isTop = service.position === "top";
          const startX =
            cardRect.left - containerRect.left + cardRect.width / 2;
          const startY = isTop
            ? cardRect.bottom - containerRect.top
            : cardRect.top - containerRect.top;
          const endX =
            rangeBarRect.left -
            containerRect.left +
            rangeBarRect.width * (stepPositions[serviceIndex] / 100);
          const endY =
            rangeBarRect.top - containerRect.top + rangeBarRect.height / 2;
          const controlX = startX;
          const controlY = endY;
          return {
            id: service.id,
            d: `M ${startX} ${startY} Q ${controlX} ${controlY} ${endX} ${endY}`,
          };
        })
        .filter(Boolean);
      setSvgPaths(newPaths);
    };
    calculatePaths();
    const resizeObserver = new ResizeObserver(calculatePaths);
    resizeObserver.observe(containerRef.current);
    return () => resizeObserver.disconnect();
  }, [services, orderedServices, stepPositions, sliderValue]);

  return (
    <div className="w-full py-12 px-4 sm:px-6 lg:px-8 font-sans min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="font-extrabold md:text-[60px] text-[42px] text-[#393764] text-center leading-tight">
          Find your appropriate package here
        </h1>
        <h2 className="font-extrabold text-[28px] text-[#7A7989] text-center pt-4 pb-12">
          <span className="font-extrabold text-[#006A05] text-center">
            Move
          </span>{" "}
          the pointer to see the appropriate package for you.
        </h2>
        <div className="container mx-auto flex flex-col lg:flex-row lg:items-center">
          <div className="flex-grow relative" ref={containerRef}>
            {/* SVG Overlay for Connectors - CORRECTED */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none lg:block hidden"
              style={{ zIndex: 20 }}
            >
              {svgPaths.map((path) => (
                <path
                  key={path.id}
                  d={path.d}
                  strokeWidth="2"
                  fill="none"
                  className={`transition-all duration-300 ${
                    activeServiceIds.has(path.id)
                      ? "stroke-green-500"
                      : "stroke-gray-300"
                  }`}
                />
              ))}
            </svg>

            {/* --- Large Screen Layout --- */}
            <div className="hidden lg:block">
              <div
                className="grid gap-6 pb-24 place-items-center"
                style={{
                  gridTemplateColumns: `repeat(${Math.max(
                    topServices.length,
                    1
                  )}, 1fr)`,
                }}
              >
                {topServices.map((service) => (
                  <ServiceCard
                    ref={(el) => (serviceCardRefs.current[service.id] = el)}
                    key={service.id}
                    {...service}
                    isTop={true}
                    value={service.price}
                    onPriceChange={handlePriceChange}
                    onRemove={handleRemoveService}
                    isActive={activeServiceIds.has(service.id)}
                  />
                ))}
              </div>
              {hasServices && (
                <div className="" ref={rangeBarRef}>
                  <RangeBar
                    value={sliderValue}
                    onChange={handleSliderChange}
                    min={1}
                    max={orderedServices.length}
                    step={1}
                    stepPositions={stepPositions}
                  />
                </div>
              )}
              <div
                className="grid gap-6 pt-24 place-items-center"
                style={{
                  gridTemplateColumns: `repeat(${Math.max(
                    bottomServices.length,
                    1
                  )}, 1fr)`,
                }}
              >
                {bottomServices.map((service) => (
                  <ServiceCard
                    ref={(el) => (serviceCardRefs.current[service.id] = el)}
                    key={service.id}
                    {...service}
                    isTop={false}
                    value={service.price}
                    onPriceChange={handlePriceChange}
                    onRemove={handleRemoveService}
                    isActive={activeServiceIds.has(service.id)}
                  />
                ))}
              </div>
            </div>

            {/* --- Small Screen Vertical Layout --- */}
            <div className="lg:hidden">
              <div className="w-full overflow-x-auto pb-4">
                <div className="inline-grid grid-cols-[1fr_auto_1fr] gap-x-6 items-start min-w-[600px]">
                  <div className="flex flex-col items-end space-y-12 py-8">
                    {topServices.map((service) => (
                      <ServiceCard
                        key={service.id}
                        {...service}
                        isLeft={true}
                        value={service.price}
                        onPriceChange={handlePriceChange}
                        onRemove={handleRemoveService}
                        isActive={activeServiceIds.has(service.id)}
                      />
                    ))}
                  </div>
                  <div
                    className="flex justify-center h-full"
                    style={{ minHeight: "800px" }}
                  >
                    {hasServices && (
                      <RangeBar
                        value={sliderValue}
                        onChange={handleSliderChange}
                        min={1}
                        max={orderedServices.length}
                        step={1}
                        orientation="vertical"
                        stepPositions={stepPositions}
                      />
                    )}
                  </div>
                  <div
                    className="flex flex-col items-start space-y-12 py-8"
                    style={{ marginTop: "6rem" }}
                  >
                    {bottomServices.map((service) => (
                      <ServiceCard
                        key={service.id}
                        {...service}
                        isLeft={false}
                        value={service.price}
                        onPriceChange={handlePriceChange}
                        onRemove={handleRemoveService}
                        isActive={activeServiceIds.has(service.id)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-auto mt-12 lg:mt-0 flex-shrink-0">
            <SummaryPanel totalAmount={totalAmount} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSelector;
