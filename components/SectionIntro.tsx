interface Title {
  title: string,
  classTitle: string,
  description?: string,
  descriptionClass?: string,
};
const SectionIntro = ({ title, classTitle, description, descriptionClass }:Title) => {
  return (
    <>
      <div className="flex flex-col gap-6 mb-8 lg:mb-16">
        <h2 className={classTitle}>{title}</h2>
        <div className='w-24 h-1 bg-secondary-blue'></div>
        {description &&
          <div>
            <span className={descriptionClass}>{description}</span>
          </div>}
      </div>
    </>
  );
};

export default SectionIntro;