import React from 'react'
import Home from './Views/Home'

function App() {
    return (
        <div className="mt-48">
            <div className="px-2">
                <div className="flex -mx-2">
                    <div className="w-2/6 px-2">
                        <div className="bg-gray-400">
                            <Home />
                        </div>
                    </div>
                    <div className="w-2/6 px-2 pl-10 border-l-2 bg-gray-400">
                        <div className="bg-blue-400 h-full w-1 justify-center"></div>
                    </div>
                    <div className="w-2/6 px-2 pr-10">
                        <div className="bg-gray-400">
                            List
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
