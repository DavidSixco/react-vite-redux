import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './store/slices/counter/counterSlice';
import { RootState } from './store/store';
import { getPoke } from './store/slices/auth/thunks';
import { useGetPlaceHolderQuery, useGetTodoByIdQuery } from './store/apis/RTKQuery';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '@pages/home';
import Login from '@pages/login';
import Administration from '@pages/administration';
import About from '@pages/about';

const App = () => {
  const [id, setId] = useState(1);
  const state = useSelector((state: RootState) => state.counter);
  const stateAuth = useSelector((state: RootState) => state.auth);

  // const { data: todos = [], isLoading } = useGetPlaceHolderQuery();
  const { data: todo, isLoading } = useGetTodoByIdQuery(`${id}`);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(stateAuth);
  }, [stateAuth]);
  console.log(todo, '=======');

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/administration" element={<Administration />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
      {/* ContadorRRRRRRR
      <br />
      <br />
      {state.counter}
      <div className="container-buttons">
        <button type="button" onClick={() => dispatch(increment())}>
          Incrementar
        </button>
        <button type="button" onClick={() => dispatch(decrement())}>
          Disminuir
        </button>
        <button type="button" onClick={() => dispatch(incrementByAmount(2))}>
          Por dos
        </button>
      </div>
      {stateAuth.response.isSuccess &&
        stateAuth.response.data.map((item: any, index: number) => (
          <div key={index} className="card">
            <div className="item">
              <label>Nombre:</label>
              {'  '}
              <label>{item?.name}</label>
            </div>
          </div>
        ))}
      <div>
        <h3>RTK QUERY</h3>

        <pre>{isLoading ? 'Loadinnnnnnggggggg' : JSON.stringify(todo)}</pre>

        
        <button onClick={() => setId(id + 1)}>Next</button>
        <button onClick={() => setId(id - 1)}>Back</button>
      </div> */}
    </div>
  );
};

export default App;
