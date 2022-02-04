import React, { useRef, useState } from 'react';
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';
import { Formik } from 'formik';
import formatVCard from '../Utils/helper';
import {
    ColoredButtonsWrapper,
    DownloadButtonsWrapper,
    FlexContainer,
    Form,
    FrameButtonsWrapper,
    GlobalStyle,
    H2,
    Input,
    InputLabel,
    InputWrapperDiv,
    StyledButton,
    ToggleButton,
    Wrapper,
} from './Style';
import { BlackButton, RedButton, GreenButton, OrangeButton, BlueButton } from './Colors';
import Card from './Card';
import Footer from './Footer';
import Header from './Header';
import {
    Frame1Button,
    Frame1,
    Frame2Button,
    Frame2,
    Frame3Button,
    Frame3,
    Frame4Button,
    Frame4,
    Frame5Button,
    Frame5,
    Frame6Button,
    Frame6,
    Frame7Button,
    Frame7,
    Frame8Button,
} from './Frames';
import logo from '../Assets/logo.png';
import brand from '../Assets/brand_logo.png';

const InputWrapper = ({ children, error }) => {
    return (
        <InputWrapperDiv>
            {children}
            <div>{error}</div>
        </InputWrapperDiv>
    );
};

const App = () => {
    const ref = useRef(null);
    const componentRef = React.createRef();
    const [qr_code, setQRCode] = useState('https://deriv.com');
    const [photo, setPhoto] = useState(null);
    const [photo_src, setPhotoSrc] = useState(brand);
    const [file_type, setFileType] = useState(null);
    const [logo_src, setLogoSrc] = useState(logo);
    const [isOpen, setIsOpen] = useState({
        isFrameFieldOpen: false,
        isColorFieldOpen: false,
        isLogoFieldOpen: false,
    });
    const [toggle_download_button, setToggleDownloadButton] = useState(false);

    const toggling1 = () => setIsOpen({ isFrameFieldOpen: !isOpen.isFrameFieldOpen });
    const toggling2 = () => setIsOpen({ isColorFieldOpen: !isOpen.isColorFieldOpen });
    const toggling3 = () => setIsOpen({ isLogoFieldOpen: !isOpen.isLogoFieldOpen });
    const onDownloadButtonClick = () => setToggleDownloadButton(!toggle_download_button);

    const [color, setColor] = useState('#080808');

    const [frame, setFrame] = useState();

    const validateFields = values => {
        const errors = {};

        if (!values.firstName) {
            errors.firstName = 'Please enter your first name.';
        } else if (!values.lastName) {
            errors.lastName = 'Please enter your last name.';
        } else if (values.url && !/^(https?):\/\/[^\s$.?#].[^\s]*$/.test(values.url)) {
            errors.url = 'Please enter a valid website.';
        }

        return errors;
    };

    const generateQRCode = values => {
        const vcard_formatted_string = formatVCard(file_type, photo, values);
        setQRCode(vcard_formatted_string);
    };

    const onFileSelectError = ({ error }) => {
        alert(error);
    };

    const onPhotoChange = e => {
        const { files } = e.target;
        const file = files[0];

        if (file.size > 1062) {
            onFileSelectError({ error: 'Please upload a file smaller than 1 KB' });
            return;
        }

        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setPhotoSrc(reader.result);
            setPhoto(reader.result.split(',')[1]);
            setFileType(file.type);
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
                        {({ dirty, errors, handleChange, isSubmitting, isValid, touched, values }) => (
                            <Form>
                                <H2>Create your visiting card</H2>
                                <InputWrapper error={errors.firstName}>
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
                                </InputWrapper>
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
                                <InputWrapper error={errors.lastName}>
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
                                </InputWrapper>
                                <InputWrapper error={errors.homePhone}>
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
                                </InputWrapper>
                                <InputWrapper error={errors.workPhone}>
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
                                </InputWrapper>
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
                                <InputWrapper error={errors.workEmail}>
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
                                </InputWrapper>
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
                                <InputWrapper error={errors.postalCode}>
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
                                </InputWrapper>
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
                                <InputWrapper error={errors.url}>
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
                                </InputWrapper>
                                <InputLabel>
                                    <input
                                        type='file'
                                        accept='image/jpeg, image/png'
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
                                <ToggleButton
                                    type='button'
                                    disabled={!dirty || isSubmitting || !isValid}
                                    onClick={() => generateQRCode(values)}
                                >
                                    Generate
                                </ToggleButton>
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
                    <ColoredButtonsWrapper>
                        <ToggleButton onClick={toggling1}>Frames</ToggleButton>
                        {isOpen.isFrameFieldOpen && (
                            <FrameButtonsWrapper>
                                <Frame1Button onClick={() => setFrame(Frame1)} />
                                <Frame2Button onClick={() => setFrame(Frame2)} />
                                <Frame3Button onClick={() => setFrame(Frame3)} />
                                <Frame4Button onClick={() => setFrame(Frame4)} />
                                <Frame5Button onClick={() => setFrame(Frame5)} />
                                <Frame6Button onClick={() => setFrame(Frame6)} />
                                <Frame7Button onClick={() => setFrame(Frame7)} />
                                <Frame8Button onClick={() => setFrame('')} />
                            </FrameButtonsWrapper>
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
                                    accept='image/*'
                                    name='logo'
                                    placeholder='Logo'
                                    onChange={e => {
                                        onLogoChange(e);
                                    }}
                                />
                                Upload a logo
                            </InputLabel>
                        )}
                        <ToggleButton onClick={onDownloadButtonClick}>Download</ToggleButton>
                        {toggle_download_button && (
                            <DownloadButtonsWrapper>
                                <StyledButton
                                    onClick={() =>
                                        exportComponentAsJPEG(componentRef, {
                                            fileName: 'vCard',
                                        })
                                    }
                                >
                                    As JPG
                                </StyledButton>
                                <StyledButton
                                    onClick={() =>
                                        exportComponentAsPNG(componentRef, {
                                            fileName: 'vCard',
                                        })
                                    }
                                >
                                    As PNG
                                </StyledButton>
                                <StyledButton
                                    onClick={() =>
                                        exportComponentAsPDF(componentRef, {
                                            fileName: 'vCard',
                                            pdfOptions: { w: 210, h: 300 },
                                        })
                                    }
                                >
                                    As PDF
                                </StyledButton>
                            </DownloadButtonsWrapper>
                        )}
                    </ColoredButtonsWrapper>
                </FlexContainer>
                <Footer />
            </Wrapper>
        </div>
    );
};

export default App;
