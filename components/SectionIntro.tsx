interface Title {
  title: string,
  titleClass: string,
  description?: string,
  descriptionClass?: string,
};
const SectionIntro = ({ title, titleClass, description, descriptionClass }:Title) => {
  return (
    <>
      <div className="flex flex-col gap-6">
        <h2 className={titleClass}>{title}</h2>
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