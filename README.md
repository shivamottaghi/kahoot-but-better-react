# react-project

## An attempt to make some documentation
Well I started to read some documentation instead of just diving into the project this time.
To start working with react very fast we can just add the following scripts to our project:

```html
<script src="https://unpkg.com/react@18/umd/react.production.min.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js" crossorigin></script>
```

### JSX
while reading about how to work with react I encountered JSX. JSX is a syntax extension of javascript.
It was also recommended to use it with react.

Here is an example of what JSX looks like:
```jsx
const name = 'Josh Perez';
const element = <h1>Hello, {name}</h1>;
```
We can use any meaningful js between `{}` in JSX. After compilation, all the JSX code would turn
into regular javaScript.

JSX tags may contain children
```jsx
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

JSX prevents injection attacks so it is safe to use user inputs in it.

These two examples are exactly identical:
```jsx
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```
This object is called a React element

```react
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

The quickest way to add JSX to your project is by adding the following code to your html file:

```html
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
```
You can also do it using npm
1. npm init -y
2. npm install babel-cli@6 babel-preset-react-app@3

To run JSX processor create a src folder and run the following command in it

`npx babel --watch src --out-dir . --presets react-app/prod`

[To get familiar with some concepts before starting to work with react](https://reactjs.org/docs/glossary.html#single-page-application)

### Create React App

 It sets up your environment in a way that u can use the latest javaScript features and optimize your app production.
 
To start the project run:
```
npx create-react-app my-app
cd my-app
npm start
```

I had create-react-app globally installed before, the new version doesn't support global installation, so I had to
uninstall it before starting to work with it.

I followed the steps after that in [this link](https://reactjs.org/docs/hello-world.html) to display hello world.

### Functional components

>> A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX). 
> [Source](https://www.geeksforgeeks.org/differences-between-functional-components-and-class-components-in-react/#:~:text=A%20functional%20component%20is%20just,method%20used%20in%20functional%20components.)

example:

```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Welcome name="Sara" />;
root.render(element);
```

- React treats components starting with lowercase letters as DOM tags. 
- Components can refer to other components in their output.

### Class components
You can convert a function component to a class in five steps:

1. Create an ES6 class, with the same name, that extends React.Component.
2. Add a single empty method to it called render().
3. Move the body of the function into the render() method.
4. Replace props with this.props in the render() body.
5. Delete the remaining empty function declaration.

#### Adding Local State to a Class example:

```js
class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```
To :
```js
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
```

#### Adding Lifecycle Methods to a Class
We want to make the clock update itself without us telling it to do so or set interval.

I have to work on these later
- mounting and unmounting in react
- setState()
- what is props?
- handling events
