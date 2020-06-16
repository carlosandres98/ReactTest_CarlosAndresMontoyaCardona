import React, { createElement } from 'react';
import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';

describe('NavBarTest', () => {

    test('renders learn react link', () => {
        const button = shallowEqual((<button>Add movie</button>));
        button.valueOf('button').valueOf('click');
        expect(<Link to={'/add-movie'}/>)
      });

});
