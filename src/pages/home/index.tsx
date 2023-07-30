import { urlGetAllUser } from '@root/configuration/base_service/path_administrations';
import Layout from '@root/layout/Main';
import axios from 'axios';
import { useEffect } from 'react';

const Home = () => {
  const getAllUser = async () => {
    const dataSnapshot = await axios.get(urlGetAllUser());
    console.log(dataSnapshot.data, 'dataSnapshot');
  };

  useEffect(() => {
    getAllUser();
  }, []);

  return (
    <Layout>
      <div>Home Home</div>
    </Layout>
  );
};

export default Home;
