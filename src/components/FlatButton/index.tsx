import styles from './FlatButton.module.scss';

interface IFlatButton {
	text: string;
	type?: 'button' | 'submit' | 'reset' | undefined;
	onClick?: () => void;
}

/**
 * Flat button component
 */
export default function FlatButton(props: IFlatButton): JSX.Element {
	return (
		<button type={props.type} className={styles.flatButton}>
			{props.text}
		</button>
	);
}
