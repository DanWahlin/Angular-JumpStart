# Angular JumpStart with TypeScript

The goal of this jumpstart app is to provide
a simple way to get started with Angular 2+ while also showing several key Angular features. The sample
relies on System.js to load TypeScript modules and the required scripts used in the application.

## Angular Concepts Covered

* TypeScript version that relies on classes and modules
* Modules are loaded with System.js
* Defining routes including child routes and lazy loaded routes
* Using Custom Components including custom input and output properties
* Using Custom Directives
* Using Custom Pipes
* Defining Properties and Using Events in Components/Directives
* Using the Http object for Ajax calls along with RxJS observables
* Working with Utility and Service classes (such as for sorting and Ajax calls)
* Using Angular databinding Syntax [], () and [()]
* Using template-driven and reactive forms functionality for capturing and validating data

## Running the Application

1. Install `Node.js 6.5` or higher. *IMPORTANT: The server uses ES2015 features so you need Node 6.x or higher!!!!*

1. Run `npm install` to install app dependencies

1. Run `npm start` in a separate terminal window to build the TypeScript, watch for changes and launch the web server

1. Go to http://localhost:3000 in your browser

Looking for expert onsite Angular/TypeScript training? We've trained the biggest (and smallest :-)) companies around the world for over 15 years. 
For more information visit http://codewithdan.com. 

Simply clone the project or download and extract the .zip to get started. Here are a few
screenshots from the app:

<img width="500" src="src/images/screenshots/cards.png" border="0" />

<br /><br />

<img width="500" src="src/images/screenshots/grid.png" border="0" />

<br /><br />

<img width="500" src="src/images/screenshots/orders.png" border="0" />

<br /><br />

<img width="500" src="src/images/screenshots/details.png" border="0" />

## Running the Application using WebPack

The Angular JumpStart application uses System.JS by default for module loading mainly to keep the app
as simple as possible and focused on Angular concepts rather than a ton of configuration. However, Webpack 
can also be used to handle working with modules plus perform tasks such as bundling, minification, conversion
of TypeScript to JavaScript, start up a dev web server and much more. 

If you'd like to use WebPack instead of SystemJS you'll need to modify a few things in the application. Here's a
list of the required steps to get the application going using Webpack:

1. Delete all *.js and *.js.map files in the `src/app` folder if you previously ran the app using the steps above. 
If you haven't run the app yet then there are no ES5 files to delete so you can move to the next step.

1. Do a global search and replace in the project to comment out all references to moduleId in each component since it 
isn't used by Webpack:

    *Find:*             `moduleId: module.id,`

    *Replace with:*     `//moduleId: module.id,`

    If you plan on sticking with Webpack and not going back to SystemJS you can completely remove `moduleId: module.id,` if you'd like.

1. Open `src/app/app-routing.module.ts` and change `app/` to `./` for all `loadChildren` paths. For example:

    *Change:*     loadChildren: 'app/customers/customers.module#CustomersModule'

    *To:*         loadChildren: './customers/customers.module#CustomersModule'

1. Install `Node.js 6.5` or higher. *IMPORTANT: The server uses ES2015 features so you need Node 6.x or higher!!!!*

1. Run `npm install` to install app dependencies

1. Run `npm run webpack-build-watch` in a console window. This will generate the required script assets needed to run the application
   and place them in the `src/dist` folder. It will also watch for any code changes.

1. Run `node server.js` to start the server and navigate to http://localhost:3000.

