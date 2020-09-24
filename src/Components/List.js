import React, { useEffect, useState } from 'react'
import { 
    Link,
} from 'react-router-dom'
import { useHistory } from 'react-router-dom'

const List = () => {
    const history = useHistory()
    
    const [home, setHome] = useState("home")
    const [about, setAbout] = useState("about me")
    const [projects, setProjects] = useState("projects")
    
    useEffect(() => {        
        switch (window.location.pathname) {
            case "/":
                setHome(<b>home</b>)
                break
            case "/about-me":
                setAbout(<b>about me</b>)
                break
            case "/projects":
                setProjects(<b>projects</b>)
                break
            default:
                break
        }

        return history.listen((location) => {
            switch (location.pathname) {
                case "/":
                    setHome(<b>home</b>)
                    setAbout("about me")
                    setProjects("projects")
                    break
                case "/about-me":
                    setHome("home")
                    setAbout(<b>about me</b>)
                    setProjects("projects")
                    break
                case "/projects":
                    setHome("home")
                    setAbout("about me")
                    setProjects(<b>projects</b>)
                    break
                default:
                    break
            }
        })
        
    }, [history])

    return (
        <ul className="text-xl text-center flex flex-col justify-between h-full pt-6 pb-6">
            <li>
                <Link to="/">
                    {home}
                </Link>
            </li>
            <li>
                <Link to="/about-me">
                    {about}
                </Link>
            </li>
            <li>
                <Link to="/projects">
                    {projects}
                </Link>
            </li>
        </ul>
    )
}

export default List