import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { FieldValues } from 'react-hook-form';

import { DatePicker } from '../../DatePicker';
import FormProvider from '../../Form/__tests__/FormProvider';
import { Modal, ModalProps } from '../Modal';

class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

interface FormValues extends FieldValues {
  singleDate: string;
}

const setup = (props: Partial<ModalProps> = {}) =>
  render(
    <Modal actionButtons={[]} onClose={() => {}} open title="Test Modal">
      {props.children}
    </Modal>,
  );

const getDialog = (): HTMLElement =>
  screen.getByRole('dialog', { hidden: true });

describe('Modal Component', () => {
  window.ResizeObserver = ResizeObserver;

  test('renders the title and children', () => {
    setup({ children: <p>Modal body</p> });
    expect(screen.getByText('Test Modal')).toBeInTheDocument();
    expect(screen.getByText('Modal body')).toBeInTheDocument();
  });

  test('renders action buttons', async () => {
    const onClick = vi.fn();
    render(
      <Modal
        actionButtons={[{ children: 'Confirm', onClick }]}
        onClose={() => {}}
        open
        title="Test Modal"
      />,
    );
    await userEvent.click(
      screen.getByRole('button', { hidden: true, name: 'Confirm' }),
    );
    expect(onClick).toHaveBeenCalledOnce();
  });

  test('calls onClose from the close button', async () => {
    const onClose = vi.fn();
    render(
      <Modal actionButtons={[]} onClose={onClose} open title="Test Modal" />,
    );
    await userEvent.click(
      screen.getByRole('button', { hidden: true, name: 'Close Modal' }),
    );
    expect(onClose).toHaveBeenCalledOnce();
  });

  /**
   * daisyUI lays `.modal` out as a grid, so an anchored popover portalled into
   * the dialog would auto-place into a second row and push `.modal-box` up. The
   * mount point has to stay out of the grid for the box to hold its position.
   */
  test('keeps portalled popover panels out of the modal grid', async () => {
    render(
      <FormProvider<FormValues> defaultValues={{ singleDate: '' }}>
        <Modal actionButtons={[]} onClose={() => {}} open title="Test Modal">
          <DatePicker<FormValues> locale="en-US" name="singleDate" />
        </Modal>
      </FormProvider>,
    );

    await userEvent.click(
      screen.getByRole('button', { expanded: false, hidden: true }),
    );
    expect(
      await screen.findByRole('grid', { hidden: true }),
    ).toBeInTheDocument();

    const dialog = getDialog();
    const portal = dialog.querySelector('[data-headlessui-portal]');
    expect(portal?.parentElement).toBe(dialog);
    expect(dialog).toHaveClass('[&>[data-headlessui-portal]]:contents');
  });
});
