# Typescript + Express starter app with modern dev ergonomics

This is a bare minimum Node.js Express app, written in Typescript, with modern development ergonomics preconfigured.

- Typescript type definitions configured for code completion
- `npm run start:watch` uses **nodemon** for live reloading upon source file changes
- **Visual Studio Code** debugger auto attaches to the debug process upon running `npm run start:watch`
- Production builds are bundled with **webpack**
- Includes a minimum `Dockerfile`

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
# Starts nodemon
npm run start:watch
```

```bash
# Bundle with webpack
npm run build
```

```bash
# Dockerize the app
npm run docker:build
```

```bash
# Run the docker image
npm run docker:run
```
