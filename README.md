# 💠Typescript 💎 Express 💠

## Minimal starter app with modern dev ergonomics

💧🟦🟪🟦🟪🟦🟪🟦🟪🟦🟪🟦💧🟦🟪🟦🟪🟦🟪🟦🟪🟦🟪🟦💧

This is a "Hello world!" Node.js Express app, written in Typescript, with modern development ergonomics all preconfigured. Built to be the perfect `git clone` for tiny sandbox experiments with Node.js using Typescript.

- Typescript type definitions configured for code completion
- `npm run start:watch` for live reloading of watched source files.
- **VS Code** debugger auto attaches to the debug process upon running `npm run start:watch`
- Production builds are bundled with **Webpack**
- Includes a minimal `Dockerfile` with scripts to build and run the image

## Setup commands

```
git clone https://github.com/ZenSoftware/ts-express.git
cd ts-express
npm install
```

## Commands

```bash
# Starts main.js with Node
npm start
```

```bash
# Starts and auto reloads incremental source changes
npm run start:watch
```

```bash
# Bundle with webpack
npm run build
```

```bash
# Build the Docker image
npm run docker:build
```

```bash
# Run the Docker image
npm run docker:run
```
