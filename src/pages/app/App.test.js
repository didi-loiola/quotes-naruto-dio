import { render, screen, fireEvent } from '@testing-library/react';
import { App } from './App';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const response = { speaker: "Speaker", quote: 'test quote'};

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req,res,ctx) => {
        return res(ctx.json(response));
    })
)
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app with a button and a quote', () => {
    render(<App />);
    
    const buttonEL = screen.getByRole('button');
    const imageEL = screen.getByRole('img');
    const textEL = screen.getByText(/Speaker/);

    expect(buttonEL).toBeInTheDocument();
    expect(imageEL).toBeInTheDocument();
    expect(textEL).toBeInTheDocument();
});

test('calls api on button click and update its text', async () => {
    render(<App />);

    const buttonEL = screen.getByRole('button');
    fireEvent.click(buttonEL);

    const quoteEL = await screen.findByText(response.quote);

    expect(quoteEL).toBeInTheDocument();
})