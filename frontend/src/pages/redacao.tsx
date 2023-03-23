import React, { useState } from 'react';
import { Button } from 'antd';
import { Container, Title, TextArea, ButtonsContainer } from '@/styles/redacao/styles';

const Redacao = () => {
    const [value, setValue] = useState('');

    const handleResetClick = () => {
        setValue('');
    };

    const handleTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
    };
    
    return (
        <Container>
            <Title>Redação</Title>
            <TextArea placeholder="Sua redação aqui." value={value} onChange={handleTextAreaChange} />
            <ButtonsContainer>
                <Button>Enviar</Button>
                <Button onClick={handleResetClick}>Reset</Button>
            </ButtonsContainer>

        </Container>
    );
};

export default Redacao;