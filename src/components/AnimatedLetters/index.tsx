import { useEffect, useState } from 'react';
import styles from './AnimatedLetters.module.scss';

interface IAnimatedLetters {
	lettersToAnimate: string;
}

/**
 * Animated letters component
 */
export default function AnimatedLetters({ lettersToAnimate }: IAnimatedLetters): JSX.Element {
	const [letterClass, setLetterClass] = useState<string>(styles.textAnimate);

	useEffect(() => {
		setTimeout(() => {
			setLetterClass(styles.textAnimateHover);
		}, 4000);
	}, []);

	return (
		<span>
			{lettersToAnimate.split('').map((char, i) => (
				<span key={char + i} className={letterClass} style={{ animationDelay: `${0.5 + i / 10}s` }}>
					{char}
				</span>
			))}
		</span>
	);
}
