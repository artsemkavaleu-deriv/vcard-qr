import React, { useRef, useState } from 'react';
import { Formik } from 'formik';
import { formatVCard } from '../Utils/helper';
import { Buttons, FlexContainer, Form, GlobalStyle, Input, StyledButton, ToggleButton, Wrapper } from './Style';
import Card from './Card';
import Colors from './Colors';
import Footer from './Footer';
import Header from './Header';

const App = () => {
    const ref = useRef(null);
    const [qr_code, setQRCode] = useState('https://deriv.com');
    const [photo, setPhoto] = useState(null);
    const [photo_src, setPhotoSrc] = useState(null);
    const [isOpen, setIsOpen] = useState({
        isFrameFieldOpen: false,
        isColorFieldOpen: false,
        isLogoFieldOpen: false,
    });

    const toggling1 = () => setIsOpen({ isFrameFieldOpen: !isOpen.isFrameFieldOpen });
    const toggling2 = () => setIsOpen({ isColorFieldOpen: !isOpen.isColorFieldOpen });
    const toggling3 = () => setIsOpen({ isLogoFieldOpen: !isOpen.isLogoFieldOpen });

    const validateFields = values => {
        const errors = {};

        if (!values.firstName) {
            errors.last_name = 'Please enter your first name.';
        } else if (!values.lastName) {
            errors.last_name = 'Please enter your last name.';
        }

        return errors;
    };

    const generateQRCode = values => {
        const vcard_formatted_string = formatVCard(values, photo);
        setQRCode(vcard_formatted_string);
    };

    const onPhotoChange = e => {
        const files = e.target.files;
        const file = files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            setPhotoSrc(reader.result);
            setPhoto(reader.result.split(',')[1]);
        };
    };

    const getFullName = () => {
        const firstName = ref?.current?.values.firstName || '';
        const middleName = ref?.current?.values.middleName || '';
        const lastName = ref?.current?.values.lastName || '';

        return `${firstName.toUpperCase()} ${middleName.toUpperCase()} ${lastName.toUpperCase()}`;
    };

    return (
        <div>
            <GlobalStyle />
            <Wrapper>
                <Header />
                <FlexContainer>
                    <Formik
                        initialValues={{
                            city: '',
                            countryRegion: '',
                            firstName: '',
                            homePhone: '',
                            lastName: '',
                            middleName: '',
                            organization: '',
                            postalCode: '',
                            stateProvince: '',
                            street: '',
                            url: '',
                            workPhone: '',
                            workFax: '',
                            workEmail: '',
                        }}
                        innerRef={ref}
                        validate={validateFields}
                    >
                        {({ errors, handleChange, touched, values }) => (
                            <Form>
                                <h2 style={{ width: '100%' }}>Create your vCard</h2>
                                <Input
                                    type='text'
                                    name='firstName'
                                    error={touched.firstName && errors.firstName}
                                    value={values.firstName}
                                    placeholder='First Name'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='middleName'
                                    error={touched.middleName && errors.middleName}
                                    value={values.middleName}
                                    placeholder='Middle name'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='lastName'
                                    error={touched.lastName && errors.lastName}
                                    value={values.lastName}
                                    placeholder='Last name'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='homePhone'
                                    error={touched.homePhone && errors.homePhone}
                                    value={values.homePhone}
                                    placeholder='Mobile Phone'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='workPhone'
                                    error={touched.workPhone && errors.workPhone}
                                    value={values.workPhone}
                                    placeholder='Work Phone'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='workFax'
                                    error={touched.workFax && errors.workFax}
                                    value={values.workFax}
                                    placeholder='Work Fax'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='workEmail'
                                    error={touched.workEmail && errors.workEmail}
                                    value={values.workEmail}
                                    placeholder='Email'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='organization'
                                    error={touched.organization && errors.organization}
                                    value={values.organization}
                                    placeholder='Organization'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='street'
                                    error={touched.street && errors.street}
                                    value={values.street}
                                    placeholder='Home Adress'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='postalCode'
                                    error={touched.postalCode && errors.postalCode}
                                    value={values.postalCode}
                                    placeholder='Postal Code'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='stateProvince'
                                    error={touched.stateProvince && errors.stateProvince}
                                    value={values.stateProvince}
                                    placeholder='State Province'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='countryRegion'
                                    error={touched.countryRegion && errors.countryRegion}
                                    value={values.countryRegion}
                                    placeholder='Country Region'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='text'
                                    name='url'
                                    error={touched.url && errors.url}
                                    value={values.url}
                                    placeholder='Website'
                                    onChange={e => {
                                        handleChange(e);
                                    }}
                                />
                                <Input
                                    type='file'
                                    name='photo'
                                    error={touched.photo && errors.photo}
                                    value={values.photo}
                                    placeholder='Photo'
                                    onChange={e => {
                                        handleChange(e);
                                        onPhotoChange(e);
                                    }}
                                />
                                <StyledButton type='button' onClick={() => generateQRCode(values)}>
                                    Generate
                                </StyledButton>
                            </Form>
                        )}
                    </Formik>
                    <Card name={getFullName()} qr_code={qr_code} src={photo_src} />
                    <Buttons>
                        <ToggleButton onClick={toggling1}>Frames</ToggleButton>
                        {isOpen.isFrameFieldOpen && 'Frames'}

                        <ToggleButton onClick={toggling2}>Colors</ToggleButton>
                        {isOpen.isColorFieldOpen && <Colors vCardString={qr_code} />}

                        <ToggleButton onClick={toggling3}>Logo</ToggleButton>
                        {isOpen.isLogoFieldOpen && 'Logo'}
                    </Buttons>
                </FlexContainer>
                <Footer />
            </Wrapper>
        </div>
    );
};

export default App;
