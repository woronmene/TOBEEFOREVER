import hero_background_image from "./assets/hero-backgound-image.jpg";
import couple_image_1 from "./assets/couple-image-1.jpg";
import couple_image_2 from "./assets/couple-image-2.jpg";
import display_image from "./assets/display-image.jpg";
import Eventbox from "./components/Eventbox";
import bride_price_icon from "./assets/bride-price-icon.svg"
import reception_icon from "./assets/reception-icon.svg"
import after_party_icon from "./assets/after-party-icon.svg"
import Regularsection from "./ui/Regularsection";
import Responsivenav from "./components/Responsivenav";
import { useRef } from "react";
import Giftbutton from "./components/Giftbuttonalert";
import Animatemultipletext from "./components/Animatemultipletext"
import { motion } from "framer-motion"
import FadeInSection from "./ui/Fadeinsection";

const App = () => {
  const homeSectionRef = useRef<HTMLElement>(null);
  const ourStorySectionRef = useRef<HTMLDivElement>(null);
  const groomSectionRef = useRef<HTMLElement | null>(null);
  const brideSectionRef = useRef<HTMLElement | null>(null);
  const receptionSectionRef = useRef<HTMLElement | null>(null);

  const linesOfText = [
    <h3 className="text-[#FFFFFF] text-[38px] sm:text-[40px] md:text-[48px] italic leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
      31 . 08. 25
    </h3>,
    <h1 className="text-[#C0BFBD] text-[40px] sm:text-[64px] md:text-[90px] italic leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
      Beatrice & Tomiwa
    </h1>,
    <p className="text-[#FFFFFF] text-[20px] sm:text-[30px] md:text-[36px] italic leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
      Wedding ceremony
    </p>,
  ];


  return <>
    {/* Header area*/}
    <header
      ref={homeSectionRef}
      className="relative flex w-full h-full overflow-hidden">
      {/* Navigation bar area */}
      <nav
        className="container flex fixed top-10 right-0 left-0 w-full sm:pl-10 md:pl-20 z-20">
        {/* Gift btn */}
        <div className="flex-1 flex items-center gap-x-10 sm:flex-row-reverse min-h-[53px] px-4 rounded bg-stone-400/25 backdrop-blur-md shadow">
          <Giftbutton
            buttonField=" Give gift"
            message={<>
              Thank you for the love, if you would like to <br />
              give a monetary gift then use this account
            </>}
          />
          {/* Small screen nav list */}
          <Responsivenav
            homeSectionRef={homeSectionRef}
            ourStorySectionRef={ourStorySectionRef}
          />
        </div>
      </nav>
    </header>
    {/* Main content area */}
    <main className="overflow-hidden">
      {/* The hero section */}
      <section
        ref={homeSectionRef}
        className="relative flex w-full min-h-screen h-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${hero_background_image})` }}
      >
        {/* Overlay background image with 50% opacity drop*/}
        <div className="absolute inset-0 bg-black/45">
        </div>
        {/* The hero section content goes in here */}
        <div className="relative flex-1 flex flex-col z-10">
          <Animatemultipletext
            linesOfText={linesOfText}
            className="flex-1 flex flex-col justify-center items-center gap-y-7 sm:gap-y-8 md:gap-y-12"
          />
          <div className="flex justify-center items-center basis-20">
            <motion.span
              className="inline-block"
              initial="hidden"
              animate={"visible"}
              exit="hidden"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.4
                  }
                }
              }}
            >
              <motion.span
                variants={
                  {
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 4, ease: "easeOut" } }
                  }
                }
                className="inline-block"
              >
                <p className="text-[#FFFFFF] text-[16px] sm:text-[20px]  md:text-[27px] italic leading-[100%] tracking-normal drop-shadow-md font-normal font-main whitespace-pre text-nowrap text-center">
                  #TOBEEFOREVER2025
                </p>
              </motion.span>
            </motion.span>
          </div>
        </div>
      </section>
      {/*The groom section */}
      <FadeInSection
        ref={groomSectionRef}
        delay={0.2}
        className="relative flex w-full min-h-screen h-auto bg-[#F9F6ED]"
        children={<>
          <Regularsection
            displayImageUrl={couple_image_1}
            title={<>
              Join us as we embark on a journey <br />
              of love, joy <br />
              and eternal partnership.
            </>}
            content={<>
              From late-night laughs to deep conversations <br />
              From shared playlists to shared dreams... <br />
              With Jahs help we have grown a love rooted in <br />
              joy, trust and undeniable rhythm...
              <br className="sm:hidden" />
              <br className="sm:hidden" />
              We are saying YES to forever. <br />
              Join us as we celebrate our special day.
            </>}
            buttonField="The Groom"
          />
          <img
            src={couple_image_2}
            alt=""
            className="absolute bottom-0 translate-y-1/2 right-0 w-[100px] h-[110px] md:w-[250px] md:h-[298px] object-center object-cover shadow shadow-slate-700 rounded"
          />
        </>}
      />
      {/*Empthy space */}
      <section className="min-h-[100px] md:min-h-[250px] h-auto w-full bg-[#F9F6ED] ">
      </section>
      {/* The bride section */}
      <FadeInSection
        ref={brideSectionRef}
        delay={0.4}
        className="relative flex w-full min-h-screen h-auto bg-[#F9F6ED]"
        children={<>
          <Regularsection
            displayImageUrl={display_image}
            title={<>
              Come and celebrate our <br />
              special day with us
            </>}
            content={<>
              We would be so honoured to share this beautiful <br />
              moment with the people we love. Your presence <br />
              would mean the world to us. Lets make <br />
              unforgettable memories together!!
            </>}
            buttonField="The Bride"
            className="flex-row-reverse"
          />
        </>}
      />
      {/* Our schedule section */}
      <FadeInSection
        ref={receptionSectionRef}
        delay={0.6}
        className="flex min-h-[453px] md:min-h-[600px] h-auto bg-[#F9F6ED] md:bg-[#3D4E3C] p-10 md:p-0"
        children={<>
          <div className="container flex-1 flex flex-col bg-[#3D4E3C] md:bg-inherit rounded-[10px]">
            {/* Title Text area  */}
            <span className="basis-20 md:basis-30 flex justify-center items-center">
              <h2 className="text-[#FFFFFF] text-[24px] md:text-[36px] underline decoration-3 decoration-solid leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
                Our Schedule
              </h2>
            </span>
            {/* Our schedule boxs area*/}
            <div className="flex-1 md:flex md:justify-evenly md:items-center md:gap-20 md:flex-wrap space-y-10 px-10 pb-10">
              <Eventbox iconUrl={bride_price_icon} time="12:00 PM" event="Paying of bride price" />
              <Eventbox iconUrl={reception_icon} time="2:00 PM" event="Reception follows" />
              <Eventbox iconUrl={after_party_icon} time="6:00 PM" event="The after party begings!!!!" />
            </div>
          </div>
        </>}
      />
      {/* Our story section */}
      <FadeInSection
        ref={ourStorySectionRef}
        delay={0.8}
        className="flex w-full min-h-[600px] h-auto bg-[#F9F6ED] p-10 md:p-0"
        children={<>
          <div
            ref={ourStorySectionRef}
            className="flex-1 flex flex-col bg-[#FFFFFF] rounded"
          >
            {/* Title Text area  */}
            <span className="basis-20 md:basis-30 flex justify-center items-center">
              <h2 className="text-[#000000] text-[24px] md:text-[36px] underline decoration-3 decoration-solid leading-[100%] tracking-normal font-normal font-main whitespace-pre text-nowrap text-center">
                Our Story
              </h2>
            </span>
            {/* main text area*/}
            <span className="flex-1 flex justify-center items-center">
              <p className="max-w-[1100px] text-[16px] md:text-[24px] text-[#808080] text-center whitespace-normal text-wrap px-10 pb-10">
                We connected through a shared perspective- A conversation that stood out and lingered !
                What followed was a quiet, steady friendship from afar. For two years we checked on each other,
                built trust amd shared the little things that mattered the most. When she visited the country,
                we finally met ain person - and from that very day it just felt right. Natural and effortless.
                Forever was suddenly something real with her. Since then we have shared laughter, deep conversations,
                fights, tears, and a bond thats only grown stronger with time and distance.
                Even in a long distance relationship we have been constant and always present in each others lives.
                The most incredible love that we have found and accepted humbly as a gift from Jah.
              </p>
            </span>
          </div>
        </>}
      />
    </main>
    {/* footer area*/}
    <footer className="flex w-full min-h-[216px] md:min-h-[340px] h-auto text-white bg-[#3D4E3C] overflow-hidden">
      {/* main footer text area*/}
      <span className="container flex-1 flex justify-center items-center">
        <p className="text-[24px] md:text-[40px] text-[#FFFFFF] text-center whitespace-normal text-wrap">
          Beatrice and Tomiwa says a very big thank you to everyone for the love and support...
        </p>
      </span>
    </footer>
  </>
};

export default App;
