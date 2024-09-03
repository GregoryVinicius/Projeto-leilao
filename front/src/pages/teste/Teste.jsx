import React, { useState } from 'react';
import './Teste.css'; // Importando o arquivo CSS

function Teste() {
    const [password, setPassword] = useState('');
    const [isValid, setIsValid] = useState(false);

    const validatePassword = (password) => {
        const minLength = password.length >= 6;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return {
            minLength,
            hasUpperCase,
            hasLowerCase,
            hasNumber,
            hasSpecialChar,
            isValid: minLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar,
        };
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        const validationResults = validatePassword(newPassword);
        setPassword(newPassword);
        setIsValid(validationResults.isValid);
    };

    const validationResults = validatePassword(password);

    return (
        <div>
            <input
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Enter your password"
            />
            <p>Password requirements:</p>
            <ul>
                <li className={validationResults.minLength ? 'valid' : 'invalid'}>
                    Minimum 6 characters
                </li>
                <li className={validationResults.hasUpperCase ? 'valid' : 'invalid'}>
                    At least 1 uppercase letter
                </li>
                <li className={validationResults.hasLowerCase ? 'valid' : 'invalid'}>
                    At least 1 lowercase letter
                </li>
                <li className={validationResults.hasNumber ? 'valid' : 'invalid'}>
                    At least 1 number
                </li>
                <li className={validationResults.hasSpecialChar ? 'valid' : 'invalid'}>
                    At least 1 special character
                </li>
            </ul>
            {isValid ? <p className="valid-message">Password is valid</p> : <p className="invalid-message">Password is not valid</p>}
        </div>
    );
}

export default Teste;
