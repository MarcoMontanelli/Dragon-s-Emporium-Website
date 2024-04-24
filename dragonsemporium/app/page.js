"use client";
import Jumbo from "@/app/home/components/Jumbo";
/*import Phone from "./Phone.jsx";
import CTATerminal from "./CTAterminal.jsx";
import SwiperComponent from "./SwiperComponent.jsx";
import GlobeComponent from "./GlobeComponent.jsx";
import Shipping from "./Shipping.jsx";
import BlogCardContainer from "./BlogCardContainer.jsx";
import ShuffleHero from "./SuffleHero.jsx";
import VideoCardContainer from "./VideoCardContainer.jsx";
import TiltedCards from "./TiltedCards.jsx";
import ShiftingCountdown from "./NextConvention.jsx";
import CenterFeatures from "./CFeatures.jsx";*/
const cardsData = [
  {
    image: "../src/assets/wireFrameDragon.png",
    title: "Making patterns for cosplay",
    description:
      "Join us on a quest to find the perfect way to create your patterns for your props",
    author: "Jane Doe",
    authorImage: "https://yourdomain.com/images/authors/jane.jpg",
    date: "Apr 10, 2024",
    readTime: "5",
  },
  {
    image: "../src/assets/wireFrameDragon.png",
    title: "sewing for beginners",
    description:
      "We always need sewing to complete our projects, follow this tutorial series to learn the basics of sewing to bring your project to the next level ",
    author: "John Smith",
    authorImage: "https://yourdomain.com/images/authors/john.jpg",
    date: "Mar 23, 2024",
    readTime: "7",
  },
  {
    image: "../src/assets/wireFrameDragon.png",
    title: "Integrating leds in your costumes",
    description:
      "Lighting up your props and costumes has never been easier, learn how you can improve the quality of your creations",
    author: "Alice Johnson",
    authorImage: "https://yourdomain.com/images/authors/alice.jpg",
    date: "Mar 15, 2024",
    readTime: "6",
  },
  {
    image: "../src/assets/wireFrameDragon.png",
    title: "Painting eva foam",
    description:
      "Learn how to correctly paint your EVA foam props correctly and some basic maintenance",
    author: "Michael Brown",
    authorImage: "https://yourdomain.com/images/authors/michael.jpg",
    date: "Feb 28, 2024",
    readTime: "4",
  },
];

const cardData = [
  {
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Rick Astley's "Never Gonna Give You Up" music video
    title: "First Blog Post Title",
  },
  {
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Official Marvel Avengers Trailer
    title: "Second Blog Post Title",
  },
  {
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Alan Walker - Faded
    title: "Third Blog Post Title",
  },
  {
    iframeSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Amazing nature scenery
    title: "Final Blog Post Title",
  },
];

export default function Home() {
  return (
    <>
      <Jumbo />
      {/*<Phone />
      <VideoCardContainer cards={cardData} />
      <CTATerminal />
      <ShuffleHero />
      <Shipping />
      <BlogCardContainer cards={cardsData} />
      <ShiftingCountdown />
      
      */}
    </>
  );
}
