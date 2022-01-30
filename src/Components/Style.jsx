import styled from 'styled-components';

const FlexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: start;
    width: calc(100% - 10rem);
    margin: 5rem;
`;

const StyledButton = styled.button`
    background-color: #000;
    font-size: 32px;
    color: #fff;
`;

const CardSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem 5rem;
    background-color: #eee;
`;

const Card = styled.div`
    border: 3px solid #515151;
    border-radius: 6px;
`;

const CardPhoto = styled.img`
    width: 150px;
    height: 150px;
    margin: auto;
`;

const Img = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
`;

const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: space-between;
    align-items: left;
    padding: 5px;
`;

const ToggleButton = styled.button`
    height: 40px;
    width: 150px;
    background: rgba(236, 241, 247, 0.5);
    border: 1px solid rgba(236, 241, 247, 0.5);
    border-radius: 5px;
`;

const Input = styled.input`
    display: block;
    padding: 2px 8px;
    height: 2rem;
    width: 90%;
    margin-bottom: 8px;
`;

const Form = styled.form`
    width: 50%;
`;

const CardName = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1rem 0 2rem;
`;

const CardTitle = styled.div`
    background-color: #000;
    height: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    color: #fff;
`;

export { Card, CardName, CardTitle, FlexContainer, CardSection, CardPhoto, Img, Buttons, ToggleButton, Input, Form };
