import React from 'react';
import Radio from './Radio';
import { render } from '@testing-library/react';
import { test } from '@jest/globals';

describe('Radio', () => {
    test('renders radio button', () => {
        render(<Radio />)
    })
})