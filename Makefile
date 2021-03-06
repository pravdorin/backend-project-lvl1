install:
	npm install
even:
	npx babel-node src/bin/brain-even.js
calc:
	npx babel-node src/bin/brain-calc.js
gcd:
	npx babel-node src/bin/brain-gcd.js
progress:
	npx babel-node src/bin/brain-progression.js
prime:
	npx babel-node src/bin/brain-prime.js
publish:
	npm publish --dry-run
lint:
	npx eslint .