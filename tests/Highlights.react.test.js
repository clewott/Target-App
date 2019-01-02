import React from 'react';
import {shallow} from 'enzyme';
import Highlights from '../src/components/Highlights';


test('strong is stripped from highlights', () => {
  const testHighlights = [
    "<strong>Wattage Output:</strong> 1100 Watts",
    "<strong>Number of Speeds:</strong> 3 ",
    "<strong>Capacity (volume):</strong> 72.0 Oz."
  ];
  const wrapper = shallow(<Highlights highlights={testHighlights}></Highlights>);

  console.log(wrapper);
})