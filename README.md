# Slush-Test

> A [slush](http://slushjs.github.io) generator for a simple node app with all the good stuff

## Installation

Install `slush-good-start` globally:

```bash
npm install -g slush-good-start
```

Remember to install `slush` globally as well, if you haven't already:

```bash
npm install -g slush
```

## Usage

Create a new folder for your project:

```bash
mkdir my-new-app
```

Run the generator from within the new folder:

```bash
cd my-new-app

slush good-start
```

Answer the questions and it will generate all the stuff you need.


### Linting

It uses [eslint](http://eslint.org/) and [Airbnb's linting module](https://www.npmjs.com/package/eslint-config-airbnb)

This can be ran via: ```npm run-script lint```

### Nodemon

It uses [nodemon](http://nodemon.io/)

This can be ran via: ```npm run-script nodemon```

### Testing

It uses [mocha](https://mochajs.org/) and [chai](http://chaijs.com/) and [sinon](http://sinonjs.org/)

This can be ran via: ```npm run-script test```

### Logging

It uses [bunyan](https://github.com/trentm/node-bunyan) and [bunyan-prettystream](https://github.com/mrrama/node-bunyan-prettystream)

### Other Modules
 + lodash
 + moment
 + config
 + async
 
### Webstorm

It also include a nice configured webstorm project file
 
### Precommit hooks

Linting and testing is ran prior to commits and will not commit on failure.


