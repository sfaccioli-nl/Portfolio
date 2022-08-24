import { Route, Routes } from 'react-router-dom';
import Layout from '../Layout';

/**
 * The app entry point component
 */
export default function App(): JSX.Element {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
			</Route>
		</Routes>
	);
}
