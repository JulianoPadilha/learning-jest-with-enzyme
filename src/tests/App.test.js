import React from 'react';
import ReactDOM from 'react-dom';
import App from '../app/App';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('<App />', () => {
  it('should render App', () => {
    const wrapper = shallow(<App />, { context: {}, disableLifecycleMethods: true });
    console.log(wrapper.debug());
  });

  it('should contain elements', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('h1').length).toBe(1);
    expect(wrapper.find('.app').exists()).toBe(true);
    expect(wrapper.find('ul').children().length).toBe(3);
    expect(wrapper.find('h1').text()).toBe('React App for testing with Jest and Ezyme');
  });
});