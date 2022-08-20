import Layout from '@root/layout/Main';
import { Form, Input } from 'antd';
import styled from 'styled-components';
import PrimaryButton from '@root/components/FormElements/primary/PrimaryButton';
import { Credentials } from '@root/types/formulary-types';
import { useDispatch, useSelector } from 'react-redux';
import { singIn } from '@root/store/slices/auth/thunks';
import { useAppDispatch, useAppSelector } from '@root/hooks/useRedux';
import { RootState } from '@root/store/store';
import { useEffect } from 'react';

const Login = () => {
  const [form] = Form.useForm();
  const dispatch = useAppDispatch();
  const stateAuth = useAppSelector((state: RootState) => state.auth);

  const onFinish = (values: Credentials) => {
    console.log(values.password, values.email);
    dispatch(singIn(values));
  };

  useEffect(() => {
    console.log(stateAuth, 'stateAuth');
  }, [stateAuth]);

  return (
    <Layout>
      <WrapperLogin>
        <img />
        <Form form={form} onFinish={onFinish}>
          <label>Usuario</label>
          <Form.Item name={'email'}>
            <Input />
          </Form.Item>
          <label>Contraseña</label>
          <Form.Item name={'password'}>
            <Input />
          </Form.Item>
          <PrimaryButton />
        </Form>
      </WrapperLogin>
    </Layout>
  );
};

const WrapperLogin = styled.div``;
export default Login;
