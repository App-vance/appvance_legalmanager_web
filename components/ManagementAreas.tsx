import SectionIntro from "./SectionIntro"
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
            <div className='flex flex-col gap-6 items-center justify-center w-full h-full bg-black/70 text-white px-8'>
                <h1 className="font-inter text-title max-w-3xs text-center">{title}</h1>
                <p className="font-quicksand max-w-5xl text-center">{description}</p>
            </div>
        </section>

        <section className='min-h-fit px-8 py-10 lg:pb-36 lg:pr-36 lg:pl-24 lg:pt-24'>
            <SectionIntro title="Áreas de gestión:" classTitle="text-subtitle text-primary-blue font-inter" />
            <div className='w-full mt-8 lg:mt-16'>
                <div className="w-full mx-auto space-y-4 font-quicksand">
                    {
                        gestion?.map((el, index) => (
                            <div key={index} className="rounded-lg ring ring-[#D9D9D9] overflow-hidden">
                                <input type="checkbox" id={el.id} className="peer hidden" />
                                <label htmlFor={el.id} className="flex items-center justify-between py-4 px-6 bg-[#f9f8f8] text-secondary-blue text-features cursor-pointer">
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