import { MainProps } from '@root/types/props-types';
import { ISliderBar } from '@root/types/styled-components-props';
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
      <div className="content">
        <div className="content-main">
          <Header />
          <div className="content-page">{children}</div>
          <Footer />
        </div>
      </div>
    </StyledMain>
  );
};
const StyledMain = styled.main<ISliderBar>`
  height: 100vh;
  display: flex;
  flex-direction: row;
  & .content {
    transition: width 0.3s cubic-bezier(0.2, 0, 0, 1) 0s;
    width: ${({ collapsed }) => (collapsed ? 'calc(100vw - 10rem)' : 'calc(100vw - 3rem)')};
    & .content-main {
      display: flex;
      flex-direction: column;
      & .content-page {
        overflow-y: scroll;
        width: 100%;
        height: calc(100vh - 6rem);
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
`;

export default Main;
