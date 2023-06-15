# Elemes.id Technical test

[![Vue 3](https://img.shields.io/badge/vue-3-blue)](https://vuejs.org/) [![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-blue)](https://tailwindcss.com/) [![netlify.app](https://img.shields.io/badge/netlify-app-blue)](https://www.netlify.com/) [![vue-toastification](https://img.shields.io/badge/vue--toastification-2.0.0--rc.5-green)](https://github.com/Maronato/vue-toastification) [![vue3-carousel](https://img.shields.io/badge/vue3--carousel-0.1.48-green)](https://ismail9k.github.io/vue3-carousel/) [![lottie-player](https://img.shields.io/badge/lotie--player-latest-green)](https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js)


This website is intended for Technical Test only.

## Demo

Need some more convincing? Check out the [production](https://aditilham-elemes-test.netlify.app/)


You can also check on development [here](https://dev-aditilham-elemes-test.netlify.app/).


## Installation
1. Use the [node](https://nodejs.org/en/download) v.16.11 or latest.
2. Use the [npm](https://docs.npmjs.com/cli/v8/configuring-npm?v=true) v.8.11 (legacy) or latest
> **If you are using old version, please upgrade your Node and NPM.**

Clone the repository to your specific folder on your computer and fetch all branches

```bash
git clone https://github.com/aditilham/elemes_test.git
git fetch --all
```
After cloning and fetching branches, you need to **setup all package**, run this script
```
npm install
```

## Usage
### Compiles and hot-reloads for development
If successfully setup all packages and you want to check on **development**, please run
```
npm run serve
```
> **Please check on .env file. If you want compile with dev environment, turn ```VUE_APP_DEBUG=true```, but if you want compile with production environment, change ```VUE_APP_DEBUG=false```**

### Compiles and minifies for production
Run this script if you want to get **dist** folder for production
```
npm run build
```
### Deployment
I'm using [netlify](https://www.netlify.com/) to deploy this website, make sure you have authorized Git provider such as github / gitlab / bitbucket / azure devops, then choose which project and which branch you want to deploy.


## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
