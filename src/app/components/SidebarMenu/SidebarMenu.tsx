'use client';

import React, { useState } from 'react';
import { Menu, MenuProps, Space, theme } from 'antd';
import {
  HomeOutlined,
  SearchOutlined,
  AppstoreOutlined,
  UserOutlined,
  PlayCircleOutlined,
  PieChartOutlined,
  DesktopOutlined,
  TeamOutlined,
  FileOutlined,
  GlobalOutlined,
  QuestionCircleOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import MenuItem from 'antd/es/menu/MenuItem';
import Sider from 'antd/es/layout/Sider';
import './SidebarMenu.css';
import { Flex, Radio } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];
type SidebarMenuProps = {
  onToggle?: (collapsed: boolean) => void;
};

const items: MenuProps['items'] = [
  {
    key: '1',
    icon: <img src='/icons/search.png' alt='search' style={{ width: 16, height: 16 }} />,
    label: 'Search',
  },
  {
    key: '2',
    icon: <img src='/icons/home.png' alt='home' style={{ width: 16, height: 16 }} />,
    label:'Home',
  },
  {
    key: '3',
    icon:<img src='/icons/shows.png' alt='shows' style={{ width: 16, height: 16 }} />,
    label: 'Shows',
  },
  {
    key: '4',
    icon:<img src='/icons/movies.png' alt='movies' style={{ width: 16, height: 16 }} />,
    label: 'Movies',
  },
  {
    key: '5',
    icon:<img src='/icons/genre.png' alt='genre' style={{ width: 16, height: 16 }} />,
    label: 'Genre',
  },
  {
    key: '6',
    icon:<img src='/icons/history.png' alt='history' style={{ width: 16, height: 16 }} />,
    label: 'Watch later',
  },
];

const SidebarMenu = ({ onToggle }: SidebarMenuProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const handleMouseEnter = () => {
    setCollapsed(false);
    onToggle?.(false);
  };

  const handleMouseLeave = () => {
    setCollapsed(true);
    onToggle?.(true);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Sider
      collapsed={collapsed}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className='custom-sidebar'>
      <Flex
        gap='middle'
        justify={collapsed ? 'center' : 'space-between'}
        vertical
        style={{ minHeight: '90%' }}>
        <div
          className={`profile-section${
            !collapsed ? ' profile-section-open' : ''
          }`}>
          <div className='avatar' />
          <div className='profile-info'>
            <div className='name'>John Doe</div>
            <div className='email'>john@example.com</div>
          </div>
        </div>
        <Menu
          theme='dark'
          defaultSelectedKeys={['1']}
          mode='inline'
          items={items}
          className='custom-menu'
        />

        <Space
          direction='vertical'
          size='middle'
          className={`bottom-menu${!collapsed ? ' bottom-menu-open' : ''}`}>
          <div className='bottom-item'>
            <span>Language</span>
          </div>
          <div className='bottom-item'>
            <span>Get Help</span>
          </div>
          <div className='bottom-item'>
            <span>Exit</span>
          </div>
        </Space>
      </Flex>
    </Sider>
  );
};

export default SidebarMenu;
