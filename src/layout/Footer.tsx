import styled from 'styled-components';

const Footer = () => {
  return (
    <WrapperFooter id="footer-app-ds"> © 2022 David Sixco. All rights reserved.</WrapperFooter>
  );
};

const WrapperFooter = styled.div`
  height: 3rem;
  background: var(--background-color);
  border-top: 1px solid gainsboro;
  padding: 0.5rem 1rem;
  text-align: end;
`;

export default Footer;
