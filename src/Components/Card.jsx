import React from 'react';
import QRCode from 'qrcode.react';
import { CardName, CardPhoto, CardSection, CardTitle, StyledCard } from './Style';

const Card = ({ logo, name, photo, qr_code }) => {
    return (
        <StyledCard>
            <CardTitle>vCard</CardTitle>
            <CardSection>
                <CardPhoto src={photo} />
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
