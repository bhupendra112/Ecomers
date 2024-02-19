import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import "../App.css"

function Login() {
    let navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        image: '',
        email: '',
        number: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/user/loginData', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) {
                throw new Error('Failed to submit user data');
            }
            console.log('User data submitted successfully');
            
      navigate("/");
            // Optionally, you can reset the form after submission
            setFormData({
                name: '',
                username: '',
                image: '',
                email: '',
                number: ''
            });
        } catch (error) {
            console.error('Error submitting user data:', error);
        }
    };

    return (
        <div className="user-form-container">
            <h2>User Information Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>
                    <label>Username:</label>
                    <input type="text" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label>Image URL:</label>
                    <input type="file" name="image" value={formData.image} onChange={handleChange} />
                </div>
                <div>
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </div>
                <div>
                    <label>Number:</label>
                    <input type="number" name="number" value={formData.number} onChange={handleChange} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Login;
