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

import image1 from "assets/img/sapa.jpeg";
import image2 from "assets/img/dalat.jpeg";
import image3 from "assets/img/hue.jpeg";
import image4 from "assets/img/danang.jpeg";
import image5 from "assets/img/phim1.jpeg";
import image6 from "assets/img/phim2.jpeg";
import image7 from "assets/img/phim3.jpeg";
import image8 from "assets/img/phim4.jpeg";

import styles from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCarousel() {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 1,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h3>CHỤP NGOẠI CẢNH && CHỤP PHIM TRƯỜNG</h3>
        </div>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image1} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Chụp ngoại cảnh trọn bộ ở SAPA
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image2}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Chụp ngoại cảnh trọn bộ ở ĐÀ LẠT
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image3} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Chụp ngoại cảnh trọn bộ ở HUẾ
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image4} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Chụp ngoại cảnh trọn bộ ở ĐÀ NẴNG
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image5} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Chụp ngoại cảnh trọn bộ ở SAPA
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image6}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Chụp ngoại cảnh trọn bộ ở ĐÀ LẠT
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Chụp ngoại cảnh trọn bộ ở HUẾ
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image8} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Chụp ngoại cảnh trọn bộ ở ĐÀ NẴNG
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
        <div className={classes.title}>
          <h3>CHỤP PHONG NỀN</h3>
        </div>
        <br />
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image8} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Phim trường
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image6}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Phim trường
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Phim trường
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image8} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Phim trường
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} className={classes.marginAuto}>
            <Card carousel>
              <Carousel {...settings}>
                <div>
                  <img src={image7} alt="First slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Phim trường
                    </h4>
                  </div>
                </div>
                <div>
                  <img
                    src={image6}
                    alt="Second slide"
                    className="slick-image"
                  />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Phim trường
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image7} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Phim trường
                    </h4>
                  </div>
                </div>
                <div>
                  <img src={image8} alt="Third slide" className="slick-image" />
                  <div className="slick-caption">
                    <h4>
                      <LocationOn className="slick-icons" />
                      Phim trường
                    </h4>
                  </div>
                </div>
              </Carousel>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
