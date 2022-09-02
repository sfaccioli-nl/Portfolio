import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faEnvelope, faHome, faUser, faXmark } from '@fortawesome/free-solid-svg-icons';
import styles from './Topbar.module.scss';
import { useEffect, useRef, useState } from 'react';
import { className } from '../../../helpers/classNames';
import { NavLink } from 'react-router-dom';

/**
 * Topbar component for mobile
 */
export default function Topbar(): JSX.Element {
	const [open, setOpen] = useState<boolean>(false);
	const navRef = useRef<any>(null);

	/**
	 * Handles the menu click
	 */
	function handleClick() {
		setOpen(!open);
	}

	/**
	 * Handles the click outside the nav
	 */
	function handleClickOutside(event: Event): void {
		if (navRef.current && !navRef.current.contains(event.target)) {
			setOpen(false);
		}
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true);
		return () => {
			document.removeEventListener('click', handleClickOutside, true);
		};
	}, []);

	return (
		<div className={styles.navBar}>
			<div onClick={handleClick} className={styles.iconsContainer}>
				<FontAwesomeIcon icon={faBars} {...className(styles.menuIcon, open ? styles.open : styles.close)} />
				<FontAwesomeIcon icon={faXmark} {...className(styles.menuIcon, open ? styles.close : styles.open)} />
			</div>
			<div ref={navRef} {...className(styles.menu, open ? styles.close : styles.open)}>
				<nav>
					<NavLink onClick={handleClick} className={({ isActive }) => (isActive ? styles.active : '')} to="/">
						<FontAwesomeIcon icon={faHome} color="#4d4d4e" />
						HOME
					</NavLink>
					<NavLink
						onClick={handleClick}
						className={({ isActive }) => (isActive ? `${styles.active} ${styles.aboutLink}` : `${styles.aboutLink}`)}
						to="/about">
						<FontAwesomeIcon icon={faUser} color="#4d4d4e" />
						ABOUT
					</NavLink>
					<NavLink
						onClick={handleClick}
						className={({ isActive }) => (isActive ? `${styles.active} ${styles.contactLink}` : `${styles.contactLink}`)}
						to="/contact">
						<FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
						CONTACT
					</NavLink>
				</nav>
			</div>
		</div>
	);
}
