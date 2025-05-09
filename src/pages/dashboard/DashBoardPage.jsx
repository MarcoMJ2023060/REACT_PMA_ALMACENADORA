// src/pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import { getAllSuperheroes } from '../../services/api.jsx';
import SuperheroCard from '../../components/superheroe/SuperheroCard.jsx'; 
import './DashboardPage.css';

export const Dashboard = () => {
  const [superheroes, setSuperheroes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllSuperheroes();
        setSuperheroes(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading-spinner">Cargando...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;

  return (
    <div className="dashboard-container">
      <h1>Superhéroes</h1>
      <div className="superheroes-grid">
        {superheroes.map(hero => (
          <SuperheroCard key={hero.id} hero={hero} />
        ))}
      </div>
    </div>
  );
};
