import AnimatedLetters from '../AnimatedLetters';
import FlatButton from '../FlatButton';
import styles from './Home.module.scss';

/**
 * Home component
 */
export default function Home(): JSX.Element {
	return (
		<>
			<div className={styles.letters}>
				<AnimatedLetters lettersToAnimate="Hi," />
				<br />
				<AnimatedLetters lettersToAnimate="I'm Selene," />
				<br />
				<AnimatedLetters lettersToAnimate="Frontend developer" />
			</div>
			<h2>Javascript / React</h2>

			<FlatButton text="Contact" to="/contact" />
		</>
	);
}
