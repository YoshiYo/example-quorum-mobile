import React from 'react';
import App from '../App';
import { Text } from 'react-native'
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import toJson from 'enzyme-to-json';
//import {createSerializer} from 'enzyme-to-json';
 
//expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


describe('Homepage rendered', () => {
  it('Render the homepage and watch changes', () => {
    const wrapper = shallow(
      <App />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});







