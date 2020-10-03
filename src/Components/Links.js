import React from 'react'

const Links = () => {
    return (
        <div className="flex md:flex-col justify-around md:h-full md:pt-8 md:pb-8">
            
            {/* Resume */}
            <a href="./docs/Resume.pdf">
                <img src="./img/file-icons/File-Icon-256px.png" alt="Resume"
                    height="37px" width="37px"/>
            </a>

            {/* GitHub */}
            <a href="https://github.com/EruditeCoder">
                <img src="./img/github-icons/GitHub-Mark-Light-120px-plus.png" alt="GitHub"
                    height="37px" width="37px"/>
            </a>

            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/aleman-marcos/">
                <img src="./img/linkedin-icons/LinkedIn-icon-128px.png" alt="LinkedIn"
                    height="37px" width="37px"/>
            </a>

        </div>
    )
}

export default Links