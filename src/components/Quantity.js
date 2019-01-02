import React, { Component } from "react";
import MediaQuery from "react-responsive";

class Quantity extends Component {
  constructor (props) {
    super(props);

    this.updateQuantity = this.updateQuantity.bind(this);
  }
  updateQuantity(e) {
    let action = e.target.value;
    let currentQuantity = this.props.quantity;
    if (action === "add") {
      this.props.dispatch({type: "INCREMENT"});
    } else if (action === "subtract" && currentQuantity > 0) {
      this.props.dispatch({type: "DECREMENT"});
    }
  }
  render () {
    const availability = this.props.availability;
    let showInStore = availability === "0" || availability === "2";
    let showOnline = availability === "0" || availability === "1";
    return (
      <div className="purchaseContainer">
        <div className="quantityContainer">
          <h4 className="quantityTitle">quantity:</h4>
          <div className="quantityActions">
            <button className="subtract" onClick={this.updateQuantity} value="subtract">-</button>
            <h3 className="quantity">{this.props.quantity}</h3>
            <button className="add" onClick={this.updateQuantity} value="add">+</button>
          </div>
        </div>
        <div className="whereAvailableContainer">
          {showInStore &&
            <div className="inStore col-6">
              <button className="inStoreBtn">PICK UP IN STORE</button>
              <MediaQuery query="(min-device-width: 768px)">
                <a href="" className="findStoreLink">find in a store</a>
              </MediaQuery>
            </div>
          }
          {showOnline &&
            <div className="online col-6">
              <button className="onlineBtn">ADD TO CART</button>
            </div>
          }
        </div>
        <div className="returnContainer">
          <div className="returnTitleWrapper">
            <h3 className="returnTitle">returns</h3>
          </div>
          <div className="returnInfo">
            <p>This item must be returned within 30 days of the ship date.  See <a href="" className="returnLink">return policy</a> for details.</p>
            <p>Price, promotions, styles and availability may vary by store and online.</p>
          </div>
        </div>
        <div className="socialBtnsContainer container">
          <div className="row">
            <div className="col-4">
              <button className="registryBtn">ADD TO REGISTRY</button>
            </div>
            <div className="col-5">
              <button className="listBtn">ADD TO LIST</button>
            </div>
            <div className="col-3">
              <button className="shareBtn">SHARE</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Quantity;