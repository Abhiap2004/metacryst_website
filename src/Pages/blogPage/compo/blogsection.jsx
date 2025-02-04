import React from 'react';
const blog = [
    {
        title: "Metal Strength",
        description: "Metal strength is related to the mechanical loads that a component can withstand before deforming or breaking. For structural components, metal strength is the first property designers think of because a component must be able to support an applied load without deforming, cracking, or fracturing.",
        link:"https://www.imetllc.com/metal-strength/",
        name:"Industrial Metallurgist",
        image:"https://scitechdaily.com/images/Metal-Strength-Concept.jpg",
    },
    {
        title: "Metal Strength",
        description: "Metal strength is related to the mechanical loads that a component can withstand before deforming or breaking. For structural components, metal strength is the first property designers think of because a component must be able to support an applied load without deforming, cracking, or fracturing.",
        link:"https://www.imetllc.com/metal-strength/",
        name:"Industrial Metallurgist",
        image:"https://cdn-icons-png.flaticon.com/512/9203/9203764.png",
    },
    {
        title: "Metal Strength",
        description: "Metal strength is related to the mechanical loads that a component can withstand before deforming or breaking. For structural components, metal strength is the first property designers think of because a component must be able to support an applied load without deforming, cracking, or fracturing.",
        link:"https://www.imetllc.com/metal-strength/",
        name:"Industrial Metallurgist",
        image:"https://cdn-icons-png.flaticon.com/512/9203/9203764.png",
    },
    {
        title: "Metal Strength",
        description: "Metal strength is related to the mechanical loads that a component can withstand before deforming or breaking. For structural components, metal strength is the first property designers think of because a component must be able to support an applied load without deforming, cracking, or fracturing.",
        link:"https://www.imetllc.com/metal-strength/",
        name:"Industrial Metallurgist",
        image:"https://cdn-icons-png.flaticon.com/512/9203/9203764.png",
    },
]
const BlogSection = () => {
  return (
    
      <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
        <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-4xl lg:text-5xl tracking-tight font-extrabold text-neutral-300"> Blog-Section</h2>
          <p className="font-light text-gray-400 sm:text-xl">
            See most recent blogs and research info in this section !
          </p>
        </div> 
        <div className="grid gap-8 lg:grid-cols-2">
            {blog.map((item , index) => (
                <article key={index} className="p-6 backdrop-blur-xl bg-white/20 rounded-lg border border-gray-400 shadow-md ">
                <div className="flex justify-between items-center mb-5 text-slate-400">
                  <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                    <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
                    </svg>
                    Tutorial
                  </span>
                  <span className="text-sm">14 days ago</span>
                </div>
                <h2 className="mb-2 text-2xl font-bold tracking-tight text-slate-300 ">
                  <a href="#">{item.title}</a>
                </h2>
                <p className="mb-5 font-light text-gray-400">
                    {item.description}
                </p>
                <div className="flex justify-between items-center text-neutral-300">
                  <div className="flex items-center space-x-4">
                    <img className="w-7 h-7 rounded-full" src={item.image} alt="Jese Leos avatar" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <a href={item.link} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                    Read more
                    <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </article> 
            ))}
         
                         
        </div>  
      </div>
 
  );
};

export default BlogSection;
