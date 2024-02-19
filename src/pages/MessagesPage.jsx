import React, { useEffect, useState } from 'react';


const MessagesPage = () => {
    const [stats, setStats] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
  
    useEffect(() => {
      fetch('https://toolia.site/stats')
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then(data => {
          setStats(data);
          setLoading(false);
        })
        .catch(e => {
          setError(`Error fetching data: ${e.message}`);
          setLoading(false);
        });
    }, []);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;
  
    return (
      <div>
        <h1>Estadísticas del Chat</h1>
        {stats && (
          <>
            <p>Total de Mensajes: {stats.total_messages}</p>
            <p>Mensajes de Usuario: {stats.total_user_messages}</p>
            <p>Mensajes de IA: {stats.total_ia_messages}</p>
            <p>Sesiones Únicas: {stats.unique_sessions}</p>
          </>
        )}
      </div>
    );
  };
export default MessagesPage;