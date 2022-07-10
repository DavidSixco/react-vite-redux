import { GlobalColor, IconType } from '../../enum';

export type AuthenticationProps = {
  children: JSX.Element;
};

export type IconsProps = {
  icon: IconType;
  color?: GlobalColor;
};

export type MainProps = {
  children: JSX.Element;
  page?: string;
};

export type SliderBarProps = {
  collapsed: boolean;
  toggleCollapsed: () => void;
  page?: string;
};
