import Image from 'next/image'

type SimpleCardProps = {
    name: string;
    position: string;
    image: string;
}

const SimpleCardTeam = ({ name, position, image }: SimpleCardProps) => {
    return (
        <div className='flex flex-col items-center justify-center bg-blue-light'>
            <Image
                src={image}
                alt={name}
                width={406}
                height={320}
                className='object-contain'
            />
            <p className='text-black text-button py-3'>{name}</p>
            <span className='text-white text-body-secondary bg-secondary-blue w-full text-center rounded-lg py-2'>{position}</span>
        </div>
    )
}

export default SimpleCardTeam