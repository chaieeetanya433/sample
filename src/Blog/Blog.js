import { Box, Image, Heading, Container, Stack, Text } from "@chakra-ui/react"
import React from "react"
import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/img1.webp";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.webp";


const headingOptions = {
    pos:"absolute",
    left:"50%",
    top:"10%",
    transform:"translate(-50%, -50%)",
    textTransform:"uppercase",
    p:"4",
    size:"4xl"
}

const Blog = () => {
    return (
    <Box id="blogs">
         <h2 className="section-heading">Blogs</h2>
        <MyCarousel />
    </Box>
  );
};

const MyCarousel = () => {
    return (
    <Carousel autoPlay infiniteLoop interval={1000} showStatus={false} showArrows={false} showThumbs={false}>
        <a href="https://www.wiley.com/edge/media/developing-gen-z-talent-why-are-soft-skills-important/">
        <Box w={"full"} h={"100vh"}>
            <Image src={img1} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={"whiteAlpha.900"} color={"black"} {...headingOptions}>
            Developing Gen Z talent: Why are soft skills so important?
            </Heading>
        </Box>
        </a>
        <a href="https://www.scotthyoung.com/blog/2014/12/02/career-fulfillment/">
        <Box w={"full"} h={"100vh"}>
            <Image src={img2} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
            Two Ways to Think About Career Fulfillment
            </Heading>
        </Box>
        </a>
        <a href="https://www.scotthyoung.com/blog/2015/01/07/how-to-get-mentors/">
        <Box w={"full"} h={"100vh"}>
            <Image src={img3} h={"full"} w={"full"} objectFit={"cover"}/>
            <Heading bgColor={"blackAlpha.600"} color={"white"} {...headingOptions}>
            Why You Need Mentors (and Why You Dont Have Them Yet)
            </Heading>
        </Box>
        </a>
    </Carousel>
    );
}

export default Blog;