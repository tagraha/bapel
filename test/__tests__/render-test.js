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
import ViewStory from '../../stories/ViewStory';
import AvatarStory from '../../stories/AvatarStory';
import TextStory from '../../stories/TextStory';
import TextBoxStory from '../../stories/TextBoxStory';
import IconStory from '../../stories/IconStory';
import FormStory from '../../stories/FormStory';
import ImageStory from '../../stories/ImageStory';
import HeaderStory from '../../stories/HeaderStory';

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

test('Render View story correctly', () => {
  const tree = renderer.create(<ViewStory />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Render Avatar story correctly', () => {
  const tree = renderer.create(<AvatarStory />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Render Text story correctly', () => {
  const tree = renderer.create(<TextStory />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Render TextBox story correctly', () => {
  const tree = renderer.create(<TextBoxStory />).toJSON();

  expect(tree).toMatchSnapshot();
});

test('Render Icon story correctly', () => {
  const mockUikitManifest = UikitManifest.getManifest();
  const tree = renderer
    .create(
      <UikitProvider uikitManifest={mockUikitManifest}>
        <IconStory />
      </UikitProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Render Forms story correctly', () => {
  const mockUikitManifest = UikitManifest.getManifest();
  const tree = renderer
    .create(
      <UikitProvider uikitManifest={mockUikitManifest}>
        <FormStory />
      </UikitProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Render Image story correctly', () => {
  const mockUikitManifest = UikitManifest.getManifest();
  const tree = renderer
    .create(
      <UikitProvider uikitManifest={mockUikitManifest}>
        <ImageStory />
      </UikitProvider>
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});

test('Render Header story correctly', () => {
  const tree = renderer.create(<HeaderStory />).toJSON();

  expect(tree).toMatchSnapshot();
});
