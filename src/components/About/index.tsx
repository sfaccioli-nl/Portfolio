import AnimatedLetters from '../AnimatedLetters';
import useMediaQuery from '../Hooks/useMediaQuery';
import InteractiveContent from '../InteractiveContent';
import SkillCard from '../SkillCard';
import TagsContent from '../TagsContent';
import WordCloud from '../WordCloud/WordCloud';
import styles from './About.module.scss';

/**
 * About component
 */
export default function About(): JSX.Element {
	const isLg = useMediaQuery('(max-width: 991px)');
	const isMd = useMediaQuery('(max-width: 767px)');
	const isXs = useMediaQuery('(max-width: 400px)');

	const skills = Object.freeze<string[]>([
		'JavaScript',
		'TypeScript',
		'React',
		'Github',
		'HTML5',
		'CSS',
		'Node',
		'Java',
		'React Native',
		'Sass',
		'Material design',
		'Jest'
	]);

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
				{isXs ? (
					<div className={styles.skills}>
						{skills.map((skill, i) => (
							<SkillCard key={i} skill={skill} index={i} />
						))}
					</div>
				) : (
					<div className={styles.cloud}>
						<WordCloud />
					</div>
				)}
			</InteractiveContent>
		</>
	);
}
