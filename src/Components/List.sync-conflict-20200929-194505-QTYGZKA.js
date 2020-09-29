import React from 'react'
import { Link } from 'react-router-dom'
import ListToggle from './ListToggle'

const List = () => {
    return (
        <ul className="text-xl text-center flex flex-col justify-between h-full pt-6 pb-6"
            onClick={(event) => ListToggle(event)}>
            <Link to="/">
                <li>
                    home
                </li>
            </Link>
            <Link to="/about-me">
                <li>
                    about me
                </li>
            </Link>
            <Link to="/projects">
                <li>
                    projects
                </li>
            </Link>
        </ul>
    )
}

export default List