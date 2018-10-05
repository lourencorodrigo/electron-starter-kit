import React from 'react';
import configureStore from 'redux-mock-store';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';

import Welcome from '../../src/components/Welcome';
import Title from '../../src/components/Title';


describe('WELCOME COMPONENT - REACT-REDUX - (Mount + wrapping in <Provider>)', () => {
  const initialState = { countryState: [{ id: 1, name: 'Brasil' }] };
  const mockStore = configureStore();
  let store, wrapper;

  beforeEach(() => {
    store = mockStore(initialState);
    wrapper = mount(<Provider store={store}><Welcome /></Provider>);
  });

  it('+++ should render the connected Title component.', () => {
    expect(wrapper.find(Title).length).toEqual(1);
  });

  it('+++ should compare the amount of rendered items.', () => {
    expect(wrapper.find('li').length).toEqual(1);
  });

  it('+++ should compare the text in li.', () => {
    expect(wrapper.find('li').render().text()).toEqual('Brasil');
  });

});
