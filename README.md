
# Social-Network-API

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A backend project consisting of Node, express, and new built skills in MongoDB with the Mongoose library. This program functions as an API specifically for social network sites where users can add or delete friends, post a thought, and add reactions to other user's thoughts. This program used Insomnia to test routes for the endpoints, and also used mongoDB Compass to check model configuration and querying. To make a full stack website, only thing needed is a front-end and this program will cover the back-end. 

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation

Once you have the files downloaded and loaded up into your preferred IDE, simply install the dependencies:
```
$ npm install
```

There is also a seed file to inject some data into the database. Type the following into the terminal:
```
$ npm run seed
```
## Usage

The program is an API, so we use the [Insomnia](https://insomnia.rest/download) tool to test endpoints and the routing functionality. Once you have Insomnia, on your terminal type the following:
```
$ npm start
```
This will get the server running and be able to use Insomnia to test. In Insomnia, you must use the localhost url: 
```
http://localhost:5000/api/
```
The endpoints are:
- `/thoughts`
- `/thoughts/:thoughtId`
- `/thoughts/:thoughtId/reactions`

- `/user`
- `/user/:userId`
- `/user/:userId/friends/:friendId`

The url parameters (userId, friendId, and thoughtId) can be replaced with the id of the it's respective document. The endpoints and routing will be demonstrated in the tests section.

## Contributing

If you would like to contribute, let me know by contacting me! Info down at the bottom!

## Tests 

https://user-images.githubusercontent.com/103972201/192109624-410e4141-eba3-459f-8eef-c1cab827acd7.mp4

Credits to Clideo for compressing the file!

## Questions

GitHub profile: [https://github.com/DKhubgit](https://github.com/DKhubgit)

Email me at - Danielkang13@gmail.com - if you have questions!

## License

Copyright (c) 2022 , Dkhubgit

All rights reserved.

Licensed under the [MIT license](https://opensource.org/licenses/MIT) License.
