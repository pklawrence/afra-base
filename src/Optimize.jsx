const Brief = () => {
    return(
        <div className="sticky px-108 text-gray-500 text-justify font-sans anim">
            <h2 className="text-gray-600 text-lg">
                A Simple Guide to Web Performance Optimization
            </h2>
            <p className="py-2">
                In today's fast-paced digital world, a slow website is a conversion killer. Users expect 
                instant gratification, and if your site takes too long to load, they'll likely hit the back 
                button and find a faster alternative. This isn't just about user experience; search engines 
                like Google also favor fast-loading websites, impacting your search rankings.
            </p>
            <p>
                So, how do you make your website lightning-fast? It's all about Web Performance Optimization
                (WPO) – a collection of techniques aimed at making your site load quicker and run smoother. 
                Here's a simple breakdown of key areas to focus on:
            </p>
            <p>
                Why Speed Matters
            </p>
            <div>
                <ol className="list-decimal ">
                    <li>
                        Improved User Experience: Happy users stay longer, engage more, and are more likely to convert.
                    </li>
                    <li>
                        Improved User Experience: Happy users stay longer, engage more, and are more likely to convert.
                    </li>
                    <li>
                        Better SEO Rankings: Search engines prioritize fast sites, leading to increased visibility.
                    </li>
                    <li>
                        Reduced Bounce Rate: Fewer users leave your site immediately due to slow loading times.
                    </li>
                </ol>
            </div>
             <p className="py-3">
                Optimize Images:
            </p>
            <div>
                <ol className="list-decimal ">
                    <li>
                        Images often make up the largest portion of a web page's size.
                    </li>
                    <li>
                        Compress images: Use tools to reduce file size without significant loss in quality (e.g., TinyPNG, Compressor.io).
                    </li>
                    <li>
                        Choose the right format: Use JPEGs for photographs, PNGs for images with transparency, and SVGs for vector graphics.
                    </li>
                    <li>
                       Implement lazy loading: Load images only when they are about to appear in the user's viewport.
                    </li>
                </ol>

            </div>
            
            
                
            
            
                
            
               
           
            







            
        </div>
    )
}

export default Brief;