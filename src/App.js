import React from 'react'
import Home from './Views/Home'
import List from './Components/List'

function App() {
    return (
        <div className="mt-48">
            <div className="px-2">

                <div className="flex">

                    {/* Dynamic content */}
                    <div className="w-6/12 p-5 text-white">
                        <Home />
                    </div>
                    
                    {/* Divider */}
                    <div className="bg-gray-400 w-px h-auto mx-6 justify-center">
                        &nbsp;
                    </div>

                    {/* List */}
                    <div className="w-5/12 p-5 text-white">
                        <List />
                    </div>

                    <div className="w-px wr- bg-gray-400">
                        &nbsp;
                    </div>

                </div>

            </div>
        </div>
    )
}

export default App
