install:
	npm install
start:
	npx babel-node src/bin/brain-even.js
game:
	npx babel-node src/bin/brain-calc.js
gcd:
	npx babel-node src/bin/brain-gcd.js
progress:
	npx babel-node src/bin/brain-progression.js
publish:
	npm publish --dry-run
lint:
	npx eslint