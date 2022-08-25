import AnimatedLetters from '../AnimatedLetters';
import useMediaQuery from '../Hooks/useMediaQuery';
import WordCloud from '../WordCloud/WordCloud';
import styles from './About.module.scss';

/**
 * About component
 */
export default function About(): JSX.Element {
	const isMedium = useMediaQuery('(max-width: 991px)');

	return (
		<div className={isMedium ? styles.mediumContainer : styles.container}>
			<div className={styles.info}>
				{isMedium ? (
					<>
						<AnimatedLetters lettersToAnimate="About me /" />
						<br />
						<AnimatedLetters lettersToAnimate=" Skills" />
					</>
				) : (
					<AnimatedLetters lettersToAnimate="About me / Skills" />
				)}

				<p>
					I&apos;m a Software Engineer graduated in Rosario, Argentina. I&apos;m a really active person passionate about researching and
					learning new things. I love putting ideas together and making plans. Javascript is my favorite language.
				</p>
			</div>

			<div className={isMedium ? styles.mediumCloud : styles.cloud}>
				<WordCloud />
			</div>
		</div>
	);
}
