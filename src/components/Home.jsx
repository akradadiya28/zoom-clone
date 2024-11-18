import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
    const [input, setInput] = useState('');
    const navigate = useNavigate();

    const submitHandler = () => {
        if (input.trim()) {
            navigate(`/room/${input}`);
        } else {
            alert('Please enter a name!');
        }
    };

    return (
        <div style={styles.container}>
            <div style={styles.card}>
                <h1 style={styles.title}>Join a Chat Room</h1>
                <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    placeholder="Enter your name"
                    style={styles.input}
                />
                <button onClick={submitHandler} style={styles.button}>
                    Join
                </button>
            </div>
        </div>
    );
}

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: '#f0f4f8',
        padding: '20px',
    },
    card: {
        background: '#ffffff',
        padding: '30px',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
        width: '100%',
        maxWidth: '400px',
    },
    title: {
        fontSize: '24px',
        marginBottom: '20px',
        color: '#333333',
    },
    input: {
        width: '100%',
        padding: '10px',
        marginBottom: '15px',
        fontSize: '16px',
        borderRadius: '5px',
        border: '1px solid #cccccc',
    },
    button: {
        width: '100%',
        padding: '10px',
        fontSize: '16px',
        color: '#ffffff',
        backgroundColor: '#007bff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'background-color 0.3s',
    },
};

styles.button[':hover'] = {
    backgroundColor: '#0056b3',
};

export default Home;
