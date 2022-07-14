import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react"
import { MenuAlt2Icon, XIcon } from "@heroicons/react/outline"
import { getPositionedLinks } from "utils/misc";
import { MenuIconLink } from "components/menu-icon-link";
import { SearchBar } from "components/search-bar";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const { topMenuLinks, bottomMenuLinks } = getPositionedLinks()

  return (
    <>
      <div className="bg-slate-200">
        <Transition.Root show={sidebarOpen} as={Fragment}>
          <Dialog as="div" className="relative z-40 md:hidden" onClose={setSidebarOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
            </Transition.Child>

            <div className="fixed inset-0 flex z-40">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-300 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-300 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-in-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in-out duration-300"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        type="button"
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        onClick={() => setSidebarOpen(false)}
                      >
                        <span className="sr-only">Close sidebar</span>
                        <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                      </button>
                    </div>
                  </Transition.Child>
                  <div className="flex-shrink-0 flex items-center px-4">
                    <p className="text-4xl font-bold">ROYC</p>
                  </div>
                  <div className="mt-5 flex-1 h-0 overflow-y-auto">
                    <nav className="px-2 space-y-1">
                      {[...topMenuLinks, ...bottomMenuLinks].map((item) => (
                        <MenuIconLink key={item.to} {...item} />
                      ))}
                    </nav>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
              <div className="flex-shrink-0 w-14" aria-hidden="true">
                {/* Dummy element to force sidebar to shrink to fit close icon */}
              </div>
            </div>
          </Dialog>
        </Transition.Root>

        {/* Static sidebar for desktop */}
        <div className="hidden md:flex md:w-20 md:flex-col md:fixed md:inset-y-0">
          <div className="flex flex-col flex-grow border-r border-gray-200 pt-5 bg-white overflow-y-auto">
            <div className="mt-16 flex-grow flex flex-col">
              <nav className="h-full flex flex-col justify-between px-2 pb-4 space-x-2">
                <div>
                  {topMenuLinks.map((item) => (
                    <MenuIconLink key={item.to} {...item} />
                  ))}
                </div>
                <div>
                  {bottomMenuLinks.map((item) => (
                    <MenuIconLink key={item.to} {...item} />
                  ))}
                </div>
              </nav>
            </div>
          </div>
        </div>
        <div className="flex flex-col flex-1">
          <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 bg-white shadow-lg">
            <button
              type="button"
              className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
            </button>
            <div className="w-full px-4 flex justify-between items-center">
              <p className="text-4xl font-bold my-auto">
                ROYC
              </p>
              <div className="flex">
                <form className="flex md:ml-0" action="#" method="GET">
                  <SearchBar />
                </form>
              </div>
            </div>
          </div>

          <main className="md:ml-20 bg-slate-100">
            <div className="py-6">
              <div className="px-4 sm:px-6 md:px-8">

                <div className="py-4">
                  {children}
                </div>

              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}