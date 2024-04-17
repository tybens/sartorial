import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // This is important for default styling
import targetCountries from "./targetCountries";

const MapChart = () => {
  // Define your target countries, their messages, and redirect URLs

  // Handle click event for redirecting
  const handleCountryClick = (url) => {
    // Using window.location for redirection
    window.location.href = url;
  };

  const comingSoonStyle = {
    default: {
      fill: "black",
      outline: "none",
    },
    hover: {
      fill: "grey",
      cursor: "default",
    },
    pressed: {
      fill: "grey",
    },
  };

  const liveStyle = {
    default: { fill: "#095" },
    hover: {
      fill: "#00ac57",
      cursor: "pointer",
    },
    pressed: {
      fill: "#0c6e43",
    },
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

              const comingSoon =
                countryData && countryData.url.includes("coming-soon");

              if (countryData) {
                // For target countries, add Tippy tooltip and click handler
                return (
                  <Tippy key={geo.rsmKey} content={countryData.message}>
                    <Geography
                      geography={geo}
                      onClick={() =>
                        comingSoon ? false : handleCountryClick(countryData.url)
                      }
                      style={comingSoon ? comingSoonStyle : liveStyle}
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
