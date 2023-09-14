import React from 'react'
import DeletePost from './DeletePost'

describe('<DeletePost />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DeletePost />)
  })
})