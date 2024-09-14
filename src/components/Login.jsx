import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    // Si el usuario ya está logueado (existe el token en localStorage)
    const token = localStorage.getItem('accessToken');
    if (token) {
      // Redirige al usuario a la página de "Ver Turnos" o a donde desees
      navigate('/empleo');
    }
    // Dependencias vacías para que useEffect solo se ejecute una vez
  }, [navigate]); // La lista de dependencias solo contiene `navigate` 

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/api/auth/login', {
        username,
        password,
      });

      // Guardar el token y el usuario en localStorage
      localStorage.setItem('accessToken', response.data.accessToken);
      localStorage.setItem('user', JSON.stringify(response.data.usuarioLogueado));

      // Redirige al usuario después de iniciar sesión
      navigate('/misTurnos');
    } catch (error) {
      setError('Credenciales incorrectas. Inténtalo de nuevo.');
    }
  };

  return (
    <div>


<Link to="/registrarUsuario">
                <button>Crear Nuevo Cliente</button>
            </Link>


      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
