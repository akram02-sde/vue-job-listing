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

###
My project functions by making CRUD requests to a server. I implemented this using a Fake API with JSON Server. If you want to try out this project, I recommend cloning the repository and replacing the Fake API with the jobs.json file found in the project.

This file already contains all the jobs data, and all you need to do add the following in the "scripts" in "server" in the package.json :

```sh
json-server --watch src/jobs.json --port 8000
```
and run the following in the terminal :

```sh
npm run server
```
