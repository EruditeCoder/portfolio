import React from 'react'
import Home from './Views/Home'
import List from './Components/List'

function App() {
    return (
        <div className="mt-48">
            <div className="px-2">

                <div className="flex">

                    <div className="w-7/12 p-5 text-white">
                        <Home />
                    </div>
                    
                    {/* Divider */}
                    <div className="bg-gray-400 w-px h-auto justify-center mx-6">&nbsp;</div>

                    <div className="w-5/12 p-5 text-white">
                        <List />
                    </div>

                </div>

            </div>
        </div>
    )
}

export default App
