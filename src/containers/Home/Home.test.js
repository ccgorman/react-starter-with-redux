import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Home } from './Home';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

configure({adapter: new Adapter()});

describe('<Home />', () => {
	let wrapper;
	
	beforeEach(() => {
		wrapper = shallow(<Home onInitProps={() => {}} />);
	});
	
	it('should render <BuildControls /> when receiving ingredients', () => {
		wrapper.setProps({ings: {salad:0}});
		expect(wrapper.find(BuildControls)).toHaveLength(1);
	})
});
