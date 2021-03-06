Composi
========

Composi is a framework for creating desktop and mobile apps. With Composi you can create a dynamic website with reactive components, a progressive web app, or a hybrid app for mobile app stores.

Composi is small. The core is only 3KB gzipped. It therefore loads fast. Its virtual DOM updates components efficiently and quickly. 

Components can be stateless or stateful. Stateful components are reactive. When you change a component's state, that triggers the component's render function. That in turn creates a new virtual DOM based on the data changes. It then patches the DOM to match the changes. If there are no changes, nothing will happen.

A component's markup is written with JSX. This means you can create custom tags to organize your component's template. You can also pass props to a component tag. If you prefer, you can instead use the `h` function to define the component's markup with hyperscript. Actually, at render time the JSX is converted to this as well.

Browser Support
---------------

Composi is compatible with browsers back to IE 9 on Windows 7.

Installation
-------------

To install Composi, you'll need to have [Nodejs](https://nodejs.org/en/) installed. Open your terminal and run:

```sh
npm run i -g composi
```

Create a New Project
--------------------
After installing Composi, you can use it to create a new project. The simplest way to do this is to provide a project name following the `-n` flag:

```sh
composi -n myproject
```
This will create a project named "myproject" on your desktop. If you want to have the project placed somewhere else, you can provide a path with the `-p` flag:

```sh
npm -n myproject -p dev/New \Projects
```
>On Windows use the standard Windows file system path notation to define your project's path.

Project Structure
-----------------
A new project will have the following folder structure:
```
|- my-project
|  |- css
|  |--- styles.css
|  |- dev
|  |--- app.js
|  |  |- components
|  |  |--- title.js
|  |- js
|  |--- app.js
|--- index.html
```

Building
--------
To build your project, `cd` to its folder and run:

```sh
npm i
```

You'll also need to have the `gulp-cli` installed:

```sh
npm i -g gulp-cli
```

Then, while in your project's root folder, run:

```sh
gulp
```

This will build and launch your project in your default browser.

With this structure, you can add other sub-folders to components, or create other folders inside the `dev` folder as necessary.

`styles.css` is a CSS reset. We are using the Bootstrap 4 rest since it provides a consistent baseline for HTML across all browsers. `app.js` is the core of your website/app. `components` folder has one component: `list.js`. You can add more files for other component as needs. Feel free to add more folders and files to the `dev` folder as you see fit to achieve the structure your app needs. Import them into `app.js`. At build time the build script uses `app.js` to bundle all your files and output them to `js/app.js`. The `index.html` is automatically setup to import that script. `index.html` is your main page. npm

Documentation
-------------
To learn how to use Composi, open the [docs](./docs/index.md) folder.

Summary
-------

Composi is all about components. These provide a great way to organize your code into modular and reusable chunks. The virtual dom means you never have to touch the DOM to change something.

Because Composi uses JSX, there are many similarities to React patterns. Please note that Composi is not a React clone. It is not trying to be compatible with React and the React ecosystem the way Preact and Inferno do. Component state is managed quite differently from React. Components lack the React refs and context properties. Also lacking, PropTypes. Events are not synthetic. They are either real inline events or the `handleEvent` interface. Props and custom tags are supported only because JSX provides these by default. The component architecture is actually adapted from the Component class of [ChocolateChip-UI](https://github.com/chocolatechip-ui/chocolatechipui). Changes were made to the API to work with a virtual dom.

Composi is small, just 3KB for the gzipped core. It loads quickly. Its small and focused API means you can learn everything in half a day and be productive. If you're already familiar with JSX, then you only need to learn the Component API. You can easily do that in an hour.

What's Missing
--------------
Composi is focused on one thing - providing a solution for components as the means to build and structure a project. That means there are certain things it does not address.

### State Management
Composi provides the barest support for state through the component's `state` property and `setState` method. However for a more robust solution you may prefer to use [Redux](http://redux.js.org), [Mobx](https://mobx.js.org), or some other state management solution. When you do so, you'll want to create stateless components. Read the documentation for [Component](./docs/components.md) to learn more about stateless components. If yo want something really minimal, take a look at [trkl](https://www.npmjs.com/package/trkl) and [pure](https://www.npmjs.com/package/purestate). You could event roll your own state management solution by defining a class and using Composi's [pubsub functions](./docs/pubsub.md), `subscribe` and `dispatch` for making it reactive. Another possibility for state management is [freezer-js](https://www.npmjs.com/package/freezer-js)

### Router
Composi does not provide a client-side router. Currently the most popular choices for client-side routing are [Page.js](https://www.npmjs.com/package/page.js), [Universal Router](https://www.npmjs.com/package/universal-router), [Navigo](https://www.npmjs.com/package/navigo) or [rlite-router](https://www.npmjs.com/package/rlite-router).

### Ajax
Composi does not provide a means of aquiring remote data. If you only need to support current, ever-green browsers, you an use [fectch](). If you would like to use `fetch` with older browsers, you can provide the [WHATWG polyfill](https://github.com/whatwg/fetch). If don't need every possible feature of `fetch` and are concerned about the polyfill size, you can consider [unfetch](https://www.npmjs.com/package/unfetch). It's tiny and provides good support for the basics.

If you would prefer an approach more like tradition Ajax championed by jQuery, you can take a look at [Axios](https://www.npmjs.com/package/axios).

### Local Data Persistence
If you need to persist data locally, you could use the browser's [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage). If you need greater storage or a more sophisticated API, you might look at [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API). If you need support for older browsers, you might consider [localForage](https://www.npmjs.com/package/localforage). This is a libarary that uses whatever local dataStore is the best choice for the browser. It provides a simple interface that works the same for localStorage, WebSQL and IndexedDB.


Prior Art
---------

Composi was not conceived in a vacuum. Inspiration came for exposure to:

1. [vue](https://github.com/vuejs/vue)
2. [react](https://github.com/facebook/react)
3. [preact](https://github.com/developit/preact)
4. [domvm](https://github.com/leeoniya/domvm)
5. [yo-yo](https://github.com/maxogden/yo-yo)
6. [choo](https://github.com/choojs/choo)
7. [hyperapp](https://github.com/hyperapp/hyperapp)
