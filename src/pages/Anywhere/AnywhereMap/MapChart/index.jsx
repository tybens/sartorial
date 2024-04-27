import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { Link } from "react-router-dom";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // This is important for default styling
import targetCountries from "./targetCountries";

const MapChart = () => {
  // Handle click event for redirecting
  const comingSoonStyle = {
    default: {
      fill: "#A0A0A0", // A solid medium gray, neutral and subdued
      outline: "none",
    },
    hover: {
      fill: "#B8B8B8", // A slightly lighter gray to subtly indicate hover without suggesting interactivity
    },
    pressed: {
      fill: "#B8B8B8", // Keeps the same as default to reinforce non-interactivity when pressed
    },
  };

  const apparelStyle = {
    default: {
      fill: "#6991C7", // A moderate blue, calm and neutral
      outline: "none",
    },
    hover: {
      fill: "#9DBCE2", // A lighter blue to indicate interactivity
      cursor: "pointer", // Changed to pointer to better indicate that the item is interactive
    },
    pressed: {
      fill: "#4A6FA5", // A darker blue to provide feedback when pressed
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

              const apparel = countryData && countryData.url.includes("shop");

              if (countryData) {
                if (!comingSoon && !apparel) {
                  // TARGET COUNTRIES
                  return (
                    <Tippy key={geo.rsmKey} content={countryData.message}>
                      <Link to={countryData.url}>
                        <Geography geography={geo} style={liveStyle} />
                      </Link>
                    </Tippy>
                  );
                } else if (apparel) {
                  // APPAREL COUNTRIES
                  return (
                    <Tippy key={geo.rsmKey} content={countryData.message}>
                      <Link to={countryData.url}>
                        <Geography geography={geo} style={apparelStyle} />
                      </Link>
                    </Tippy>
                  );
                } else {
                  // COMING SOON COUNTRIES
                  return (
                    <Tippy key={geo.rsmKey} content={countryData.message}>
                      <Geography geography={geo} style={comingSoonStyle} />
                    </Tippy>
                  );
                }
              } else {
                // NON TARGET COUNTRIES
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
