import React, { useState, useMemo } from "react";
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
  const [sliderValue, setSliderValue] = useState(0);
  // Removed connector line logic & refs (no longer needed)

  const handleSliderChange = (e) => setSliderValue(parseInt(e.target.value));

  const handlePriceChange = (id, newPrice) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, price: newPrice } : s))
    );
  };

  const handleRemoveService = (idToRemove) => {
    setServices((prevServices) => {
      const newServices = prevServices.filter((s) => s.id !== idToRemove);
      // Keep slider value as is - percentage based system doesn't need adjustment
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
  // Custom activation logic based on percentage
  const activeServiceIds = useMemo(() => {
    const activeIds = new Set();
    
    // Top cards activation logic - dynamically distribute between 0% and 100%
    const topCount = topServices.length;
    if (topCount > 0) {
      if (topCount === 1) {
        // Single card activates at 0%
        if (sliderValue >= 0) activeIds.add(topServices[0].id);
      } else {
        // Multiple cards: first at 0%, last at 100%, others evenly distributed
        const step = 100 / (topCount - 1);
        for (let i = 0; i < topCount; i++) {
          const threshold = i * step;
          if (sliderValue >= threshold) {
            activeIds.add(topServices[i].id);
          }
        }
      }
    }
    
    // Bottom cards activation logic
    const bottomCount = bottomServices.length;
    if (bottomCount > 0) {
      if (sliderValue >= 20) activeIds.add(bottomServices[0].id); // First bottom card at 20%
      if (bottomCount > 1) {
        // Distribute remaining bottom cards between 20% and 80%
        const step = bottomCount > 2 ? (80 - 20) / (bottomCount - 1) : 60;
        for (let i = 1; i < bottomCount - 1; i++) {
          const threshold = 20 + (step * i);
          if (sliderValue >= threshold) activeIds.add(bottomServices[i].id);
        }
        // Last bottom card at 80%
        if (sliderValue >= 80) activeIds.add(bottomServices[bottomCount - 1].id);
      }
    }
    
    return activeIds;
  }, [sliderValue, topServices, bottomServices]);
  
  const activeServices = useMemo(() => {
    return services.filter(service => activeServiceIds.has(service.id));
  }, [services, activeServiceIds]);
  const totalAmount = useMemo(
    () => activeServices.reduce((sum, s) => sum + s.price, 0),
    [activeServices]
  );
  const hasServices = services.length > 0;

  // Create step positions for the slider based on activation thresholds
  const stepPositions = useMemo(() => {
    const positions = new Set([0]); // Always include 0%
    
    // Add top card thresholds - dynamically distributed
    const topCount = topServices.length;
    if (topCount > 1) {
      const step = 100 / (topCount - 1);
      for (let i = 1; i < topCount; i++) {
        positions.add(Math.round(i * step));
      }
    }
    
    // Add bottom card thresholds
    if (bottomServices.length > 0) positions.add(20);
    if (bottomServices.length > 1) positions.add(80);
    if (bottomServices.length > 2) {
      const step = (80 - 20) / (bottomServices.length - 1);
      for (let i = 1; i < bottomServices.length - 1; i++) {
        positions.add(Math.round(20 + (step * i)));
      }
    }
    
    return Array.from(positions).sort((a, b) => a - b);
  }, [topServices.length, bottomServices.length]);

  // Removed layout measurement effect (connectors not needed anymore)

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
          <div className="flex-grow relative">
            {/* Connector SVG removed */}

            {/* --- Large Screen Layout --- */}
            <div className="hidden lg:block">
              <div
                className="grid gap-6 pb-24 place-items-center pl-8"
                style={{
                  gridTemplateColumns: `repeat(${Math.max(
                    topServices.length,
                    1
                  )}, 1fr)`,
                }}
              >
                {topServices.map((service) => (
                  <ServiceCard
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
                <div className="mx-auto" style={{width:"81%", marginLeft:"11%", marginRight:"13%"}}>
                  <RangeBar
                    value={sliderValue}
                    onChange={handleSliderChange}
                    min={0}
                    max={100}
                    step={1}
                    stepPositions={stepPositions}
                  />
                </div>
              )}
              <div
                className="grid gap-7 ml-5 pt-24 place-items-center justify-center"
                style={{
                  gridTemplateColumns: `repeat(${Math.max(
                    bottomServices.length,
                    1
                  )}, max-content)`,
                }}
              >
                {bottomServices.map((service) => (
                  <ServiceCard
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
                <div className="inline-grid grid-cols-[1fr_auto_1fr] gap-x-6items-start min-w-[600px]">
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
                        min={0}
                        max={100}
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
