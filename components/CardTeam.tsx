import React from 'react'

import { CheckIcon } from '@heroicons/react/20/solid'

type CardTeamProps = {
    name: string;
    position: string;
    qualifications: string[];
}

const CardTeam = ({ name, position, qualifications }: CardTeamProps) => {
    return (
        <div className="font-quicksand w-full">
            {/* <div className="relative w-[34%] h-auto aspect-[16/19] flex-shrink-0">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="rounded-l-lg h-full w-full"
                    priority
                />
            </div> */}
            <div className='relative py-8 pl-6 pr-6 bg-blue-light text-black rounded-r-lg'>
                <h4 className='max-w-44 mb-4 text-button'>{name}</h4>
                <span className='absolute pl-6 pr-3.5 bg-secondary-blue py-1 rounded-r-lg left-0 text-white text-body-secondary'>
                    {position}
                </span>
                <ul className='mt-16 flex flex-col gap-3'>
                    {qualifications.map((qual, index) => (
                        <li key={index} className='flex gap-3 items-center'>
                            <span>
                                <CheckIcon className='w-4 h-4 text-secondary-blue' />
                            </span>
                            {qual}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default CardTeam