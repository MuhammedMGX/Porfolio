"use client";

import dynamic from 'next/dynamic';
import { useEffect, useRef, useState } from 'react';

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
import ClientOnly from "./components/ClientOnly";
import { ProjectModal, ShowMyCV } from "./_dialog/page";
import Threads from '@/blocks/Backgrounds/Threads/Threads';


const handleAnimationComplete = () => {};


function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)")
    setIsDesktop(mq.matches)
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches)
    mq.addEventListener("change", handler)
    return () => mq.removeEventListener("change", handler)
  }, [])
  return isDesktop
}



export default function Home() {
  const isDesktop = useIsDesktop()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return () => clearTimeout(timer);
}, []);


  return (
    <>



    {/* Hero */}
      <div className="h-[110vh] w-full flex items-center justify-center relative">

        {isDesktop ? (
          <GlassSurface
            className="!absolute !w-[70%] z-10 top-6 left-1/2 -translate-x-[50%] px-6"
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
        ) : (
          <GlassSurface
            className="!absolute !w-[70%] z-10 top-6 left-1/2 -translate-x-[50%] px-6"
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
        )}

{!isLoading && (<FaultyTerminal
          scale={1.5}
          digitSize={1.2}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.08}
          tint="#424242"
          mouseReact
          mouseStrength={0.5}
          brightness={1}
        /> )}
        


        <div className="absolute top-1/2 w-full  text-white transform -translate-y-1/2 p-8 rounded-lg shadow-lg drop-shadow-xl flex flex-col items-center justify-center">

        <SplitText
          text="Hi, I'm Muhammed Gharib"
          className="text-3xl md:text-6xl font-semibold whitespace-nowrap"
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
          <h2 className="font-bold">Resume</h2>
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
          <h2 className="font-bold">Projects</h2>
          </GlareHover>
          </a>

        </div>
        </div>
      </div>








    {/* technologies */}
 <div className="relative h-30 md:h-70 -mt-10">

<div className="relative  w-ful h-20 rounded-t-[200%]    bg-gradient-to-r from-muted/1 via-white to-muted/1">
    <div className="absolute top-1 w-full h-20 rounded-t-[200%] bg-black overflow-visible"></div>
    <div className="pointer-events-none absolute top-0 left-[50%] translate-x-[-50%] transform scale-x-210 w-80 h-50 md:scale-x-420 md:w-100 md:h-100  rounded-full bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.2),_transparent_18%)] z-2"></div>
</div>

    <div className='absolute top-20 md:top-40 w-full'>
          <CurvedLoop
              marqueeText="✦ React.JS ✦ Next.JS ✦ Javascript ✦ Typescript ✦ Tailwind ✦ Bootstrap ✦ Redux ✦ Jquery ✦ HTML5 ✦ CSS ✦ Git ✦ GitHub ✦ shadcn ✦ NextAuth.js "
              speed={1}
              curveAmount={-170}
              direction="left"
              interactive={true}
              className=" text-6xl  "
            />
    </div>
</div>







    {/* projects */}  
      <div id="project" className="relative w-full bg-black text-white pt-20 ">
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
        <div className="w-full md:w-1/3 relative group p-3 hover:z-10">
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
            title="Cartify"
            description=  {
              <>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Built a full-featured e-commerce SPA with React 19, TypeScript, and Vite, using a feature-based architecture for scalability</li>
                  <li>Implemented JWT authentication with protected/public route guards, including login, registration, and a full forgot-password flow (email → verification code → reset)</li>
                  <li>Designed a responsive UI system with shadcn/ui and Tailwind CSS v4, including a custom animated dark/light theme toggle using the View Transitions API</li>
                  <li>Built product browsing with dynamic search, category/brand filtering, and sorting, backed by TanStack Query for caching and request deduplication</li>
                  <li>Developed a shopping cart and wishlist system with Redux Toolkit, syncing real-time quantity updates, coupon application, and persisted state to a REST API</li>
                  <li>Created a account dashboard with a collapsible sidebar, breadcrumb navigation, order history, address management, and password/profile settings</li>
                  <li>Implemented a product reviews system (create, edit, delete) with optimistic UI feedback and star-rating input</li>
                  <li>Optimized performance with route-based code splitting and image loading priorities, achieving a 99 Lighthouse performance score</li>
                  <li>Handled form validation across the app using React Hook Form and Zod schemas</li>
                </ul>
              </>
            }  
            screen="/cartify2.png"
            demo="https://cartify-seven-liart.vercel.app/"
            github="https://github.com/MuhammedMGX/Cartify.git"
          >
        <div className="w-full md:w-1/3 relative group p-3 hover:z-10">
          <div className="flex gap-x-2 absolute -translate-y-0 opacity-0 group-hover:-translate-y-10 group-hover:opacity-100 transition duration-400">
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">React.JS</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Typescript</span>
            <span className="text-xs border p-1 rounded-lg font-bold px-2 bg-black">Tailwind Css</span>
          </div>
          <div className="aspect-video relative">
            <TiltedCard
              imageSrc="/cartify1.png"
              altText="Cartify"
              captionText="Cartify"
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
                    <span className="absolute top-5 left-5 bg-[rgba(0,0,0,0.5)] p-2 px-3 font-bold text-xs rounded-lg">Cartify</span>
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
        <div className="w-full md:w-1/3 relative group p-3 hover:z-10">
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
        <div className="w-full md:w-1/3 relative group p-3 hover:z-10">
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
         <div className="w-full md:w-1/3 relative group p-3 hover:z-10">
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
            demo="https://daniels-profile-css.vercel.app/"
            github="https://github.com/MuhammedMGX/DevFolio-css"
          >
        <div className="w-full md:w-1/3 relative group p-3 hover:z-10">
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







{/* contact */} 
<div id="contact" className="w-full relative h-[700px] bg-black flex mt-10 items-center overflow-hidden">
        

<div className="w-full h-full">
    <Threads
      color={[1, 1, 1]}
      amplitude={1}
      distance={0}
      enableMouseInteraction
    />  
</div>

  <div className="absolute h-full w-full flex flex-col items-center justify-center text-white -mt-20">

        <h2 className="text-center font-bold text-4xl py-5 text-white">CONTACT ME</h2>

        <form action="https://formspree.io/f/xjkoabvp" method="POST" className="gap-y-4 flex flex-col w-full md:w-1/2 mx-auto bg-black bg-transparent p-10 rounded-2xl shadow-xl">

        <div className="flex flex-col ">
          <label htmlFor="name" className="text-sm py-1">Name</label>
          <input id="name" className="border rounded-lg p-2 border-[#424242] bg-[#171717]/90" type="text" name="name" placeholder="Your Name" required />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="email" className="text-sm py-1">Email</label>
          <input id="email" className="border rounded-lg p-2 border-[#424242] bg-[#171717]/90" type="email" name="email" placeholder="Your Email" required />
        </div>

        <div className="flex flex-col ">
          <label htmlFor="message" className="text-sm py-1">Message</label>
          <textarea id="message" className="border rounded-lg p-2 border-[#424242] bg-[#171717]/90" name="message" placeholder="Your Message" required></textarea>
        </div>

          <button className="bg-white/90 text-black rounded-lg py-1 font-medium my-5 cursor-pointer" type="submit">Send Message</button>
        </form>


  </div> 

  </div>











{/* footer */} 
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
