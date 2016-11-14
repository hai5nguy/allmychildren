export const clone = (original) => {
	return JSON.parse(JSON.stringify(original))
}