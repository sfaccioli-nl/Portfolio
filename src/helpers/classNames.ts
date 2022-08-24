interface ClassName {
	className: string
}

/**
 * Join classes names for styling purpose
 */
export function className(...classNames: any): ClassName {
	const classes = []

	for (const className of classNames) {
		classes.push(className)
	}

	return { className: classes.join(' ') }
}
