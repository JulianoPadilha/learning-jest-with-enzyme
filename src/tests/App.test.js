import React from 'react';
import ReactDOM from 'ReactDOM';
// import App from './App';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });