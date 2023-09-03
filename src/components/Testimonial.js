import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
} from '@chakra-ui/react';

const TestimonialAvatar = ({ src, name, title }) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} alt={name} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function Testimonial() {

  const testimonials = [
    {
      id: 1,
      avatar: {
        name: 'Ryan Florence',
        src: 'https://bit.ly/ryan-florence',
        title: 'Product Designer',
      },
      content: {
        heading: 'Working with Chakra has been a breath of fresh air.',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
      },
    },

    {
      id: 2,
      avatar: {
        name: 'Segun Adebayo',
        src: 'https://bit.ly/sage-adebayo',
        title: 'Founder of Segun Adebayo',
      },
      content: {
        heading: 'Chakra is the most accessible UI component library out there.',
        text:

          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
      },
    },
    {
      id: 3,
      avatar: {
        name: 'Kent Dodds',
        src: 'https://bit.ly/kent-c-dodds',
        title: 'Creator of React Testing Library',
      },
      content: {
        heading: 'Chakra is the most accessible UI component library out there.',
        text:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor neque sed imperdiet nibh lectus feugiat nunc sem.',
      },
    },
  ];

  return (
    <Box 
    bg={useColorModeValue('pink.50', 'gray.200')}
    >
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} textAlign={'center'}>
          <Heading>Our Clients Speak</Heading>
          <Text>We have been working with clients around the world</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          {testimonials.map((testimonial) => (
            <Box key={testimonial.id}>

              <Stack
                    bg='white'
                    boxShadow={'lg'}
                    p={8}
                    rounded={'xl'}
                    align={'center'}
                    pos={'relative'}
                    _after={{
                      content: `""`,
                      w: 0,
                      h: 0,
                      borderLeft: 'solid transparent',
                      borderLeftWidth: 16,
                      borderRight: 'solid transparent',
                      borderRightWidth: 16,
                      borderTop: 'solid',
                      borderTopWidth: 16,
                      borderTopColor: 'white',
                      pos: 'absolute',
                      bottom: '-16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}>

              <Heading as={'h3'} fontSize={'xl'}>
                {testimonial.content.heading}
              </Heading> 

                <Text 
                  textAlign={'center'} 
                  color='gray.600'  
                  fontSize={'sm'}
                  >
                  {testimonial.content.text}
                </Text>

              </Stack>

              <TestimonialAvatar
                src={testimonial.avatar.src}
                name={testimonial.avatar.name}
                title={testimonial.avatar.title}
              />

            </Box>
          ))}
        </Stack>
      </Container>
    </Box>
  );
}