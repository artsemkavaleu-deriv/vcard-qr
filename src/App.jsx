import React, { useState } from 'react';
import vCardsJS from 'vcards-js';
import styled from 'styled-components';

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

const StyledImg = styled.img`
    width: 200px;
    border: 3px solid #515151;
    height: 200px;
    padding: 50px;
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
                        <input
                            className='form-control'
                            type='text'
                            name='firstName'
                            placeholder='First name'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='middleName'
                            placeholder='Middle name'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='lastName'
                            placeholder='Last name'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='homePhone'
                            placeholder='Mobile Phone'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='workPhone'
                            placeholder='Work Phone'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='workFax'
                            placeholder='Work Fax'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='email'
                            placeholder='Email'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='organization'
                            placeholder='Organization'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='street'
                            placeholder='Home Adress'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='postalCode'
                            placeholder='Postal Code'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='postalCode'
                            placeholder='Postal Code'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='stateProvince'
                            placeholder='State Province'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='countryRegion'
                            placeholder='Country Region'
                            onKeyUp={handleTextChange}
                        />
                        <input
                            className='form-control'
                            type='text'
                            name='url'
                            placeholder='Website'
                            onKeyUp={handleTextChange}
                        />
                    </StyledDiv>
                    <StyledButton onClick={() => downloadQRCode(qrCodeUrl, 'qrcode.png')}>
                        Download the QRCode
                    </StyledButton>
                </div>
                <StyledImg src={qrCodeUrl} alt='generated-qr-code' />
            </FlexContainer>
        </div>
    );
};

export default App;
