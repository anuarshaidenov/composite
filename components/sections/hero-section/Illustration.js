import Image from 'next/image';
import WaveElement from '../../svg/WaveElement';
import ImageGirl from '../../../assets/hero-section/image-girl.png';
import ImageGraduation from '../../../assets/hero-section/image-graduates.png';
import ImageUni from '../../../assets/hero-section/image-uni.png';
import ImageLibrary from '../../../assets/hero-section/image-library.png';

const HeroIllustration = () => {
  return (
    <div className="absolute -right-[18rem] sm:-right-[10rem] md:-right-[18rem] lg:-right-[10rem] -bottom-[7rem] md:bottom-auto md:-top-[2rem] lg:-top-[13rem] -z-10 w-[790px] md:w-[900px] lg:w-[1300px]">
      <div className="absolute left-[21rem] sm:left-[25rem] lg:left-[42rem] top-[9rem] lg:top-[15rem] w-20 h-20 md:w-28 md:h-28">
        <Image src={ImageGirl} alt="Girl" layout="fill" />
      </div>
      <div className="absolute left-[15rem] sm:left-[20rem] top-[14rem] md:top-[16rem] lg:top-[23rem] lg:left-[27rem] w-32 h-32 md:w-40 md:h-40 lg:w-[17rem] lg:h-[17rem] hero-graduation">
        <Image src={ImageGraduation} alt="Graduation" layout="fill" />
      </div>
      <div className="absolute left-[24rem] sm:left-[29rem] md:left-[31rem] top-[13rem] w-24 h-24 md:w-36 md:h-36 lg:w-[13rem] lg:h-[13rem] lg:top-[20rem] lg:left-[47rem] hero-university">
        <Image src={ImageUni} alt="University" layout="fill" />
      </div>
      <div className="absolute left-[24rem] sm:left-[29rem] md:left-[33rem] top-[21rem] md:top-[23rem] w-16 h-16 md:w-20 md:h-20 lg:top-[34rem] lg:left-[47rem] hero-library">
        <Image src={ImageLibrary} alt="Library" layout="fill" />
      </div>
      <div className="w-full h-full relative -z-10 -rotate-6">
        <WaveElement />
      </div>
    </div>
  );
};

export default HeroIllustration;
