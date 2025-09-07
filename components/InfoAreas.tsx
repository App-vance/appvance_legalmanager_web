
import SectionIntro from "./SectionIntro";
import { CheckIcon } from '@heroicons/react/20/solid';

interface AreaInfo {
  id: number;
  title: string;
  description: string;
  themes: Themes[];
  subthemes: Subtheme[];
  performance: Performance;
}

interface Themes {
  title: string,
  description: string,
  items: string[],
}

interface Subtheme {
  title: string;
  items: string[];
}

interface Performance {
  title: string;
  description: string;
}

const InfoAreas = ({ areaInfo }: { areaInfo: AreaInfo }) => {
  const { id, title, description, themes, subthemes, performance } = areaInfo;
  return (
    <>
      <div className="bg-blue-light px-8 py-10 lg:p-24">
        <div className={title ? "mb-6" : ""}>
          { title && <SectionIntro title={title} titleClass="text-subtitle text-primary-blue font-inter" description={description} descriptionClass="text-body text-primary-blue font-quicksand" /> }
        </div>
        {themes.length > 0 && (
          <div className="flex flex-col gap-8 font-quicksand mb-10">
            {themes.map((theme, index) => (
              <div key={index} className="mb-6">
                <SectionIntro title={theme.title} titleClass="text-subtitle text-primary-blue font-inter" description={theme.description} descriptionClass="text-body text-primary-blue font-quicksand" />

                <ul className="flex flex-col gap-6 text-gray mt-6">
                  {theme.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span>
                        <CheckIcon className="w-5 h-5 text-secondary-blue" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        {subthemes.length > 0 && (
          <div className="flex flex-col gap-8 font-quicksand mb-10">
            {subthemes.map((subtheme, index) => (
              <div key={index} className="mb-4">
                <h3 className="text-features font-semibold text-secondary-blue mb-6">
                  {subtheme.title}
                </h3>

                <ul className="flex flex-col gap-6 text-gray">
                  {subtheme.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-4">
                      <span>
                        <CheckIcon className="w-5 h-5 text-secondary-blue" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
        { performance && <SectionIntro title={performance.title} titleClass="text-subtitle text-primary-blue font-inter" description={performance.description} descriptionClass="text-body text-primary-blue font-quicksand" /> }
      </div>
    </>
  );
};

export default InfoAreas;