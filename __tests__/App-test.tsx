import 'react-native';
import React from 'react';
import App from '../src/App';
// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
it('renders correctly', () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const tree = renderer.create(<App />);
});
