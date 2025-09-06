interface Title {
  title: string,
};
const TitleMobile = ({ title }:Title) => {
  return (
    <>
      <h2 className='text-subtitle text-primary-blue mb-6'>{title}</h2>
      <div className='w-24 h-1 bg-secondary-blue mb-8 lg:mb-16'></div>
    </>
  );
};

export default TitleMobile;