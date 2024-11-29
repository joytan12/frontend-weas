import React from 'react';

const AdminSection = () => {
  return (
    <div>
      <h1>Sección de Administración</h1>
      <p>Bienvenido al panel de administración. Selecciona una opción:</p>
      <ul>
        <li><a href="/admin/usuarios">Administrar Usuarios</a></li>
        <li><a href="/admin/solicitudes">Administrar Solicitudes</a></li>
        <li><a href="/admin/reportes">Ver Reportes</a></li>
      </ul>
    </div>
  );
};

export default AdminSection;