import React, { useState } from 'react';
import styled from 'styled-components';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';

const ChooseColorIcon = styled.div``;

const BlackButton = styled.button`
    background: #080808;
    height: 20px;
    margin: 5px;
    width: 20px;
`;
const RedButton = styled.button`
    background: #f72a31;
    height: 20px;
    margin: 5px;
    width: 20px;
`;
const GreenButton = styled.button`
    background: #1ef730;
    height: 20px;
    margin: 5px;
    width: 20px;
`;
const BlueButton = styled.button`
    background: #1e33f7;
    height: 20px;
    margin: 5px;
    width: 20px;
`;
const OrangeButton = styled.button`
    background: #fa9716;
    height: 20px;
    margin: 5px;
    width: 20px;
`;

const Colors = ({ vCardString }) => {
    const [choosenColor, setChoosenColor] = useState('#080808');

    return (
        <>
            <ChooseColorIcon>
                <BlackButton onClick={() => setChoosenColor('#080808')} />
                <BlueButton onClick={() => setChoosenColor('#1e33f7')} />
                <GreenButton onClick={() => setChoosenColor('#1ef730')} />
                <RedButton onClick={() => setChoosenColor('#f72a31')} />
                <OrangeButton onClick={() => setChoosenColor('#fa9716')} />
            </ChooseColorIcon>

            <QRCode bgColor='#FFFFFF' fgColor={choosenColor} style={{ margin: 10 }} value={vCardString} />
        </>
    );
};

Colors.propTypes = {
    vCardString: PropTypes.string,
};

export default Colors;
