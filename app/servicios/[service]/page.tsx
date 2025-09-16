import React from 'react'
import { getServiceInfo, getAreasInfo } from '@/helpers/services';
import ManagementAreas from '@/components/ManagementAreas';
import InfoAreas from '@/components/InfoAreas';
import ClientTestimonials from '@/components/ClientTestimonials';

interface PageProps {
    params: Promise<{ service: string }>;
}

const page = async ({ params }: PageProps) => {
    const { service } = await params;
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
            {/* <ClientTestimonials /> */}
        </>
    )
}

export default page