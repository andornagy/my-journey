export function excerpt(paragraph, length) {
	// Split the paragraph into words based on spaces
	const words = paragraph.split(" ");

	// Slice the first 10 words
	const first10Words = words.slice(0, length);

	// Join the words back into a string
	return first10Words.join(" ") + (words.length > length ? "..." : "");
}
