import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';

const ChooseColorIcon = styled.div``;

const BlackButton = styled.button`
    margin: 5px;
    width: 20px;
    height: 20px;
    background: #080808;
`;
const RedButton = styled.button`
    margin: 5px;
    width: 20px;
    height: 20px;
    background: #f72a31;
`;
const GreenButton = styled.button`
    margin: 5px;
    width: 20px;
    height: 20px;
    background: #1ef730;
`;
const BlueButton = styled.button`
    margin: 5px;
    width: 20px;
    height: 20px;
    background: #1e33f7;
`;
const OrangeButton = styled.button`
    margin: 5px;
    width: 20px;
    height: 20px;
    background: #fa9716;
`;

const Colors = ({ vCardString }) => {
    const [choosenColor, setChoosenColor] = useState('#080808');

    return (
        <>
            <ChooseColorIcon>
                <BlackButton onClick={() => setChoosenColor('#080808')} />
                <RedButton onClick={() => setChoosenColor('#f72a31')} />
                <GreenButton onClick={() => setChoosenColor('#1ef730')} />
                <BlueButton onClick={() => setChoosenColor('#1e33f7')} />
                <OrangeButton onClick={() => setChoosenColor('#fa9716')} />
            </ChooseColorIcon>

            <QRCode bgColor='#FFFFFF' fgColor={choosenColor} style={{ width: 50, margin: 50 }} value={vCardString} />
        </>
    );
};

Colors.propTypes = {
    vCardString: PropTypes.string,
};

export default Colors;
