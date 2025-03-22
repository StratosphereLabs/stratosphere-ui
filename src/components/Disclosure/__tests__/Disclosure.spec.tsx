import { fireEvent, render, screen } from '@testing-library/react';

import { Disclosure } from '../Disclosure';

describe('Disclosure Component', () => {
  test('renders button with provided text', () => {
    render(
      <Disclosure buttonProps={{ children: 'Toggle' }}>Content</Disclosure>,
    );

    expect(screen.getByRole('button', { name: /toggle/i })).toBeInTheDocument();
  });

  test('renders content when defaultOpen is true', () => {
    render(
      <Disclosure buttonProps={{ children: 'Toggle' }} defaultOpen>
        Content
      </Disclosure>,
    );

    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  test('does not render content when defaultOpen is false', () => {
    render(
      <Disclosure buttonProps={{ children: 'Toggle' }}>Content</Disclosure>,
    );

    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  test('toggles content visibility on button click', () => {
    render(
      <Disclosure buttonProps={{ children: 'Toggle' }}>Content</Disclosure>,
    );
    const button = screen.getByRole('button', { name: /toggle/i });

    expect(screen.queryByText('Content')).not.toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.getByText('Content')).toBeInTheDocument();

    fireEvent.click(button);
    expect(screen.queryByText('Content')).not.toBeInTheDocument();
  });

  test('displays rounded-box classname', () => {
    render(
      <Disclosure buttonProps={{ children: 'Toggle' }} rounded>
        Content
      </Disclosure>,
    );
    const button = screen.getByRole('button');

    expect(button).toHaveClass('rounded-box');
  });
});
