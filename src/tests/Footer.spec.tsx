import * as React from 'react';
import { mount } from '@cypress/react';
import { composeStories } from '@storybook/testing-react';
import * as stories from '../stories/Footer.stories';

const { Default } = composeStories(stories);

it('<Footer/> default', () => {
  mount(<Default />);
  cy.get('footer p').contains(/Thanks for your great work!/i);
});
