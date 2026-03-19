import bgImage from "../assets/bg-g.png";
import ProgressLoad from "../Components/ProgressLoad" // adjust path
export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black text-white nt-6">
      
      {/* 🔵 Background Image */}
      <div
  className="absolute inset-0 bg-center bg-no-repeat bg-contain opacity-80"
  style={{
    backgroundImage: `url(${bgImage})`,
  }}
/>

      {/* 🔲 Dark overlay (for readability) */}
      <div className="absolute inset-0 bg-black/0 mt-6" />

      {/* ✨ Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        
        {/* Heading */}
       <h1 className="text-[20px] lg:text-[56px] font-extrabold leading-[1.2] font-make">
  IMAGINE YOUR WORK <br /> ON SCREEN
</h1>

        {/* Paragraph */}
        <p className="mt-10 text-3xl leading-relaxed text-white font-semibold">
          Think about this for a second. <br />
          The animated characters you watch. <br />
          The visual effects in blockbuster movies. <br />
          The worlds inside video games.
        </p>

        {/* Middle Text */}
        <p className="mt-10 text-3xl leading-relaxed text-white font-semibold min">
          Someone designed them. <br />
          Someone animated them. <br />
          Someone built those worlds.
        </p>

        {/* Highlight */}
        <p className="mt-10 text-4xl font-semibold font-semibold min">
          That someone could be you.
        </p>

        {/* CTA Button */}
       <button
                            type="submit"
                            className="mt-10 h-[56px] rounded-full bg-[#5338FF] px-8 text-base lg:text-lg font-semibold text-white shadow-[0_0_30px_rgba(83,56,255,0.5)] transition hover:scale-[1.01] hover:shadow-[0_0_40px_rgba(83,56,255,0.65)]"
                        >
                       Take The First Step
                        </button>
                        <div className="mt-6">
                          <ProgressLoad />
                          </div>
                        

        {/* 🔵 Loader */}
       
      </div>
     
    </section>
  );
}
  
