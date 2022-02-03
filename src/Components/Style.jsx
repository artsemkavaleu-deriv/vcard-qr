import styled, { createGlobalStyle } from 'styled-components';

const brand_color = '#ff444f';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: sans-serif;
    background-color: #000;
  }
`;

const ColoredButtonsWrapper = styled.div`
    display: grid;
    grid-row-gap: 8px;
    padding: 10px;
    background-color: #eee;
    width: 150px;
`;

const DownloadButtonsWrapper = styled.div`
    display: grid;
    grid-row-gap: 8px;
`;

const StyledCard = styled.div`
    border: 3px solid ${brand_color};
    border-radius: 6px;
`;

const CardName = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 1rem 0 2rem;
`;

const CardPhoto = styled.img`
    height: 132px;
    margin: auto;
    border-radius: 50%;
`;

const CardSection = styled.div`
    align-items: center;
    background-color: #eee;
    display: flex;
    flex-direction: column;
    padding: 1.6rem 5rem;
`;

const CardTitle = styled.div`
    align-items: center;
    background-color: ${brand_color};
    color: #fff;
    display: flex;
    height: 2rem;
    justify-content: center;
    padding: 10px;
`;

const FlexContainer = styled.div`
    align-items: start;
    display: flex;
    height: calc(100vh - 184px);
    justify-content: center;
    margin: 1rem;
`;

const Form = styled.form`
    width: 50%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.6rem;
    background-color: #fff;
    padding: 20px;
    margin-right: 5rem;
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
    background-color: ${brand_color};
    border: 2px solid ${brand_color};
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 10px 16px;
    width: auto;
`;

const DownloadButton = styled.button`
    border: 2px solid ${brand_color};
    border-radius: 5px;
    color: ${brand_color};
    cursor: pointer;
    font-size: 22px;
    width: 100%;
`;

const ToggleButton = styled.button`
    border: 2px solid ${brand_color};
    border-radius: 5px;
    cursor: pointer;
    padding: 10px 16px;
    color: ${brand_color};
`;

const Wrapper = styled.div`
    background-image: url(https://i.ytimg.com/vi/scUkDeraDu8/maxresdefault.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

const InputLabel = styled.label`
    color: ${brand_color};
    cursor: pointer;
    font-size: 14px;
    padding: 10px 16px;
    display: inline-block;
    cursor: pointer;
    text-decoration: underline;

    > input[type='file'] {
        display: none;
    }
`;

const H2 = styled.h2`
    grid-column-start: 1;
    grid-column-end: 3;
    margin-top: unset;
    color: ${brand_color};
`;

export {
    ColoredButtonsWrapper,
    DownloadButtonsWrapper,
    GlobalStyle,
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
    DownloadButton,
    StyledCard,
    ToggleButton,
    Wrapper,
};
