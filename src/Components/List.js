import React from 'react'
import { 
    BrowserRouter as Router,
    Link
} from 'react-router-dom'

const List = () => {
    return (
        <ul className="text-xl text-center flex flex-col justify-between h-full pt-6 pb-6">
            <li>
                <Link to="/">
                    home
                </Link>
            </li>
            <li>
                <Link to="/about-me">
                    about me
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    projects
                </Link>
            </li>
        </ul>
    )
}

export default List