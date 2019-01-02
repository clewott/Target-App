import React, { Component } from "react";
import MediaQuery from "react-responsive";
import Reviews from "./Reviews";
import Promotion from "./Promotion";
import QuantityContainer from "../containers/QuantityContainer";
import Highlights from "./Highlights";
import Images from "./Images";

class Product extends Component {
  constructor (props) {
    super(props);
  }
  render() {
    var itemDetail = this.props.itemDetail;
    return (
      <div className="productDetailContainer container">
        <div className="row">
          <div className="productLeftColumn col-md-5">
            <h2 className="productTitle">{itemDetail.title}</h2>
            <Images 
              key={itemDetail.Images[0].imageCount}
              images={itemDetail.Images[0].AlternateImages}
              primaryImage={itemDetail.Images[0].PrimaryImage[0].image}
            />
            <MediaQuery query="(min-device-width: 768px)">
              <Reviews 
                key={itemDetail.itemId} 
                reviewDetails={itemDetail.CustomerReview}/>
            </MediaQuery>
          </div>
          <div className="productRightColumn col-md-7 col-lg-5">
            <div className="productPriceContainer">
              <h2 className="productPrice">{itemDetail.Offers[0].OfferPrice[0].formattedPriceValue} <span>{itemDetail.Offers[0].OfferPrice[0].priceQualifier}</span></h2>
            </div>
            <hr></hr>
            <div className="productPromotionContaine">
              {itemDetail.Promotions.map(function (promo) {
                return <Promotion key={promo.promotionIdentifier} promoDetail={promo} />
              }, this)}
            </div>
            <hr></hr>
            <div className="productQuantityContainer">
              <QuantityContainer 
                key={itemDetail.itemId} 
                availability={itemDetail.purchasingChannelCode} 
                quantity={1}/>
            </div>
            <div className="productHighlightsContainer">
              <Highlights 
                key={itemDetail.itemId}
                highlights={itemDetail.ItemDescription[0].features}
              />
            </div>
            <MediaQuery query="(max-device-width: 767px)">
              <Reviews 
                key={itemDetail.itemId} 
                reviewDetails={itemDetail.CustomerReview}/>
            </MediaQuery>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;