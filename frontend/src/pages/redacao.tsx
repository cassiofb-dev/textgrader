import axios from 'axios';

import { useState } from 'react';

import { Button } from 'antd';

import TextArea from 'antd/lib/input/TextArea';

const Redacao = () => {
    const [essay, setEssay] = useState('');

    const handleChange = (event: any) => {
        setEssay(event.target.value);
    };

    const getEssayGrade = async () => {
        const response = await axios.post('http://0.0.0.0:8000/text_grade/', {
            essay: essay,
        });

        const data = response.data;

        // alert(`Nota da redação: ${data.grade}`);
        alert("ok");
    }

    const clearEssay = () => {
        setEssay('');
    }

    return (
        <div style={{ padding: '0 50px' }}>
            <h1 style={{ textAlign: 'center' }}>Redação</h1>

            <TextArea value={essay} onChange={handleChange} style={{ padding: 24, minHeight: 380, background: 'white' }} placeholder="Escreva sua redação aqui" />

            <Button onClick={getEssayGrade} style={{ marginTop: '16px' }} type="primary">Enviar redação</Button>

            <Button onClick={clearEssay} style={{ marginTop: '16px', marginLeft: '16px' }} type="primary">Apagar redação</Button>
        </div>
    );
};

export default Redacao;