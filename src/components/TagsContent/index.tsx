import { PropsWithChildren } from 'react';
import { className } from '../../helpers/classNames';
import styles from './TagsContent.module.scss';

/**
 * Component sorrounded by tags
 */
export default function TagsContent(props: PropsWithChildren): JSX.Element {
	return (
		<div className={styles.container}>
			<div {...className(styles.tags, styles.topTags)}>
				<span>{'<html>'}</span>
				<span>{'<body>'}</span>
			</div>
			{props.children}
			<div {...className(styles.tags, styles.bottomTags)}>
				<span>{'</body>'}</span>
				<span>{'</html>'}</span>
			</div>
		</div>
	);
}
