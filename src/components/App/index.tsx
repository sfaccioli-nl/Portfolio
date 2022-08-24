import { Route, Routes } from 'react-router-dom';
import Contact from '../Contact';
import Home from '../Home';
import Layout from '../Layout';

/**
 * The app entry point component
 */
export default function App(): JSX.Element {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route index element={<Home />} />
				<Route path="/contact" element={<Contact />} />
			</Route>
		</Routes>
	);
}
