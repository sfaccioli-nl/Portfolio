import styles from './Sidebar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

/**
 * Sidebar layout component
 */
export default function Sidebar(): JSX.Element {
	return (
		<>
			<div className={styles.navBar}>
				<a className={styles.logo} href="/">
					<p className={styles.mainLogo}>S</p>
				</a>

				<nav>
					<NavLink className={({ isActive }) => (isActive ? styles.active : '')} to="/">
						<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
					</NavLink>
					<NavLink className={({ isActive }) => (isActive ? `${styles.active} ${styles.aboutLink}` : `${styles.aboutLink}`)} to="/about">
						<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
					</NavLink>
					<NavLink
						className={({ isActive }) => (isActive ? `${styles.active} ${styles.contactLink}` : `${styles.contactLink}`)}
						to="/contact">
						<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
					</NavLink>
				</nav>

				<ul>
					<li>
						<a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/selene-faccioli-13389a107/">
							<FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
						</a>
					</li>

					<li>
						<a target="_blank" rel="noreferrer" href="https://github.com/sfaccioli-nl">
							<FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
						</a>
					</li>
				</ul>
			</div>
		</>
	);
}
