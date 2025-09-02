interface Gestion {
  id: string,
  title: string,
  description: string,
}

interface ManagementAreasProps {
  image: string,
  title: string,
  description: string,
  gestion: Gestion[],
}

const ManagementAreas = ({ image, title, description, gestion }: ManagementAreasProps) => {
  return (
    <>
      <section
          className="w-full h-[21.875rem] bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
      >
          <div className='flex flex-col gap-6 items-center justify-center w-full h-full bg-black/70 text-white'>
              <h1 className="font-inter text-title">{title}</h1>
              <p className="font-quicksand max-w-5xl text-center">{description}</p>
          </div>
      </section>

      <section className='pl-24 pt-24 pb-36 pr-36 min-h-fit'>
          <h2 className='text-subtitle text-primary-blue mb-6'>Áreas de gestión:</h2>
          <div className='w-24 h-1 bg-secondary-blue mb-16'></div>
          <div className='w-full'>
              <div className="w-full mx-auto space-y-4 font-quicksand">
                  {
                      gestion?.map((el, index) => (
                          <div key={index} className="rounded-lg ring ring-[#D9D9D9] overflow-hidden">
                              <input type="checkbox" id={el.id} className="peer hidden" />
                              <label htmlFor={el.id} className="flex items-center justify-between py-4 px-6 bg-[#f5f5f5] text-secondary-blue text-features cursor-pointer">
                                  <span className="text-features text-secondary-blue">{el.title}</span>
                                  <svg className="w-6 h-6 transition-transform peer-checked:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                  </svg>
                              </label>
                              <div className="max-h-0 overflow-hidden transition-all duration-300 peer-checked:max-h-screen">
                                  <div className="p-4">
                                      <p className="text-body text-primary-blue leading-relaxed">{el.description}</p>
                                  </div>
                              </div>
                          </div>
                      ))
                  }
              </div>
          </div>
      </section>
    </>
  );
};

export default ManagementAreas;