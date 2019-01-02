import React, { Component } from "react";
import Slider from "react-slick";

class Images extends Component {
  constructor (props) {
    super(props);
    this.state = {
      activeSlide: 0,
      showPrimary: true
    }
  }
  makeImageLarger () {
    alert("I would make the image larger now");
  }
  render() {
    let images = this.props.images;
    let settings = {
      slidesToShow: 3,
      focusOnSelect: true,
      beforeChange: (current, next) => this.setState({ activeSlide: next, showPrimary: false })
    }
    let largeImage = this.state.showPrimary ? this.props.primaryImage : images[this.state.activeSlide].image;
    return (
      <div className="imageContainer">
        <div className="primaryImageContainer">
          <img src={largeImage} className="primaryImage"/>
        </div>
        <div className="viewLargerContainer" onClick={this.makeImageLarger}>
          <img src="/src/images/viewLarger.png" />
          <h5 className="viewLargerText">view larger</h5>
        </div>
        <Slider {...settings}>
            {images.map(function (image) {
              return <div key={image.image}> <img src={image.image} className="carouselImages"/> </div>
            }, this)}
        </Slider>
      </div>
    );
  }
}

export default Images;