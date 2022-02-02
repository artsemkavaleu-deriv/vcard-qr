import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #000;
  }
`;

const Buttons = styled.div`
    align-content: space-between;
    align-items: left;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 5px;
`;

const StyledCard = styled.div`
    border: 3px solid #515151;
    border-radius: 6px;
`;

const CardName = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 1rem 0 2rem;
`;

const CardPhoto = styled.img`
    height: 150px;
    margin: auto;
    width: 150px;
`;

const CardSection = styled.div`
    align-items: center;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    padding: 2rem 5rem;
`;

const CardTitle = styled.div`
    align-items: center;
    background-color: #000;
    color: #fff;
    display: flex;
    height: 2rem;
    justify-content: center;
    padding: 10px;
`;

const FlexContainer = styled.div`
    align-items: start;
    display: flex;
    height: 100vh;
    justify-content: center;
    margin: 1rem;
    width: calc(100% - 10rem);
`;

const Form = styled.form`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.6rem;
    background-color: #fff;
    padding: 20px;
    margin: 0 auto;
    border-radius: 4px;
`;

const Img = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
`;

const Input = styled.input`
    display: block;
    height: 2rem;
    padding: 2px 8px;
`;

const StyledButton = styled.button`
    background-color: #ff444f;
    border: 2px solid #ff444f;
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 10px 16px;
    width: 30%;
`;

const ToggleButton = styled.button`
    background: rgba(236, 241, 247, 0.5);
    border: 1px solid gray;
    border-radius: 5px;
    cursor: pointer;
    height: 40px;
    margin-bottom: 2px;
    width: 150px;
`;

const Wrapper = styled.div`
    background-image: url(https://i.ytimg.com/vi/scUkDeraDu8/maxresdefault.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

const InputLabel = styled.label`
    border: 2px solid #ff444f;
    border-radius: 4px;
    color: #ff444f;
    cursor: pointer;
    font-size: 14px;
    padding: 10px 16px;
    display: inline-block;
    cursor: pointer;

    > input[type='file'] {
        display: none;
    }
`;

const H2 = styled.h2`
    grid-column-start: 1;
    grid-column-end: 3;
`;

export {
    GlobalStyle,
    Buttons,
    CardName,
    CardPhoto,
    CardSection,
    CardTitle,
    FlexContainer,
    Form,
    H2,
    Img,
    Input,
    InputLabel,
    StyledButton,
    StyledCard,
    ToggleButton,
    Wrapper,
};
