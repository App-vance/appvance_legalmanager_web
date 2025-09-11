import { ShareIcon } from "@heroicons/react/24/outline";

const SocialMedia = () => {
  return (
    <>
      <div className="hidden group lg:block fixed top-1/2 -translate-y-1/2 right-0">
        <div className="relative">
          <div className="relative text-white bg-secondary-blue rounded-l-xl ring-2 ring-white cursor-pointer">
            <ShareIcon className="p-2 w-14" />
          </div>
          <div className="rounded-lg cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 transform group-hover:-translate-x-10 group-hover:translate-y-24 group-hover:translate-z-0 bg-white w-fit h-fit p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#0A66C2" viewBox="0 0 256 256" width="40" height="40">
              <path d="M218.123 218.123h-37.4v-59.13c0-14.1-.252-32.27-19.65-32.27-19.678 0-22.68 15.38-22.68 31.26v60.14h-37.4V95.94h35.9v16.65h.51c5-9.48 17.2-19.48 35.4-19.48 37.8 0 44.8 24.9 44.8 57.27v67.75ZM56.64 79.29c-12.03 0-21.76-9.75-21.76-21.77 0-12.03 9.73-21.78 21.76-21.78s21.76 9.75 21.76 21.78c0 12.02-9.73 21.77-21.76 21.77Zm18.7 138.83H37.94V95.94h37.4v122.18ZM237.12 0H18.88C8.47 0 0 8.47 0 18.88v218.24C0 247.53 8.47 256 18.88 256h218.24c10.41 0 18.88-8.47 18.88-18.88V18.88C256 8.47 247.53 0 237.12 0Z" fill="#0A66C2"/>
            </svg>
          </div>
          <div className="rounded-lg cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 transform group-hover:-translate-x-24 group-hover:translate-y-8 group-hover:translate-z-0 bg-white w-fit h-fit p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 256 256" width="36" height="36">
              <path d="M152.1 116.3 245 0h-22.4l-80.7 98.7L72.7 0H0l97.9 138.6L0 256h22.4l85.4-104.5L183.3 256H256l-103.9-139.7Zm-30.2 36.9-9.9-13.7L31.1 16.6h33.5l63.9 88.5 9.9 13.7 85.7 118.9h-33.5l-67.7-95.5Z"/>
            </svg>
          </div>
          <div className="rounded-lg cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 transform group-hover:-translate-x-24 group-hover:-translate-y-8 group-hover:translate-z-0 bg-white w-fit h-fit p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#1877F2" viewBox="0 0 256 256" width="40" height="40">
              <path d="M256 128C256 57.31 198.69 0 128 0S0 57.31 0 128c0 63.93 46.59 116.87 107.5 126.35V165.41H75.18v-37.41h32.32V99.7c0-31.95 19.03-49.49 48.08-49.49 13.94 0 28.49 2.49 28.49 2.49v31.38h-16.06c-15.84 0-20.76 9.84-20.76 19.94v23.79h35.36l-5.65 37.41h-29.71v89c60.91-9.48 107.5-62.42 107.5-126.35Z" fill="#0866ff"/>
            </svg>
          </div>
          <div className="rounded-lg cursor-pointer absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 transform group-hover:-translate-x-10 group-hover:-translate-y-24 group-hover:translate-z-0 bg-white w-fit h-fit p-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="#25D366" viewBox="0 0 256 256" width="40" height="40">
              <path d="M128.313 0C57.556 0 0 57.3 0 127.986c0 22.564 5.853 44.485 17.04 63.907L0 256l66.201-16.976c18.548 10.144 39.317 15.484 62.112 15.484h.006c70.756 0 128.314-57.299 128.314-127.986C256.633 57.3 199.07 0 128.313 0Zm0 233.242h-.005c-19.93 0-39.404-5.285-56.317-15.274l-4.033-2.386-39.276 10.065 10.469-38.325-2.631-4.147C26.333 168.592 20.3 148.612 20.3 127.986c0-59.595 48.55-108.075 108.013-108.075 28.879 0 56.005 11.219 76.47 31.575 20.466 20.36 31.733 47.48 31.733 76.36 0 59.593-48.55 108.073-108.003 108.073Zm61.993-81.213c-3.394-1.69-20.085-9.93-23.2-11.064-3.115-1.135-5.383-1.69-7.651 1.69-2.269 3.394-8.779 11.064-10.759 13.333-1.98 2.27-3.943 2.545-7.338.85-3.394-1.69-14.342-5.288-27.315-16.855-10.1-9.015-16.924-20.145-18.905-23.538-1.981-3.393-.214-5.23 1.476-6.915 1.514-1.51 3.394-3.944 5.091-5.918 1.697-1.975 2.269-3.394 3.394-5.663 1.135-2.27.567-4.255-.283-5.944-.85-1.69-7.651-18.53-10.493-25.437-2.765-6.64-5.58-5.752-7.652-5.846-1.978-.09-4.246-.11-6.515-.11s-5.944.85-9.08 4.255c-3.115 3.393-11.905 11.64-11.905 28.35 0 16.71 12.19 32.84 13.882 35.109 1.691 2.27 23.946 36.64 58.063 51.374 8.107 3.494 14.433 5.583 19.37 7.156 8.138 2.592 15.52 2.226 21.38 1.35 6.518-1.005 20.086-8.2 22.91-16.135 2.823-7.935 2.823-14.725 1.98-16.135-.85-1.41-3.108-2.27-6.502-3.96Z"/>
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SocialMedia;