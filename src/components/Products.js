import React, { Component } from "react";
import api from "../utils/api";
import Product from "./Product";

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsData: [],
      loading: true
    }

    this.makeRequest = this.makeRequest.bind(this);
  }
  componentDidMount() {
    this.makeRequest();
  }
  makeRequest() {
    this.setState(function () {
      return {
        loading: true
      }
    })

    api.getData()
      .then(function (res) {
        this.setState(function () {
          return {
            loading: false,
            productsData: res,
          }
        })
      }.bind(this))
  }

  render() {
    return this.state.loading === true
      ? <div className="loadingContainer"><div className="spinner-grow text-danger targetLoading" role="status">
          <img src="/src/images/targetLogo.jpg"/>
        </div></div>
      : <div>
          <div className="appContainer">
            {this.state.productsData.map(function (item) {
              return <Product key={item.itemId} itemDetail={item} />
            }, this)}
          </div>
        </div>
  }
}

export default Products;