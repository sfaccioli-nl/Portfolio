import AnimatedLetters from '../AnimatedLetters';
import WordCloud from '../WordCloud/WordCloud';
import styles from './About.module.scss';

/**
 * About component
 */
export default function About(): JSX.Element {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<AnimatedLetters lettersToAnimate="About me / Skills" />

				<p>
					I&apos;m a Software Engineer graduated in Rosario, Argentina. I&apos;m a really active person passionate about researching and
					learning new things. I love putting ideas together and making plans. Javascript is my favorite language .
				</p>
			</div>

			<div className={styles.cloud}>
				<WordCloud />
			</div>
		</div>
	);
}
