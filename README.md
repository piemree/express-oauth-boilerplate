# Express.js Postgresql authentication template

This template will help you to create ready to use authentication and authorization api.

## Getting started

> Installation

For clone this template use code bellow. Or [Create](https://github.com/piemree/express-oauth-boilerplate/generate) a repository from this template.

```bash
git clone https://github.com/piemree/express-oauth-boilerplate.git
```

- Clone the repository.
- run `npm install` command for installing dependencies.
- run `npm run dev` command will start project with `nodemon`.

## Features

- A lot of authentication method.
- One level User service abstraction for database stuff.
- Basic User CRUD operations with Sequelize and Postgresql.
- Validator middlewares.
- Passport reset proccess.

## File structure

```
express-oauth-boilerplate
│   .gitignore
|    LICENCE
|    package.json
│
└───src
    │   app.js
    │   config.js
    |   router.js
    │
    └───database
    |───middleware
    |───modules
    |   |───auth
    |   |───user
    |
    |───utils
```

## Dependencies

- [bcrypt](https://www.npmjs.com/package/bcrypt) - A library to help you hash passwords.
- [cookie-parser](https://www.npmjs.com/package/cookie-parser) - Parse Cookie header and populate req.cookies with an object keyed by the cookie names.
- [cors]() - CORS is a node.js package for providing a [Connect](https://github.com/senchalabs/connect#readme)/[Express](http://expressjs.com/) middleware that can be used to enable [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing) with various options.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables.
- [express](http://expressjs.com/) - Fast, unopinionated, minimalist web framework for node.
- [express-session](https://www.npmjs.com/package/express-session) - This is a Node.js module available through the npm registry.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens.
- [lodash](https://www.npmjs.com/package/lodash) - The Lodash library exported as Node.js modules.
- [passport](https://www.npmjs.com/package/passport) - Passport is Express-compatible authentication middleware for Node.js.
- [passport-github2](https://www.npmjs.com/package/passport-github2) - Passport strategy for authenticating with GitHub using the OAuth 2.0 API.
- [passport-google-oauth2](https://www.npmjs.com/package/passport-google-oauth2) Passport strategy for authenticating with Google using the OAuth 2.0 API.
- [passport-jwt]() Passport strategy for authenticating with JWT.
- [passport-local](https://www.npmjs.com/package/passport-jwt) - Passport strategy for authenticating with user credentials.
- [passport-twitter](https://www.npmjs.com/package/passport-twitter) - Passport strategy for authenticating with Twitter using the OAuth 2.0 API.
- [pg](https://www.npmjs.com/package/pg) - Non-blocking PostgreSQL client for Node.js. Pure JavaScript and optional native libpq bindings.
- [ph-hstore](https://www.npmjs.com/package/pg-hstore) - A node package for serializing and deserializing JSON data to hstore format.
- [sequelize](https://www.npmjs.com/package/sequelize) - Sequelize is a promise-based Node.js ORM tool.
- [validator](https://www.npmjs.com/package/validator) - A library of string validators and sanitizers.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)
