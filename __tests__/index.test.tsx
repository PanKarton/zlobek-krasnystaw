import '@testing-library/jest-dom';
import { render, screen } from 'test-utils';
import userEvent from '@testing-library/user-event';
import Home, { getStaticProps } from 'pages';

describe('Home page', () => {
  beforeEach(() => {
    jest.resetModules(); // remove cache
  });

  it('Renders home page', () => {});
});
