import { Story, Meta } from '@storybook/react';
import { Card, CardProps } from './Card';
import { CardActions } from './CardActions';
import { CardBody } from './CardBody';
import { CardTitle } from './CardTitle';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    icon: {
      control: false,
    },
  },
} as Meta;

export const Default: Story<CardProps> = args => (
  <Card className="w-64 bg-base-100" {...args}>
    <CardBody>
      <CardTitle>Card Title</CardTitle>
      <p>Card Body</p>
      <CardActions></CardActions>
    </CardBody>
  </Card>
);

Default.args = {};

export const Bordered: Story<CardProps> = args => (
  <Card className="w-64 bg-base-100" {...args}>
    <CardBody>
      <CardTitle>Card Title</CardTitle>
      <p>Card Body</p>
      <CardActions></CardActions>
    </CardBody>
  </Card>
);

Bordered.args = {
  bordered: true,
};

export const Compact: Story<CardProps> = args => (
  <Card className="w-64 bg-base-100" {...args}>
    <CardBody>
      <CardTitle>Card Title</CardTitle>
      <p>Card Body</p>
      <CardActions></CardActions>
    </CardBody>
  </Card>
);

Compact.args = {
  compact: true,
};

export const WithImage: Story<CardProps> = args => (
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
);

WithImage.args = {};

export const WithBackgroundImage: Story<CardProps> = args => (
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
);

WithBackgroundImage.args = {
  imageFull: true,
};

export const WithSideImage: Story<CardProps> = args => (
  <Card className="w-96 bg-base-100" {...args}>
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
);

WithSideImage.args = {
  side: true,
};
