import { Button } from 'antd';
import styled from 'styled-components';

const PrimaryButton = () => {
  return <StyledButton htmlType="submit">PrimaryButton</StyledButton>;
};

const StyledButton = styled(Button)``;

export default PrimaryButton;
