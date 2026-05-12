import React from 'react';
import { motion } from 'framer-motion';
import { InfoCard, MarketWhiCard } from './components';
import { CountUp } from '../../landing';

import section1 from '../../../shared/assets/landing/section1.png';
import section2 from '../../../shared/assets/landing/section2-1.png';
import section22 from '../../../shared/assets/landing/section2-2.png';

import './style.css';

export const MarketSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.6 },
    },
  };

  const cardVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const whiContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const whiCardVariants = {
    hidden: {
      y: 100,
      opacity: 0,
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <section className="market">
        <h4 className="market__title">
          <span className="market__accent">Live Stream</span> Shopping:
          <span className="market__subtitle"> A Rapidly Expanding Market</span>
        </h4>

        <div className="market__content">
          <motion.div
            className="market__info"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={cardVariants}>
              <InfoCard
                number={1}
                subtitle="Rapidly Growing since 2018"
                description="Fueled by the growth of social media, influencer culture and lockdown shopping"
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <InfoCard
                number={2}
                subtitle="Current Market Worth"
                description="20 Billion USD Global Market size estimate for 2025"
              />
            </motion.div>
            <motion.div variants={cardVariants}>
              <InfoCard
                number={3}
                subtitle="Aggressive Market Growth"
                description="34% Projected CAGR for next 10 years towards 287 Billion USD"
              />
            </motion.div>
          </motion.div>

          <motion.div className="market__image-wrapper">
            <img src={section1} alt="Market visualization" className="market__img" />
          </motion.div>
        </div>

        <section className="market-whi">
          <h4 className="market-whi__title">
            Why is <span className="market__accent">Live Stream</span> Shopping Booming?
          </h4>

          <div className="market-whi__wrapper">
            <div className="market-whi__side-img">
              <img src={section2} alt="live1" />
            </div>

            <motion.div
              className="market-whi__cards-list"
              variants={whiContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              <motion.div variants={whiCardVariants} className="whi-motion-wrapper">
                <MarketWhiCard
                  subtitle="SHOPPERTAINMENT"
                  description="Sellers and influencers put on a show for customers to introduce and showcase products"
                />
              </motion.div>

              <motion.div variants={whiCardVariants} className="whi-motion-wrapper">
                <MarketWhiCard
                  subtitle="PERSONAL CONNECTION"
                  description="Customers can interact with sellers to ask questions and see live product demonstrations"
                />
              </motion.div>

              <motion.div variants={whiCardVariants} className="whi-motion-wrapper">
                <MarketWhiCard
                  subtitle="LIVE DISCOUNTS"
                  description="Sellers can create short temporary discounts to tempt purchases"
                />
              </motion.div>

              <motion.div variants={whiCardVariants} className="whi-motion-wrapper">
                <MarketWhiCard
                  subtitle="EXTREME AUCTIONS"
                  description="Sellers can launch quick 1 to 5 minute auctions for a particular item at a discount"
                />
              </motion.div>
            </motion.div>

            <div className="market-whi__side-img">
              <img src={section22} alt="live2" />
            </div>
          </div>
        </section>
      </section>
      <section className="market-banner">
        <div className="market-banner__content">
          <h2 className="market-banner__value">
            <CountUp to={287} duration={3} />
          </h2>
          <h3 className="market-banner__unit">BILLION USD</h3>
          <p className="market-banner__description">Projected Market Size (2034)</p>
          <span className="market-banner__note">*Assuming CAGR rates since 2018</span>
        </div>
      </section>
    </>
  );
};
