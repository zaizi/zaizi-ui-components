import React from 'react';
import { storiesOf } from '@storybook/react';
import Radio from './Radio';

const stories = storiesOf('Radio', module);

stories.add('Radio', () => {
  return(<Radio label="radio" />)
})