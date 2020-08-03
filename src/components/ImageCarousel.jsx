import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";

import image1 from "assets/img/bg.jpg";
import image2 from "assets/img/bg2.jpg";
import image3 from "assets/img/bg3.jpg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

function ImageCarousel(props) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
  };

  return (
    <GridItem xs={12} sm={12} md={8} className={classes.marginAuto}>
      <Carousel {...settings}>
        <div>
          <img src={image1} alt="First slide" className="slick-image" />
        </div>
        <div>
          <img src={image2} alt="Second slide" className="slick-image" />
        </div>
        <div>
          <img src={image3} alt="Third slide" className="slick-image" />
        </div>
      </Carousel>
    </GridItem>
  );
}

export default ImageCarousel;