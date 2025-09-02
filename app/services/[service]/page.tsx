import React from 'react'

interface PageProps {
    params: {
        service: string
    }; // Replace 'any' with a more specific type if possible
}

const page = ({ params }: PageProps) => {
    const service = params.service;

    return (
        <div>{service}</div>
    )
}

export default page