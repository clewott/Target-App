import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Moment from "moment";
import StarRatings from "react-star-ratings";

class Review extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    console.log(this.props);
    var reviewDetail = this.props.reviewDetail;
    let date = Moment(reviewDetail.datePosted).format("MMMM d, YYYY");
    return (
      <div className="reviewDetailContainer col-sm-6 col-6">
        <MediaQuery query="(min-device-width: 768px)">
          <StarRatings 
            rating={parseInt(reviewDetail.overallRating)}
            starRatedColor="#cc0000"
            starEmptyColor="#999999"
            numberOfStars={5}
            name="rating"
            starDimension="15px"
            starSpacing="1px"
          />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 767px)">
          <StarRatings 
            rating={parseInt(reviewDetail.overallRating)}
            starRatedColor="#cc0000"
            starEmptyColor="#999999"
            numberOfStars={5}
            name="rating"
            starDimension="10px"
            starSpacing="1px"
          />
        </MediaQuery>
        <h4>{reviewDetail.title}</h4>
        <p>{reviewDetail.review}</p>
        <p><span className="screenName">{reviewDetail.screenName}</span> {date}</p>
      </div>
    )
  }
}

export default Review;