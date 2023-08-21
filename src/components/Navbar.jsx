import React from 'react';
import { Link } from 'react-router-dom';
import { Typography, Avatar, Menu } from 'antd';
import { HomeOutlined, BulbOutlined, FundOutlined, MoneyCollectOutlined } from '@ant-design/icons';

import icon from '../images/cryptocurrency.png';

const Navbar = () => {
  return (
    <div className="nav-container">
      <div className="logo-container">
        <Avatar src={icon} size="large" />
        <Typography.Title level={2} className="logo">
          <Link to="/" style={{ color: '#4f6c95' }}> </Link>
        </Typography.Title>
      </div>
      <div className="options">
        <Menu mode="horizontal" style={{ background: 'transparent', border: '1px solid #281731', borderRadius: '20px', fontFamily: "'Bricolage Grotesque', sans-serif" }}>
          <Menu.Item icon={<HomeOutlined />} className="nav-icon">
            <Link to="/">Home</Link>
          </Menu.Item>
          <Menu.Item icon={<FundOutlined />} className="nav-icon">
            <Link to="/cryptocurrencies">Cryptocurrencies</Link>
          </Menu.Item>
          <Menu.Item icon={<MoneyCollectOutlined />} className="nav-icon">
            <Link to="/exchanges">Exchanges</Link>
          </Menu.Item>
          <Menu.Item icon={<BulbOutlined />} className="nav-icon">
            <Link to="/news">News</Link>
          </Menu.Item>
        </Menu>
      </div>
    </div>
  );
};

export default Navbar;
