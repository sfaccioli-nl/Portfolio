import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../components/App';
import Contact from '../components/Contact';

beforeEach(() => {
	render(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route index element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
});

test('Renders the contact component', () => {
	expect(screen.queryByTestId('animated-letters') as HTMLDivElement).toBeInTheDocument();
	expect(screen.getByTestId('info') as HTMLParagraphElement).toBeInTheDocument();
	expect(screen.getByTestId('map') as HTMLParagraphElement).toBeInTheDocument();
	expect(screen.getByTestId('form') as HTMLFormElement).toBeInTheDocument();
	expect(screen.getByPlaceholderText('Name')).toBeInTheDocument();
	expect(screen.getByPlaceholderText('Your email')).toBeInTheDocument();
	expect(screen.getByPlaceholderText('Subject')).toBeInTheDocument();
	expect(screen.getByPlaceholderText('Message')).toBeInTheDocument();
	expect(screen.getByText('Submit')).toBeInTheDocument();
});
