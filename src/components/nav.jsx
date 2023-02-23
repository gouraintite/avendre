import logo from '../assets/logo.png'
import '../App.css'
import { useState } from 'react'
function Nav() {

    const [show, setShow] = useState(false)

    const handleShow = () => {
        setShow(!show)
    }
    return (
        // <!-- ====== Navbar Section Start -->
        <header
            className="flex w-full items-center bg-white/50 backdrop-blur-xl fixed z-50"
        >
            <div className="container mx-auto">
                <div className="relative -mx-4 flex items-center justify-between">
                    <div className="w-60 max-w-full px-4">
                        <a href="/" className="block w-full py-5">
                            <img
                                src={logo}
                                alt="logo"
                                className="w-9/12 "
                            />
                        </a>
                    </div>
                    <div className="flex w-full items-center justify-between px-4">
                        <div>
                            <button
                                id="navbarToggler"
                                onClick={handleShow}
                                className="ring-primary absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] focus:ring-2 lg:hidden"
                            >
                                <span
                                    className="bg-body-color relative my-[6px] block h-[2px] w-[32px]"
                                ></span>
                                <span
                                    className="bg-body-color relative my-[6px] block h-[2px] w-[30px]"
                                ></span>
                                <span
                                    className="bg-body-color relative my-[6px] block h-[2px] w-[28px]"
                                ></span>
                            </button>
                            <nav
                                id="navbarCollapse"
                                className={`${show ? 'absolute bg-white' : 'hidden'} ease-in-out duration-1000 right-4 top-full w-full max-w-[250px] rounded-lg py-5 px-6 shadow lg:static lg:block lg:w-full lg:max-w-full lg:shadow-none`}
                            >
                                <ul className="block lg:flex">
                                    <li>
                                        <a
                                            href="#"
                                            className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                        >
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#"
                                            className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                        >
                                            About
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="#contact"
                                            className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                        >
                                            Contact
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="/articles"
                                            className="text-dark hover:text-primary flex py-2 text-base font-medium lg:ml-12 lg:inline-flex"
                                        >
                                            Articles
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="hidden justify-end pr-16 sm:flex lg:pr-0">
                            <a href="#" className="w-full sm:w-auto bg-primary hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 mt-3">
                                <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
                                <div className="text-left">
                                    <div className="mb-1 text-xs">Obtenez le sur</div>
                                    <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        // <!-- ====== Navbar Section End -->

    )
}

export default Nav
