import { IconType } from '@root/enum';

export interface IRouter {
  path: String;
  name: String;
  icon: IconType;
}

export interface ISliderBar {
  collapsed: boolean;
}
