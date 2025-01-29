import React from 'react';
import './Button.css';

const Button = ({ 
    children, 
    variant = 'primary',
    type = 'button',
    href,
    onClick,
    disabled = false,
    isLoading = false,
    size = 'medium',
    animation = 'none',
    effect = 'none',
    className = '' 
}) => {
    const baseClass = `custom-button ${variant} ${size} ${animation} ${effect} ${className} ${disabled ? 'disabled' : ''} ${isLoading ? 'loading' : ''}`;

    return href ? (
        <a 
            href={href}
            className={baseClass}
        >
            <span className="button-content">
                {isLoading ? 'Loading...' : children}
            </span>
        </a>
    ) : (
        <button 
            type={type}
            onClick={onClick}
            disabled={disabled || isLoading}
            className={baseClass}
        >
            <span className="button-content">
                {isLoading ? 'Loading...' : children}
            </span>
        </button>
    );
};

export default Button;
