# Jungle Creations Test

This is the repository for Jungle Creations Test 

## Getting Started

#### Clone The repository

You will need a git client installed. To clone the repository run the following -

```
git clone https://gitlab.com/tickaudit2/tadashboard.git
```

This creates the `tadashbaord` folder which contains the Angular project.

#### Nodejs

Make sure that you have Node.js installed (this includes the npm command). The LTS version should be used (currently v6.11.2 LTS).

Instructions for different platforms are shown on the nodejs.org website.

#### Global Node Packages

The development environment requires global node packages to be installed . You can check what is installed using -

```
$ npm list -g --depth=0
```
Make sure the below global packages are installed.
```
/home/gerald/opt/node-v6.10.0-linux-x64/lib
└── npm@3.10.10
```

#### Project Node packages

The node packages for the project are located in the `node_modules` folder, if this exists then delete it.

The required packages with the correct versions are defined within the `packages.json` file. To install these packages run -

```
npm install
```

## Environments

There are 4 environments -

local - the dashboard, gateway, auth and couchbase are all running on the local laptop
dev - the gateway, auth, couchbase are running on tickaudit.peoplessystems.co.uk and the dasbboard is running on the local laptop
uat - all services are running on uat.tickaudit.peoplessystems.co.uk
prod - all services are runnning on prod.tickaudit.peoplessystems.co.uk

To run serve the app run the following -

```
npm run start:local
```

or for dev run -

```
npm run start
```

The app can then be viewed in a browser at `http://localhost:4200`

## Browser caching

All modern browsers will cache the html, css and js assets. To ensure that the updated js files
are re-read by the browser they need to be given a new unique name for that build. Angular handles this using the "--output-hashing" flag. See the package.json file for the implementation.
