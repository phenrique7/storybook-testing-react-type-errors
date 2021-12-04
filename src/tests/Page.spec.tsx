import * as React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../stories/Page.stories';

const { LoggedIn } = composeStories(stories);

it('<Page/> logged in', () => {
  mount(<LoggedIn />);
  cy.get('h2').contains('Pages in Storybook');
});
