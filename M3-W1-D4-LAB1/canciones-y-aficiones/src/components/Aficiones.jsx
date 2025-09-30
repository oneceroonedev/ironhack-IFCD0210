import React from "react";

const Aficiones = () => {
  const misAficiones = ["💃🏻 Bailar", "🎨 Dibujar", "💻 Programar", "📺 Ver series", "🎧 Escuchar música"];

  return (
    <div>
      <h2>🌟 Mis Aficiones</h2>
      <div className="aficiones-list">
        {misAficiones.map((aficion, index) => (
          <div className="aficion" key={index}>
            {aficion}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aficiones;