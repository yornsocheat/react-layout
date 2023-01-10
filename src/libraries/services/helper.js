export const trimClassName = (defaultClassName, className = '') => {
	if (className) {
		return `${defaultClassName.trim()} ${className}`;
	}

	return defaultClassName;
};
