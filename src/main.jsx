import { StrictMode, useContext } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  RouterProvider,
} from "react-router-dom";
import router from './components/Router/Router.jsx';
import AuthProvider, { AuthContext } from './components/Provider/AuthProvider.jsx';


const LoadingSpinner = () => (
  <div className="loading-container  text-center mt-20">
    <span className="loading loading-spinner loading-lg"></span>
  </div>
);


const Main = () => {
  const { loading } = useContext(AuthContext);

 
  if (loading) {
    return <LoadingSpinner />;
  }

 
  return <RouterProvider router={router} />;
};

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Main />
    </AuthProvider>
  </StrictMode>
);
