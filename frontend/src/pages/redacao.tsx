import React from 'react';
import { Button } from 'antd';

const Redacao = () => {
    return (
        <div className="site-layout" style={{ padding: '0 50px' }}>
            <h1 style={{ textAlign: 'center' }}>Redação</h1>
            <div style={{ padding: 24, minHeight: 380, background: 'white' }}>Escreva aqui...</div>
            <br />
            <Button type="primary">Enviar redação</Button>
        </div>
    );
};

export default Redacao;