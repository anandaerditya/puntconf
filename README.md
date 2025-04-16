# PUNTCONF #

![NPM Version](https://img.shields.io/npm/v/%40anandaerditya%2Fpuntconf?style=for-the-badge&logo=npm&color=%23CC3534)



### What is PUNTCONF ? ###

PUNTCONF ("punt", the Dutch word for "dot" in English) is a simple module that reads a configuration file formatted in `.conf` and registers its contents as `process.env` variables.

---

### How do I use it ? ###

You can use this package using this steps:

1. Install the package in your project using the following command:
	```sh
	npm install @anandaerditya/puntconf
	```
2. Prepare your `.conf` file.
3. If you are using `Node.js (CommonJS)`, import the package like this:

	```javascript
	// Import the package
	const config = require('@anandaerditya/puntconf')

	// Register your .conf file
	config.puntconf.init('path/to/your/conf')

	// Get your config value
	console.log(process.env.YOUR_CONFIG);
	````

4. If you are using `TypeScript (ES Modules)`, import the package like this:

	```typescript
	// Import the package
	import { puntconf } from "@anandaerditya/puntconf";

	// Register your .conf file
	puntconf.init('path/to/your/conf')

	// Get your config value
	console.log(process.env.YOUR_CONFIG);
	```

---

### What does the `.conf` file looks like ? ###

The `.conf` configuration file should look like this : 

```ini
[your_section_name]
YOUR_CONFIG_KEY=Your Config Value

[your_another_section_name]
YOUR_ANOTHET_CONFIG_KEY=Your Config Value
```

For the content, it's up to you.

---

### How it works ? ###

This package uses Node.js's built-in `fs` module to read the file. Then, it converts its content into JSON and registers each configuration in `process.env`.