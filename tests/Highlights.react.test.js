import React from "react";
import {mount, render} from "enzyme";
import Highlights from "../src/components/Highlights";

const testHighlights = [
  "<strong>Wattage Output:</strong> 1100 Watts",
  "<strong>Number of Speeds:</strong> 3 ",
  "<strong>Capacity (volume):</strong> 72.0 Oz."
];

describe("Highlights Component", () => {
  it("should mount in a full DOM", () => {
    const wrapper = mount(<Highlights highlights={testHighlights}></Highlights>);
    expect(wrapper.find(".highlightsContainer").length).toBe(1);
  })

  it("should render 3 li elements", () => {
    const wrapper = render(<Highlights highlights={testHighlights}></Highlights>);
    expect(wrapper.find("li").length).toBe(3);
  })

  it("should have removed <strong> from the li element", () => {
    const wrapper = render(<Highlights highlights={testHighlights}></Highlights>);
    expect(wrapper.find("li").first("li").text()).toBe("Wattage Output: 1100 Watts");
  })
});