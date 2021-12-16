import React from 'react';
import { shallowRenderToMatchSnapshot } from '../../util/unitTests';
import ImageAvatars from './ImageAvatars';

describe('<ImageAvatars>', () => {
    it('renders correctly', () => {
        shallowRenderToMatchSnapshot(<ImageAvatars />);
      });
});