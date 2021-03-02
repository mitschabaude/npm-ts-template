# Template for TypeScript npm packages

Config is for browser, ESM target.

Uses `typescript` for type checking & declaration, and `esbuild` for transpilation and bundling.

To start off a new package:

```sh
# clone this repo
git clone git@github.com:mitschabaude/npm-ts-template.git my-repo
cd my-repo

# remove git
rm -rf .git

# install base packages and try if it works
yarn && yarn build && yarn size
```

Then quickly adapt `LICENSE.md` and `package.json` (name, author, repo) so you don't forget about it.
