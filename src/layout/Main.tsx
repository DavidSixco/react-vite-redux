import { ISliderBar } from '@root/types';
import { MainProps } from '@root/types/props-types';
import { ReactElement, useState } from 'react';
import styled from 'styled-components';
import Footer from './Footer';
import Header from './Header';
import SliderBar from './SliderBar';

const Main = ({ children, page }: MainProps): ReactElement => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <StyledMain collapsed={collapsed}>
      <SliderBar
        collapsed={collapsed}
        toggleCollapsed={() => setCollapsed(!collapsed)}
        page={page}
      />
      <div className="container-main">
        <Header />
        <div className="container-page">{children}</div>
        <Footer />
      </div>
    </StyledMain>
  );
};
const StyledMain = styled.main<ISliderBar>`
  display: flex;
  flex-direction: row;
  & .content {
    /* width: calc(100vw - 4rem); */
    transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    width: ${({ collapsed }) => (collapsed ? 'calc(100vw - 10rem)' : 'calc(100vw - 4rem)')};
    & .content-main {
      display: flex;
      flex-direction: row;
      margin-top: 2px;
      margin-right: 10px;
      & .page {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default Main;
