import React from 'react';
import Header from '../src/components/header/header';
import { Text, View } from 'react-native'
import renderer from 'react-test-renderer';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

import toJson from 'enzyme-to-json';
//import {createSerializer} from 'enzyme-to-json';
 
//expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));


describe('Hender rendered', () => {
  it('Render the header and watch changes', () => {
    const wrapper = shallow(
      <Header />
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Render a component View', ()=> {
    const wrapper = shallow(
        <Header />
    );
    expect(wrapper.find(View));
  });
});







