import FeaturesListItem from './FeaturesListItem';
import StarUni from '../../svg/StarUni';

const features = [
  {
    id: 1,
    title: 'Best Places to Study',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  },
  {
    id: 2,
    title: 'Search scholarships',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  },
  {
    id: 3,
    title: 'figuring out what should you study',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
  },
];

const universities = [
  {
    id: 1,
    name: 'abc university',
    rank: '5th',
  },
  {
    id: 2,
    name: 'abc university',
    rank: '4th',
  },
  {
    id: 3,
    name: 'abc university',
    rank: '3rd',
  },
  {
    id: 4,
    name: 'abc university',
    rank: '2nd',
  },
  {
    id: 5,
    name: 'abc university',
    rank: '1st',
  },
  {
    id: 6,
    name: 'abc university',
    rank: '6th',
  },
  {
    id: 7,
    name: 'abc university',
    rank: '7th',
  },
  {
    id: 8,
    name: 'abc university',
    rank: '8th',
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col gap-10">
        <div>
          <h3 className="section-subtitle">What we have</h3>
          <h2 className="section-title">
            <span className="text-colorSecondary">Best</span> Universities,
            Scholarships & programs
          </h2>
          <ul className="rounded-2xl features-list overflow-hidden">
            {features &&
              features.map((feature) => (
                <FeaturesListItem
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
          </ul>
        </div>
        <div>
          <ul className="uni-rankings-list rounded-2xl">
            <li className="px-7 py-6 flex items-center justify-between border-b-2">
              <h4 className="font-semibold text-md">Best places to study</h4>
              <span className="font-semibold text-md text-colorBlack">
                Rank
              </span>
            </li>
            {universities &&
              universities.map((university) => (
                <li
                  key={university.id}
                  className={`px-7 py-6 flex items-center justify-between bg-colorWhite ${
                    university.rank === '1st' &&
                    'scale-105 rounded-xl shadow-md'
                  }`}
                >
                  <h4 className="flex items-center gap-2">
                    <div className="w-5 h-5">
                      <StarUni />
                    </div>
                    {university.name}
                  </h4>
                  <span className="">{university.rank}</span>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
