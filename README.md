## Features

* Next.js SSR App
* FeathersJS App Connector
* FeathersJS Auth
* Mobx React Form
* Tachyons CSS
* Material UI 3
* PostCSS
* Babel 7
* ESLint 5

## Setup Feathers App

Installation using [Feathers Plus Generator](https://generator.feathers-plus.com/get-started/)

`npm i -g @feathers-plus/cli`

`feathers-plus generate app`

* configure REST + Socket.io

`feathers-plus generate authentication`

* configure Username + Password (Local)

* add `email` and `password` fields in the `users` model.

* setup the hostname `api.next.local`

* setup [Feathers Auth Management](https://github.com/feathers-plus/feathers-authentication-management) (optional)

## Run RFX NEXT

#### In Development:

`npm run dev`

> go to: `http://localhost:3000`

or using nanobox:

`nanobox run npm run dev`

> go to: `http://www.next.local:3000`

#### In Production:

`npm run build`

`npm run start`

or using nanobox:

`nanobox deploy {your-app-name}`
