import React from 'react'
import NewPost from './NewPost'

describe('<NewPost />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<NewPost />)
  })
})