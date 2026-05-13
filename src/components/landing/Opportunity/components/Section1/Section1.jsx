import map from '../../../../../shared/assets/landing/map.png';
import { MapMarker } from './components';
import './styles.css';

const MARKERS_DATA = [
  { id: 1, top: '26%', left: '18%', value: '13%' },
  { id: 2, top: '22%', left: '50%', value: '9%' },
  { id: 3, top: '39%', left: '62%', value: '4%' },
  { id: 4, top: '56%', left: '56%', value: '2%' },
  { id: 5, top: '69%', left: '29%', value: '4%' },
  { id: 6, top: '31%', left: '84%', value: '67%', color: '#FF0832', isAnimated: true },
  { id: 7, top: '79%', left: '91%', value: '2%' },
];

export const Section1 = () => {
  return (
    <section className="opportunity-map">
      <div className="opportunity-map_wrapper">
        <h4 className="opportunity-map_title">Global Live Sales Percentage by Region</h4>

        <div className="map-container">
          <img src={map} alt="World Map" className="map-image" />

          {MARKERS_DATA.map((marker) => (
            <MapMarker
              key={marker.id}
              top={marker.top}
              left={marker.left}
              value={marker.value}
              color={marker.color}
              isAnimated={marker.isAnimated}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
