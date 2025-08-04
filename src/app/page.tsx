"use client";

import dynamic from 'next/dynamic';

// Replace your existing component imports with these dynamic imports:
const GlareHover = dynamic(() => import("@/blocks/Animations/GlareHover/GlareHover"), { ssr: false });
const FaultyTerminal = dynamic(() => import("@/blocks/Backgrounds/FaultyTerminal/FaultyTerminal"), { ssr: false });
const LightRays = dynamic(() => import("@/blocks/Backgrounds/LightRays/LightRays"), { ssr: false });
const RippleGrid = dynamic(() => import("@/blocks/Backgrounds/RippleGrid/RippleGrid"), { ssr: false });
const GlassSurface = dynamic(() => import("@/blocks/Components/GlassSurface/GlassSurface"), { ssr: false });
const TiltedCard = dynamic(() => import("@/blocks/Components/TiltedCard/TiltedCard"), { ssr: false });
const CurvedLoop = dynamic(() => import("@/blocks/TextAnimations/CurvedLoop/CurvedLoop"), { ssr: false });
const SplitText = dynamic(() => import("@/blocks/TextAnimations/SplitText/SplitText"), { ssr: false });


import Image from "next/image";
import { ProjectModal, ShowMyCV } from "./_dialog/page";


const handleAnimationComplete = () => {
  if (typeof window !== 'undefined') {
  }
};
export default function Home() {
  return (
    <>



        
      <div className="h-[70vh] md:h-[120vh] w-full flex items-center justify-center relative">


        <GlassSurface
          className="!absolute !w-[70%] z-10 top-6 left-1/2 -translate-x-[50%] px-6 hidden md:flex"
          height={60}
          displace={15}
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0.7}
          mixBlendMode="screen"
        >

          <div className="w-full flex items-center justify-between text-white">

          <span className="font-bold text-xl">Portfolio</span>
          <div>
            <a href="#project"><span className="font-bold text-lg me-5 cursor-pointer">Projects</span></a>
            <a href="#contact"><span className="font-bold text-lg cursor-pointer">Contact</span></a>
          </div>

          </div>

        </GlassSurface>


        <GlassSurface
          className="!absolute !w-[70%] z-10 top-6 left-1/2 -translate-x-[50%] px-6 flex md:hidden"
          height={60}
          displace={15}
          distortionScale={-150}
          redOffset={5}
          greenOffset={15}
          blueOffset={25}
          brightness={60}
          opacity={0.7}
          mixBlendMode="screen"
        >

          <div className="w-full flex items-center justify-center text-white">

          <span className="font-bold text-xl">Muhammed Portfolio</span>


          </div>

        </GlassSurface>


        <FaultyTerminal
          scale={2}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.2}
          pause={false}
          scanlineIntensity={1}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0}
          tint="#424242"
          mouseReact={true}
          mouseStrength={0.5}
          pageLoadAnimation={false}
          brightness={1}
        />


        <div className="absolute top-1/2 w-full  text-white transform -translate-y-1/2 p-8 rounded-lg shadow-lg drop-shadow-xl flex flex-col items-center justify-center">


        <SplitText
          text="Hi, I'm Muhammed Gharib"
          className="md:text-6xl font-semibold text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />

        <SplitText
          text="Frontend Developer"
          className="md:text-4xl font-semibold text-center mt-2"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
          onLetterAnimationComplete={handleAnimationComplete}
        />



        <div className="mx-auto flex items-center  pt-10">


          <ShowMyCV>
          <GlareHover
            width={"200"}
            height={"50"}
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            className="rounded-xl p-3 px-6 w-35 bg-white/10 backdrop-blur-lg [box-shadow:inset_0_0_10px_2px_rgba(255,255,255,0.3)] border border-white !bg-[rgba(0,0,0,0.7)] hover:scale-[102%] !transtion duration-300"
          >
          <h2 className="font-bold">Show CV</h2>
          </GlareHover>
          </ShowMyCV>

          <a href="#project">
          <GlareHover
            width={"200"}
            height={"50"}
            glareColor="#ffffff"
            glareOpacity={0.3}
            glareAngle={-30}
            glareSize={300}
            transitionDuration={800}
            playOnce={false}
            className="rounded-xl ms-10 p-3 px-6 w-35 bg-white/10 backdrop-blur-lg [box-shadow:inset_0_0_10px_2px_rgba(255,255,255,0.3)] border border-white !bg-[rgba(0,0,0,0.7)]  hover:scale-[102%] !transtion duration-300"
          >
          <h2 className="font-bold">My Projects</h2>
          </GlareHover>
          </a>

        </div>
        </div>
      </div>








      <div className="relative h-40 md:h-80 lg:h-100 w-full -mt-10 lg:-mt-20 xl:-mt-40  z-20">
          <div className="pointer-events-none absolute top-[0%] left-[50%] translate-x-[-50%] transform scale-x-180 md:scale-x-420 w-100 lg:w-150 xl:w-200 !h-full  rounded-t-full bg-gradient-to-r from-black via-white to-black z-1"></div>
          <div className="pointer-events-none absolute top-[0.7%] left-[50%] translate-x-[-50%] transform scale-x-180 md:scale-x-420 w-100 lg:w-150 xl:w-200 !h-full  rounded-t-full bg-black z-1"></div>
          <div className="pointer-events-none absolute top-[0.7%] left-[50%] translate-x-[-50%] transform scale-x-180 md:scale-x-420 w-100 lg:w-150 xl:w-200 !h-full  rounded-t-full bg-black  z-2">
              <LightRays
                raysOrigin="top-center"
                raysColor="#ffffff"
                raysSpeed={1.5}
                lightSpread={0.8}
                rayLength={0.7}
                followMouse={true}
                mouseInfluence={0.1}
                noiseAmount={0.1}
                distortion={0.05}
                className="rounded-t-full"
              />
          </div>


          <div className="absolute top-[10%] lg:top-[20%] lg:top-[20%] 2xl:top-[50%] left-[54%] translate-x-[-50%] transform  w-full !h-full  rounded-t-full z-2">
            <CurvedLoop
                      marqueeText="✦ React.JS ✦ Next.JS ✦ Javascript ✦ Typescript ✦ Tailwind ✦ Bootstrap ✦ Redux ✦ Jquery ✦ HTML5 ✦ CSS ✦ Git ✦ GitHub ✦ shadcn ✦ NextAuth.js "
                      speed={1}
                      curveAmount={-250}
                      direction="right"
                      interactive={true}
                      className="text-6xl"
                    />
          </div>
          

        </div>















      <div id="project" className="relative w-full bg-black -mt-20 text-white pt-20">
        <h2 className="text-center font-bold text-4xl">PROJECTS</h2>


      <div className="flex flex-wrap px-8 py-7 pb-20">



        <ProjectModal
            title="Netflix clone"
            description=  {
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Built a full-featured Netflix-style web application using Next.js, TypeScript, Tailwind CSS, and shadcn/ui for modern responsive UI.</li>
                  <li>Implemented secure user authentication (sign in, sign up, sign out) using NextAuth.js with Auth0 and credentials provider.</li>
                  <li>Integrated TMDb API to fetch and display trending movies and TV shows dynamically.</li>
                  <li>Developed personalized user watchlists with Supabase, storing movie IDs per user for persistent state.</li>
                  <li>Added keyword-based search functionality to find movies and TV shows across the TMDb database.</li>
                  <li>Used Axios for efficient and reusable API calls across the application.</li>
                  <li>Ensured responsive and accessible design across desktop and mobile devices.</li>
                </ul>
              </>
            }  
            screen="/NetflixClone2.png"
            demo="https://streaming-app-five-khaki.vercel.app/"
            github="https://github.com/MuhammedMGX/Netflix-clone"
          >
        <div className="w-full md:w-1/3 relative group p-2">
          <div className="flex gap-x-2 absolute -translate-y-0 opacity-0 group-hover:-translate-y-10 group-hover:opacity-100 transition duration-400">
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Next.JS</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Typescript</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Tailwind Css</span>
          </div>
          <div className="aspect-video relative">
            <TiltedCard
              imageSrc="/NetflixClone1.png"
              altText="Netflix Clone"
              captionText="Netflix Clone"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-nowrap ">
                    <span className="absolute top-5 left-5 bg-[rgba(0,0,0,0.5)] p-2 px-3 font-bold text-xs rounded-lg">Netflix Clone</span>
                </div>
              }
            />
          </div>
        </div>
        </ProjectModal>




          <ProjectModal
            title="E commerce"
            description=  {
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Designed and developed a fully functional e-commerce platform with React.js, Tailwind CSS, and Redux.</li>
                  <li>Implemented user authentication (login, registration, password reset) using Formik and Yup.</li>
                  <li>Built a dynamic shopping cart and multi-step checkout process, integrating payment gateways via Axios.</li>
                  <li>Optimized responsive design for mobile and desktop using CSS Flexbox and Grid, improving usability across devices.</li>
                  <li>Managed state with Redux and Context API, fetching product data from RESTful APIs.</li>
                  <li>More features like User profile, Wishlist, Related products, Settings, Search, Order history, User Addresses.</li>
                </ul>
              </>
            }  
            screen="/cart2.png"
            demo="https://freshcart-theta-six.vercel.app/"
            github="https://github.com/MuhammedMGX/FreshCart-React"
          >
        <div className="w-full md:w-1/3 relative group p-2">
          <div className="flex gap-x-2 absolute -translate-y-0 opacity-0 group-hover:-translate-y-10 group-hover:opacity-100 transition duration-400">
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">React.JS</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Javacript</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Tailwind Css</span>
          </div>
          <div className="aspect-video relative">
            <TiltedCard
              imageSrc="/cart1.png"
              altText="E commerce"
              captionText="E commerce"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-nowrap relative w-full h-full flex">
                    <span className="absolute top-5 left-5 bg-[rgba(0,0,0,0.5)] p-2 px-3 font-bold text-xs rounded-lg">E commerce</span>
                </div>
              }
            />
          </div>
        </div>
        </ProjectModal>





                  <ProjectModal
            title="Dashboard"
            description=  {
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Built a modern analytics dashboard using Next.js, TypeScript, Tailwind CSS, and shadcn/ui for a responsive and accessible user interface.</li>
                  <li>Implemented stacked bar charts with Recharts, featuring custom tooltips and dynamic date formatting for enhanced data visualization.</li>
                  <li>Designed reusable card, chart container, and layout components for scalable and maintainable front-end architecture.</li>
                  <li>Utilized CSS variables and theme-based styling to enable easy customization of chart colors and UI elements.</li>
                  <li>Ensured responsive design and performance optimization across desktop and mobile devices for seamless user experience.</li>
                </ul>
              </>
            }  
            screen="/Dashboard2.png"
            demo="https://dashboard-nine-blond-19.vercel.app/dashboard"
            github="https://github.com/MuhammedMGX/Dashboard"
          >
        <div className="w-full md:w-1/3 relative group p-2">
          <div className="flex gap-x-2 absolute -translate-y-0 opacity-0 group-hover:-translate-y-10 group-hover:opacity-100 transition duration-400">
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Next.JS</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Typescript</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Tailwind Css</span>
          </div>
          <div className="aspect-video relative">
            <TiltedCard
              imageSrc="/Dashboard1.png"
              altText="Dashboard"
              captionText="Dashboard"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-nowrap relative w-full h-full flex">
                    <span className="absolute top-5 left-5 bg-[rgba(0,0,0,0.5)] p-2 px-3 font-bold text-xs rounded-lg">Dashboard</span>
                </div>
              }
            />
          </div>
        </div>
        </ProjectModal>






              <ProjectModal
            title="Weather"
            description=  {
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Built a responsive weather web application using HTML, CSS (Bootstrap 5), and JavaScript, featuring a modern and intuitive interface.</li>
                  <li>Integrated WeatherAPI to fetch real-time weather data, including current conditions and a 3-day forecast.</li>
                  <li>Implemented geolocation support to automatically detect and display weather based on the user's current location.</li>
                  <li>Added search functionality to find weather information for any city worldwide.</li>
                  <li>Designed responsive layouts with Bootstrap and custom CSS for an optimized experience on both desktop and mobile devices.</li>
                  <li>Included social media integration and a subscription feature for better user engagement.</li>
                </ul>
              </>
            }  
            screen="/Weather2.png"
            demo="https://weather-js-gilt.vercel.app/"
            github="https://github.com/MuhammedMGX/Weather-js"
          >
         <div className="w-full md:w-1/3 relative group p-2">
          <div className="flex gap-x-2 absolute -translate-y-0 opacity-0 group-hover:-translate-y-10 group-hover:opacity-100 transition duration-400">
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Javascript</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Html</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Css</span>
          </div>
          <div className="aspect-video relative">
            <TiltedCard
              imageSrc="/Weather1.png"
              altText="Weather"
              captionText="Weather"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-nowrap relative w-full h-full flex">
                    <span className="absolute top-5 left-5 bg-[rgba(0,0,0,0.5)] p-2 px-3 font-bold text-xs rounded-lg">Weather</span>
                </div>
              }
            />
          </div>
        </div>
        </ProjectModal>





        <ProjectModal
            title="DevFolio"
            description=  {
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Developed a responsive portfolio website using HTML, CSS, Bootstrap, and JavaScript.</li>
                  <li>Integrated animated typing effects, progress bars, and interactive filtering for a dynamic user experience.</li>
                  <li>Designed a clean, modern UI with smooth navigation and mobile-friendly layout.</li>
                  <li>Implemented a testimonial slider and hover effects to enhance engagement.</li>
                  <li>Built to showcase professional skills, projects, and services effectively.</li>
                </ul>
              </>
            }  
            screen="/DevFolio2.png"
            demo="https://weather-js-gilt.vercel.app/"
            github="https://github.com/MuhammedMGX/Weather-js"
          >
        <div className="w-full md:w-1/3 relative group p-2">
          <div className="flex gap-x-2 absolute -translate-y-0 opacity-0 group-hover:-translate-y-10 group-hover:opacity-100 transition duration-400">
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Html</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Css</span>
          </div>
          <div className="aspect-video relative">
            <TiltedCard
              imageSrc="/DevFolio1.png"
              altText="DevFolio"
              captionText="DevFolio"
              containerHeight="100%"
              containerWidth="100%"
              imageHeight="100%"
              imageWidth="100%"
              rotateAmplitude={12}
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <div className="text-nowrap relative w-full h-full flex">
                    <span className="absolute top-5 left-5 bg-[rgba(0,0,0,0.5)] p-2 px-3 font-bold text-xs rounded-lg">DevFolio</span>
                </div>
              }
            />
          </div>
        </div>
        </ProjectModal>






      </div>

     </div>








