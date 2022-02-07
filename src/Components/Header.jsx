import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import catHymn from '../Assets/cat-hymn.mp3';
import brandLogo from '../Assets/brand_logo.png';

const PlayAudioButton = styled.button`
    align-items: center;
    background-color: #ff444f;
    border-radius: 5px;
    height: 30px;
    margin-left: 100px;
    width: 100px;
`;

const StyledDiv = styled.div`
    align-items: center;
    background-color: black;
    border-radius: 5px;
    margin-bottom: 15px;
`;

const StyledHeaderTitle = styled.p`
    color: #ff444f;
    font-size: 24px;
    font-weight: bold;
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



const Header = () => {
    const [audio] = useState(new Audio(catHymn));
    const [is_playing, setPlaying] = useState(false);

    const toggle = () => setPlaying(!is_playing);

    useEffect(() => (is_playing ? audio.play() : audio.pause()), [is_playing]);

    useEffect(() => {
        audio.addEventListener('ended', () => setPlaying(false));
        return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
        };
    }, []);

    return (
        <StyledDiv>
            <StyledHeaderWrapper>
                <StyledImg
                    src={brandLogo}
                    alt='binary_cats_logo'
                />
                <StyledHeaderTitle>
                    BINARY CATS <PlayAudioButton onClick={toggle}>{is_playing ? 'Enjoy!' : 'Meow me!'}</PlayAudioButton>
                </StyledHeaderTitle>
            </StyledHeaderWrapper>
        </StyledDiv>
    );
};

export default Header;
