import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Icon1 from '../../assets/images/wechat.svg';
import Icon2 from '../../assets/images/images.png';
import Icon3 from '../../assets/images/wechat.svg';
import Icon4 from '../../assets/images/douyin.png';
import Icon5 from '../../assets/images/y3.png';
import Icon6 from '../../assets/images/sina-weibo.svg';

// Slider
const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 5,
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2,
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1,
    },
};

var countSlider = props => {
    return (
        <Carousel responsive={responsive}>
            <div className="total-stats__item"><img src={Icon1} alt="Icon 1" /> 0</div>
            <div className="total-stats__item"><img src={Icon2} alt="Icon 2" /> 1</div>
            <div className="total-stats__item"><img src={Icon3} alt="Icon 3" /> 2</div>
            <div className="total-stats__item"><img src={Icon4} alt="Icon 4" /> 3</div>
            <div className="total-stats__item"><img src={Icon5} alt="Icon 5" /> 4</div>
            <div className="total-stats__item"><img src={Icon6} alt="Icon 6" /> 5</div>
        </Carousel>
    )
}

export default countSlider;
