import { PropsWithChildren } from 'react';
import styles from './InteractiveContent.module.scss';

/**
 * Interactive content component
 */
export default function InteractiveContent(props: PropsWithChildren): JSX.Element {
	return <div className={styles.container}>{props.children}</div>;
}
