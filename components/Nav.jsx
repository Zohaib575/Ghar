import { Fragment, useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { AiOutlineSetting } from "react-icons/ai";
import { GoSignOut } from "react-icons/go";
import { TbLicense } from "react-icons/tb";
import { BsBookmarkHeartFill } from "react-icons/bs";
import { Bars3Icon, BellIcon, XMarkIcon, UserIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react"
import { Modal } from "./Modal";


const navigation = [
  { name: "HOME", href: "/", current: true },
  { name: "RENT", href: "/rent", current: false },
  { name: "BUY", href: "/buy", current: false },
  { name: "SALE", href: "/sale", current: false },
  { name: "CONTACT US", href: "/Contact", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const { data: session } = useSession();
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <Disclosure as="nav" className="bg-gray-100 shadow-md ">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white hover:text-orange-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1  items-center justify-center sm:items-stretch  sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Link href="/" passHref className="text-2xl text-orange-500 hover:text-orange-900 font-bold font-sans">
                    Ghar360
                  </Link>
                </div>

                <div className="hidden pl-24 sm:ml-6 items-center justify-center cursor-pointer sm:block">
                  <div className="flex space-x-4">
                    {navigation.map((item, index) => (
                      <Link href={item.href} passHref key={item.name}>
                        <div
                          onClick={() => setActiveIndex(index)}
                          className={classNames(
                            index === activeIndex
                              ? "text-orange-500 border-b-2 border-orange-500 duration-500 delay-300"
                              : "text-black hover:border-b-2 rounded-none hover:border-orange-500  hover:text-orange-500 duration-500 delay-300",
                            " px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                <Modal />
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      {session ? <img
                        className="h-10 w-10 rounded-full"
                        src={session.user.image}
                        alt="user img " /> : ''}
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none cursor-pointer">
                      <Link passHref href="#">
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-orange-500"
                                  : "text-gray-700",
                                " px-2 py-2 text-md flex items-center justify-center gap-2"
                              )}
                            >
                              <div className="hover:text-orange-500 text-md text-gray-500 text-center hover:scale-150 hover:duration-1000 transition duration-500 ease-in-out">
                                <AiOutlineSetting />
                              </div>
                              Account settings
                            </div>
                          )}
                        </Menu.Item>
                      </Link>
                      <div className="flex  text-center items-center justify-center   w-full group-hover:text-orange-500 cursor-pointer">
                        <Link href="#" passHref>
                          <Menu.Item>
                            {({ active }) => (
                              <div
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-orange-500"
                                    : "text-gray-700",
                                  " flex text-center items-center justify-center w-full px-14 py-2 text-md gap-2"
                                )}
                              >
                                <div className="hover:text-orange-500 text-gray-500 w-full hover:scale-150 hover:duration-1000 transition duration-500 ease-in-out">
                                  <BsBookmarkHeartFill />
                                </div>
                                favorite
                              </div>
                            )}
                          </Menu.Item>
                        </Link>
                      </div>
                      <Link href="#" passHref>
                        <Menu.Item>
                          {({ active }) => (
                            <div
                              className={classNames(
                                active
                                  ? "bg-gray-100 text-orange-500"
                                  : "text-gray-700",
                                "px-2 py-2 text-md flex items-center justify-center cursor-pointer gap-2"
                              )}
                            >
                              <div className="hover:text-orange-500 text-gray-500 text-center hover:scale-150 hover:duration-1000 transition duration-500 ease-in-out">
                                <TbLicense />
                              </div>
                              License
                            </div>
                          )}
                        </Menu.Item>
                      </Link>
                      <div >
                        <a onClick={() => signOut()}>
                          <Menu.Item>
                            {({ active }) => (
                              <button

                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-orange-500"
                                    : "text-gray-700",
                                  "flex items-center justify-center w-full px-2 py-2 text-center text-md gap-2"
                                )}
                              >
                                <div className="hover:text-orange-500 text-gray-500 text-center hover:scale-150 hover:duration-1000 transition duration-500 ease-in-out">
                                  <GoSignOut />
                                </div>
                                Sign out
                              </button>
                            )}
                          </Menu.Item>
                        </a>
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden cursor-pointer">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link href={item.href} passHref key={item.name}>
                  <div
                    className={classNames(
                      item.current
                        ? "bg-gray-300 text-orange-500"
                        : "text-orange-500 hover:bg-orange-500 hover:text-white",
                      "block rounded-lg  px-3 py-2  font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </div>
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
