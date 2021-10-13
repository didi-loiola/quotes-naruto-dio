import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders the app with a button and a quote', () => {
    render(<App />);
    
    const buttonEL = screen.getByRole('button');
    const imageEL = screen.getByRole('img');
    const textEL = screen.getByText(/Speaker/);

    expect(buttonEL).toBeInTheDocument();
    expect(imageEL).toBeInTheDocument();
    expect(textEL).toBeInTheDocument();
})