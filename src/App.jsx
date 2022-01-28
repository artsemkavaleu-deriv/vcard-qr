import React, { useState } from 'react';
import vCardsJS from 'vcards-js';
import styled from 'styled-components';
import Colors from './Colors';

const FlexContainer = styled.div`
    display: flex;
    align-items: stretch;
    align-content: stretch;
    justify-content: center;
    width: 100%;
`;

const StyledButton = styled.button`
    background-color: black;
    font-size: 32px;
    color: white;
    padding: 1rem 4rem 5rem 3rem;
`;

const StyledDiv = styled.div`
    display: grid;
    grid-template-columns: [labels] auto [controls] 1fr;
    grid-auto-flow: row;
    grid-gap: 0.8em;
    background: #eee;
    padding: 1.2em;
    width: 350px;
`;

const QrChoosing = styled.div`4
    border: 3px solid #515151;
    border-radius: 6px;
    box-sizing: border-box;
`;

const StyledImg = styled.img`
    width: 200px;
    height: 200px;
`;

const Img = styled.div`
    width: 200px;
    height: 200px;
    padding: 1rem 4rem 5rem 3rem;
    background-image: url("data:image/svg+xml,%3Csvg id='border-eighteen' data-name='Layer 1' xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 300 300'%3E%3Cg%3E%3Cg%3E%3Cpath d='M236.5,262.21a4,4,0,0,0-3.05,1.33,6.16,6.16,0,0,0-1.51,3.58h8.71v-.18a5.33,5.33,0,0,0-1.19-3.41A3.7,3.7,0,0,0,236.5,262.21Z'/%3E%3Cpath d='M173.06,269.31a2.66,2.66,0,0,0-1.36,2.35,2.6,2.6,0,0,0,.91,2,3.42,3.42,0,0,0,2.36.81,5.41,5.41,0,0,0,2.88-.78,4.65,4.65,0,0,0,1.85-2.08v-3.2h-2.88A7.23,7.23,0,0,0,173.06,269.31Z'/%3E%3Cpath d='M258.91.24H41.09A6.19,6.19,0,0,0,34.9,6.43v279A6.15,6.15,0,0,0,41,291.57h5.71c0-.09,0-.18,0-.28V241.51a10.84,10.84,0,0,1,.2-2.07H46.1c-3.26,0-5.9-1.89-5.9-5.16V11.64a5.91,5.91,0,0,1,5.91-5.91H253.82a5.91,5.91,0,0,1,5.91,5.91V234.28a5.91,5.91,0,0,1-3,5.16H117.56a10.84,10.84,0,0,1,.2,2.07v49.78c0,.1,0,.19,0,.28H259a6.15,6.15,0,0,0,6.12-6.12V251.67h0V6.43A6.19,6.19,0,0,0,258.91.24ZM151.65,274.52a7.88,7.88,0,0,1-4.87,1.39,9.39,9.39,0,0,1-3.79-.74,5.73,5.73,0,0,1-2.62-2.06,5.34,5.34,0,0,1-.9-3.05h1.66a3.9,3.9,0,0,0,1.54,3.26,6.52,6.52,0,0,0,4.11,1.2,6.13,6.13,0,0,0,3.67-1,3.15,3.15,0,0,0,1.38-2.67,3.19,3.19,0,0,0-1.14-2.58,12,12,0,0,0-4.18-1.79,14.73,14.73,0,0,1-4.43-1.86,4.51,4.51,0,0,1-.14-7.38,7.55,7.55,0,0,1,4.72-1.41,7.81,7.81,0,0,1,3.48.75,5.76,5.76,0,0,1,2.39,2.1,5.53,5.53,0,0,1,.84,3h-1.66a4.11,4.11,0,0,0-1.37-3.22,5.36,5.36,0,0,0-3.68-1.22,5.75,5.75,0,0,0-3.57,1,3.12,3.12,0,0,0-1.33,2.62,3,3,0,0,0,1.19,2.43,11,11,0,0,0,3.83,1.66,18.49,18.49,0,0,1,4,1.49,5.86,5.86,0,0,1,2,1.85,4.59,4.59,0,0,1,.68,2.54A4.42,4.42,0,0,1,151.65,274.52Zm7-1.52a4,4,0,0,0,3.39,1.56,4.23,4.23,0,0,0,2.81-.95,3.31,3.31,0,0,0,1.23-2.45h1.55a4.58,4.58,0,0,1-.84,2.42,5.26,5.26,0,0,1-2,1.72,6.16,6.16,0,0,1-2.72.61,5.61,5.61,0,0,1-4.53-2,8,8,0,0,1-1.68-5.35v-.48a8.92,8.92,0,0,1,.76-3.8,5.82,5.82,0,0,1,2.15-2.55,6,6,0,0,1,3.29-.91,5.62,5.62,0,0,1,3.94,1.43,5.25,5.25,0,0,1,1.66,3.75h-1.55a3.89,3.89,0,0,0-4.05-3.81,4,4,0,0,0-3.38,1.58,7.09,7.09,0,0,0-1.2,4.4v.47A7,7,0,0,0,158.66,273Zm23.08,2.64H180a7.37,7.37,0,0,1-.31-2,5.59,5.59,0,0,1-2.16,1.7,6.69,6.69,0,0,1-2.77.59,4.89,4.89,0,0,1-3.39-1.16,3.84,3.84,0,0,1-1.3-3,3.9,3.9,0,0,1,1.77-3.36,8.52,8.52,0,0,1,4.92-1.23h2.92v-1.65a3.21,3.21,0,0,0-1-2.46,4,4,0,0,0-2.8-.89,4.39,4.39,0,0,0-2.78.86,2.54,2.54,0,0,0-1.11,2.07h-1.61a3.76,3.76,0,0,1,1.61-3,6.27,6.27,0,0,1,4-1.27,5.66,5.66,0,0,1,3.83,1.22,4.32,4.32,0,0,1,1.44,3.39v6.88a8.4,8.4,0,0,0,.45,3.15Zm14.8,0h-1.6V266.1a4.44,4.44,0,0,0-.83-2.9,3.23,3.23,0,0,0-2.6-1,4,4,0,0,0-2.64.94,5.44,5.44,0,0,0-1.69,2.51v9.95h-1.6V261.11h1.53l0,2.49a5.8,5.8,0,0,1,2-2.05,5.34,5.34,0,0,1,2.7-.71,4.35,4.35,0,0,1,3.48,1.32,6,6,0,0,1,1.16,3.95Zm30.05,0h-1.65v-8.51l.14-8.73-7.28,17.24h-1.28l-7.25-17.17.13,8.61v8.56h-1.65V256.09h2.19l7.21,17.26,7.24-17.26h2.2Zm15.66-7.15H231.88v.31a6.11,6.11,0,0,0,1.42,4.11,4.49,4.49,0,0,0,3.57,1.65,5.26,5.26,0,0,0,2.27-.47,5.16,5.16,0,0,0,1.8-1.51l1,.77a5.85,5.85,0,0,1-5.14,2.56,6.29,6.29,0,0,1-3.35-.91,6.22,6.22,0,0,1-2.33-2.54,7.89,7.89,0,0,1-.83-3.66v-.58a8.59,8.59,0,0,1,.81-3.78,6.45,6.45,0,0,1,2.26-2.63,5.61,5.61,0,0,1,3.14-1,5.25,5.25,0,0,1,4.2,1.81,7.36,7.36,0,0,1,1.55,4.94Z'/%3E%3C/g%3E%3Cg%3E%3Cpolygon points='73.63 279.03 92.53 279.03 92.53 253.96 73.63 253.77 73.63 279.03'/%3E%3Cpath d='M83.13,280.64a2.56,2.56,0,0,0-2.57,2.57,2.57,2.57,0,1,0,2.57-2.57Z'/%3E%3Cpath d='M79.9,251.3h6.45a1.8,1.8,0,0,0,1.81-1.8,1.87,1.87,0,0,0-1.81-1.8H80a1.8,1.8,0,1,0-.09,3.6Z'/%3E%3Cpath d='M106.12,233.82H58.36a8.71,8.71,0,0,0-8.7,8.7v47.76a8.71,8.71,0,0,0,8.7,8.7h47.76a8.71,8.71,0,0,0,8.7-8.7V242.52A8.71,8.71,0,0,0,106.12,233.82ZM95.47,261.65v21.84a3.91,3.91,0,0,1-3.89,3.89H74.77a3.91,3.91,0,0,1-3.89-3.89V249.31a3.91,3.91,0,0,1,3.89-3.89H91.58a4,4,0,0,1,3.89,3.89Z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A");
`;

