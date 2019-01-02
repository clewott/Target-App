import React, { Component } from "react";
import MediaQuery from "react-responsive";
import StarRatings from "react-star-ratings";
import Review from "./Review";


class Reviews extends Component {
  constructor (props) {
    super(props);
  }
  render () {
    var reviewData = this.props.reviewDetails[0];
    console.log(reviewData);
    return (
      <div className='reviewContainer container'>
        <div className="reviewSummaryContainer row">
          <div className="overallStars col-sm-6 col-6">
            <MediaQuery query="(min-device-width: 768px)">
              <StarRatings 
                rating={parseInt(reviewData.consolidatedOverallRating)}
                starRatedColor="#cc0000"
                starEmptyColor="#999999"
                numberOfStars={5}
                name="rating"
                starDimension="20px"
                starSpacing="2px" /> 
            </MediaQuery>
            <MediaQuery query="(max-device-width: 767px)">
              <StarRatings 
                rating={parseInt(reviewData.consolidatedOverallRating)}
                starRatedColor="#cc0000"
                starEmptyColor="#999999"
                numberOfStars={5}
                name="rating"
                starDimension="15px"
                starSpacing="1px" /> 
            </MediaQuery>
            <span>overall</span></div>
          <div className="totalReviews col-sm-6 col-6"><span>view all {reviewData.totalReviews} reviews</span></div>
        </div>
        <div className="row reviewDetailRow">
          <div className="col-sm-6 col-6">
            <h4>PRO</h4>
            <h5>most helpful 4-5 star review</h5>
            </div>
          <div className="col-sm-6 col-6">
            <h4>CON</h4>
            <h5>most helpful 1-2 star review</h5>
          </div>
          {reviewData.Pro.map(function (item) {
            return <Review key={item.reviewKey} reviewDetail={item} />
          })}
          {reviewData.Con.map(function (item) {
            return <Review key={item.reviewKey} reviewDetail={item} />
          })}
        </div>
      </div>
    )
  }
}

export default Reviews;