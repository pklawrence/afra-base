import DarkMode from "./components/DarkMode";

function MyName({isDarkMode, cb}){
    return(
        <section className='content'>
            <div className="intro">
                <div className="">
                    <div className={"name"}>Lawrence Cudjoe</div>
                    <div className="field">Frontend Developer</div>
                </div>
                <div>
                    <DarkMode isDarkMode={isDarkMode} cb={cb} />
                </div>
            </div>
            <div className={"brief "} >
                <div>
                I specialize in crafting web applications that prioritize user experience. Leveraging <span className="emphasis">JavaScript</span> and <span className="emphasis">React</span>, 
                I focus on developing clean, efficient code that translates directly into intuitive and responsive interfaces.

                </div>
                <div className="seperate">
                My approach is hands-on: I believe in <span className="focus">learning by doing</span>. This means constantly iterating, deploying code, analyzing its performance, 
                and refining it based on real-world usage.
                I'm committed to no-fluff development, delivering straightforward, functional interfaces that consistently meet user expectations.
                </div>
            </div>
        </section>
    )
}

export default MyName;