import styled from 'styled-components';
import option1 from '../Assets/qrframe1_small.svg';
import option2 from '../Assets/qrframe2_small.svg';
import option3 from '../Assets/qrframe3_small.svg';
import option4 from '../Assets/qrframe4_small.svg';
import option5 from '../Assets/qrframe5_small.svg';
import option6 from '../Assets/qrframe6_small.svg';
import option7 from '../Assets/qrframe7_small.svg';
import cancel from '../Assets/294245.svg';

const brand_color = '#ff444f';

const Frame1Button = styled.button`
    background-image: url(${option1});
    border: 2px solid ${brand_color};
    border-radius: 4px;
    height: 77px;
    margin: 5px 5px 5px 20px;
    width: 77px;
`;

const Frame2Button = styled.button`
    background-image: url(${option2});
    border: 2px solid ${brand_color};
    border-radius: 4px;
    height: 77px;
    margin: 5px;
    width: 77px;
`;

const Frame3Button = styled.button`
    background-image: url(${option3});
    border: 2px solid ${brand_color};
    border-radius: 4px;
    height: 77px;
    margin: 5px 5px 5px 20px;
    width: 77px;
`;

const Frame4Button = styled.button`
    background-image: url(${option4});
    border: 2px solid ${brand_color};
    border-radius: 4px;
    height: 77px;
    margin: 5px;
    width: 77px;
`;

const Frame5Button = styled.button`
    background-image: url(${option5});
    border: 2px solid ${brand_color};
    border-radius: 4px;
    height: 77px;
    margin: 5px 5px 5px 20px;
    width: 77px;
`;

const Frame6Button = styled.button`
    background-image: url(${option6});
    border: 2px solid ${brand_color};
    border-radius: 4px;
    height: 77px;
    margin: 5px;
    width: 77px;
`;

const Frame7Button = styled.button`
    background-image: url(${option7});
    border: 2px solid ${brand_color};
    border-radius: 4px;
    height: 77px;
    margin: 5px 5px 5px 20px;
    width: 77px;
`;

const Frame8Button = styled.button`
    background-image: url(${cancel});
    border: 2px solid ${brand_color};
    border-radius: 4px;
    height: 77px;
    margin: 5px;
    width: 77px;
`;

export {
    Frame1Button,
    Frame2Button,
    Frame3Button,
    Frame4Button,
    Frame5Button,
    Frame6Button,
    Frame7Button,
    Frame8Button,
};
