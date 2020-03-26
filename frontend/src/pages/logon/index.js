import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import './styles.css';
import api from '../../services/api';
import petLoverImg from '../../assets/petlover.png'

function Logon() {

    const [id, setId] = useState('');

    const history = useHistory();

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response= await api.post('sessions', { id });

            console.log(response.data.name);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch(err) {
            alert('Algo deu errado, tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="title">
                <h1>Ajuda Animal</h1>
                <p>“Ninguém pode se queixar da falta de um amigo, podendo <br /> ter um cão.” – Marquês de Maricá.</p>
            </section>

            <div className="logon">
                <img className="img" src={petLoverImg} alt="Kid with a puppy" />

                <section className="form">
                    <form onSubmit={handleLogin}>
                        <h2>Faça seu logon:</h2>
                        <input 
                            placeholder="Sua ID"
                            value={id}
                            onChange={e => setId(e.target.value)} 
                        />
                        
                        <button className="button" type="submit">Entrar</button>
                    </form>

                    <Link className="back-link" to="/register">Não possui castro? Entre aqui!</Link>
                </section>
            </div>
        </div>
    )
}

export default Logon;