import { Meta, StoryObj } from '@storybook/react';

import { Card } from './Card';
import { CardActions } from './CardActions';
import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';

const meta: Meta<typeof Card> = {
  title: 'Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

const CardTemplate: Story = {
  render: args => (
    <Card className="w-64 bg-base-100" {...args}>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <p>Card Body</p>
        <CardActions></CardActions>
      </CardBody>
    </Card>
  ),
};

export const Default: Story = {
  ...CardTemplate,
  args: {},
};

export const WithBorder: Story = {
  ...CardTemplate,
  args: {
    border: true,
  },
};

const WithImageTemplate: Story = {
  render: args => (
    <Card className="w-64 bg-base-100" {...args}>
      <figure>
        <img
          src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <CardBody>
        <CardTitle>Card Title</CardTitle>
        <p>Card Body</p>
        <CardActions></CardActions>
      </CardBody>
    </Card>
  ),
};

export const WithImage = {
  ...WithImageTemplate,
  args: {},
};

export const WithBackgroundImage = {
  ...WithImageTemplate,
  args: {
    imageFull: true,
  },
};

export const WithSideImage: Story = {
  ...WithImageTemplate,
  args: {
    side: true,
  },
};
