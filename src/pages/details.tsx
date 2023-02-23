import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import React, { ReactNode } from 'react';
import { generateSlides } from '../components/utils/index';

import '@splidejs/react-splide/css/skyblue';

// or only core styles
import '@splidejs/react-splide/css/core';
import Nav from '../components/nav';
import Footer from '../components/footers';


const Detail = () => {

  return (

    <>
      <Nav />
      <div className='pt-20'></div>
      <div className='flex flex-wrap justify-center container my-12'>
        <div className='lg:w-1/2 md:w-1/2 w-full'>
          <ThumbnailsExample />
        </div>
        <div className='lg:w-1/2 md:w-1/2 w-full lg:pl-12 lg:mt-0 mt-4'>
          <h1
            className="text-dark font-extrabold mb-3 text-4xl sm:text-[42px] lg:text-[40px] xl:text-[42px]"
          >
            Article de classe
          </h1>
          <p className='lg:w-2/3 text-justify my-6'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque debitis veniam voluptatibus animi. Dolorum
          </p>
          <h2 className='my-3 text-xl font-bold'>
            Details du produit
          </h2>
          <div>
            <hr className='text-[#ccc]' />
            <div className='flex justify-between my-4'>
              <h3>Categorie</h3>
              <p className='pr-12'>Voiture</p>
            </div>
            <hr className='text-[#ccc]' />
            <div className='flex justify-between my-4'>
              <h3>Etat</h3>
              <p className='pr-12'>9/10</p>
            </div>
            <hr className='text-[#ccc]' />
            <div className='flex justify-between my-4'>
              <h3>Mis en vente depuis</h3>
              <p className='pr-12'>6 mois 2j</p>
            </div>
            <hr className='text-[#ccc]' />
          </div>
          <div className='mt-4  text-dark/50'>
            Vous voulez commander ce produit ? Telecharge Avendre et retrouve le vendeur.
          </div>
          <a href="#" className="w-full sm:w-auto bg-primary hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 mt-6">
            <svg className="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div className="text-left">
              <div className="mb-1 text-xs">Obtenez le sur</div>
              <div className="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
          </a>
        </div>
      </div>
      <Footer />

    </>
  )

}

export default Detail

export class ThumbnailsExample extends React.Component<{}> {
  /**
   * The main Splide component.
   */
  mainRef = React.createRef<Splide>();

  /**
   * The thumbnail Splide component.
   */
  thumbsRef = React.createRef<Splide>();

  /**
   * Set the sync target right after the component is mounted.
   */
  componentDidMount(): void {
    if (this.mainRef.current && this.thumbsRef.current && this.thumbsRef.current.splide) {
      this.mainRef.current.sync(this.thumbsRef.current.splide);
    }
  }

  /**
   * Render slides.
   *
   * @return Slide nodes.
   */
  renderSlides(): ReactNode[] {
    return generateSlides().map(slide => (
      <SplideSlide key={slide.src}>
        <img src={slide.src} alt={slide.alt} />
      </SplideSlide>
    ));
  }

  /**
   * Render the component.
   *
   * @return A React node.
   */
  render(): ReactNode {
    const mainOptions: Options = {
      type: 'loop',
      perPage: 1,
      perMove: 1,
      gap: '1rem',
      pagination: false,
      height: '',
    };

    const thumbsOptions: Options = {
      type: 'slide',
      rewind: true,
      gap: '.6rem',
      pagination: false,
      fixedWidth: 110,
      fixedHeight: 70,
      cover: true,
      focus: 'center',
      isNavigation: true,
    };

    return (
      <div className="wrapper">
        <Splide
          options={mainOptions}
          ref={this.mainRef}
          aria-labelledby="thumbnail-slider-example"
        >
          {this.renderSlides()}
        </Splide>

        <Splide
          options={thumbsOptions}
          ref={this.thumbsRef}
          aria-label="The carousel with thumbnails. Selecting a thumbnail will change the main carousel"
        >
          {this.renderSlides()}
        </Splide>
      </div>
    );
  }
}

// https://source.unsplash.com/random/1