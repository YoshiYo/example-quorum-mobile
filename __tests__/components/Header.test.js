import React from 'react';
import { View } from 'react-native';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import Header from '../../src/components/header/header';

Enzyme.configure({ adapter: new Adapter() });

// import {createSerializer} from 'enzyme-to-json';
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Hender rendered', () => {
  it('Render the header and watch changes', () => {
    const wrapper = shallow(<Header />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Render a component View', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find(View));
  });
});
