import React from "react";
import {shallow} from "enzyme";
import Product from "../src/components/Product";
import Images from "../src/components/Images";
import Reviews from "../src/components/Reviews";
import Promotion from "../src/components/Promotion";
import QuantityContainer from "../src/containers/QuantityContainer";
import Highlights from "../src/components/Highlights";
import productData from "../src/data/item-data.json";

describe("Product Component", () => {
  let wrapper;
  beforeEach (() => {
    wrapper = shallow(<Product itemDetail={productData.CatalogEntryView[0]}></Product>);
  })

  it("renders 1 Image component", () => {
    expect(wrapper.find(Images).length).toBe(1);
  })

  it("renders 2 Reviews components", () => {
    expect(wrapper.find(Reviews).length).toBe(2);
  })

  it("renders 2 Promotion components", () => {
    expect(wrapper.find(Promotion).length).toBe(2);
  })

  it("renders 1 Quantity component", () => {
    expect(wrapper.find(QuantityContainer).length).toBe(1);
  })

  it("renders 1 Highlights component", () => {
    expect(wrapper.find(Highlights).length).toBe(1);
  })

  it("should have title of Ninja Professional Blender with Single Serve Blending Cups", () => {
    expect(wrapper.find(".productTitle").text()).toBe("Ninja\u2122 Professional Blender with Single Serve Blending Cups");
  })

  it("should have price of $139.99 Online Price", () => {
    expect(wrapper.find(".productPrice").text()).toBe("$139.99 Online Price");
  })
});