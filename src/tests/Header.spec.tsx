import * as React from 'react'
import { mount } from '@cypress/react'
import { composeStories } from '@storybook/testing-react';
import * as stories from '../stories/Header.stories';

const { LoggedIn, LoggedOut } = composeStories(stories);

it('<Header/> logged in', () => {
  mount(<LoggedIn />);
  cy.get('h1').contains('Acme');
  cy.get('button').contains('Log out');
});

it('<Header/> logged out', () => {
  mount(<LoggedOut />);
  cy.get('h1').contains('Acme');
  cy.get('button').first().contains('Log in');
  cy.get('button').last().contains('Sign up');
});
