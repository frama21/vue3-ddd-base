# Vue 3 DDD
This template should help get you started developing with Vue 3 & DDD Pattern.

## Recommended IDE Setup
[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur)

## What inside
|Package|  |
|--|--|
|Vue 3|✅|
|Tailwind|✅|
|PostCSS|✅|
|Vite|✅|
|Vitest|✅|
|Axios|✅|
|Pinia|✅|
|JS Base| ✅

## Project Setup
### Install Project
```sh
npm  install  # pnpm/yarn install
```

### Compile and Hot-Reload for Development
```sh
npm  run  dev  # pnpm/yarn dev
```

### Compile and Minify for Production
```sh
npm  run  build  # pnpm/yarn build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)
```sh
npm  run  test:unit  # pnpm/yarn test:unit
```

### Lint with [ESLint](https://eslint.org/)
```sh
npm  run  lint  # pnpm/yarn lint
```

## Project Structure 
### Folder Structure
```bash
    /src
        /modules
            /app # global
                /ui
                    /components
                /store
                /router
                /constant
                /assets
                ...
            /otherModules # feature
                /ui
	                /components
                /store
		            otherModules.store.js
                /routes
	                otherModules.route.js
                /constant
		            otherModules.constant.js
                /assets
                ...
        /plugins
    /tests
        /unit
```