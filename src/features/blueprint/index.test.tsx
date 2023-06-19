import BluePrint from './';
import { renderWithRouter } from '../../test/utils';

test('renders BluePrint component', () => {
  const { getByText } = renderWithRouter(<BluePrint />);

  ["The UI", "The API", "Cloud"].forEach(title => {
    expect(getByText(title)).toBeInTheDocument();
  });

});