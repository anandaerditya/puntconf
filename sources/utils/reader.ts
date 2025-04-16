import { parse, load } from "./parser";

const parsed = ([key, value]: [key: string, value: string]) => {
	process.env[key] = value;
}

const init = (path: string) => {
	let r = load(path);
	let p = parse(r);

	Object.entries(p).forEach(parsed)
}

export {
	init
}