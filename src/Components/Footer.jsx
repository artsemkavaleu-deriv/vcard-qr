import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-color: #000;
    color: #fff;
    padding: 8px;
    text-align: center;
`;

const Footer = () => (
    <StyledDiv>
        <div>Done by Artsem Kavaleu, Farrah Ochoa, Nikita Kolesnik for Deriv Hackathon 2022.</div>
        <div>All rights reserved 2022, spirits be with ya, mon!</div>
    </StyledDiv>
);

export default Footer;
