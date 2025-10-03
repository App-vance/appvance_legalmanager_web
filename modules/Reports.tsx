import Button from "@/components/Button";
import Link from "next/link";

const Reports = () => {
  return(
    <>
      <div className="flex flex-col items-center justify-center py-20 px-12 bg-[#01233F] space-y-5 text-center text-white">
        <h1 className="text-subtitle font-inter lg:w-[28rem]">Tus informes al alcance de un clic.</h1>
        <span className="text-body font-quicksand lg:hidden">Todo actualizado y organizado para ti.</span>
        <span className="hidden text-body font-quicksand lg:block">Toda tu información, organizada y actualizada en un solo lugar.</span>
        <Link href={`/`} className="">
          <Button
            text="Ver informes"
            customClass="text-button !bg-gray hover:!bg-secondary-blue transition-colors"
          />
        </Link>
      </div>
    </>
  );
};

export default Reports;
