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
        <iframe
          width="100%"
          height="600"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=es&amp;q=uriburu%201170,caba+(consultorio%20galgano)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
