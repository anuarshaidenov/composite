import PrimaryButton from '../../PrimaryButton';
import Link from 'next/link';
import BtnArrow from '../../svg/btnArrow';

const GetStartedOption = ({ optionParams }) => {
  const { title, backgroundColorClass, illustration, buttonText, buttonLink } =
    optionParams;

  return (
    <li
      className={`${backgroundColorClass} flex flex-col md:flex-row items-center md:items-start md:justify-between`}
    >
      <div className="px-12 py-10 flex flex-col items-center md:items-start gap-7">
        <h4 className="font-semibold text-xl md:text-2xl lg:text-xl text-center md:text-left">
          {title}
        </h4>
        <Link href={buttonLink}>
          <PrimaryButton type="button">
            <div className="flex items-center gap-3">
              {buttonText}
              <div className="w-[20px] h-[12px]">
                <BtnArrow />
              </div>
            </div>
          </PrimaryButton>
        </Link>
      </div>
      <div className="self-center px-3">{illustration}</div>
    </li>
  );
};

export default GetStartedOption;
