import styles from './SkillCard.module.scss';

interface ISkillCardProps {
	skill: string;
	index: number;
}

/**
 * Card to show a skill in mobile
 */
export default function SkillCard({ skill, index }: ISkillCardProps): JSX.Element {
	return (
		<div className={styles.skillBox} style={{ animationDelay: `${0.2 * index}s` }}>
			{skill.toUpperCase()}
		</div>
	);
}
