import React from 'react';
import QRCode from 'qrcode.react';
import { CardName, CardPhoto, CardSection, CardTitle, StyledCard } from './Style';
import logo from '../Assets/logo.png';

const Card = ({ name, qr_code, src }) => {
    return (
        <StyledCard>
            <CardTitle>vCard</CardTitle>
            <CardSection>
                <CardPhoto src={src} />
                <CardName>{name}</CardName>
                {qr_code && (
                    <QRCode
                        bgColor='white'
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
};

export default Card;
