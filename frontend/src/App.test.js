// File: frontend/src/App.test.js
// --- a/file:///e%3A/Prgrams/Prodigy%20Internship/PRODIGY_FS_O2/frontend/src/App.test.js
// +++ b/file:///e%3A/Prgrams/Prodigy%20Internship/PRODIGY_FS_O2/frontend/src/App.test.js
// @@ -1,4 +1,5 @@
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});