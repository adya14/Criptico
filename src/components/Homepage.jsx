import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic, Avatar } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';
import invest from '../images/invest.png';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <div className="welcome-section">
        <div className="welcome-text">
          <Title level={2} className="heading" style={{ fontSize: '85px', fontWeight: '500', color: '#4f6c95', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
            Welcome to Cryptico
          </Title>

          <p>Discover the world of cryptocurrencies with Cryptico, your one-stop destination for real-time crypto insights. </p>
          <p>Whether you're looking to monitor your crypto portfolio, stay informed about market trends,
            or explore the latest blockchain innovations, Cryptico provides an engaging and informative experience that caters to your crypto curiosity.</p>
        </div>
        <div className="welcome-image">
          <Avatar src={invest} size={350} />
        </div>
      </div>
      <Title level={2} className="global-stats-heading">Global Crypto Stats</Title>
      {/* <div className='stats=container'> */}
      <div className='gstats'>
        <Row gutter={[2, 22]}></Row>
        <Row gutter={[2, 22]}>
          <Col span={8}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
          <Col span={8}><Statistic title="Total Exchanges" value={millify(globalStats.totalExchanges)} /></Col>
          <Col span={8}><Statistic title="Total Market Cap:" value={`$${millify(globalStats.totalMarketCap)}`} /></Col>
          <Col span={8}><Statistic title="Total 24h Volume" value={`$${millify(globalStats.total24hVolume)}`} /></Col>
          <Col span={8}><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
          <Col span={8}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)} /></Col>
        </Row>
        {/* </div> */}
      </div>
      <div className="home-heading-container">
        <Title level={2} className="home-title">Top 10 Cryptos In The World</Title>
        <Title level={3} className="show-more"><Link to="/cryptocurrencies">Show more</Link></Title>
      </div>
      <Cryptocurrencies simplified />
      <div className="home-heading-container">
        <Title level={2} className="home-title">Latest Crypto News</Title>
        <Title level={3}><Link to="/news">Show more</Link></Title>
      </div>
      <News simplified />
    </>
  );
};

export default Homepage;
