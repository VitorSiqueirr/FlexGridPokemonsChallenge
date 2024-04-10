/* eslint-disable react/prop-types */
import { baseStats } from "./baseStatsName";
import "./PokemonsStats.css";
import "../DetailsBackground.css";

export const PokemonStats = ({ stats, backgroundColor }) => (
  <div className="status">
    <h2 className={`sub-title ${backgroundColor}`}>Base Status</h2>
    <div className="stats-number">
      <div className="vertical-line"></div>
      {stats.map((stat) => (
        <div key={stat.stat.name} className="stat-bar">
          <p className={`stat-name ${backgroundColor}`}>
            {baseStats[stat.stat.name]}
          </p>
          <p className="stat-number">
            {String(stat.base_stat).padStart(3, "0")}
          </p>
          <div className="bar-container">
            <div
              className={`bar ${backgroundColor}`}
              style={{
                width: `${stat.base_stat}px`,
              }}
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);
