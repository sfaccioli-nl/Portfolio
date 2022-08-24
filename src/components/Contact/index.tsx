import styles from './Contact.module.scss';
import AnimatedLetters from '../AnimatedLetters';
import { FormEvent, useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import FlatButton from '../FlatButton';
import Loader from 'react-loaders';

interface IEmailResult {
	isSuccess?: boolean;
	message?: string;
}

/**
 * Contact component
 */
export default function Contact(): JSX.Element {
	const [emailResult, setEmailResult] = useState<IEmailResult | null>(null);
	const [loading, setLoading] = useState<boolean>(false);
	const refForm = useRef<HTMLFormElement>(null);

	/**
	 * Timer to make the messages disappear
	 */
	function setTimer(): void {
		setTimeout(() => setEmailResult(null), 8000);
	}

	/**
	 * Sends an email from the contact form
	 */
	function sendEmail(e: FormEvent): void {
		e.preventDefault();

		if (refForm.current) {
			setLoading(true);
			emailjs.sendForm('service_xoz5e69', 'template_kfcqr1j', refForm.current, 'm7sZHlvKj4EIyAdTk').then(
				() => {
					setEmailResult({ isSuccess: true, message: 'Message successfully sent' });
					refForm.current?.reset();
					setTimer();
				},
				() => {
					setEmailResult({ isSuccess: false, message: 'Failed to send message, please try again' });
					setTimer();
				}
			);
		}
	}

	useEffect(() => {
		if (emailResult?.message && loading) {
			setLoading(!loading);
		}
	}, [emailResult, loading]);

	return (
		<div className={styles.container}>
			<div className={styles.contactForm}>
				<div className={styles.description}>
					<AnimatedLetters lettersToAnimate="Contact me" />

					<p>
						I want to develop web and mobile apps so that I can use my creativity and tech skills to bring people together for a special
						experience and help organizations attract and engage new customers
					</p>
				</div>

				<form ref={refForm} onSubmit={sendEmail} className={styles.form}>
					{emailResult && <p className={emailResult.isSuccess ? styles.success : styles.error}>{emailResult.message}</p>}

					<input type="text" name="name" placeholder="Name" required />
					<input type="email" name="email" placeholder="Your email" required />

					<input placeholder="Subject" type="text" name="subject" required />

					<textarea placeholder="Message" name="message" required></textarea>

					{loading ? (
						<div className={styles.loader}>
							<Loader type="ball-pulse" active />
						</div>
					) : (
						<FlatButton text="Submit" type="submit" />
					)}
				</form>
			</div>

			<div className={styles.mapWrap}>
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d49089.35156424812!2d4.843517830465114!3d52.386012494913544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5e25ec37ab0e9%3A0x2c4eb449fd7cf96d!2sTempelhofstraat%202%2C%201043%20EC%20Amsterdam!5e0!3m2!1ses-419!2snl!4v1661359323249!5m2!1ses-419!2snl"
					width="600"
					height="450"
					style={{ border: 0 }}
					allowFullScreen
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"></iframe>
			</div>
		</div>
	);
}
