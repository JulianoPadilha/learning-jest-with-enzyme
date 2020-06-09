import React from 'react';
import ReactDOM from 'react-dom';
import App, { Link } from '../app/App';
import { configure, shallow, render, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

describe('<App /> shallow rendering', () => {
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

  it('matches the snapshot', () => {
    const wrapper = render(<App />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});

describe('<Link />', () => {
  it('link component accepts address prop', () => {
    const wrapper = shallow(<Link address='www.google.com' />);
    // console.log(wrapper.instance());
    expect(wrapper.instance().props.address).toBe('www.google.com');
  });

  it('a tag node renders href correctly', () => {
    const wrapper = shallow(<Link address='www.google.com' />);
    expect(wrapper.props().href).toBe('www.google.com');
  });

  it('returns null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />);
    expect(wrapper.find('a').length).toBe(1);
  });

  it('returns null with true hide prop', () => {
    const wrapper = shallow(<Link hide={false} />)
    expect(wrapper.find('a').length).toBe(1);
    wrapper.setProps({ hide: true });
    expect(wrapper.get(0)).toBeNull();
  });
})