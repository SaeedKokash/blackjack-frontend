import { useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Text,
  Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';
// import { useSelector } from 'react-redux';

// import all the images from the assets folder and put them in an array
// const assetsImages = require.context('../assets/blueLogo', true, /.JPG$/);

const assetsImages = require.context('../assets/products/product02', true, /.jpg$/);


// Settings for the slider
const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function CaptionCarousel() {
  // As we have used custom buttons, we need a reference variable to
  // change the state
  const [slider, setSlider] = useState(null);

  // These are the breakpoints which changes the position of the
  // buttons as the screen size changes
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  // activate this when you want to load the data from the store
  // const { items } = useSelector((state) => state.admin);

  // This is the list of images from the assets folder
  const [items] = useState(assetsImages.keys().map(assetsImages));

  return (
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>
      {/* CSS files for react-slick */}
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      {/* Left Icon */}
      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>
      {/* Right Icon */}
      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>
      {/* Slider */}
      <Slider {...settings} ref={(slider) => setSlider(slider)}>


        {items.map((card, index) => (
          <Box
            key={index}
            // height={'6xl'}
            height={'600px'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"

            // This is when you activate the images from the store
            // backgroundSize="cover"
            // backgroundImage={`url(${card.images[0]})`}>

            // This is when you activate the images from the assets folder
            backgroundSize="contain"
            backgroundImage={`url(${card})`}>

            {/* This is the block you need to change, to customize the caption */}
            <Container size="container.lg" height="900px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Text fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }} fontWeight="bold">
                  {card.title}
                </Text>
                <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                  {card.description}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
  );
}