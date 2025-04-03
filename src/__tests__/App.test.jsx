import { render, screen } from '@testing-library/react';
import App from '../App';

test('render a component', ()=> {
    render(<App />);
    const linkElement = screen.getByText(/vite/i);
    expect(linkElement).toBeInTheDocument();
});