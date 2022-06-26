import Image from 'next/image';

import PlacesIcon from '../../../assets/offers-section/places.svg';
import InstitutionIcon from '../../../assets/offers-section/instituotion-icon.svg';
import GraduationIcon from '../../../assets/offers-section/graduation-icon.svg';
import ScholarshipIcon from '../../../assets/offers-section/scholarship-icon.svg';

const OffersSection = () => {
  return (
    <section className="py-20">
      <div className="container">
        <h3 className="section-title text-center mb-4">
          What <span className="text-colorPrimary">Composite</span> Offers
        </h3>
        <p className="text-center max-w-xl mx-auto mb-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <li className="offer-item flex flex-col items-start sm:flex-row gap-4 md:gap-8">
            <div className="bg-[#0A11E0] p-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex-none">
              <div className="relative w-full h-full">
                <Image src={PlacesIcon} alt="Places Icon" layout="fill" />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-colorStone mb-3 text-2xl">
                The best place to study
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </p>
            </div>
          </li>
          <li className="offer-item flex flex-col items-start sm:flex-row gap-4 md:gap-8">
            <div className="bg-colorSecondary p-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex-none">
              <div className="relative w-full h-full">
                <Image
                  src={InstitutionIcon}
                  alt="Institution Icon"
                  layout="fill"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-colorStone mb-3 text-2xl">
                Top institution for chosen programs
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </p>
            </div>
          </li>
          <li className="offer-item flex flex-col items-start sm:flex-row gap-4 md:gap-8">
            <div className="bg-[#3ECDAB] p-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex-none">
              <div className="relative w-full h-full">
                <Image
                  src={GraduationIcon}
                  alt="Graduation Icon"
                  layout="fill"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-colorStone mb-3 text-2xl">
                The best program to enter desired field
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </p>
            </div>
          </li>
          <li className="offer-item flex flex-col items-start sm:flex-row gap-4 md:gap-8">
            <div className="bg-[#41C04E] p-3 w-16 h-16 md:w-20 md:h-20 rounded-2xl flex-none">
              <div className="relative w-full h-full">
                <Image
                  src={ScholarshipIcon}
                  alt="Scholarship Icon"
                  layout="fill"
                />
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-colorStone mb-3 text-2xl">
                Get a scholarship
              </h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.{' '}
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default OffersSection;
