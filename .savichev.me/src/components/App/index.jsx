import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import BaseLayout from '../BaseLayout/index.jsx'

import Main from '../Main/index.jsx'
import About from '../About/index.jsx'
import Skills from '../Skills/index.jsx'
import Blog from '../Blog/index.jsx'
import Contacts from '../Contacts/index.jsx'

import './index.styl'

const YaCounter = (prevState, nextState) => {
    yaCounter33518188.hit(
        nextState.location.pathname,
        {
            referer: prevState.location.pathname
        }
    );
};


// TODO: 404 страницу сделать
class App extends React.Component {
    render() {
        return (
            <Router history={browserHistory}>
                <Route path="/" component={BaseLayout} onChange={YaCounter}>
                    <IndexRoute component={Main}/>
                    <Route path="about" component={About}/>
                    <Route path="skills" component={Skills}/>
                    <Route path="blog" component={Blog}/>
                    <Route path="contacts" component={Contacts}/>
                </Route>
            </Router>
        );
    }
}

export default App
