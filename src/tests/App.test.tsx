import { render, screen } from '@testing-library/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../components/App';
import Home from '../components/Home';

beforeEach(() => {
	render(
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
});

test('Renders the home component', () => {
	const animatedLetters = screen.queryByTestId('animated-letters') as HTMLDivElement;
	expect(animatedLetters).toBeInTheDocument();

	expect(screen.getByRole('heading', { name: 'Javascript / React' })).toBeInTheDocument();
	expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
	expect(screen.getByRole('button', { name: 'Contact' })).toBeInTheDocument();
});
