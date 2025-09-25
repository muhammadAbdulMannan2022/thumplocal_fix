import React, { useState, useMemo } from "react";
import ServiceCard from "./ServiceCard";
import RangeBar from "./RangeBar";
import SummaryPanel from "./SummaryPanel";

const initialServices = [
  {
    id: 1,
    title: "Online Foundation 50+ Online Listings",
    price: 1000,
    position: "top",
  },
  {
    id: 2,
    title: "Online Reviews Management",
    price: 1000,
    position: "bottom",
  },

  {
    id: 3,
    title: "Social Media Posting Up to 5 Profiles",
    price: 3000,
    position: "top",
  },
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
];

const ServiceSelector = () => {
  const [services, setServices] = useState(initialServices);
  // Initial step is 1
  const [sliderValue, setSliderValue] = useState(1);

  const handleSliderChange = (e) => setSliderValue(parseInt(e.target.value));

  const handlePriceChange = (id, newPrice) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, price: newPrice } : s))
    );
  };

  const handleRemoveService = (idToRemove) => {
    if (sliderValue > services.length) {
      setSliderValue(Math.max(1, services.length));
    }

    setServices((prevServices) => {
      const newServices = prevServices.filter((s) => s.id !== idToRemove);

      // ✅ Re-normalize slider if it exceeds new length
      setSliderValue((prevSlider) => {
        const maxSlider = newServices.length > 0 ? newServices.length : 1;
        return Math.min(prevSlider, maxSlider);
      });

      return newServices;
    });
  };

  const topServices = useMemo(
    () => services.filter((s) => s.position === "top"),
    [services]
  );
  const bottomServices = useMemo(
    () => services.filter((s) => s.position === "bottom"),
    [services]
  );

  const activeServices = useMemo(() => {
    if (services.length === 0) return [];

    const activeTopCount = Math.ceil(sliderValue / 2);
    const activeBottomCount = Math.floor(sliderValue / 2);

    // ✅ Re-slice based on NEW services order
    return [
      ...topServices.slice(0, activeTopCount),
      ...bottomServices.slice(0, activeBottomCount),
    ];
  }, [sliderValue, services, topServices, bottomServices]);

  const totalAmount = useMemo(
    () => activeServices.reduce((sum, s) => sum + s.price, 0),
    [activeServices]
  );

  const hasServices = services.length > 0;

  return (
    <div className=" w-full py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <h1 className="font-extrabold md:text-[60px] text-[42px] text-[#393764] text-center">
        Find your appropriate package here
      </h1>
      <h2 className="font-extrabold text-[28px] text-[#7A7989] text-center pt-4 pb-12">
        <span className="font-extrabold text-[#006A05] text-center">Move</span>{" "}
        the pointer to see the appropriate package for you.
      </h2>
      <div className="container mx-auto flex flex-col lg:flex-row lg:items-center border border-amber-300">
        <div className="flex-grow border border-amber-300">
          {/* --- Large Screen Layout --- */}
          <div className="hidden lg:block">
            {/* TOP ROW (odd indexes) */}
            <div className="grid grid-cols-8 gap-4 pb-8 place-items-center">
              {services
                .filter((_, idx) => idx % 2 === 0) // odd positions → top row
                .map((service, index) => (
                  <div
                    key={service.id}
                    style={{ gridColumnStart: 1 + index * 2 }}
                    className="border border-amber-300"
                  >
                    <ServiceCard
                      {...service}
                      isTop={true}
                      value={service.price}
                      onPriceChange={handlePriceChange}
                      onRemove={handleRemoveService}
                    />
                  </div>
                ))}
            </div>

            {hasServices && (
              <RangeBar
                value={sliderValue}
                onChange={handleSliderChange}
                min={1}
                max={services.length}
                step={1}
              />
            )}

            {/* BOTTOM ROW (even indexes) */}
            <div className="grid grid-cols-8 gap-4 pt-8 place-items-center">
              {services
                .filter((_, idx) => idx % 2 !== 0) // even positions → bottom row
                .map((service, index) => (
                  <div
                    key={service.id}
                    style={{ gridColumnStart: 2 + index * 2 }}
                  >
                    <ServiceCard
                      {...service}
                      isTop={false}
                      value={service.price}
                      onPriceChange={handlePriceChange}
                      onRemove={handleRemoveService}
                    />
                  </div>
                ))}
            </div>
          </div>

          {/* --- Small Screen Vertical Layout --- */}
          <div className="lg:hidden">
            <div className="w-full overflow-x-auto pb-4">
              <div className="inline-grid grid-cols-[1fr_auto_1fr] gap-x-4 items-start min-w-[500px]">
                {/* LEFT COLUMN (odd indexes) */}
                <div className="flex flex-col items-end space-y-16">
                  {services
                    .filter((_, idx) => idx % 2 === 0)
                    .map((service) => (
                      <ServiceCard
                        key={service.id}
                        {...service}
                        isLeft={true}
                        value={service.price}
                        onPriceChange={handlePriceChange}
                        onRemove={handleRemoveService}
                      />
                    ))}
                </div>

                {/* Center RangeBar */}
                <div className="flex justify-center h-full min-h-[800px]">
                  {hasServices && (
                    <RangeBar
                      value={sliderValue}
                      onChange={handleSliderChange}
                      min={1}
                      max={services.length}
                      step={1}
                      orientation="vertical"
                    />
                  )}
                </div>

                {/* RIGHT COLUMN (even indexes) */}
                <div className="flex flex-col items-start space-y-16 pt-16">
                  {services
                    .filter((_, idx) => idx % 2 !== 0)
                    .map((service) => (
                      <ServiceCard
                        key={service.id}
                        {...service}
                        isLeft={false}
                        value={service.price}
                        onPriceChange={handlePriceChange}
                        onRemove={handleRemoveService}
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
  );
};

export default ServiceSelector;
