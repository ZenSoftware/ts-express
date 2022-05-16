# 💠 Typescript 💎 Express 💠

**Lightweight starter app with modern dev ergonomics**

💧🟪🟦🟪🟦🟪🟦🟪🟦🟪💧🟪🟦🟪🟦🟪🟦🟪🟦🟪💧

A minimal `git clone` for sandbox experiments with Node.js, Typescript and optionally Docker. This is a "Hello world!" Express app, written in Typescript, with modern development ergonomics preconfigured.

- Typescript type definitions configured for code completion.
- Source files watched with `tsc-watch` for efficient reloading of incremental builds.
- A `Dockerfile` is included with scripts to build and run the image.

  |                                                                                 |     Size     |
  | ------------------------------------------------------------------------------- | :----------: |
  | Containerized as a Docker image [node:16-alpine](https://hub.docker.com/_/node) | **116.3 MB** |

## 🛰 Setup commands

```bash
git clone https://github.com/ZenSoftware/ts-express.git --depth 1
cd ts-express
npm install
npm start
```

## 🔋 Commands

```bash
# Start and watch for incremental source changes
npm start
```

```bash
# Bundle with Webpack
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
