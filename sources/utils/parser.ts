const fs = require('fs')

const load = (file: string): string => {
	return fs.readFileSync(file, 'utf-8')
}

const parse = (data: string): Record<string, any> => {
	const result: Record<string, any> = {}
	let s: string | null = null

	data.split(/\r?\n/).forEach((line) => {
		line = line.trim()

		// Comments
		if (!line || line.startsWith("#") || line.startsWith(";")) return;

		// Sections
		if (line.startsWith("[") && line.endsWith("]")) return;
		
		// Value pair
		if (line.includes("=")) {
			const [key, value] = line.split("=").map((part) => part.trim());
			
			result[key] = value
		}
	});

	return result;
}

export {
	parse,
	load
}