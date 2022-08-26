import { Outlet } from 'react-router-dom';
import styles from './Layout.module.scss';
import Sidebar from './Sidebar';

/**
 * The main layout component
 */
export default function Layout(): JSX.Element {
	return (
		<div className={styles.app}>
			<Sidebar />
			<main className={styles.page}>
				<section className={styles.content}>
					<Outlet />
				</section>
			</main>
		</div>
	);
}
