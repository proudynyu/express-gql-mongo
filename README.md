# Study Case Express/REST/Gql/Solid

## Description

This will be a study case where I will try to apply a Express Server that will work with:

- REST API
- GraphQL

For this process, I'm working with the NoSQL database [Mongo](https://www.mongodb.com/pt-br) to start a collection of informations that could be use.

## Running

To start the project, you will need to set some configurations before:

- Create a `.env` file
- Insert the following information in `.env`:
  - MONGOURI: _This will be your mongo uri that you will have acess after creating a account and a cluster on Mongo_
  - SECRET: _This will be responsable for the turns that [bcrypt](https://www.npmjs.com/package/bcrypt) uses to hash the passwords_

After you set the `.env`, run the following commands:

- `yarn` or `npm install`
- `yarn dev` or `npm run dev`
