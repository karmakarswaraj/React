import "./App.css";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  
  return !loading ? ( 
  <div className="flex flex-wrap content-between min-h-screen bg-gray-400">
    <div className="block w-full">
      <Header/>
      <main>
        {/* <Outlet/> */}
      </main>
      <Footer/>
    </div>
  </div>
  ) : (null)
}

export default App;
