import React, { useRef, useState } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { Formik } from 'formik';
import logo from '../Assets/logo.png';
import { formatVCard } from '../Utils/helper';
import {
    ColoredButtonsWrapper,
    DownloadButtonsWrapper,
    FlexContainer,
    Form,
    GlobalStyle,
    H2,
    Input,
    InputLabel,
    StyledButton,
    DownloadButton,
    ToggleButton,
    Wrapper,
} from './Style';
import { BlackButton, RedButton, GreenButton, OrangeButton, BlueButton } from './Colors';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import {
    Img1Button,
    Img1,
    Img2Button,
    Img2,
    Img3Button,
    Img3,
    Img4Button,
    Img4,
    Img5Button,
    Img5,
    Img6Button,
    Img6,
} from './Frames';

const App = () => {
    const ref = useRef(null);
    const componentRef = React.createRef();
    const [qr_code, setQRCode] = useState('https://deriv.com');
    const [photo, setPhoto] = useState(null);
    const [photo_src, setPhotoSrc] = useState(null);
    const [logo_src, setLogoSrc] = useState(logo);
    const [isOpen, setIsOpen] = useState({
        isFrameFieldOpen: false,
        isColorFieldOpen: false,
        isLogoFieldOpen: false,
    });

    const toggling1 = () => setIsOpen({ isFrameFieldOpen: !isOpen.isFrameFieldOpen });
    const toggling2 = () => setIsOpen({ isColorFieldOpen: !isOpen.isColorFieldOpen });
    const toggling3 = () => setIsOpen({ isLogoFieldOpen: !isOpen.isLogoFieldOpen });

    const [color, setColor] = useState('#080808');
    const [frame, setFrame] = useState();

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
        const { files } = e.target;
        const file = files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            setPhotoSrc(reader.result);
            setPhoto(reader.result.split(',')[1]);
        };
    };

    const onLogoChange = e => {
        const { files } = e.target;
        const file = files[0];

        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            setLogoSrc(reader.result);
        };
    };

    const getFullName = () => {
        const firstName = ref?.current?.values.firstName || '';
        const middleName = ref?.current?.values.middleName || '';
        const lastName = ref?.current?.values.lastName || '';

        return `${firstName.toUpperCase()} ${middleName.toUpperCase()} ${lastName.toUpperCase()}`;
    };
    console.log(frame);
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
                                <H2>Create your vCard</H2>
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
                                <InputLabel>
                                    <input
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
                                    Upload your photo
                                </InputLabel>
                                <StyledButton type='button' onClick={() => generateQRCode(values)}>
                                    Generate
                                </StyledButton>
                            </Form>
                        )}
                    </Formik>
                    <div ref={componentRef}>
                        <Card
                            logo={logo_src}
                            frame={frame}
                            name={getFullName()}
                            photo={photo_src}
                            qr_code={qr_code}
                            color={color}
                        />
                    </div>
                    <DownloadButtonsWrapper>
                        <DownloadButton onClick={() => exportComponentAsJPEG(componentRef)}>JPEG</DownloadButton>
                        <DownloadButton onClick={() => exportComponentAsPDF(componentRef)}>PDF</DownloadButton>
                        <DownloadButton onClick={() => exportComponentAsPNG(componentRef)}>PNG</DownloadButton>
                    </DownloadButtonsWrapper>
                    <ColoredButtonsWrapper>
                        <ToggleButton onClick={toggling1}>Frames</ToggleButton>
                        {isOpen.isFrameFieldOpen && (
                            <div>
                                <Img1Button onClick={() => setFrame(Img1)} />
                                <Img2Button onClick={() => setFrame(Img2)} />
                                <Img3Button onClick={() => setFrame(Img3)} />
                                <Img4Button onClick={() => setFrame(Img4)} />
                                <Img5Button onClick={() => setFrame(Img5)} />
                                <Img6Button onClick={() => setFrame(Img6)} />
                            </div>
                        )}

                        <ToggleButton onClick={toggling2}>Colors</ToggleButton>
                        {isOpen.isColorFieldOpen && (
                            <div>
                                <BlackButton onClick={() => setColor('#080808')} />
                                <RedButton onClick={() => setColor('#f72a31')} />
                                <GreenButton onClick={() => setColor('#1ef730')} />
                                <BlueButton onClick={() => setColor('#1e33f7')} />
                                <OrangeButton onClick={() => setColor('#fa9716')} />
                            </div>
                        )}
                        <ToggleButton onClick={toggling3}>Logo</ToggleButton>
                        {isOpen.isLogoFieldOpen && (
                            <InputLabel>
                                <input
                                    type='file'
                                    name='logo'
                                    placeholder='Logo'
                                    onChange={e => {
                                        onLogoChange(e);
                                    }}
                                />
                                Upload a logo
                            </InputLabel>
                        )}
                    </ColoredButtonsWrapper>
                </FlexContainer>
                <Footer />
            </Wrapper>
        </div>
    );
};

export default App;
