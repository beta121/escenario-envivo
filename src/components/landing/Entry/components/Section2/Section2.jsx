import { motion } from 'framer-motion'; // 1. Импортируем motion
import { EntryGridCard } from './components';
import './style.css';

const statsData = [
  { id: 1, value: '130,1 M', country: 'Mexico', code: 'mx' },
  { id: 2, value: '56,7 M', country: 'USA', code: 'us', highlight: true },
  { id: 3, value: '51,6 M', country: 'Colombia', code: 'co' },
  { id: 4, value: '47,6 M', country: 'Spain', code: 'es' },
  { id: 5, value: '46,2 M', country: 'Argentina', code: 'ar' },
  { id: 6, value: '33,4 M', country: 'Peru', code: 'pe' },
  { id: 7, value: '33,3 M', country: 'Venezuela', code: 've' },
  { id: 8, value: '19,8 M', country: 'Chile', code: 'cl' },
  { id: 9, value: '17,3 M', country: 'Guatemala', code: 'gt' },
  { id: 10, value: '16,1 M', country: 'Ecuador', code: 'ec' },
];

export const Section2 = () => {
  const topContentCards = [
    {
      circle: '1',
      title: '559 Million Spanish Speakers Globally',
      subtitle: 'One of the quickest growing population groups outside of India and Nigeria',
      extraClass: 'subtitle-first',
    },
    {
      circle: '2',
      title: 'Rapidly Expanding in the US',
      subtitle:
        'The US has 56,7 Million Spanish speakers, and is projected to become the largest spanish speaking country by 2050',
    },
    {
      circle: '3',
      title: 'US Latino Market Powerhouse',
      subtitle:
        'US Latinos are the 5th Largest Economy in the World by GDP, and 3rd fastest growing after China and India',
    },
  ];

  return (
    <section className="entity-wrapper">
      <div className="entity-container">
        <motion.div
          className="entity-top-content"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.4 }}
        >
          {topContentCards.map((card, index) => (
            <motion.div
              key={index}
              className="entity-top-content-card"
              variants={{
                hidden: { y: -50, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: {
                    delay: index * 0.2,
                    duration: 0.6,
                    ease: 'easeOut',
                  },
                },
              }}
            >
              <div className="entity-card-circle">{card.circle}</div>
              <h2 className="entity-card-title">{card.title}</h2>
              <p className={`entity-card-subtitle ${card.extraClass || ''}`}>{card.subtitle}</p>
            </motion.div>
          ))}
        </motion.div>
        <div className="entity-bottom-content">
          <div className="stats-grid">
            {statsData.map((item) => (
              <EntryGridCard
                key={item.id}
                value={item.value}
                country={item.country}
                code={item.code}
                highlight={item.highlight}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
