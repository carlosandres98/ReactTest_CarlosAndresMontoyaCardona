import React from 'react';
import { Navbar } from './navbar.component';
import { render } from '@testing-library/react';

describe('NavBarTest', () => {

    test('renders learn react link', () => {
        render(<Navbar />);
      });

});
