import { Link } from 'react-router-dom';
import AnimatedLetters from '../AnimatedLetters';
import FlatButton from '../FlatButton';
import styles from './Home.module.scss';

/**
 * Home component
 */
export default function Home(): JSX.Element {
	return (
		<>
			<div className={styles.letters} data-testid="animated-letters">
				<AnimatedLetters lettersToAnimate="Hi," />
				<br />
				<AnimatedLetters lettersToAnimate="I'm Selene," />
				<br />
				<AnimatedLetters lettersToAnimate="Frontend developer" />
			</div>
			<h2>Javascript / React</h2>

			<Link to="/contact" data-testid="contact-link">
				<FlatButton text="Contact" />
			</Link>
		</>
	);
}
