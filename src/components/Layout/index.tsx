import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import useMediaQuery from '../Hooks/useMediaQuery';
import styles from './Layout.module.scss';
import Sidebar from './Sidebar';
import Topbar from './Topbar';

/**
 * The main layout component
 */
export default function Layout(): JSX.Element {
	const isXS = useMediaQuery('(max-width: 400px)');
	const [loading, setLoading] = useState<boolean>(true);

	useEffect(() => {
		setLoading(false);
	}, []);

	return !loading ? (
		<div className={styles.app}>
			{isXS ? <Topbar /> : <Sidebar />}

			<main className={styles.page}>
				<section className={styles.content}>
					<Outlet />
				</section>
			</main>
		</div>
	) : (
		<></>
	);
}
