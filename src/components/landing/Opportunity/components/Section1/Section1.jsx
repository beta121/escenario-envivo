import React from 'react';
import { motion } from 'framer-motion';
import map from '../../../../../shared/assets/landing/map.png';
import { MapMarker } from './components';
import './styles.css';

const MARKERS_DATA = [
  { id: 1, top: '21%', left: '14%', value: '13' },
  { id: 2, top: '65%', left: '25%', value: '3' },
  { id: 3, top: '17%', left: '46%', value: '9' },
  { id: 4, top: '53%', left: '51%', value: '2' },
  { id: 5, top: '38%', left: '59%', value: '4' },
  { id: 6, top: '73%', left: '87%', value: '2' },
  {
    id: 7,
    top: '26%',
    left: '78%',
    value: '67',
    color: '#FF0832',
    isAnimated: true,
  },
];

export const Section1 = () => {
  const markersCount = MARKERS_DATA.length;
  const noteDelay = markersCount * 0.4 + 0.8;

  return (
    <section className="opportunity-map">
      <div className="opportunity-map_wrapper">
        <h4 className="opportunity-map_title">Global Live Sales Percentage by Region</h4>

        <div className="map-container">
          <img src={map} alt="World Map" className="map-image" />

          {MARKERS_DATA.map((marker, index) => (
            <MapMarker
              key={marker.id}
              top={marker.top}
              left={marker.left}
              value={marker.value}
              color={marker.color}
              isAnimated={marker.isAnimated}
              duration={marker.duration}
              index={index}
            />
          ))}

          <motion.div
            className="map-note"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: noteDelay,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            * <span>Livestream</span> Sales only have peak adaptation in <span>Asia</span>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
