import React from "react";

const Location = () => {
  return (
    <div id="location-section" className="bg-white">
      <span className="flex justify-center font-bold bg-white text-4xl pt-8">
        Ubicación
      </span>
      <span className="flex justify-center font-semibold bg-white text-sm py-2">
        Pres. José E. Uriburu 1170 PB &quot;A&quot; (CP 1114)
      </span>
      <div style={{ width: "100%", backgroundColor: "white" }}>
        <div style={{ width: "100%", backgroundColor: "white" }}>
          <iframe
            width="100%"
            height="500"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=Pres.%20Jos%C3%A9%20E.%20Uriburu%201170%20PB%20A+(Mi%20nombre%20de%20egocios)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          ></iframe>
        </div>
        ;
      </div>
    </div>
  );
};

export default Location;
