import React from 'react';
import TextInput from './TextInput';
import { render } from '@testing-library/react';
import { test } from '@jest/globals';

describe('Text input field', () => {
    test('renders text input field', () => {
        render(<TextInput />)
    })
})