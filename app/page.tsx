"use client";

import Image from "next/image";
import legoman from "/public/Icons/legoman.png";
import legoface from "/public/Icons/lego-3.jpeg";
import profileImage from "/public/Icons/ic_user.svg";
import cartIcon from "/public/Icons/ic_cart.svg";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

export default function Home() {
  return (
    <div className="bg-white min-h-screen h-full">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5 flex items-center">
              <Image src={legoman} width={100} height={100} alt="" />
              <span className="text-black font-semibold text-sm">
                Lego Find
              </span>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>

        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only text-black">Your Company</span>
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#FFCF40] to-[#197BBD] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>

        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
      </div>
      {/* Content Goes here */}

      <div className="flex mt-[160px]">
        {/* Sidebar */}
        <div className="w-[400px]">
          <div className="flex flex-col items-center  border-r border-slate min-h-screen h-full ">
            {/* Sidebar Content */}
            <div className=" flex mx-4 justify-center w-80 h-[115px] p-4 overflow-y-auto">
              <div className="pb-4 capitalize gap-4 flex items-center bg-slate-100 rounded-lg w-[255px] h-[75px]">
                <div className="flex items-center justify-center w-1/2 h-[55px] mt-4">
                  <Image
                    src={legoface}
                    width={50}
                    height={50}
                    alt=""
                    className="rounded-full"
                  />
                </div>
                <div className="flex items-center w-full h-[55px] mt-4">
                  <h1 className="text-sm font-semibold">Isaac Yanez</h1>
                </div>
              </div>
            </div>
            {/* Sidebar Content */}
            <div className="flex items-center mx-4 mt-9 w-1/2 h-[50px] w-[250px] rounded-md transition duration-300 ease-in-out hover:bg-slate-200 cursor-pointer">
              <div className="w-[50px] flex items-center justify-center">
                <Image src={profileImage} width={30} height={30} alt="" />
              </div>
              <div className="ml-5">
                <a className="">Profile</a>
              </div>
            </div>
            <div className="flex items-center mx-4 mt-4 w-1/2 h-[50px] w-[250px] rounded-md transition duration-300 ease-in-out hover:bg-slate-200 cursor-pointer">
              <div className="flex">
                <div className="w-[50px] flex items-center justify-center">
                  <Image src={cartIcon} width={30} height={30} alt="" />
                </div>
                <div className="ml-5">
                  <p className="">Market Place</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full ">
          <div className="p-6 justify-between flex items-center">
            <div className="flex flex-start">
              <h1 className="text-xl font-semibold">Isaac's Legos</h1>
            </div>
            <ToggleButtonGroup color="primary" exclusive aria-label="Platform">
              <ToggleButton value="web">Forsale</ToggleButton>
              <ToggleButton value="android">Sold</ToggleButton>
            </ToggleButtonGroup>
          </div>
          <div className="flex flex-wrap w-full">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="relative w-full h-40 mb-4">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Card image"
                    className="rounded-t-lg"
                  />
                </div>
                <h1 className="text-xl font-bold">Card Title</h1>
                <p className="text-gray-700 mt-2">Card content goes here</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="relative w-full h-40 mb-4">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Card image"
                    className="rounded-t-lg"
                  />
                </div>
                <h1 className="text-xl font-bold">Card Title</h1>
                <p className="text-gray-700 mt-2">Card content goes here</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="relative w-full h-40 mb-4">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Card image"
                    className="rounded-t-lg"
                  />
                </div>
                <h1 className="text-xl font-bold">Card Title</h1>
                <p className="text-gray-700 mt-2">Card content goes here</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="relative w-full h-40 mb-4">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Card image"
                    className="rounded-t-lg"
                  />
                </div>
                <h1 className="text-xl font-bold">Card Title</h1>
                <p className="text-gray-700 mt-2">Card content goes here</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="relative w-full h-40 mb-4">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Card image"
                    className="rounded-t-lg"
                  />
                </div>
                <h1 className="text-xl font-bold">Card Title</h1>
                <p className="text-gray-700 mt-2">Card content goes here</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="relative w-full h-40 mb-4">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Card image"
                    className="rounded-t-lg"
                  />
                </div>
                <h1 className="text-xl font-bold">Card Title</h1>
                <p className="text-gray-700 mt-2">Card content goes here</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="relative w-full h-40 mb-4">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Card image"
                    className="rounded-t-lg"
                  />
                </div>
                <h1 className="text-xl font-bold">Card Title</h1>
                <p className="text-gray-700 mt-2">Card content goes here</p>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-6 py-4">
              <div className="bg-white shadow-lg rounded-lg p-6">
                <div className="relative w-full h-40 mb-4">
                  <img
                    src="https://via.placeholder.com/300x200"
                    alt="Card image"
                    className="rounded-t-lg"
                  />
                </div>
                <h1 className="text-xl font-bold">Card Title</h1>
                <p className="text-gray-700 mt-2">Card content goes here</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Ends here */}
    </div>
  );
}
