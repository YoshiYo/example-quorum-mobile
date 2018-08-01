import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';
import App from '../../App';
import Header from '../../src/components/header/header';

Enzyme.configure({ adapter: new Adapter() });

// import {createSerializer} from 'enzyme-to-json';
// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('Homepage rendered', () => {
  it('Render the homepage and watch changes', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('Render an Header', () => {
    const wrapper = shallow(
      <App />,
    );
    expect(wrapper.find(Header));
  });
});
