import React from 'react'

const Links = () => {
    return (
        <div className="flex flex-col justify-between h-full pt-8 pb-8">
            
            {/* Resume */}
            <a href="./docs/Resume.pdf">
                <img src="./img/file-icons/File-Icon-256px.png" alt="Resume"
                    height="40px" width="40px"/>
            </a>

            {/* GitHub */}
            <a href="https://github.com/EruditeCoder">
                <img src="./img/github-icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub"
                    height="40px" width="40px"/>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/aleman-marcos/">
                <img src="./img/linkedin-icons/LinkedIn-icon-128px.png" alt="LinkedIn"
                    height="40px" width="40px"/>
            </a>

        </div>
    )
}

export default Links