import React from "react";
import cancionesData from "../data/canciones.json";

const Canciones = () => {
  return (
    <div>
      <h2>🎶 Mis Canciones Favoritas</h2>
      <div className="canciones-list">
        {cancionesData.map((cancion, index) => (
          <div className="cancion-card" key={index}>
            <img src={cancion.imagenAlbum} alt={cancion.album} />
            <h3>{cancion.titulo}</h3>
            <p><strong>Álbum:</strong> {cancion.album}</p>
            <p><strong>Duración:</strong> {cancion.duracion} seg</p>
            <p className="valoracion">
              {"⭐".repeat(cancion.valoracion)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Canciones;