import React from 'react'
import { getServiceInfo, getAreasInfo } from '@/helpers/services';
import ManagementAreas from '@/components/ManagementAreas';
import InfoAreas from '@/components/InfoAreas';

interface PageProps {
    params: {
        service: string
    }; // Replace 'any' with a more specific type if possible
}

const page = ({ params }: PageProps) => {
    const service = params.service;
    const serviceData = getServiceInfo[service];
    const areaInfo = getAreasInfo[service];

    return (
        <>
            <ManagementAreas
                image={serviceData.image}
                title={serviceData.title}
                description={serviceData.description}
                gestion={serviceData.gestion}
            />
            <InfoAreas areaInfo={areaInfo} />
        </>
    )
}

export default page