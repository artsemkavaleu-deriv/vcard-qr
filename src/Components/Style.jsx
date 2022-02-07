import styled, { createGlobalStyle } from 'styled-components';

const brand_color = '#ff444f';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    font-family: sans-serif;
    margin: 0;
  }
`;

const CardName = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
`;

const CardPhoto = styled.img`
    border-radius: 50%;
    height: 100px;
    margin: auto;
`;

const CardSection = styled.div`
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    padding: 0rem 5rem;
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

const ColoredButtonsWrapper = styled.div`
    display: grid;
    grid-row-gap: 8px;
    padding-left: 10px;
    width: 200px;
`;

const DownloadButton = styled.button`
    border: 2px solid ${brand_color};
    border-radius: 5px;
    color: ${brand_color};
    cursor: pointer;
    font-size: 22px;
    width: 100%;
`;

const DownloadButtonsWrapper = styled.div`
    display: grid;
    grid-row-gap: 8px;
`;

const FlexContainer = styled.div`
    align-items: start;
    display: flex;
    height: calc(100vh - 184px);
    justify-content: center;
    margin: 1rem;
`;

const Form = styled.form`
    border-radius: 4px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 0.6rem;
    margin-right: 5rem;
    padding: 20px;
    width: 50%;
`;

const FrameButtonsWrapper = styled.div`
    background-color: rgba(239, 239, 239);
    border-radius: 5px;
`;

const Frame = styled.div`
    background-image: url('${props => props.frame}');
    background-repeat: no-repeat;
    display: flex;
    height: 270px;
    justify-content: center;
    padding-bottom: 25px;
    padding-top: 40px;
    width: 250px;
`;

const H2 = styled.h2`
    color: ${brand_color};
    grid-column-end: 3;
    grid-column-start: 1;
    margin-top: unset;
`;

const Img = styled.div`
    align-items: center;
    display: flex;
    justify-content: center;
    position: relative;
`;

const Input = styled.input`
    background: none;
    border: 2px solid gray;
    border-radius: 5px;
    color: white;
    display: block;
    height: 2rem;
    margin-bottom: 13px;
    padding: 2px 8px;
    &:focus {
        outline: 0;
        border: 2px solid #fff;
    }
`;

const InputLabel = styled.label`
    color: ${brand_color};
    cursor: pointer;
    cursor: pointer;
    display: inline-block;
    font-size: 14px;
    padding: 10px 16px;
    text-decoration: underline;

    > input[type='file'] {
        display: none;
    }
`;

const StyledButton = styled.button`
    background: NONE;
    border: 2px solid ${brand_color};
    border-radius: 4px;
    color: #fff;
    cursor: pointer;
    font-size: 14px;
    padding: 10px 16px;
    width: auto;
`;

const StyledCard = styled.div`
    border: 3px solid ${brand_color};
    border-radius: 6px;
`;

const ToggleButton = styled.button`
    background-color: ${brand_color};
    border: 1px solid ${brand_color};
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    padding: 10px 16px;
    color: white;

    :disabled {
        opacity: 0.5;
    }
`;

const Wrapper = styled.div`
    background-image: url(https://i.ytimg.com/vi/scUkDeraDu8/maxresdefault.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
`;

const InputWrapperDiv = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: red;
`;

export {
    GlobalStyle,
    CardName,
    CardPhoto,
    CardSection,
    CardTitle,
    ColoredButtonsWrapper,
    DownloadButton,
    DownloadButtonsWrapper,
    FlexContainer,
    Form,
    Frame,
    FrameButtonsWrapper,
    H2,
    Img,
    Input,
    InputLabel,
    InputWrapperDiv,
    StyledButton,
    StyledCard,
    ToggleButton,
    Wrapper,
};
