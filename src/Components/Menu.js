import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { useTransition, animated } from 'react-spring'
import { Link } from 'react-router-dom'


const Menu = () => {
    const [showMenu, setShowMenu] = useState(false)

    const maskTransitions = useTransition(showMenu, null, {
        from: { position: 'absolute', opacitity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
    })

    const menuTransitions = useTransition(showMenu, null, {
        from: { opacity: 0, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })
    
    return (
        <nav>
            <span className="text-3xl">
                <FontAwesomeIcon 
                    icon={faBars}
                    onClick={() => setShowMenu(!showMenu)}
                />
            </span>
            
            {maskTransitions.map(({ item, key, props }) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                    className="bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"
                    onClick={() => setShowMenu(false)}
                >
                </animated.div>
            )}

            {menuTransitions.map(({ item, key, props }) =>
                item &&
                <animated.div
                    key={key}
                    style={props}
                    className="fixed bg-black top-0 left-0 w-3/4 h-full z-50 shadow"
                >
                    <div>
                        <ul className="text-xl text-center h-64 flex flex-col justify-around">
                            <li>
                                <Link to="/" onClick={() => setShowMenu(false)}>
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about-me" onClick={() => setShowMenu(false)}>
                                    about
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" onClick={() => setShowMenu(false)}>
                                    projects
                                </Link>
                            </li>
                        </ul>
                    </div>
                    
                </animated.div>
            )}

        </nav>
    )
}

export default Menu