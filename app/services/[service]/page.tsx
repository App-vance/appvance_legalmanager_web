import React from 'react'
import { getServiceInfo } from '@/helpers/services';
import ManagementAreas from '@/components/ManagementAreas';

interface PageProps {
    params: {
        service: string
    }; // Replace 'any' with a more specific type if possible
}

const page = ({ params }: PageProps) => {
    const service = params.service;
    const serviceData = getServiceInfo[service];

    return (
        <>
            <ManagementAreas
                image={serviceData.image}
                title={serviceData.title}
                description={serviceData.description}
                gestion={serviceData.gestion}
            />
        </>
    )
}

export default page