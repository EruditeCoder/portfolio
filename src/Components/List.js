import React from 'react'
import { Link } from 'react-router-dom'
import ListToggle from './ListToggle'

const List = () => {
    
    return (
        <ul className="text-xl text-center flex flex-col justify-between h-full pt-6 pb-6"
            onClick={(event) => ListToggle(event)}>
            <li>
                <Link to="/">
                    home
                </Link>
            </li>
            <li>
                <Link to="/about-me">
                    about
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