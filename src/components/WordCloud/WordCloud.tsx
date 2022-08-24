import { useEffect, useState } from 'react';
import TagCloud from 'TagCloud';

/**
 * Word cloud component
 */
export default function WordCloud(): JSX.Element {
	const [loading, setLoading] = useState<boolean>(true);

	const container = '.content';
	const data = Object.freeze<string[]>([
		'JavaScript',
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

	const options = {
		radius: 300,
		// animation speed
		// slow, normal, fast
		maxSpeed: 'fast',
		initSpeed: 'fast',
		// 0 = top
		// 90 = left
		// 135 = right-bottom
		direction: 135,
		keep: true
	};

	useEffect(() => {
		if (loading) {
			TagCloud(container, [...data, ...data], options);
			setLoading(false);
		}
		// eslint-disable-next-line prettier/prettier, react-hooks/exhaustive-deps
	},[]);

	return (
		<div className="main">
			<span className="content"></span>
		</div>
	);
}
