import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect, vi } from 'vitest';
import Login from './Login';
import { AuthProvider } from '../contexts/AuthContext';

vi.mock('../contexts/AuthContext', async () => {
    const actual = await vi.importActual('../contexts/AuthContext');
    return {
        ...actual,
        useAuth: () => ({
            login: vi.fn(),
            register: vi.fn(),
            isAuthenticated: false
        })
    };
});

describe('Login Component Authentication Flow', () => {
    it('renders the login form correctly', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        
        expect(screen.getByText(/Welcome Back/i)).toBeInTheDocument();
        expect(screen.getByText(/Sign Up|Log In/i)).toBeInTheDocument();
    });

    it('edge case: shows validation error for passwords under 6 characters', () => {
        render(
            <BrowserRouter>
                <Login />
            </BrowserRouter>
        );
        
        const usernameInput = screen.getByLabelText(/Username \/ Email/i);
        const passwordInput = screen.getByLabelText(/Password/i);
        const submitButton = screen.getByRole('button', { name: /Log In/i });
        
        fireEvent.change(usernameInput, { target: { value: 'testuser@email.com' } });
        fireEvent.change(passwordInput, { target: { value: '123' } });
        fireEvent.click(submitButton);

        expect(screen.getByText(/Password must be at least 6 characters/i)).toBeInTheDocument();
    });
});