import { Link } from 'react-router-dom';
import styles from './FlatButton.module.scss';

interface IFlatButton {
	text: string;
	to: string;
	onClick?: () => void;
}

/**
 * Flat button component
 */
export default function FlatButton(props: IFlatButton): JSX.Element {
	return (
		<Link to={props.to} className={styles.flatButton}>
			{props.text}
		</Link>
	);
}
