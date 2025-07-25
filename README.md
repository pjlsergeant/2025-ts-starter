# TypeScript Starter

Modern TypeScript project setup with testing and linting + justfile with .env

# Setup Checklist

## Remove old git

```sh
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

## Install deps and husky

```sh
npm install
npm run prepare
```

### package.json

- [ ] name: "typescript-starter" → your project name
- [ ] description: Your project description
- [ ] version: "1.0.0" → "0.1.0" or appropriate
- [ ] author: Add your name/email
- [ ] license: "ISC" → your preferred license

### Later

You probably want to remove `src/{lib,bin}/triangle.ts` and also get rid of it from the justfile.