import * as React from 'react'
import { mount } from '@cypress/react'
import { composeStories } from '@storybook/testing-react';
import * as stories from '../stories/Header.stories';

const { LoggedIn } = composeStories(stories);

it('<Header/> test suite', () => {
  mount(<LoggedIn />);
  cy.get('h1').contains('Acme');
  cy.get('button').contains('Log out');
})

