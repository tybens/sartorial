import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // This is important for default styling

const MapChart = () => {
  // Define your target countries, their messages, and redirect URLs
  const targetCountries = [
    {
      name: "United States",
      message: "United States",
      url: "/shop/collection/anywhere-prods",
    },
    {
      name: "Peru",
      message: "Peru",
      url: "/shop/collection/anywhere-prods",
    },
    {
      name: "Eswatini",
      message: "Eswatini",
      url: "/shop/collection/anywhere-prods",
    },
    {
      name: "United Arab Emirates",
      message: "United Arab Emirates",
      url: "/shop/collection/anywhere-prods",
    },
    { name: "Guatemala", message: "Guatemala", url: "/guatemala" },
    { name: "Ghana", message: "Ghana (coming soon)", url: "/coming-soon" },
    { name: "Tanzania", message: "Tanzania (coming soon)", url: "/coming-soon" },
    { name: "Honduras", message: "Honduras (coming soon)", url: "/coming-soon" },
  ];

  // Handle click event for redirecting
  const handleCountryClick = (url) => {
    // Using window.location for redirection
    window.location.href = url;
  };

  return (
    <div>
      <ComposableMap>
        <Geographies geography="/features.json">
          {({ geographies }) =>
            geographies.map((geo) => {
              const countryData = targetCountries.find(
                (c) => c.name === geo.properties.name
              );

			  const comingSoon = countryData && countryData.url.includes('coming-soon')

              if (countryData) {
                // For target countries, add Tippy tooltip and click handler
                return (
                  <Tippy key={geo.rsmKey} content={countryData.message}>
                    <Geography
                      geography={geo}
                      onClick={() => comingSoon ? false : handleCountryClick(countryData.url)}
                      style={{
                        default: { outline: "none" },
                        hover: { fill: "#F53", outline: "none", cursor: comingSoon ? "default" : "pointer"},
                        pressed: { fill: "#E42", outline: "none" },
                      }}
                    />
                  </Tippy>
                );
              } else {
                // Render non-target countries without Tippy and without click handler
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    style={{
                      default: { fill: "#D6D6DA", outline: "none" },
                      hover: { fill: "#F0F0F0", outline: "none" },
                      pressed: { fill: "#E0E0E0", outline: "none" },
                    }}
                  />
                );
              }
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default MapChart;
