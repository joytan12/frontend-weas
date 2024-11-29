import React, { useState } from 'react';
import Card from '../components/card';
import MaterialCard from '../components/materialCard';
import materials from '../data/card_data';

export const HomePage = () => {
  const [selectedMaterial, setSelectedMaterial] = useState(null); // Material seleccionado
  const [show, setShow] = useState(false); // Control del modal
  const [page, setPage] = useState(1); // Página actual
  const itemsPerPage = 12; // Número de cards por página

  // Manejar la apertura del modal
  const handleShow = (material) => {
    console.log("deberia habrir la materia card");
    setSelectedMaterial(material);
    setShow(true);
  };

  // Manejar el cierre del modal
  const handleClose = () => setShow(false);

  const startIndex = (page - 1) * itemsPerPage;
  const paginatedMaterials = materials.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="d-flex flex-column">
        <div className="p-3 bg-primary text-white">Inventario de la Biblioteca</div>
      </div>

      <div className="container mt-4">
        <h1>Materiales de Biblioteca</h1>
        <div className="row">
          {paginatedMaterials.map((material, index) => (
            <div
              className="col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-3 mb-4"
              key={index}
            >
              <Card
                title={material.title}
                description={material.description}
                buttonText="Ver más"
                onButtonClick={() => handleShow(material)} // Abrir el modal
                isAvailable={material.isAvailable}
              />
            </div>
          ))}
        </div>

        {/* Controles de paginación */}
        <div className="d-flex justify-content-between mt-3">
          <button
            className="btn btn-primary"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            &lt; Anterior
          </button>
          <button
            className="btn btn-primary"
            onClick={() => setPage((prev) => (startIndex + itemsPerPage < materials.length ? prev + 1 : prev))}
            disabled={startIndex + itemsPerPage >= materials.length}
          >
            Siguiente &gt;
          </button>
        </div>
      </div>

      {/* Modal dinámico para mostrar los detalles del material */}
      {selectedMaterial && (
        <MaterialCard
          show={show}
          handleClose={handleClose}
          title={selectedMaterial.title}
          description={selectedMaterial.description}
          quantity={selectedMaterial.quantity}
        />
      )}
    </>
  );
};

export default HomePage;
