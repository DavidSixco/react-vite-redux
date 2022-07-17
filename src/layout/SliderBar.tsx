import Icons from '@root/components/utils/Icons';
import { MainRoutes } from '@root/configuration/MainRoutes';
import { GlobalColor, IconType } from '@root/enum';
import { IRouter, ISliderBar } from '@root/types';
import { SliderBarProps } from '@root/types/props-types';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = MainRoutes.map((router): MenuItem => {
  return {
    key: router.path as React.Key,
    label: router.name,
    icon: <Icons icon={router.icon} color={GlobalColor.BackGround} />,
    children: undefined,
    type: undefined,
  } as MenuItem;
});

console.log(items, 'itemsitemsitemsitemsitemsitems');

const SliderBar: React.FC<SliderBarProps> = ({ collapsed, toggleCollapsed, page }) => {
  //#205375 primary
  //back #EFEFEF
  return (
    <WrapperSliderBar collapsed={collapsed}>
      <Button onClick={toggleCollapsed}>
        {/*tyle={{ marginBottom: 16 }}>*/}
        {collapsed ? <Icons icon={IconType.MenuClose} /> : <Icons icon={IconType.MenuOpen} />}
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
  width: ${({ collapsed }) => (collapsed ? '10rem' : '3rem')};
  transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;

  & .ant-menu {
    height: 100vh;
    width: ${({ collapsed }) => (collapsed ? '10rem' : '3rem')};
    background: var(--primary-color);

    & .ant-menu-item {
      padding-left: ${({ collapsed }) => (collapsed ? '10px !important' : '')};
      padding: 0px 6px;
      display: flex;
      align-items: center;
      gap: 0.5rem;
      justify-content: center;
      & span {
        display: ${({ collapsed }) => (collapsed ? 'block' : 'none')};
      }
    }

    & .ant-menu-item-selected {
      background-color: var(--secondary-color) !important;
    }
  }
  & .ant-btn {
    margin-top: 15px;
    border-color: var(--secondary-color);
    background: var(--secondary-color);
    padding: 0px;
    border-radius: 0;
    text-align: ${({ collapsed }) => (collapsed ? 'end' : 'center')};
    padding-right: ${({ collapsed }) => (collapsed ? '1rem' : '0')};
  }
  svg {
    width: 30px;
    height: 30px;
  }
`;

export default SliderBar;
