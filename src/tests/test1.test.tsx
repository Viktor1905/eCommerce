import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Hello from '../hello';

describe('Hello component', () => {
  it('renders greeting', () => {
    render(<Hello />);
    expect(screen.getByText('Hello Vitest!')).toBeInTheDocument();
  });
});
