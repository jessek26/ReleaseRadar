import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Login() {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    const { login, register } = useAuth();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password.length < 6) {
            setError('Password must be at least 6 characters.');
            return;
        }

        try {
            if (isRegistering) {
                register(username, password);
            } else {
                login(username, password);
            }
            navigate('/');
        } catch (err) {
            setError('Authentication failed. Please try again.');
        }
    };

    return (
        <div className="main-content login-container">
            <div className="album-card login-card">
                <h2>{isRegistering ? 'Create an Account' : 'Welcome Back'}</h2>
                
                {error && <p className="login-error">{error}</p>}

                <form onSubmit={handleSubmit} className="login-form">
        <div className="form-group">
            <label htmlFor="username">Username / Email</label>
            <input 
                id="username"
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required 
            />
        </div>
        <div className="form-group">
            <label htmlFor="password">Password</label>
            <input 
                id="password"
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required 
            />
        </div>
        <button type="submit" className="spotify-button login-submit-btn">
            {isRegistering ? 'Sign Up' : 'Log In'}
        </button>
        </form>

                <p className="login-toggle-text">
                    {isRegistering ? 'Already have an account? ' : 'Need an account? '}
                    <span 
                        onClick={() => setIsRegistering(!isRegistering)} 
                        className="login-toggle-link"
                    >
                        {isRegistering ? 'Log in here' : 'Register here'}
                    </span>
                </p>
            </div>
        </div>
    );
}

export default Login;