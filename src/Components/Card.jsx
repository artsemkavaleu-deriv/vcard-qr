import React from 'react';
import PropTypes from 'prop-types';
import QRCode from 'qrcode.react';
import { CardName, CardPhoto, CardSection, CardTitle, StyledCard } from './Style';

const Card = ({ color, logo, name, photo, qr_code }) => (
    <StyledCard>
        <CardTitle>vCard</CardTitle>
        <CardSection>
            <CardPhoto src={photo} />
            <CardName>{name}</CardName>
            {qr_code && (
                <QRCode
                    bgColor='white'
                    fgColor={color}
                    imageSettings={{
                        src: logo,
                        excavate: true,
                        height: 40,
                        width: 40,
                    }}
                    size={200}
                    value={qr_code}
                />
            )}
        </CardSection>
    </StyledCard>
);

Card.defaultProps = {
    color: '',
    logo: '',
    name: '',
    photo: '',
    qr_code: '',
};

Card.propTypes = {
    color: PropTypes.string,
    logo: PropTypes.string,
    name: PropTypes.string,
    photo: PropTypes.string,
    qr_code: PropTypes.string,
};

export default Card;
