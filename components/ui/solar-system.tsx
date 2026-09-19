"use client";

import * as React from "react";
import { useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Solar System
 *
 * An interactive orbit scene: a glowing "sun" at the center (your product)
 * surrounded by orbiting planets (your integrations / services). Orbits
 * rotate continuously; hovering a planet pauses the system, enlarges the
 * planet and reveals its label. Pure CSS orbits — no WebGL dependency.
 *
 * Note: the upstream VengeanceUI registry item no longer resolves, so this is
 * a self-contained implementation of the same public API
 * (`title`, `description`) used in the docs demo.
 */

export interface SolarSystemPlanet {
  /** Label shown on hover (and as the planet's title attribute). */
  name: string;
  /** Icon rendered inside the planet. */
  icon?: React.ReactNode;
  /** Planet accent color. Defaults to the brand orange. */
  color?: string;
  /** Orbit index, 0 = innermost. */
  orbit: number;
  /** Starting angle in degrees. */
  angle: number;
  /** Orbital period in seconds. */
  duration: number;
}

export interface SolarSystemProps {
  /** Card title shown over the scene. */
  title?: string;
  /** Card description shown under the title. */
  description?: string;
  /** Planets to place on the orbits. */
  planets?: SolarSystemPlanet[];
  /** Image shown inside the central sun (e.g. your logo). */
  centerImage?: string;
  /** Text shown under the sun when no image is given. */
  centerLabel?: string;
  /** Extra classes for the scene root. */
  className?: string;
}

const ORBIT_SIZES = ["34%", "54%", "74%"];

export function SolarSystem({
  title,
  description,
  planets = [],
  centerImage,
  centerLabel,
  className,
}: SolarSystemProps) {
  const [activePlanet, setActivePlanet] = useState<string | null>(null);

  return (
    <div
      className={cn("solar-scene", activePlanet && "is-paused", className)}
      onMouseLeave={() => setActivePlanet(null)}
    >
      {/* Orbit rings */}
      {ORBIT_SIZES.map((size, i) => {
        const used = planets.some((p) => p.orbit === i);
        if (!used) return null;
        return (
          <div
            key={i}
            className="solar-ring"
            style={{ width: size, height: size }}
            aria-hidden="true"
          />
        );
      })}

      {/* Planets: each rides its own rotating arm with a counter-rotation
          wrapper so icons stay upright while travelling the orbit. */}
      {planets.map((planet) => {
        const size = ORBIT_SIZES[planet.orbit] ?? ORBIT_SIZES[ORBIT_SIZES.length - 1];
        // Anchor the planet on the top edge of its ring: top = 50% - radius.
        const radius = `calc(50% - (${size} / 2))`;
        const delay = `${-(planet.angle / 360) * planet.duration}s`;
        const color = planet.color ?? "#ff5f09";
        const isActive = activePlanet === planet.name;

        return (
          <div
            key={planet.name}
            className="solar-arm"
            style={{ animationDuration: `${planet.duration}s`, animationDelay: delay, "--a": `${planet.angle}deg` } as React.CSSProperties}
          >
            <div
              className="solar-counter"
              style={{ animationDuration: `${planet.duration}s`, animationDelay: delay, top: radius }}
            >
              <button
                type="button"
                className={cn("solar-planet", isActive && "is-active")}
                style={{
                  background: `radial-gradient(circle at 32% 28%, #ffffff59, transparent 42%), linear-gradient(140deg, ${color}, ${color}b3)`,
                  boxShadow: `0 0 16px ${color}59, 0 0 34px ${color}2e`,
                }}
                aria-label={planet.name}
                onMouseEnter={() => setActivePlanet(planet.name)}
                onFocus={() => setActivePlanet(planet.name)}
                onBlur={() => setActivePlanet(null)}
              >
                {planet.icon}
                <span className={cn("solar-planet-label", isActive && "is-visible")}>
                  {planet.name}
                </span>
              </button>
            </div>
          </div>
        );
      })}

      {/* Sun */}
      <div className="solar-sun" aria-hidden="true">
        {centerImage ? (
          <img src={centerImage} alt="" />
        ) : (
          <span>{centerLabel}</span>
        )}
      </div>

      {/* Info card */}
      {(title || description) && (
        <div className="solar-info">
          {title && <h3>{title}</h3>}
          {description && <p>{description}</p>}
        </div>
      )}
    </div>
  );
}

export default SolarSystem;
