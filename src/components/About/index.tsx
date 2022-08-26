import AnimatedLetters from '../AnimatedLetters';
import useMediaQuery from '../Hooks/useMediaQuery';
import InteractiveContent from '../InteractiveContent';
import TagsContent from '../TagsContent';
import WordCloud from '../WordCloud/WordCloud';
import styles from './About.module.scss';

/**
 * About component
 */
export default function About(): JSX.Element {
	const isLg = useMediaQuery('(max-width: 991px)');
	const isMd = useMediaQuery('(max-width: 767px)');

	return (
		<>
			<TagsContent>
				<div className={styles.info}>
					{isLg && !isMd ? (
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
			</TagsContent>

			<InteractiveContent>
				<div className={styles.cloud}>
					<WordCloud />
				</div>
			</InteractiveContent>
		</>
	);
}
