import { screen } from '@testing-library/react';
import { render } from '../../test-utils/testing-library-utils';
import { wrapper } from '../../test-utils/testing-library-utils';
import { Provider } from 'react-redux';
import { RacingTable } from '../RacingTable';

describe('The RacingTable Component', () => {
  test('display horses names for each table row from server', async () => {
    render(<RacingTable />, { wrapper });

    const horsesNames = await screen.findAllByRole('row', { name: /racing_row/i });
    expect(horsesNames).toHaveLength(6);
  });

  test('display horses distance for each table row from server', async () => {
    render(<RacingTable />, { wrapper });

    const initialDistance = await screen.findAllByTestId('distance');
    expect(initialDistance).toHaveLength(6);
  });
});
