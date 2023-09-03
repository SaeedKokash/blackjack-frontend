import { Box, Container, Heading, Icon, Stack, Text, useColorModeValue } from '@chakra-ui/react'
import React from 'react'
import { FaLock, FaTruck, FaCheck, FaHeadset } from 'react-icons/fa'

function Stats() {

    const stats = [
        {
            id: 1,
            title: 'Secure Payments',
            text: 'Your payment is secure with us. We use the latest security technologies to ensure your payment is safe.',
            icon: FaLock
        },
        {
            id: 2,
            title: 'Fast Delivery',
            text: 'We deliver your order within 3-5 business days. We also offer express delivery for urgent orders.',
            icon: FaTruck
        },
        {
            id: 3,
            title: 'Quality Products',
            text: 'We only sell quality products. We do not sell products that are not up to our standards.',
            icon: FaCheck
        },
        {
            id: 4,
            title: '24/7 Support',
            text: 'We are available 24/7 to answer your questions. You can contact us via email or phone.',
            icon: FaHeadset
        }
    ]

    const iconColor = useColorModeValue("maroon.300", "blue.300");

    return (
        <Box w="100%" bg={useColorModeValue('pink.50', 'gray.100')}>
            <Container maxW="7xl" py="2em" as={Stack}>
                <Stack w="100%" direction={{ base: 'column', md: 'row' }} gap="10">
                    {stats.map((stat) => (
                        <Box key={stat.id} textAlign="center" >
                            <Icon as={stat.icon} fontSize="2em" color={iconColor} mb="1em" />
                            {/* <Box as="i" fontSize="2em" color="blue.300" mb="1em"></Box> */}
                            <Heading fontSize="2xl" fontWeight="bold" mb="0.5em">{stat.title}</Heading>
                            <Text fontSize="sm" color="gray.500">{stat.text}</Text>
                        </Box>
                    ))}
                </Stack>
            </Container>
        </Box>
    )
}

export default Stats