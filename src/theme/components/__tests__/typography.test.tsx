import { shallow } from 'enzyme'
import React from 'react'
// import '../../../../tests/setup'
import { CustomText } from '../typography'

const createWrapper = (text: string) => shallow(<CustomText>{text}</CustomText>)

describe('Typography', () => {
  test('should render text', () => {
    expect(createWrapper('text').contains('text')).toBeTruthy()
  })
})
