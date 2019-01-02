import React, { Component } from "react";

function Promotion (props) {
  var promoDetail = props.promoDetail;
  return (
    <div className="promoContainer">
      <h4 className="promo"><img src="/src/images/priceTag.png" /> <span>{promoDetail.Description[0].shortDescription}</span></h4>
    </div>
  )
}

export default Promotion;