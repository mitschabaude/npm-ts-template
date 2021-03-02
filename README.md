# Template for TypeScript npm packages

Config is for browser, ESM target.

Uses `typescript` for type checking & declaration, and `esbuild` for transpilation and bundling.

```sh
# clone this repo
git clone git@github.com:mitschabaude/npm-ts-template.git my-repo
cd my-repo

# remove git
rm -rf .git

# install base packages and try if it works
yarn && yarn build && yarn size
```
