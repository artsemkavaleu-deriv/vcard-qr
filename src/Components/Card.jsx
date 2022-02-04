import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { CardName, CardPhoto, CardSection, CardTitle, Frame, StyledCard } from './Style';

const Card = ({ logo, frame, name, photo, qr_code, color }) => (
    <StyledCard>
        <CardTitle>Binary Cats</CardTitle>
        <CardSection>
            <CardPhoto src={photo} />
            <CardName>{name}</CardName>
            {qr_code && (
                <Frame frame={frame}>
                    <QRCode
                        bgColor='white'
                        fgColor={color}
                        imageSettings={{
                            src: logo,
                            excavate: true,
                            height: 40,
                            width: 40,
                        }}
                        size={175}
                        value={qr_code}
                    />
                </Frame>
            )}
        </CardSection>
    </StyledCard>
);

Card.defaultProps = {
    color: '',
    frame: '',
    logo: '',
    name: '',
    photo: '',
    qr_code: '',
};

Card.propTypes = {
    color: PropTypes.string,
    frame: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    qr_code: PropTypes.string,
};

export default Card;
