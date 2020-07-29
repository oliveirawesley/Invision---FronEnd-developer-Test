import React from 'react';

import { Carousel } from "react-responsive-carousel";
import slider01  from '../../assets/images/Slider01.png'

function Slider() {
    return (
        <Carousel autoPlay showThumbs={false} showArrows={false} showStatus={false} swipeable={true} infiniteLoop={true}>
            <div>
                <img alt="" src={slider01} />
            </div>
            <div>
                <img alt="" src={slider01} />
            </div>
        </Carousel>
    )
}

export default Slider;