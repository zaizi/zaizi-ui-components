import React from 'react';
import { storiesOf } from '@storybook/react';
import TextInput from './TextInput';

const stories = storiesOf('Text Input', module);

stories.add('Text Input', () => {
  return(<TextInput label="text" />)
})