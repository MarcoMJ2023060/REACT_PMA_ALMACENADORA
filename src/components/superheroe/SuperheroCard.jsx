import React from 'react';

const SuperheroCard = ({ hero }) => {
  return (
    <div className="superhero-card">
      <img 
        src={hero.images.md} 
        alt={hero.name} 
        className="hero-image"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/300x450?text=No+Image';
        }}
      />
      <div className="hero-info">
        <h2>{hero.name}</h2>
        <p><strong>Editorial:</strong> {hero.biography.publisher}</p>
        <p><strong>Alias:</strong> {hero.biography.aliases.join(', ')}</p>
        <div className="power-stats">
          <span>Inteligencia: {hero.powerstats.intelligence}</span>
          <span>Fuerza: {hero.powerstats.strength}</span>
          <span>Velocidad: {hero.powerstats.speed}</span>
        </div>
      </div>
    </div>
  );
};

export default SuperheroCard;