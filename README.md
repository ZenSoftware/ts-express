# 💠 Typescript 💎 Express 💠

**Starter pack with modern dev ergonomics**

💧🟪🟦🟪🟦🟪🟦🟪🟦🟪💧🟪🟦🟪🟦🟪🟦🟪🟦🟪💧

Built to be the perfect `git clone` for sandbox experiments with Node.js, Typescript and optionally Docker. This is a "Hello world!" Express app, written in Typescript, with modern development ergonomics all preconfigured for you.

- Typescript type definitions configured for code completion.
- Sensible `tslint` rules preconfigured.
- Source files watched with `tsc-watch` for efficient reloading of incremental builds.
- For minimal footprint, production builds are configured to be bundled with **Webpack**.
- A `Dockerfile` is included with scripts to build and run the image.
- For fluid debugging, there is a **VS Code** workspace `settings.json` file provided with the configuration `"debug.node.autoAttach": "off"`. You can set this to `"on"` to have VS Code auto-attach the debug process upon source file changes. It helps to make for a smooth debugging experience. 🍰

|                                                                                 |    Size     |
| ------------------------------------------------------------------------------- | :---------: |
| Production bundle of `main.js` "Hello World!"                                   | **557 KB**  |
| Containerized as a Docker image [node:12-alpine](https://hub.docker.com/_/node) | **80.9 MB** |

## 🛰 Setup commands

```bash
git clone https://github.com/ZenSoftware/ts-express.git
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
