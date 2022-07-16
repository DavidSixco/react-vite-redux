import { Dropdown } from 'antd';
import styled from 'styled-components';

const Header = () => {
  const options = () => (
    <WrapperMenuDropdown className="container-menu-dropdown">
      <div className="item" onClick={() => {}}>
        Cerrar Session
      </div>
    </WrapperMenuDropdown>
  );

  return (
    <Wrapper id="header-app-ds">
      <div className="header-container">
        <div className="logo-project">
          <img
            className="imgHeader"
            src={'https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png'}
            alt="logoBot"
          />
        </div>
        <div className="information-user">
          {/* trigger={['click']} */}
          <Dropdown overlay={options}>
            <div className="user-name">
              <img
                className="avatar-user"
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              />
              <label>user.name</label>
            </div>
          </Dropdown>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 3rem;
  box-shadow: 0px 0px 3px 0px gainsboro;
  padding: 0.5rem 2rem 0.5rem 2rem;
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .logo-project {
      & img {
        width: 4rem;
      }
    }
    & .information-user {
      & .user-name {
        display: flex;
        flex-direction: row;
        gap: 0.5rem;
        align-items: center;

        & img {
          width: 2rem;
        }
      }
    }
  }
`;

const WrapperMenuDropdown = styled.div`
  background: var(--background-color);
  height: 3rem;
  width: 8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 1rem; */
  border-radius: 6px;
  margin-top: 1rem;
  justify-content: center;

  & .item {
    width: 90%;
    font-family: Quicksand;
    font-weight: 600;
    color: var(--text-secondary-color);
    text-align: center;
    cursor: pointer;

    &:hover {
      color: var(--text-primary-color);
    }
  }
`;

export default Header;
