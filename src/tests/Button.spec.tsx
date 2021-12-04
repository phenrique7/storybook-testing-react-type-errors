import * as React from 'react'
import { mount } from '@cypress/react'
import { composeStories } from '@storybook/testing-react';
import * as stories from '../stories/Button.stories';

const { Primary, Secondary } = composeStories(stories);

it('<Button/> primary', () => {
  mount(<Primary />);
  cy.get('button').contains('Button primary');
});

it('<Button/> secondary', () => {
  mount(<Secondary />);
  cy.get('button').contains('Button secondary');
});

