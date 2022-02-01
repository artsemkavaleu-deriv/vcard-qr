import styled from 'styled-components';

const Buttons = styled.div`
    align-content: space-between;
    align-items: left;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding: 5px;
`;

const Card = styled.div`
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
    display: flex;
    flex-wrap: wrap;
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
    margin-bottom: 8px;
    margin-left: 5px;
    padding: 2px 8px;
    width: 40%;
`;

const StyledButton = styled.button`
    background-color: black;
    border: 2px solid red;
    border-radius: 5px;
    color: red;
    cursor: pointer;
    font-size: 22px;
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
    background-size: 100%;
    width: 100%;
`;

export {
    Buttons,
    Card,
    CardName,
    CardPhoto,
    CardSection,
    CardTitle,
    FlexContainer,
    Form,
    Img,
    Input,
    StyledButton,
    ToggleButton,
    Wrapper,
};
