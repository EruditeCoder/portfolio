import React from 'react'
import Home from './Views/Home'
import List from './Components/List'
import Links from './Components/Links'

function App() {
    return (
        <div className="mt-48 text-white">
            <div className="px-2">

                <div className="flex h-64">

                    {/* Dynamic content */}
                    <div className="w-6/12 p-5">
                        <Home />
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
        </div>
    )
}

export default App
