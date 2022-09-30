import React, { FC, useState, useRef, useEffect, useCallback } from 'react';
import Slider from "react-slick";
import { useRouter } from 'next/router';
import { Box, Button, IconButton, Typography, useMediaQuery } from '@mui/material';
import M from '../../../../src/messages';
import ArrowRightBtn from '../../../../src/assets/icons/arrow-right-btn-2.svg';
import ArrowLeftBtn from '../../../../src/assets/icons/arrow-left-btn-2.svg';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { muiStyles } from './styles';

const CompaniesCards: FC = () => {
  const router = useRouter();
  const [sliderCount, setSliderCount] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(-1);
  const sliderRef = useRef<any>();
  const blockRef = useRef<any>();

  // TODO get from API
  const [companies, setCompanies] = useState([
    { name: 'Company 1 Kuwait Oil - mother company', licenses: 2, status: 'requestForm' },
    { name: 'Company 2 Kuwait Oil - mother company', licenses: 0, status: 'inProcess' },
    { name: 'Company 3 Kuwait Oil - mother company', licenses: 0, status: 'completed' },
    { name: 'Company 4 Kuwait Oil - mother company', licenses: 0, status: 'completed' },
    { name: 'Company 5 Kuwait Oil - mother company', licenses: 0, status: 'completed' },
    { name: 'Company 6 Kuwait Oil - mother company', licenses: 0, status: 'completed' },
    { name: 'Company 7 Kuwait Oil - mother company', licenses: 0, status: 'completed' },
    { name: 'Company 8 Kuwait Oil - mother company', licenses: 0, status: 'completed' },
    { name: 'Company 9 Kuwait Oil - mother company', licenses: 0, status: 'completed' },
  ]
  );

  const handleResize = useCallback(() => {
    setSliderCount(Math.floor(blockRef?.current?.clientWidth / 248 as number));
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [handleResize]);

  // TODO

  // const isMobile = useMediaQuery(`(max-width: ${variables.mobileSizeMax})`);
  // const isSmallTablet = useMediaQuery(`(max-width: ${variables.smallTabletSizeMax})`);
  // const isDesktop = useMediaQuery(`(max-width: ${variables.desktopSizeMin})`);

  // useEffect(() => {
  //   // if (isMobile) {
  //   //   setSliderCount(1);
  //   // } else if (isSmallTablet) {
  //   //   setSliderCount(2);
  //   // } else if (isDesktop) {
  //   //   setSliderCount(3);
  //   // } else {
  //   //   setSliderCount(3);
  //   // }
  //   setSliderCount(Math.floor(blockRef?.current?.clientWidth / 248 as number));
  // }, [sliderRef.current?.state?.breakpoint, isMobile, isSmallTablet, isDesktop]);



  const settings = {
    customPaging: function (i: any) {
      return (
        <Box sx={{ width: '24px', height: '16px', display: 'flex', alignItems: 'center' }}>
          <Box sx={{ width: '24px', height: '2px', background: '#CBD9E8', borderRadius: '8px' }} />
        </Box>
      );
    },
    beforeChange: (_: any, next: number) => setCurrentSlide(next + sliderCount),
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: sliderCount,
    slidesToScroll: sliderCount,
    initialSlide: 0,
    responsive: [
      {breakpoint: 1200, settings: {slidesToShow: sliderCount, slidesToScroll: sliderCount}},
      {breakpoint: 1024, settings: {slidesToShow: sliderCount, slidesToScroll: sliderCount}},
      {breakpoint: 768, settings: {slidesToShow: sliderCount, slidesToScroll: sliderCount}},
      {breakpoint: 639, settings: {slidesToShow: sliderCount, slidesToScroll: sliderCount}},
    ]
  };

  const prevSlide = () => {
    sliderRef?.current?.slickPrev();
  };
  const nextSlide = () => {
    sliderRef?.current?.slickNext();
  };

  // TODO inprogress
  const rerenderFooter = (status: string) => {
    switch (status) {
      case 'requestForm':
        return (
          <Button disableRipple sx={muiStyles.statusBtn} variant="outlined">
            {M.get(`companies.statuses.${status}`)}
          </Button>
        );
      case 'inProcess':
        return (
          <Button disableRipple sx={muiStyles.statusBtn} variant="outlined">
            {M.get(`companies.statuses.${status}`)}
          </Button>
        );
      case 'completed':
        return (
          <Button disableRipple sx={muiStyles.statusBtn} variant="outlined">
            {M.get(`companies.statuses.${status}`)}
          </Button>
        );
      default:
        return null;
    }
  }

  return (
    <Box ref={blockRef} component="div">

      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3, p: '0 8px', height: '32px', alignItems: 'center' }}>
        <Typography sx={muiStyles.blockTitle}>{M.get('pages.platform.overview.companies')}</Typography>
        <Box>
          <IconButton disableRipple disabled={currentSlide === -1 || currentSlide === sliderCount} onClick={prevSlide} sx={muiStyles.arrowIconLeft}>
            <ArrowLeftBtn />
          </IconButton>
          <IconButton disableRipple disabled={currentSlide === companies.length} onClick={nextSlide} sx={muiStyles.arrowIconRight}>
            <ArrowRightBtn />
          </IconButton>
        </Box>
      </Box>


      <Box ref={sliderRef} sx={muiStyles.slider} component={Slider} {...settings}>
        {companies.map((item: any) => (
          <Box component="div" key={item.name} sx={muiStyles.card} className="card">
            <Box component="div" sx={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <Typography sx={muiStyles.cardTitle}>{item.name}</Typography>
              <Box component="div">{rerenderFooter(item.status)}</Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default CompaniesCards;