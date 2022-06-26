import Image from 'next/image';
import WaveElement from '../svg/WaveElement';
import ImageGirl from '../../assets/hero-section/image-girl.png';
import ImageGraduation from '../../assets/hero-section/image-graduates.png';
import ImageUni from '../../assets/hero-section/image-uni.png';
import ImageLibrary from '../../assets/hero-section/image-library.png';

let multiplier = 1;

const initialSizes = {
  waveElement: { size: `w-[${800 * multiplier}px]` },
  imageGirl: { size: `w-[${80 * multiplier}px] h-[${80 * multiplier}px]` },
  imageGraduation: {
    size: `w-[${128 * multiplier}px] h-[${128 * multiplier}px]`,
  },
  imageUni: { size: `w-[${80 * multiplier}px] h-[${80 * multiplier}px]` },
  imageLibrary: { size: `w-[${64 * multiplier}px] h-[${64 * multiplier}px]` },
};

// const hh = (
//   <>
//     <div className="absolute left-[50%] bottom-[450px] -z-10">
//       <div className={`relative w-20 h-20`}>
//         <Image src={ImageGirl} alt="girl" layout="fill" />
//       </div>
//     </div>
//     <div className="absolute left-[35%] bottom-[300px] -z-10">
//       <div className={`relative w-32 h-32`}>
//         <Image src={ImageGraduation} alt="Graduation" layout="fill" />
//       </div>
//     </div>
//     <div className="absolute right-[5%] bottom-[380px] -z-10">
//       <div className={`relative w-28 h-28`}>
//         <Image src={ImageUni} alt="University" layout="fill" />
//       </div>
//     </div>
//     <div className="absolute left-[70%] bottom-[300px] -z-10">
//       <div className={`relative w-16 h-16`}>
//         <Image src={ImageLibrary} alt="Library" layout="fill" />
//       </div>
//     </div>
//   </>
// );

const HeroIllustration = () => {
  return (
    <div className="relative h-[1000px] sm:h-[1200px] max-w-[832px] mx-auto lg:absolute lg:w-[950px] xl:w-[1200px] xl:h-[1200px] lg:-right-40 xl:right-0 lg:top-40">
      <div className="absolute left-[50%] top-[150px] lg:left-[40%] lg:top-[30px] -z-10">
        <div
          className={`image-girl relative w-20 sm:w-28 lg:w-[150px] lg:h-[150px] h-20 sm:h-28`}
        >
          <Image src={ImageGirl} alt="girl" layout="fill" />
        </div>
      </div>
      <div className="absolute left-[35%] sm:left-[30%] top-[250px] sm:top-[280px] lg:left-[23%] lg:top-[220px] -z-10">
        <div
          className={`image-graduation relative w-32 sm:w-52 lg:w-[320px] lg:h-[320px] h-32 sm:h-52`}
        >
          <Image src={ImageGraduation} alt="Graduation" layout="fill" />
        </div>
      </div>
      <div className="absolute left-[78%] sm:left-[65%] top-[210px] lg:left-[62%] lg:top-[142px] -z-10">
        <div
          className={`image-uni relative w-20 h-20 sm:w-48 sm:h-48 lg:w-[240px] lg:h-[240px]`}
        >
          <Image src={ImageUni} alt="University" layout="fill" />
        </div>
      </div>
      <div className="absolute left-[70%] top-[300px] sm:top-[420px] -z-10">
        <div
          className={`image-library relative w-12 sm:w-20 sm:h-20 h-12 lg:h-[130px] lg:w-[130px]`}
        >
          <Image src={ImageLibrary} alt="Library" layout="fill" />
        </div>
      </div>
      <div className={`absolute -bottom-1/3 -left-1/2 w-[200%] h-[200%] -z-20`}>
        <WaveElement />
      </div>
    </div>
  );
};

export default HeroIllustration;
