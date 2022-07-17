import { IconType } from '@root/enum';
import { IRouter } from '../types';

export const MainRoutes: IRouter[] = [
  {
    path: '/',
    name: 'Inicio',
    icon: IconType.Home,
  },
  {
    path: '/administration',
    name: 'Administracion',
    icon: IconType.AdminPanel,
  },
  {
    path: '/Category',
    name: 'Categorias',
    icon: IconType.Category,
  },
];
