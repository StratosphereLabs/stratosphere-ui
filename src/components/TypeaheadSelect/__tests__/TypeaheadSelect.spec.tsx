import { fireEvent, render, screen } from '@testing-library/react';

import { TypeaheadSelect } from '..';
import FormProvider from '../../Form/__tests__/FormProvider';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

interface DataItem {
  [key: string]: unknown;
  id: string;
  label: string;
}

interface FormValues {
  field1: string;
}

const options: DataItem[] = [
  { id: '1', label: 'Item 1' },
  { id: '2', label: 'Item 2' },
  { id: '3', label: 'Item 3' },
];

const renderComponent = (props = {}) =>
  render(
    <FormProvider<FormValues> defaultValues={{ field1: '' }}>
      <TypeaheadSelect<DataItem, FormValues>
        getItemText={({ label }) => label}
        name="field1"
        options={options}
        placeholder="Select..."
        {...props}
      />
    </FormProvider>,
  );

describe('TypeaheadSelect', () => {
  window.ResizeObserver = ResizeObserver;

  it('renders without crashing', () => {
    renderComponent();
    expect(screen.getByText('Select...')).toBeInTheDocument();
  });

  it('shows the dropdown when the badge container is clicked', () => {
    renderComponent();
    fireEvent.click(screen.getByText('Select...'));
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(document.activeElement?.tagName).toBe('INPUT');
  });

  it('shows the dropdown on touchEnd on the badge container', () => {
    renderComponent();
    fireEvent.touchEnd(screen.getByText('Select...'));
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(document.activeElement?.tagName).toBe('INPUT');
  });

  it('does not open the dropdown when disabled', () => {
    renderComponent({ disabled: true });
    fireEvent.click(screen.getByText('Select...'));
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('does not open the dropdown on touchEnd when disabled', () => {
    renderComponent({ disabled: true });
    fireEvent.touchEnd(screen.getByText('Select...'));
    expect(screen.queryByText('Item 1')).not.toBeInTheDocument();
  });

  it('renders label text when provided', () => {
    renderComponent({ labelText: 'My Field' });
    expect(screen.getByText('My Field')).toBeInTheDocument();
  });

  it('shows options when dropdown is open by default', () => {
    renderComponent({ defaultShowDropdown: true });
    expect(screen.getByText('Item 1')).toBeInTheDocument();
  });
});
