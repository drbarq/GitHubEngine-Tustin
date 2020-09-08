# GitHub Engine

> Web application that makes searching GitHub a breeze

## Starting Project

1. Install dependencies for each folder

   - `cd githubengine`
   - `npm install`
   - `cd ..`
   - `cd server`
   - `npm install`

2. Start redis cache

   > within ./server folder

   - `npm run start-cache`

   > Open a new terminal: check redis is connected - should recieve PONG back

   - `npm run test-cache-ping`

3. Start server

   > within ./server folder

   - `npm start`

4. Start GitHub Engine
   - `cd ..`
   - `cd githubengine`
   - `npm start`

## Starting Tests

1. GitHub Engine Test

   > from parent folder

   - `cd githubengine`
   - `npm test`

2. Backend Server Tests

   > from parent folder

   - `cd server`

   > clear current cache

   - `npm run delete-cache`

   > start cache

   - `npm run start-cache`

   - `npm test`

## Project Structure

Project is built using: **[React](https://github.com/facebook/react)** / JavaScript / **[SCSS](https://sass-lang.com/)** / **[Jest](https://github.com/facebook/jest)** / **[Enzyme](https://github.com/enzymejs/enzyme)** / Node / **[Redis](https://github.com/NodeRedis/node-redis)**

State management is handled by **[Easy Peasy](https://easy-peasy.now.sh/docs/quick-start.html)**

**File Structure: Technical Folder Separation**
