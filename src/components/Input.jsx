import './Input.css';
import { useEffect, useState } from 'react';

const Input = () => {
    const [cities, setCities] = useState([]);
    const [fromCity, setFromCity] = useState('');
    const [toCity, setToCity] = useState('');

    useEffect(() => {
        // Replace with your actual backend API endpoint
        fetch('https://localhost/3000.com/cities')
            .then(res => res.json())
            .then(data => setCities(data))
            .catch(err => console.error('Error fetching cities:', err));
    }, []);

    return (
        <div className='input'>
            <div className='input-container'>
                <div className='input-field'>
                    <select value={fromCity} onChange={e => setFromCity(e.target.value)}>
                        <option value="">From</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
                <div className='input-field'>
                    <select value={toCity} onChange={e => setToCity(e.target.value)}>
                        <option value="">To</option>
                        {cities.map((city, index) => (
                            <option key={index} value={city}>{city}</option>
                        ))}
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Input;
