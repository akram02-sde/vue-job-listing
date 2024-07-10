# vue-app

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### For backend
My project functions by making CRUD requests to a server. I implemented this using a Fake API with JSON Server. If you want to try out this project, I recommend cloning the repository and following the mentioned steps:

STEP 1: Install npm json-server
```sh
npm i json-server
```

STEP 2: add the following in the "scripts" in the package.json :
```sh
"server": "json-server --watch src/jobs.json --port 8000"
```

STEP 3: make sure in vite.config.js inside the server object in the export, this key-value pair is present
```sh
target: 'http://localhost:8000',
```

STEP 4: Run the server in the terminal using npm run server
```sh
npm run server
```
![image](https://github.com/akram02-sde/vue-job-listing/assets/68415682/6df4232b-6e6f-4349-9aa2-2ef8976084a6)
