import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import FlatButton from '../FlatButton';
import useMediaQuery from '../Hooks/useMediaQuery';
import styles from './Home.module.scss';

/**
 * Home component
 */
export default function Home(): JSX.Element {
	const isMobile = useMediaQuery('(max-width: 380px)');

	return (
		<>
			<div data-testid="animated-letters">
				<AnimatedLetters lettersToAnimate="Hi," />
				<br />
				<AnimatedLetters lettersToAnimate="I'm Selene," />
				<br />
				<AnimatedLetters lettersToAnimate="Frontend " />
				{isMobile && <br />}
				<AnimatedLetters lettersToAnimate="developer" />
			</div>
			<h2 className={styles.subTitle}>Javascript / React</h2>

			<Link to="/contact" data-testid="contact-link">
				<FlatButton text="Contact" />
			</Link>
		</>
	);
}