const Buttons = styled.div`
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
    align-content: space-between;
    align-items: left;
    padding: 5px;
`;

export const ToggleButton = styled.button`
    height: 40px;
    width: 150px;
    background: rgba(236, 241, 247, 0.5);
    border: 1px solid rgba(236, 241, 247, 0.5);
    border-radius: 5px;
`;

const App = () => {
    const initial_state = {
        firstName: '',
        middleName: '',
        lastName: '',
        homePhone: '',
        workPhone: '',
        workFax: '',
        workEmail: '',
        organization: '',
        street: '',
        city: '',
        postalCode: '',
        stateProvince: '',
        countryRegion: '',
        url: '',
    };
    const [form_state, setFormState] = useState(initial_state);

    const [isOpen, setIsOpen] = useState({
        isFrameFieldOpen: false,
        isColorFieldOpen: false,
        isLogoFieldOpen: false,
    });

    const toggling1 = () => setIsOpen({ isFrameFieldOpen: !isOpen.isFrameFieldOpen });
    const toggling2 = () => setIsOpen({ isColorFieldOpen: !isOpen.isColorFieldOpen });
    const toggling3 = () => setIsOpen({ isLogoFieldOpen: !isOpen.isLogoFieldOpen });

    const downloadQRCode = (url, fileName) => {
        fetch(url, {})
            .then(response => response.blob())
            .then(blob => URL.createObjectURL(blob))
            .then(href => {
                const tag = document.createElement('a');
                tag.href = href;
                tag.download = fileName;
                document.body.appendChild(tag);
                tag.click();
                document.body.removeChild(tag);
            });
    };

    const handleTextChange = e => {
        setFormState({ ...form_state, [e.target.name]: e.target.value });
    };

    const vCard = vCardsJS();
    vCard.firstName = form_state.firstName;
    vCard.middleName = form_state.middleName;
    vCard.lastName = form_state.lastName;
    vCard.homePhone = form_state.homePhone;
    vCard.workPhone = form_state.workPhone;
    vCard.workFax = form_state.workFax;
    vCard.workEmail = form_state.workEmail;
    vCard.organization = form_state.organization;
    vCard.homeAddress.street = form_state.street;
    vCard.homeAddress.city = form_state.city;
    vCard.homeAddress.postalCode = form_state.postalCode;
    vCard.homeAddress.stateProvince = form_state.stateProvince;
    vCard.homeAddress.countryRegion = form_state.countryRegion;
    vCard.url = form_state.url;

    const vCardString = vCard.getFormattedString();
    const vCardEncodedString = encodeURIComponent(vCardString);
    const qrCodeUrl = `https://chart.googleapis.com/chart?chs=300x300&choe=UTF-8&chld=M|0&cht=qr&chl=${vCardEncodedString}`;

    return (
        <div>
            <h1>vCard QR Code</h1>
            <FlexContainer>
                <div>
                    <StyledDiv>
                        <input type='text' name='firstName' placeholder='First name' onKeyUp={handleTextChange} />
                        <input type='text' name='middleName' placeholder='Middle name' onKeyUp={handleTextChange} />
                        <input type='text' name='lastName' placeholder='Last name' onKeyUp={handleTextChange} />
                        <input type='text' name='homePhone' placeholder='Mobile Phone' onKeyUp={handleTextChange} />
                        <input type='text' name='workPhone' placeholder='Work Phone' onKeyUp={handleTextChange} />
                        <input type='text' name='workFax' placeholder='Work Fax' onKeyUp={handleTextChange} />
                        <input type='text' name='email' placeholder='Email' onKeyUp={handleTextChange} />
                        <input type='text' name='organization' placeholder='Organization' onKeyUp={handleTextChange} />
                        <input type='text' name='street' placeholder='Home Adress' onKeyUp={handleTextChange} />
                        <input type='text' name='postalCode' placeholder='Postal Code' onKeyUp={handleTextChange} />
                        <input type='text' name='postalCode' placeholder='Postal Code' onKeyUp={handleTextChange} />
                        <input
                            type='text'
                            name='stateProvince'
                            placeholder='State Province'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            type='text'
                            name='countryRegion'
                            placeholder='Country Region'
                            onKeyUp={handleTextChange}
                        />
                        <input type='text' name='url' placeholder='Website' onKeyUp={handleTextChange} />
                    </StyledDiv>
                    <StyledButton onClick={() => downloadQRCode(qrCodeUrl, 'qrcode.png')}>
                        Download the QRCode
                    </StyledButton>
                </div>
                <QrChoosing>
                    <Img>
                        <StyledImg src={qrCodeUrl} />
                    </Img>
                    <Buttons>
                        <ToggleButton onClick={toggling1}>Frames</ToggleButton>
                        {isOpen.isFrameFieldOpen && 'Frames'}
                        <ToggleButton onClick={toggling2}>Colors</ToggleButton>
                        {isOpen.isColorFieldOpen && <Colors vCardString={vCardString} />}
                        <ToggleButton onClick={toggling3}>Logo</ToggleButton>
                        {isOpen.isLogoFieldOpen && 'Logo'}
                    </Buttons>
                </QrChoosing>
            </FlexContainer>
        </div>
    );
};

export default App;
