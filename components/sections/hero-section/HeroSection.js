import Image from 'next/image';
import CirclesText from '../../../assets/hero-section/circles-0.svg';
import HeroIllustration from './Illustration';

const HeroSection = () => {
  return (
    <section className="pt-40 md:pt-60 overflow-hidden">
      <div className="container relative h-[120vh] max-h-[800px]">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-7xl md:leading-[70px] lg:leading-[85px] mb-10 md:mb-16 relative">
          <div className="absolute -top-8 md:-top-12 -left-4 md:-left-9 lg:-left-8 -z-10">
            <div className="w-10 md:w-16 h-10 md:h-16 relative">
              <Image src={CirclesText} alt="circles" layout="fill" />
            </div>
          </div>
          <span>
            <span className="block">
              Every <span className="text-colorPrimary">University</span>.
            </span>
          </span>
          <span>
            <span className="block">
              Every <span className="text-colorSecondary">Scholarship</span>.
            </span>
          </span>
        </h1>
        <p className="mb-10 lg:mb-20 max-w-[531px]">
          Research schools, get scholarships, and understand where you fit — at
          any stage of your college journey.
        </p>
        <div>
          <h3 className="font-semibold text-lg md:text-xl mb-4">What we do</h3>
          <ul className="flex items-center gap-2 flex-wrap justify-start">
            <li className="px-4 py-2 border border-colorPrimary text-colorPrimary rounded-3xl bg-colorWhite">
              <span>Universities</span>
            </li>
            <li className="px-4 py-2 border border-colorPrimary text-colorPrimary rounded-3xl bg-colorWhite">
              <span>Scholarships</span>
            </li>
            <li className="px-4 py-2 border border-colorPrimary text-colorPrimary rounded-3xl bg-colorWhite">
              <span>Majors</span>
            </li>
            <li className="px-4 py-2 border border-colorPrimary text-colorPrimary rounded-3xl bg-colorWhite">
              <span>Articles</span>
            </li>
          </ul>
        </div>
        <HeroIllustration />
      </div>
    </section>
  );
};

export default HeroSection;
