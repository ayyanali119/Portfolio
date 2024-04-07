
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id='about'>
        <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 
  py-24 items-center justify-center flex-col">
    <Image
      className="lg:w-2/6 md:w-3/6 mb-10 object-cover 
      object-center rounded mx-auto w-[300px] h-[400px]"
      alt="hero"
      src={require("../../../public/assests/picture/logo.png")}
      width={300}
      height={500}
    />
    <div className="text-center 
    lg:w-2/3 w-full">
      <h1 className="title-font sm:text-4xl 
      text-3xl mb-4 font-medium text-gray-900">
        About Me
      </h1>
      
      <p className="mb-5 leading-relaxed">
        I'm Ayyan Ali,a UI/UX designer dedicated to crasfting intuitive and visually stunning digital
        experiences.With a passion for user-centric design,I transform ideas into functional and beautiful
        interfaces.Let's collaborate and shape the future of design together.
      </p>
      <p className="mb-5 leading-relaxed bg-indigo-100">
        <h2> Contact </h2>
        Email: sarfrazshabana3332@gmail.com 
        ,
       Phone No: 03039236301
        
      </p>
      <div className="flex justify-center">
           <a href={"/assests/Email/Document1.rtf"}>
        <button className="inline-flex text-white bg-indigo-500 
        border-0 py-2 px-6 
        focus:outline-none hover:bg-indigo-600 rounded text-lg">
          View Email
        </button>
        
        </a>
      </div>
      
    </div>
  </div>
</section>

    </div>
  )
}

export default About