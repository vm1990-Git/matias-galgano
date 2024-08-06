import React, { useState, useCallback, useRef, useEffect } from "react";
import { IconType } from "react-icons";

interface ServiceItemProps {
  title: string;
  description: string | string[];
  icon: IconType;
  iconSize: number;
}

const ServiceItem: React.FC<ServiceItemProps> = ({
  title,
  description,
  icon: IconComponent,
  iconSize,
}) => {
  const [selected, setSelected] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = useCallback(() => {
    setSelected(true);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      setSelected(false);
    }, 3000);
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center text-center text-wrap rounded-2xl h-60 w-60 font-semibold text-sm select-none"
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter}
    >
      {selected ? (
        <div className="flex flex-col justify-center items-center w-lvw px-6 max-w-96 animate-fade-up animate-once">
          <div className="flex flex-col items-center justify-center pb-2">
            <IconComponent size={50} aria-hidden="true" />
            <span className="flex text-2xl">{title}</span>
          </div>
          <div className="flex justify-center flex-wrap gap-1 text-start animate-fade-up animate-once">
            {Array.isArray(description) ? (
              description.map((d, index) => (
                <div key={index}>
                  <span>▸ {d}</span>
                </div>
              ))
            ) : (
              <span className="w-80 text-center duration-400 text-sm animate-fade-up animate-once">
                {description}
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="flex flex-col sm:flex-col justify-center items-center gap-4 w-60 h-60">
          <div className="flex justify-center">
            <IconComponent size={iconSize} aria-hidden="true" />
          </div>
          <span className="text-center text-2xl pb-2 translate-y-1 md:w-full">
            {title}
          </span>
        </div>
      )}
    </div>
  );
};

export default ServiceItem;
