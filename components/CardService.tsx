import React from 'react'

import Button from "@/components/Button";
import { ArrowTurnUpLeftIcon } from "@heroicons/react/24/outline";
import { CheckIcon } from '@heroicons/react/20/solid';

type CardServiceProps = {
  title: string;
  description: string;
  customClass?: string;
  items: string[];
  icon?: React.ReactNode;
}

const CardService = ({ title, description, customClass, items, icon }: CardServiceProps) => {
  return (
    <>
      <div className="ring ring-[#155DFC] rounded-lg py-8 lg:max-h-[500px] lg:min-w-[500px] lg:p-8 lg:flex lg:flex-col lg:justify-between lg:items-start">
        <div className="text-center lg:text-start">
          {icon}
          <h1 className="text-features text-secondary-blue mb-4 lg:text-subtitle">
            {title}
          </h1>
          <p className="text-body px-6 mb-5 lg:px-0 lg:text-body-secondary">
            {description}
          </p>
          <ul className={`grid gap-3 px-12 mb-5 lg:px-0 lg:gap-y-4 ${customClass}`}>
            {items.map((item, index) => (
              <li
                key={index}
                className="flex gap-6 text-start items-center text-body-secondary text-gray lg:text-body-secondary lg:gap-x-4"
              >
                <span>
                  <CheckIcon className="w-5 h-5 text-secondary-blue" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Button
          text="Conoce más aquí."
          customClass="mx-12 text-button ring ring-secondary-blue bg-white flex-row-reverse !text-secondary-blue transition-colors hover:bg-secondary-blue hover:!text-white active:bg-white active:!text-secondary-blue lg:mx-0"
          icon={<ArrowTurnUpLeftIcon className="h-6 w-6" />}
        />
      </div>
    </>
  );
};

export default CardService;