import Icons from '@root/components/utils/Icons';
import { IconType } from '@root/enum';
import { ISliderBar } from '@root/types';
import { SliderBarProps } from '@root/types/props-types';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem('Option 1', '1', <Icons icon={IconType.Universal} />),
  getItem('Option 2', '2', <Icons icon={IconType.Universal} />),
  getItem('Option 3', '3', <Icons icon={IconType.Universal} />),
];

const SliderBar: React.FC<SliderBarProps> = ({ collapsed, toggleCollapsed, page }) => {
  return (
    <WrapperSliderBar collapsed={collapsed}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <Icons icon={IconType.MenuOpen} /> : <Icons icon={IconType.MenuClose} />}
      </Button>
      <Menu
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        inlineCollapsed={!collapsed}
        items={items}
      />
    </WrapperSliderBar>
  );
};

const WrapperSliderBar = styled.div<ISliderBar>`
  background: var(--primary-color);
  border-bottom-right-radius: 6px;
  border-top-right-radius: 6px;
  display: flex;
  flex-direction: column;
  width: ${({ collapsed }) => (collapsed ? '10rem' : '4rem')};
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;

  & .ant-menu {
    height: 100vh;
    width: ${({ collapsed }) => (collapsed ? '10rem' : '4rem')};
    background: var(--primary-color);

    & .ant-menu-item-selected {
      background-color: var(--secondary-color) !important;
    }
  }
  & .ant-btn {
    margin-top: 15px;
    border-color: var(--secondary-color);
    background: var(--secondary-color);
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

export default SliderBar;
