# Card

The `Card` component is a reusable React component that renders a card element with customizable features. It accepts various props to modify its appearance and behavior.

## Props

The `Card` component accepts the following props:

- `bordered (boolean, optional)`: Adds a border around the card if set to true.
- `className (string, optional)`: Additional CSS class names to apply to the card element.
- `compact (boolean, optional)`: Reduces the size of the card if set to true.
- `imageFull (boolean, optional)`: Expands the image within the card to cover the entire width if set to true.
- `normal (boolean, optional)`: Renders the card in the default (normal) style if set to true.
- `side (boolean, optional)`: Positions the card to the side if set to true.

In addition to these props, the `Card` component also accepts any valid HTML attributes that can be applied to a div element.

## Usage

```tsx
import React from 'react';
import classNames from 'classnames';
import { Card, CardBody, CardTitle, CardActions } from 'stratosphere-ui';

export const ExampleCard = () => (
  <Card bordered compact imageFull>
    <figure>
      <img src="URL_TO_CARD_BACKGROUND_IMAGE" alt="Shoes" />
    </figure>
    <CardBody>
      <CardTitle>Hello, Card!</CardTitle>
      <p>This is an example of using the Card component.</p>
      <CardActions>
        <Button color="ghost">Card Action</Button>
      </CardActions>
    </CardBody>
  </Card>
);
```

In this example, the `Card` component is imported and rendered with various props (`bordered`, `compact`, `imageFull`). The `className` prop is not provided in this case, but it can be used to add custom CSS classes to the card element.

The rendered card will have a border, reduced size, and an expanded image. Inside the card, there is an `h2` element with the text "Hello, Card!" and a `p` element with a sample description.