<div id="contact" className="w-full relative h-[700px] bg-black flex items-center overflow-hidden">
        

<div className="scale-[530%] mx-auto">
  <RippleGrid
    enableRainbow={false}
    gridColor="#ffffff"
    rippleIntensity={0.05}
    gridSize={10}
    fadeDistance={2}
    gridThickness={15}
    mouseInteraction={true}
    mouseInteractionRadius={1.2}
    opacity={0.8}
  />
</div>



  <div className="absolute h-full w-full flex flex-col items-center justify-center text-white -mt-20">

        <h2 className="text-center font-bold text-4xl py-10 text-white">CONTACT ME</h2>

        <form action="https://formspree.io/f/xjkoabvp" method="POST" className="gap-y-4 flex flex-col md:w-1/2 mx-auto bg-black bg-[#171717] p-10 rounded-2xl shadow-xl">

        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm py-1">Name</label>
          <input className="border rounded-lg p-2 border-[#424242]" type="text" name="name" placeholder="Your Name" required />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm py-1">Email</label>
          <input className="border rounded-lg p-2 border-[#424242]" type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm py-1">Message</label>
          <textarea className="border rounded-lg p-2 border-[#424242]" name="message" placeholder="Your Message" required></textarea>
        </div>

          <button className="bg-white text-black rounded-lg py-1 font-medium my-5 cursor-pointer" type="submit">Send Message</button>
        </form>


  </div> 

  </div>












  <div className="pb-10 md:px-20 px-10 flex flex-wrap bg-black  text-white">

    <div className="md:flex-row flex-col flex flex-wrap w-full md:items-center items-start justify-between py-5">

    <div className="flex ">

      <a href="https://linkedin.com/in/muhammedmgx"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin bg-[#1A1A1A] hover:opacity-70 p-2 w-11 h-11 rounded-full cursor-pointer transition"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8 11v5" /><path d="M8 8v.01" /><path d="M12 16v-5" /><path d="M16 16v-3a2 2 0 1 0 -4 0" /><path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" /></svg></a>
      <a href="https://github.com/MuhammedMGX"><svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="white"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github bg-[#1A1A1A] hover:opacity-70 p-2 w-11 h-11 rounded-full mx-3 cursor-pointer transition"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg></a>
      
      <div className=" items-center bg-[#242424] rounded-full hidden md:flex">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail bg-[#1A1A1A] hover:opacity-70 p-2 w-11 h-11 rounded-full cursor-pointer transition"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>    
      <p className="px-2 pe-4">muhammedgharib3000@gmail.com</p>
      </div>

    </div>

    <div className=" items-center bg-[#242424] rounded-full flex md:hidden my-3">
      <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  className="icon icon-tabler icons-tabler-outline icon-tabler-mail bg-[#1A1A1A] hover:opacity-70 p-2 w-11 h-11 rounded-full cursor-pointer transition"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" /><path d="M3 7l9 6l9 -6" /></svg>    
      <p className="px-2 pe-4">muhammedgharib3000@gmail.com</p>
    </div>

      
    <p className="flex ">© 2025 Muhammed Gharib. All rights reserved.</p>
    </div>

    <div className="w-full">
      <p className="font-bold">Let's build something amazing together. </p>
      <p className="text-sm mt-4 opacity-60">Designed & Built by Muhammed Gharib</p>
      <p className="text-sm opacity-60">Built with Next.js & Tailwind CSS, deployed on Vercel</p>
      
    </div>

    

  </div>

    
    </>
  );
}
