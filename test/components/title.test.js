import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { mount } from 'enzyme';

import Title from '../../src/components/Title';

describe('TITLE COMPONENT', () => {

  let wrapper;

  beforeEach(() => {
    wrapper = mount(<Title />);
  });

  it('+++ should compare the text in h1.', () => {
    expect(wrapper.find('h1').render().text()).toEqual('Welcome to React');
  });

  it('+++ should compare the component with a snapshot', () => {
    const component = ReactTestRenderer.create(<Title />);
    const json = component.toJSON();
    expect(json).toMatchSnapshot();
  });

});
