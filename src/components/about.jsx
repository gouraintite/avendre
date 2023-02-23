import Main from '../assets/main.png'
import Detail from '../assets/detail.png'

export default function About() {

    return (
        <>
            <div className="w-full rounded-[4rem] lg:h-[37rem] md:h-[37rem] h-[60rem] p-6"  id='contact'>
                <div class="relative bg-transparent pt-[40px] pb-[100px] lg:pt-[60px]">
                    <div class="container mx-auto">
                        <div class="-mx-4 flex flex-wrap">
                            <div class="w-full px-4 lg:w-6/12 lg:pt-0 md:pt-0 pt-12 text-center">
                                <div class="">
                                    <div class="relative z-10 inline-block lg:pt-0">
                                        <img
                                            src={Main}
                                            alt="hero"
                                            class=" w-[28rem] -mt-48"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="hidden px-4 lg:block lg:w-1/12"></div>
                            <div class="w-full px-4 lg:w-5/12">
                                <div class="hero-content">
                                    <div className=" mb-6 max-w-[510px] lg:mb-12">
                                        <span className="text-primary mb-2 block text-sm font-semibold">
                                            Concernant Avendre
                                        </span>
                                        <h2
                                            className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                                        >
                                            C'est toi le Kunkumah, vends a qui tu veux !
                                        </h2>
                                        <p className="text-body-color text-lg text-base ml-6">
                                            Les prix de tes wés, tu les fixes sans contrainte le prix. <br /> le public est à toi, le but c'est de nian!
                                        </p>
                                    </div>
                                    <ul class="flex flex-wrap items-center">
                                        <li>
                                            <a
                                                href="#"
                                                class="text-body-color hover:text-primary inline-flex items-center justify-center py-4 px-6 text-center text-base font-normal sm:px-10 lg:px-8 xl:px-10"
                                            >
                                                <span class="mr-2">
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
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-blue/10 rounded-xl'>
                <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[30px]">
                    <div className="container mx-auto">
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4">
                                <div className="mx-auto mb-6 max-w-[510px] text-center lg:mb-12">
                                    <span className="text-primary mb-2 block text-lg font-semibold">
                                        viens essayer Avendre
                                    </span>
                                    <h2
                                        className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[35px]"
                                    >
                                        En quelques etapes tu peux deja commencer Avendre...
                                    </h2>
                                    <p className="text-body-color text-base">
                                        Comment faire !?
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="-mx-4 flex flex-wrap">
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md text-center items-center hover:shadow-xl hover:ring ease-in-out duration-300 md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-primary mb-8 flex h-[70px] w-[70px] mx-auto text-center  items-center justify-center rounded-2xl"
                                    >
                                        <svg
                                            width="35"
                                            height="35"
                                            viewBox="0 0 35 35"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M4.04684 15.5859C4.2109 15.5859 4.37497 15.5859 4.48434 15.5313L10.5547 13.3984C11.0468 13.2344 11.3203 12.6875 11.1562 12.1953C10.9922 11.7031 10.4453 11.4297 9.95309 11.5938L6.28903 12.9063C8.09372 7.92969 12.8515 4.53906 18.375 4.53906C24.2265 4.53906 29.3672 8.42188 30.789 14.0547C30.8984 14.5469 31.4453 14.875 31.9375 14.7656C32.4297 14.6563 32.7578 14.1094 32.6484 13.6172C31.0078 7.16406 25.1015 2.67969 18.375 2.67969C11.8125 2.67969 6.12497 6.89063 4.26559 13.0156L2.57028 8.25781C2.40622 7.76563 1.85934 7.49219 1.36715 7.65625C0.874967 7.82031 0.60153 8.36719 0.765592 8.85938L2.84372 14.8203C3.00778 15.2578 3.55465 15.5859 4.04684 15.5859Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold"><span className='text-2xl text-primary'>1.</span> Telecharge gratuitement !</h4>
                                    <p className="text-body-color">
                                        Tu te fais flop d'argent avec une application NJOOOH !
                                    </p>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md text-center items-center hover:shadow-xl hover:ring ease-in-out duration-300 md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-primary mb-8 flex h-[70px] w-[70px] mx-auto text-center  items-center justify-center rounded-2xl"
                                    >
                                        <svg
                                            width="35"
                                            height="35"
                                            viewBox="0 0 35 35"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M17.5 7.875C8.20312 7.875 0.65625 16.0781 0.65625 26.1406C0.65625 26.6875 1.09375 27.125 1.64062 27.125H33.3594C33.9062 27.125 34.3438 26.6875 34.3438 26.1406C34.3438 16.0781 26.7969 7.875 17.5 7.875ZM19.4687 25.2109L17.9922 20.5078C17.8281 20.0156 17.1719 20.0156 17.0078 20.5078L15.5312 25.2109H2.625C3.0625 16.625 9.57031 9.78906 17.5 9.78906C25.4297 9.78906 31.9375 16.625 32.375 25.2109H19.4687Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M17.5 13.7812C16.9531 13.7812 16.5156 14.2187 16.5156 14.7656V16.1875C16.5156 16.7344 16.9531 17.1719 17.5 17.1719C18.0469 17.1719 18.4844 16.7344 18.4844 16.1875V14.7656C18.4844 14.2187 18.0469 13.7812 17.5 13.7812Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M25.8672 17.8828L24.9922 18.8125C24.6094 19.1953 24.6094 19.7969 24.9922 20.1797C25.1563 20.3438 25.4297 20.4531 25.6484 20.4531C25.9219 20.4531 26.1406 20.3438 26.3594 20.1797L27.2344 19.25C27.6172 18.8672 27.6172 18.2656 27.2344 17.8828C26.8516 17.5 26.25 17.5 25.8672 17.8828Z"
                                                fill="white"
                                            />
                                            <path
                                                d="M9.13281 17.8828C8.80468 17.5 8.14843 17.4453 7.76562 17.8281C7.38281 18.1562 7.32812 18.8125 7.71093 19.1953L8.53125 20.125C8.69531 20.3437 8.96874 20.4531 9.24218 20.4531C9.46093 20.4531 9.67968 20.3984 9.89843 20.2344C10.2812 19.9062 10.3359 19.25 9.95312 18.8672L9.13281 17.8828Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold"><span className='text-2xl text-primary'>2.</span> Cree ton compte !</h4>

                                    <p className="text-body-color">
                                        En quelques secondes obtient gratuitement un compte Yaknema
                                    </p>
                                </div>
                            </div>
                            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                                <div
                                    className="mb-8 rounded-[20px] bg-white p-10 shadow-md text-center items-center hover:shadow-xl hover:ring ease-in-out duration-300 md:px-7 xl:px-10"
                                >
                                    <div
                                        className="bg-primary mb-8 flex h-[70px] w-[70px] mx-auto text-center  items-center justify-center rounded-2xl"
                                    >
                                        <svg
                                            width="32"
                                            height="32"
                                            viewBox="0 0 32 32"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M18.6746 0.26779C10.0637 -1.33065 1.86522 4.39279 0.266779 13.0037C-0.506658 17.1803 0.421467 21.3568 2.79334 24.8631C5.21678 28.3693 8.82615 30.6897 12.9512 31.4631C13.9308 31.6178 14.859 31.7209 15.7871 31.7209C23.2637 31.7209 29.9668 26.3584 31.359 18.6756C32.9574 10.0647 27.234 1.81466 18.6746 0.26779ZM29.6574 18.3662C29.5543 18.8819 29.4512 19.449 29.2965 19.9131L16.7668 15.2209V1.81466C17.2824 1.86623 17.8496 1.91779 18.3652 2.02091C25.9449 3.4131 30.998 10.735 29.6574 18.3662ZM14.9105 1.81466V14.9115H1.86522C1.91678 14.3959 1.96834 13.8287 2.07147 13.3131C3.20584 6.86779 8.67147 2.22716 14.9105 1.81466ZM13.3121 29.6584C9.65115 28.9881 6.45428 26.9256 4.28865 23.8318C2.79334 21.7178 1.96834 19.2428 1.81365 16.7678H15.6324L28.5746 21.6147C26.048 27.3381 19.7574 30.8443 13.3121 29.6584Z"
                                                fill="white"
                                            />
                                        </svg>
                                    </div>
                                    <h4 className="text-dark mb-3 text-xl font-semibold"><span className='text-2xl text-primary'>3.</span> Enjoy Avendre !</h4>
                                    <p className="text-body-color">
                                        C'est tout, tu peux enjoy le <span className='font-bold'>Vinted</span> de l'afrique.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ====== Call To Action Section Start --> */}

                <section className="py-20 lg:py-[10px]">
                    <div className="container mx-auto">
                        <div
                            className="bg-primary relative z-10 overflow-hidden rounded-xl py-12 px-8 md:p-[90px]"
                        >
                            <div className="-mx-4 flex flex-wrap items-center ">
                                <div className="w-full px-4 lg:w-1/2">
                                    <span className="mb-2 text-base font-semibold text-white">
                                        Telecharge ton application de reve
                                    </span>
                                    <h2
                                        className="mb-6 text-3xl font-bold leading-tight text-white sm:mb-8 sm:text-[38px] lg:mb-0"
                                    >
                                        Telechargez <br className="xs:block hidden" />
                                        Avendre
                                    </h2>
                                    <div className='font-extrabold mt-9 text-[#ccc]'>
                                        N'attend plus combi... vient te faire <br /> de l'argent dans le easy
                                    </div>
                                </div>
                                <div className='hidden lg:block absolute left-[45%] mt-40'>
                                    <img src={Detail} alt="" />
                                </div>
                                <div className="w-full px-4 lg:w-1/2">
                                    <div className="flex flex-wrap lg:justify-end">
                                        <a
                                            href="#"
                                            className="my-1 inline-flex items-center rounded bg-[#13C296] py-4 px-6 text-base font-medium text-white transition hover:bg-opacity-90 md:px-9 lg:px-6 xl:px-9"
                                        >
                                        <span className="mr-0">
                                            <svg
                                                width="30"
                                                height="30"
                                                viewBox="0 0 22 22"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle cx="11" cy="11" r="11" fill="#13C270" />
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
                                            Telecharger
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <span className="absolute top-0 left-0 z-[-1]">
                                    <svg
                                        width="189"
                                        height="162"
                                        viewBox="0 0 189 162"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse
                                            cx="16"
                                            cy="-16.5"
                                            rx="173"
                                            ry="178.5"
                                            transform="rotate(180 16 -16.5)"
                                            fill="url(#paint0_linear)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="-157"
                                                y1="-107.754"
                                                x2="98.5011"
                                                y2="-106.425"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="white" stop-opacity="0.07" />
                                                <stop offset="1" stop-color="white" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                                <span className="absolute bottom-0 right-0 z-[-1]">
                                    <svg
                                        width="191"
                                        height="208"
                                        viewBox="0 0 191 208"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <ellipse
                                            cx="173"
                                            cy="178.5"
                                            rx="173"
                                            ry="178.5"
                                            fill="url(#paint0_linear)"
                                        />
                                        <defs>
                                            <linearGradient
                                                id="paint0_linear"
                                                x1="-3.27832e-05"
                                                y1="87.2457"
                                                x2="255.501"
                                                y2="88.5747"
                                                gradientUnits="userSpaceOnUse"
                                            >
                                                <stop stop-color="white" stop-opacity="0.07" />
                                                <stop offset="1" stop-color="white" stop-opacity="0" />
                                            </linearGradient>
                                        </defs>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
                {/* <!-- ====== Call To Action Section End --> */}
            </div>

            {/* <!-- ====== Blog Section Start --> */}
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-0">
                <div className="container mx-auto">
                    <div className="-mx-4 flex flex-wrap justify-center">
                        <div className="w-full px-4">
                            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                                <span className="text-primary mb-2 block text-lg font-semibold">
                                    Quelques postent
                                </span>
                                <h2
                                    className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]"
                                >
                                    Ayez un appercue des produits Avendre
                                </h2>
                                <p className="text-body-color text-base">
                                    Chosissez un produit pour voir ses details
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="-mx-4 flex flex-wrap">
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-01.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <span
                                        className="bg-primary mb-5 -mt-9 inline-block rounded py-1 px-4 text-center text-md font-semibold leading-loose text-white"
                                    >
                                        2 000 <sub>xaf</sub>
                                    </span>
                                    <h3>
                                        <a
                                            href="#"
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            Meet AutoManage, the best AI management tools
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-02.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <span
                                        className="bg-primary mb-5 -mt-9 inline-block rounded py-1 px-4 text-center text-md font-semibold leading-loose text-white"
                                    >
                                        4 000 <sub>xaf</sub>
                                    </span>
                                    <h3>
                                        <a
                                            href="#"
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            How to earn more money as a wellness coach
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                        <div className="w-full px-4 md:w-1/2 lg:w-1/3">
                            <div className="mx-auto mb-10 max-w-[370px]">
                                <div className="mb-8 overflow-hidden rounded">
                                    <img
                                        src="https://cdn.tailgrids.com/2.0/image/application/images/blogs/blog-01/image-03.jpg"
                                        alt="image"
                                        className="w-full"
                                    />
                                </div>
                                <div>
                                    <span
                                        className="bg-primary mb-5 -mt-9 inline-block rounded py-1 px-4 text-center text-md font-semibold leading-loose text-white"
                                    >
                                        17 000 <sub>xaf</sub>
                                    </span>
                                    <h3>
                                        <a
                                            href="#"
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            The no-fuss guide to upselling and cross selling
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- ====== Blog Section End --> */}

            <div className="hidden justify-center sm:flex lg:pb-12">
                            <a
                                href="/articles"
                                className="bg-primary rounded-lg py-3 px-7 font-medium text-white hover:bg-opacity-90"
                            >
                                Voir plus
                            </a>
                        </div>
        </>
    )
}