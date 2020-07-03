# Angular JumpStart with TypeScript

The goal of this jumpstart app is to provide
a simple way to get started with Angular 2+ while also showing several key Angular features. The sample
relies on the Angular CLI to build the application.

Looking for expert onsite Angular/TypeScript training? We've trained the biggest (and smallest :-)) companies around the world for over 15 years. For more information visit https://codewithdan.com.

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
* Optional: Webpack functionality is available for module loading and more (see below for details)
* Optional: Ahead-of-Time (AOT) functionality is available for a production build of the project (see below for details)

## Running the Application with Node.js

1. Install the latest LTS version of Node.js from https://nodejs.org. *IMPORTANT: The server uses ES2015 features AND the Angular CLI so you need a current version of Node.js.*

1. Run `npm install` to install app dependencies

1. Run `ng build --watch` to build and bundle the code

1. Run `npm start` in a separate terminal window to build the TypeScript, watch for changes and launch the web server

1. Go to http://localhost:8080 in your browser 

Simply clone the project or download and extract the .zip to get started. 

Once the app is running you can play around with editing customers after you login. Use any email address and any password that's at least 6 characters long (with 1 digit).

Here are a few screenshots from the app:

![](src/assets/images/screenshots/cards.png)

<br /><br />

![](src/assets/images/screenshots/grid.png)

<br /><br />

![](src/assets/images/screenshots/orders.png)

<br /><br />

![](src/assets/images/screenshots/details.png)

## Running the Application with Deno

1. Install the latest version of Deno from https://deno.land

1. Run `npm install` to install the Angular dependencies

1. Run `ng build` to build and bundle the code

1. `cd` into `./deno` and run the following command:

    `deno run --allow-net --allow-read --unstable server.ts`
    
1. Go to http://localhost:8080 in your browser 

## Running Angular Playground

This application includes Angular Playground (http://www.angularplayground.it) which provides a great way to isolate components in a sandbox rather than loading the 
entire application to see a given component. To run the playground run the following command:

`npm run playground`

Then open a browser and visit `http://localhost:4201` and follow the directions there (or visit their website for more information).

## Running in Kubernetes

1. Install Docker Desktop from https://www.docker.com/get-started
1. Start Docker and enable Kubernetes in the Docker Desktop preferences/settings
1. Run `docker-compose build` to create the images
1. Run `kubectl apply -f .k8s` to start Kubernetes
1. Visit `http://localhost`
1. Stop Kubernetes using `kubectl delete -f .k8s`

## Running with Skaffold

If you'd like to use the [Skaffold tool](https://skaffold.dev/docs/install) to run the project in Kubernetes, install it, and run the following command:

`skaffold dev`

To generate the `skaffold.yaml` file that's included in the project the following command was run and the image context paths it defines were modified:

```
skaffold init -k '.k8s/*.yml' \
  -a '{"builder":"Docker","payload":{"path":".docker/nginx.dev.dockerfile"},"image":"nginx-angular-jumpstart"}' \
  -a '{"builder":"Docker","payload":{"path":".docker/node.dockerfile"},"image":"node-service-jumpstart"}'
```

If you wanted to generate the initial Kubernetes manifest files from an existing docker-compose.yml file you can use the following command.
It uses the [Kompose tool](https://kompose.io) behind the scenes to create the YAML files

```
skaffold init --compose-file docker-compose.yml \
  -a '{"builder":"Docker","payload":{"path":".docker/nginx.dev.dockerfile"},"image":"nginx-angular-jumpstart"}' \
  -a '{"builder":"Docker","payload":{"path":".docker/node.dockerfile"},"image":"node-service-jumpstart"}'
```


## Running in the Azure Static Web Apps Service

Check out my post on [Getting Started with Azure Static Web Apps](https://blog.codewithdan.com/getting-started-with-azure-static-web-apps). 

<a id="kubernetes-day-zero"></a>
## Kubernetes Day Zero Webinar: Deploying to Kubernetes

Dan Wahlin

Twitter: @DanWahlin

https://codewithdan.com

Resources mentioned:

* https://github.com/danwahlin/angular-jumpstart
* https://kubernetes.io/docs/reference/generated/kubectl/kubectl-commands
* https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.13/#-strong-api-overview-strong-
* https://kubernetes.io/docs/reference/kubectl/cheatsheet/

## Agenda

1. Container Orchestration Options (Docker Swarm, Kubernetes)
2. Using Docker Compose

    ```
    docker-compose build
    docker-compose up
    docker-compose down
    ```

3. Docker Stacks --> Docker Desktop --> Kubernetes

    ```
    docker stack deploy -c docker-compose.yml angular-jumpstart
    docker stack ls
    docker stack rm angular-jumpstart
    ```

4. Deploying Containers to Kubernetes

    https://kompose.io/

    ```
    kompose convert -h
    kompose convert -f docker-compose.yml -o ./[your-folder-goes-here]
    ```

    Tweak the generated YAML. Then once ready run:

    ```
    kubectl apply -f [your-folder-name]
    ```

My Kubernetes for Developers video courses on Pluralsight.com:

https://pluralsight.pxf.io/danwahlin




