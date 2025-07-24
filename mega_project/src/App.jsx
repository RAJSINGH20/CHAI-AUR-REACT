import { useDispatch } from 'react-redux';
import './App.css';
import authService from "./Appwrite/auth.js";
import { useEffect, useState } from 'react';
// import { login, logout } from "./Appwrite/Auth.js";
import { Footer, Header} from './Components/index.js'; // ✅ Import Headers too
import { Outlet } from 'react-router-dom';

import { login, logout } from "./Store/AuthSilce.js";
function App() {
  const [loading, SetLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser().then((userdata) => {
      if (userdata) {
        dispatch(login({ userdata }));
      } else {
        dispatch(logout());
      }
    }).finally(() => {
      SetLoading(false);
    });
  }, [dispatch]);

  return !loading ? (
    <div className='min-h-screen flex flex-col justify-between rounded-2xl'>
      <Header />
      <main className='flex-grow'>
        <Outlet /> {/* ✅ Render child routes */}
      </main>
      <Footer />
    </div>
  ) : null;
}

export default App;
