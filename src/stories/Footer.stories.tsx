import * as React from 'react';
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Footer } from "./Footer";

export default {
  title: 'Example/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

const Template: ComponentStory<typeof Footer> = () => <Footer />;

export const Default = Template.bind({});
