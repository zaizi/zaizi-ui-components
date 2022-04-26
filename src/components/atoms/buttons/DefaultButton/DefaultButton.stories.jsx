import React from 'react';
import { storiesOf } from '@storybook/react';
import { DefaultButton } from './DefaultButton';
import { test } from 'picomatch';

const stories = storiesOf('App test', module);

stories.add('App Test', () => {
  return(<DefaultButton label="button" />)
})