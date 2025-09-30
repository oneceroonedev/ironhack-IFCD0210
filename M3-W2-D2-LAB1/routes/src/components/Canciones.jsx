import React from "react";
import canciones from "../data/canciones.json";

const Canciones = () => {
  return (
    <div className="canciones">
      <h1>Lista de Canciones</h1>
      <div className="song-list">
        {canciones.map((cancion, index) => (
          <div key={index} className="song-card">
            <img src={cancion.imagenAlbum} alt={cancion.album} />
            <div className="song-info">
              <h2>{cancion.titulo}</h2>
              <p><strong>Álbum:</strong> {cancion.album}</p>
              <p>
                <strong>Duración:</strong>{" "}
                {Math.floor(cancion.duracion / 60)}:
                {String(cancion.duracion % 60).padStart(2, "0")} min
              </p>
              <p>
                <strong>Valoración:</strong> {"⭐".repeat(cancion.valoracion)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Canciones;