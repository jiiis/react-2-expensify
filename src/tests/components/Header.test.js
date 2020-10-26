import React from 'react'
import { shallow } from 'enzyme'
// import toJSON from 'enzyme-to-json'
// import ReactShallowRenderer from 'react-test-renderer/shallow'

import Header from '../../components/Header'

// Using react-test-renderer.
// test('should render Header', () => {
//   const renderer = new ReactShallowRenderer()
//
//   renderer.render(<Header />)
//
//   expect(renderer.getRenderOutput()).toMatchSnapshot()
// })

test('should render Header', () => {
  const wrapper = shallow(<Header/>)

  expect(wrapper.find('h1').text()).toBe('Expensify')
  // expect(toJSON(wrapper)).toMatchSnapshot()
  expect(wrapper).toMatchSnapshot()
})
