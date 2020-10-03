import React from 'react'
import Home from './Views/Home'
import About from './Views/About'
import Projects from './Views/Projects'
import List from './Components/List'
import Links from './Components/Links'
import Menu from './Components/Menu'
import { 
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

const App = () => {
    return (
        <main>
        
            <div className="text-white min-h-screen md:min-h-0 flex flex-col md:flex-row">
                <Router>
                    <div className="px-2 pt-12 md:pt-0 md:mt-48 flex-grow">

                        <div className="flex flex-col md:flex-row md:h-64">

                            {/* Dynamic content */}
                            <div className="w-full md:w-6/12 p-6">
                                <Switch>
                                    
                                    <Route exact path="/">
                                        <Home/>
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
                            <div className="bg-gray-400 w-px mx-6 h-full hidden md:block">
                                &nbsp;
                            </div>

                            {/* List */}
                            <div className="w-5/12 p-5 mr-12 hidden md:block">
                                <List/>
                            </div>

                            {/* Links */}
                            <div className="hidden md:block">
                                <Links />
                            </div>

                        </div>

                    </div>
                
                <div className="mb-5 md:hidden">
                    <Links />
                </div>

                <div class="md:hidden fixed top-0 right-0">
                    <Menu />
                </div>
                </Router>
            </div>

        </main>
    )
}

export default App
