![dep](https://img.shields.io/david/dwqs/react-async-component.svg) ![npm-version](https://img.shields.io/npm/v/react-async-component.svg) ![license](https://img.shields.io/npm/l/react-async-component.svg) ![bower-license](https://img.shields.io/bower/l/react-async-component.svg)

# react-async-compoment

Async component loaded based webpack 3 for react-router 4.

## Install

It is recommended to run webpack on node 6.x or higher.

Install the pkg with npm:

```
npm install react-async-component --save
```

or yarn

```
yarn add react-async-component
```

or bower

```
bower install react-async-component
```

## Usage

For react-router 4:

```
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {getAsyncComponent} from 'react-async-component';

// code splitting in webpack 3: https://webpack.js.org/guides/code-splitting/#dynamic-imports
const App = () => import(/* webpackChunkName: "main" */ '../general/app/index');
const Info = () => import(/* webpackChunkName: "info" */ '@components/info/index');

const RootApp = () => {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={getAsyncComponent(App)}></Route>
                <Route path='/info' component={getAsyncComponent(Info)}></Route>
                <Route render={() => <div>404 not found</div>}></Route>
            </Switch>
        </Router>
    );
};

ReactDOM.render(
    RootApp,
    document.getElementById('app')
);
```

## License
MIT