import React, { useState } from 'react'
import { Transition } from '@headlessui/react'
import Image from 'next/image'
import Link from 'next/link'

import { DiWebplatform } from 'react-icons/di'
import { AiOutlineTwitter } from 'react-icons/ai'
import { FaDiscord } from 'react-icons/fa'
import { AiFillMediumCircle, AiFillRedditCircle } from 'react-icons/ai'

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <nav className="mb-5 bg-gray-800">
        <div className="mx-auto max-w-7xl  px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className=" flex min-w-full items-center justify-between">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a>
                    <Image
                      className="cursor-pointer"
                      src="/images/umee_logo.png"
                      alt="logo"
                      width="30"
                      height="30"
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="flex space-x-4">
                  <a href="#" className=" social-networks">
                    <DiWebplatform />
                  </a>

                  <a href="#" className="social-networks">
                    <AiOutlineTwitter />
                  </a>

                  <a href="#" className="social-networks">
                    <FaDiscord />
                  </a>

                  <a href="#" className="social-networks">
                    <AiFillMediumCircle />
                  </a>

                  <a href="#" className="social-networks">
                    <AiFillRedditCircle />
                  </a>
                </div>
              </div>
            </div>

            <div className=" relative right-10 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-white hover:bg-gray-700"
                >
                  Dashboard
                </a>

                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Team
                </a>

                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Projects
                </a>

                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Calendar
                </a>

                <a
                  href="#"
                  className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
                >
                  Reports
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  )
}

export default Navbar
