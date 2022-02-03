import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    align-items: center;
    background-color: black;
    border-radius: 5px;
    margin-bottom: 15px;
`;

const StyledHeaderWrapper = styled.div`
    align-items: center;
    display: flex;
    padding: 15px;
`;

const StyledImg = styled.img`
    border-radius: 50%;
    height: 70px;
    margin-right: 15px;
`;

const StyledHeaderTitle = styled.p`
    color: #ff444f;
    font-size: 24px;
    font-weight: bold;
`;

const Header = () => (
    <StyledDiv>
        <StyledHeaderWrapper>
            <StyledImg
                src='data:image/png;base64,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'
                alt='binary_cats_logo'
            />
            <StyledHeaderTitle>BINARY CATS</StyledHeaderTitle>
        </StyledHeaderWrapper>
    </StyledDiv>
);

export default Header;
