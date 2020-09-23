import React from 'react'
import Home from './Views/Home'
import About from './Views/About'
import Projects from './Views/Projects'
import List from './Components/List'
import Links from './Components/Links'
import { 
    BrowserRouter as Router,
    Link,
    Switch,
    Route
} from 'react-router-dom'

function App() {
    return (
        <div className="mt-48 text-white">
            <Router>
                <div className="px-2">

                    <div className="flex h-64">

                        {/* Dynamic content */}
                        <div className="w-6/12 p-5">
                            <Switch>
                                <Route exact path="/">
                                    <Home />
                                </Route>
                                <Route exact path="/about-me">
                                    <About />
                                </Route>
                                <Route exact path="/projects">
                                    <Projects />
                                </Route>
                            </Switch>
                        </div>

                        {/* Divider */}
                        <div className="bg-gray-400 w-px mx-6 h-full justify-center">
                            &nbsp;
                        </div>

                        {/* List */}
                        <div className="w-5/12 p-5 mr-12">
                            <List />
                        </div>

                        {/* Links */}
                        <div>
                            <Links />
                        </div>

                    </div>

                </div>
            </Router>
        </div>
    )
}

export default App
