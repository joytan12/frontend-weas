import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Login from '../pages/login_page';
import Layout from './Layout';
import Layout_admin from './Layout_admin';
import Switch from './switch';

const App = () => {
  const [auth, setAuth] = useState({
    isAuthenticated: false,
    role: null, // 'usuario' o 'admin'
  });

  const handleLogin = (role) => {
    setAuth({ isAuthenticated: true, role });
  };

  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta para el login */}
        <Route
          path="/login"
          element={
            auth.isAuthenticated ? (
              auth.role === 'admin' ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/home" />
              )
            ) : (
              <Switch onLogin={handleLogin} />
            )
          }
        />

        {/* Ruta para los administradores */}
        {auth.isAuthenticated && auth.role === 'admin' && (
          <Route path="/admin/*" element={<Layout_admin />} />
        )}

        {/* Ruta para los usuarios */}
        {auth.isAuthenticated && auth.role === 'usuario' && (
          <Route path="/home/*" element={<Layout />} />
        )}

        {/* Ruta de redirección para no autenticados */}
        {!auth.isAuthenticated && <Route path="*" element={<Navigate to="/login" />} />}

      </Routes>
    </BrowserRouter>
  );
};

export default App;


