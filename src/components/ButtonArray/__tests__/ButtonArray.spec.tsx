import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ButtonArray } from '../ButtonArray';

describe('ButtonArray Component', () => {
  const buttonOptions = [
    {
      key: '1',
      icon: () => <svg />,
      onClick: vi.fn(),
      menuText: 'Menu 1',
      tooltipText: 'Tooltip 1',
    },
    {
      key: '2',
      icon: () => <svg />,
      onClick: vi.fn(),
      menuText: 'Menu 2',
    },
  ];

  it('renders without crashing', () => {
    const { container } = render(<ButtonArray buttonOptions={buttonOptions} />);
    expect(container).toMatchSnapshot();
  });

  it('renders buttons correctly', () => {
    const { getByRole } = render(<ButtonArray buttonOptions={buttonOptions} />);
    expect(getByRole('button', { name: 'Menu 1' })).toBeInTheDocument();
    expect(getByRole('button', { name: 'Menu 2' })).toBeInTheDocument();
  });

  it('calls onClick when a button is clicked', async () => {
    const { getAllByText } = render(
      <ButtonArray buttonOptions={buttonOptions} />,
    );
    await userEvent.click(getAllByText('Menu 1')[0]);
    expect(buttonOptions[0].onClick).toHaveBeenCalledTimes(1);
  });

  it('renders tooltips when withTooltips is true', () => {
    const { container } = render(
      <ButtonArray buttonOptions={buttonOptions} withTooltips={true} />,
    );
    expect(container).toMatchSnapshot();
  });

  it.skip('renders dropdown menu for hidden buttons', async () => {
    const { getByRole } = render(
      <ButtonArray buttonOptions={buttonOptions} collapseAt="xl" />,
    );
    await userEvent.click(getByRole('button', { name: 'Actions Menu' }));
    expect(getByRole('menuitem', { name: 'Menu 1' })).toBeInTheDocument();
    expect(getByRole('menuitem', { name: 'Menu 2' })).toBeInTheDocument();
  });

  it('calls onClick when a dropdown item is clicked', async () => {
    const { getAllByText } = render(
      <ButtonArray buttonOptions={buttonOptions} />,
    );
    await userEvent.click(getAllByText('Menu 1')[1]);
    expect(buttonOptions[0].onClick).toHaveBeenCalledTimes(1);
  });
});
