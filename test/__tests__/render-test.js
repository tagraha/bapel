/* eslint-env jest */
import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

jest.mock('uikit-manifest');
jest.mock('react-dom', () => ({
  findDOMNode: () => {},
}));
import UikitManifest from 'uikit-manifest';

import ButtonStory from '../../stories/ButtonStory';

import UikitProvider from '../../src/Provider/UikitProvider';

test('Render Button story correctly', () => {
  const mockUikitManifest = UikitManifest.getManifest();
  const tree = renderer
    .create(
      <UikitProvider uikitManifest={mockUikitManifest}>
        <ButtonStory />
      </UikitProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
