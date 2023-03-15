import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from 'react-router-dom'
import AppRouter from './components/AppRouter';
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { Context } from './index';
import { useState } from 'react';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
check().then(data => {
      user.setUser(data)
      user.setIsAuth(true)
    }).finally(() => setLoading(false))
    }, 1000)
    
  }, [])

  if (loading) {
    return <Spinner animation={'grow'} />
  }

  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
    
  );
})

export default App;
