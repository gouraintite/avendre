import Img from '../assets/top.png'

export default function Banner() {

    return (
        <>
            <div className="bg-gradient-to-r from-primary/20 via-primary/15 to-blue/20 w-full rounded-[4rem] lg:h-[37rem] md:h-[37rem] h-[60rem] p-6 ">
                <div className="relative bg-transparent pt-[40px] pb-[100px] lg:pt-[60px]">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 lg:w-5/12">
                                <div className="hero-content">
                                    <h1
                                        className="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                                    >
                                        YO! <br />
                                        Vends comme tu veux <br />
                                        avec Avendre.
                                    </h1>
                                    <p className="text-body-color mb-8 max-w-[480px] text-base">
                                        Avendre est la platform qui te permet de vendre tranquille, posé chez toi comme un boss.
                                        C'est le vinted du pays alors enjoy !!!
                                    </p>
                                    <ul className="flex flex-wrap items-center">
                                        <li>
                                            <a
                                                href="#"
                                                className="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-6 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-10 lg:px-8 xl:px-10"
                                            >
                                                Explorer
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                className="text-body-color hover:text-primary inline-flex items-center justify-center py-4 md:px-6 px-1 text-center text-base font-normal sm:px-10 lg:px-8 xl:px-10"
                                            >
                                                <span className="mr-2">
                                                    <svg
                                                        width="22"
                                                        height="22"
                                                        viewBox="0 0 22 22"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <circle cx="11" cy="11" r="11" fill="#3056D3" />
                                                        <rect
                                                            x="6.90906"
                                                            y="13.3636"
                                                            width="8.18182"
                                                            height="1.63636"
                                                            fill="white"
                                                        />
                                                        <rect
                                                            x="10.1818"
                                                            y="6"
                                                            width="1.63636"
                                                            height="4.09091"
                                                            fill="white"
                                                        />
                                                        <path
                                                            d="M11 12.5454L13.8343 9.47726H8.16576L11 12.5454Z"
                                                            fill="white"
                                                        />
                                                    </svg>
                                                </span>
                                                Téléchager Avendre
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="hidden px-4 lg:block lg:w-1/12"></div>
                            <div className="w-full px-4 lg:w-6/12 lg:pt-0 md:pt-0 pt-12 text-center">
                                <div className="lg:ml-auto lg:text-right">
                                    <div className="relative z-10 inline-block lg:pt-0">
                                        <img
                                            src={Img}
                                            alt="hero"
                                            className="w-[30rem] -mt-48 lg:ml-auto"
                                        />
                                        <span className="absolute left-12 bottom-32 z-[-1]">
                                            <svg
                                                width="93"
                                                height="93"
                                                viewBox="0 0 93 93"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="2.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="2.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="2.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="2.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="2.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="24.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="46.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="68.5" cy="90.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="2.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="24.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="46.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="68.5" r="2.5" fill="#3056D3" />
                                                <circle cx="90.5" cy="90.5" r="2.5" fill="#3056D3" />
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
