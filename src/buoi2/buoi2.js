import React, { Component } from 'react'
import "./buoi2.css"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../asset/1.webp"
import img2 from "../asset/2.jpeg"
import img3 from "../asset/3.jpeg"
import img4 from "../asset/4.png"
export default class Buoi2 extends Component {

  render() {
    let settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Slider {...settings}>
        <div>
          <img src={img1} width={1000} />
        </div>
        <div>
          <img src={img3} width={1000} />
        </div>
        <div>
          <img src={img3} width={1000} />
        </div>

      </Slider>
    )
  }
}
