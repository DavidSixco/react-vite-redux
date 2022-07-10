import { ReactElement } from 'react';
import { IconType, GlobalColor } from '../../enum';
import { IconsProps } from '../../types/props-types';

const Icons = ({ icon, color = GlobalColor.Primary }: IconsProps): ReactElement => {
  const getIcon = (): JSX.Element => {
    switch (icon) {
      case IconType.Universal:
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24 44C21.2333 44 18.6333 43.475 16.2 42.425C13.7667 41.375 11.65 39.95 9.85 38.15C8.05 36.35 6.625 34.2333 5.575 31.8C4.525 29.3667 4 26.7667 4 24C4 21.2333 4.525 18.6333 5.575 16.2C6.625 13.7667 8.05 11.65 9.85 9.85C11.65 8.05 13.7667 6.625 16.2 5.575C18.6333 4.525 21.2333 4 24 4C26.7667 4 29.3667 4.525 31.8 5.575C34.2333 6.625 36.35 8.05 38.15 9.85C39.95 11.65 41.375 13.7667 42.425 16.2C43.475 18.6333 44 21.2333 44 24C44 26.7667 43.475 29.3667 42.425 31.8C41.375 34.2333 39.95 36.35 38.15 38.15C36.35 39.95 34.2333 41.375 31.8 42.425C29.3667 43.475 26.7667 44 24 44ZM24 36.65C27.5333 36.65 30.525 35.425 32.975 32.975C35.425 30.525 36.65 27.5333 36.65 24C36.65 20.4667 35.425 17.475 32.975 15.025C30.525 12.575 27.5333 11.35 24 11.35C20.4667 11.35 17.475 12.575 15.025 15.025C12.575 17.475 11.35 20.4667 11.35 24C11.35 27.5333 12.575 30.525 15.025 32.975C17.475 35.425 20.4667 36.65 24 36.65Z"
              fill={color}
            />
          </svg>
        );
      case IconType.Login:
        return <>'Universal'</>;
      case IconType.MenuClose:
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 36V33H32V36H6ZM39.9 33.4L30.45 23.95L39.85 14.55L42 16.7L34.75 23.95L42.05 31.25L39.9 33.4ZM6 25.4V22.4H26V25.4H6ZM6 15V12H32V15H6Z"
              fill="black"
            />
          </svg>
        );
      case IconType.MenuOpen:
        return (
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M42 12V15L16 15V12L42 12ZM8.1 14.6L17.55 24.05L8.15 33.45L6 31.3L13.25 24.05L5.95 16.75L8.1 14.6ZM42 22.6V25.6H22V22.6H42ZM42 33V36H16V33H42Z"
              fill="black"
            />
          </svg>
        );

      default:
        return <>'Universal'</>;
    }
  };
  return getIcon();
};

export default Icons;
