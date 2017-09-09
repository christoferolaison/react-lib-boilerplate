// @flow

import React from 'react'
import renderer from 'react-test-renderer'
import Info from '../src/Info'

describe('Component: Info', () => {
  it('should render as expected', () => {
    const tree = renderer.create(
      <Info heading='react-lib-boilerplate' body='react-lib-boilerplate' />,
    ).toJSON()
    expect(tree).toMatchSnapshot()
  })
})
