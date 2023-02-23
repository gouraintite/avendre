import React from "react";
import Footer from "../components/footers";
import Nav from "../components/nav";
const Articles = () => {

    return (
        <>
            <Nav />
            <div className='pt-20'></div>
            <div className="w-full rounded-xl py-20 text-center mx-auto bg-gradient-to-r from-primary/20 via-primary/15 to-blue/20">
                <h1
                    className="text-dark mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]"
                >Articles disponibles</h1>
                <h3
                    className="text-dark mb-3 text-md font-bold leading-snug sm:text-[22px] lg:text-[40px] xl:text-[22px]"
                >Trouvez de tout sur Avendre</h3>
                <div className="lg:w-1/2 w-2/3 rounded-xl flex justify-between bg-white mx-auto mt-12 ">
                    <input type="text"
                        className="w-full rounded-xl focus:outline-none px-4" />

                    <a
                        href="/detail"
                        className="bg-primary inline-flex items-center justify-center rounded-lg py-4 px-4 text-center text-base font-normal text-white hover:bg-opacity-90 sm:px-6 lg:px-8 xl:px-10"
                    >
                        Falla
                    </a>
                </div>
            </div>

            {/* <!-- ====== Blog Section Start --> */}
            <section className="pt-20 pb-10 lg:pt-[120px] lg:pb-0">
                <div className="container mx-auto">
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
                                            href="/detail"
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
                                            href="/detail"
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
                                            href="/detail"
                                            className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                                        >
                                            The no-fuss guide to upselling and cross selling
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
                                            href="/detail"
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
                                            href="/detail"
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

            <div className="text-center mb-12">
                <div className="inline-flex rounded-xl border border-[#e4e4e4] bg-white p-4">
                    <ul className="-mx-[6px] flex items-center">
                        <li className="px-[6px]">
                            <a
                                href="/detail"
                                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
                            >
                                <span>
                                    <svg
                                        width="8"
                                        height="15"
                                        viewBox="0 0 8 15"
                                        className="fill-current stroke-current"
                                    >
                                        <path
                                            d="M7.12979 1.91389L7.1299 1.914L7.1344 1.90875C7.31476 1.69833 7.31528 1.36878 7.1047 1.15819C7.01062 1.06412 6.86296 1.00488 6.73613 1.00488C6.57736 1.00488 6.4537 1.07206 6.34569 1.18007L6.34564 1.18001L6.34229 1.18358L0.830207 7.06752C0.830152 7.06757 0.830098 7.06763 0.830043 7.06769C0.402311 7.52078 0.406126 8.26524 0.827473 8.73615L0.827439 8.73618L0.829982 8.73889L6.34248 14.6014L6.34243 14.6014L6.34569 14.6047C6.546 14.805 6.88221 14.8491 7.1047 14.6266C7.30447 14.4268 7.34883 14.0918 7.12833 13.8693L1.62078 8.01209C1.55579 7.93114 1.56859 7.82519 1.61408 7.7797L1.61413 7.77975L1.61729 7.77639L7.12979 1.91389Z"
                                            stroke-width="0.3"
                                        ></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                        <li className="px-[6px]">
                            <a
                                href="/detail"
                                className="bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-white"
                            >
                                1
                            </a>
                        </li>
                        <li className="px-[6px]">
                            <a
                                href="/detail"
                                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
                            >
                                2
                            </a>
                        </li>
                        <li className="px-[6px]">
                            <a
                                href="/detail"
                                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
                            >
                                3
                            </a>
                        </li>
                        <li className="px-[6px]">
                            <a
                                href="/detail"
                                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
                            >
                                4
                            </a>
                        </li>
                        <li className="px-[6px]">
                            <a
                                href="/detail"
                                className="hover:bg-primary hover:border-primary flex h-9 w-9 items-center justify-center rounded-md border border-[#EDEFF1] text-base text-[#838995] hover:text-white"
                            >
                                <span>
                                    <svg
                                        width="8"
                                        height="15"
                                        viewBox="0 0 8 15"
                                        className="fill-current stroke-current"
                                    >
                                        <path
                                            d="M0.870212 13.0861L0.870097 13.086L0.865602 13.0912C0.685237 13.3017 0.684716 13.6312 0.895299 13.8418C0.989374 13.9359 1.13704 13.9951 1.26387 13.9951C1.42264 13.9951 1.5463 13.9279 1.65431 13.8199L1.65436 13.82L1.65771 13.8164L7.16979 7.93248C7.16985 7.93243 7.1699 7.93237 7.16996 7.93231C7.59769 7.47923 7.59387 6.73477 7.17253 6.26385L7.17256 6.26382L7.17002 6.26111L1.65752 0.398611L1.65757 0.398563L1.65431 0.395299C1.454 0.194997 1.11779 0.150934 0.895299 0.373424C0.695526 0.573197 0.651169 0.908167 0.871667 1.13067L6.37922 6.98791C6.4442 7.06886 6.43141 7.17481 6.38592 7.2203L6.38587 7.22025L6.38271 7.22361L0.870212 13.0861Z"
                                            stroke-width="0.3"
                                        ></path>
                                    </svg>
                                </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            {/* <!-- ====== Blog Section End --> */}

            <Footer />
        </>
    )
}

export default Articles;