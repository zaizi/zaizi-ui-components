import React from 'react';
import { DefaultButton } from './DefaultButton';
import { render } from '@testing-library/react';
import { test } from '@jest/globals';

describe('Default Button', () => {
    test('renders default button', () => {
        render(<DefaultButton />)
    })
})