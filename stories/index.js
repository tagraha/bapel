// @flow

import React from 'react';
import Provider from './Provider';
import {storiesOf} from '@storybook/react';
import IntroStory from './IntroStory';
import ButtonStory from './ButtonStory';
import CardStory from './CardStory';
// import ViewStory from './ViewStory';
// import AvatarStory from './AvatarStory';
// import TextStory from './TextStory';
// import TextBoxStory from './TextBoxStory';
// import ListStory from './ListStory';
// import IconStory from './IconStory';
// import FormStory from './FormStory';
// import ImageStory from './ImageStory';
// import FollowStory from './FollowStory';
// import TopicStory from './TopicStory';
// import ProfileStory from './ProfileStory';
// import NavSlideStory from './NavSlideStory';
// import TabStory from './TabStory';

storiesOf('Bapel Components', module)
  .addDecorator(story => <Provider>{React.createElement(story)}</Provider>)
  .add('Introduction', () => <IntroStory />)
  .add('Card', () => <CardStory />)
  .add('Button', () => <ButtonStory />);
