import Darkmode from "./Darkmode";
function MyName() {
  return (
    <main className="sticky px-108 py-5 font-sans anim text-gray-500 dark:text-white ">
      <div className=" flex space-x-105">
        <div className="">
          <div className={" text-2xl"}>Lawrence Cudjoe</div>
          <div className="text-gray-400 ">Frontend Developer</div>
        </div>
        <div className="">
          <Darkmode />
        </div>
      </div>
      <div className={" text-justify py-4 "}>
        <div>
          I specialize in crafting web applications that prioritize user
          experience. Leveraging{" "}
          <span className="text-gray-400 italic">JavaScript</span> and{" "}
          <span className="text-gray-400 italic">React</span>, I focus on
          developing clean, efficient code that translates directly into
          intuitive and responsive interfaces.
        </div>
        <div className="py-4">
          My approach is hands-on: I believe in{" "}
          <span className="underline underline-offset-2">
            learning by doing
          </span>
          . This means constantly iterating, deploying code, analyzing its
          performance, and refining it based on real-world usage. I'm committed
          to no-fluff development, delivering straightforward, functional
          interfaces that consistently meet user expectations.
        </div>
      </div>
    </main>
  );
}

export default MyName;
