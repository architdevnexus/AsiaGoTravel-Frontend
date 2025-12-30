import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';
import { GiCandleLight } from 'react-icons/gi';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { BsSunrise } from 'react-icons/bs';
import { MdMonochromePhotos, MdPool } from 'react-icons/md';
import HoneymoonSeasonSection from '../global/HoneymoonSeasonSection';



export const FamilyGroupTourComponent = () => {
    const images = [
        { src: "https://plus.unsplash.com/premium_photo-1666184129856-e421e3edc1db?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Group-friendly stays & transport", href: "/honeymoon-trips" },
        { src: "https://plus.unsplash.com/premium_photo-1718146019127-ebfb31a4af15?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91ciUyMGd1aWRlfGVufDB8fDB8fHww", text: "Expert guides & managers", href: "/family-holidays" },
        { src: "https://images.unsplash.com/photo-1522777642-5cd2999bca62?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Flexible plans for all", href: "/bachelor-tours" },
        { src: "https://plus.unsplash.com/premium_photo-1661537729535-7d06399fe95b?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "Visa & travel assistance", href: "/luxury-tours" },
        { src: "https://images.unsplash.com/photo-1617365209649-56138ac3aefc?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "End-to-end tour support", href: "/premium-holiday-packages" },
    ];

  const activitiesData = [
    {
      icon: <GiCandleLight /> ,
      title: "Resort-Based Fun Day",
      points: [
        "Group games, pool activities, kids’ clubs, and relaxation time—easy to manage and enjoyable for all ages.",
        // "Often includes soft music & beautiful views",
      ],
    },
    {
      icon: <TbBeach /> ,
      title: "Light Adventure Experience",
      points: [
        "Cable car rides, ropeways, nature trails, or easy cycling tours—safe, exciting, and group-friendly.",
        // "Sunrise & sunset walks on quiet beaches",
      ],
    },
    {
       icon: <TbMassage /> ,
      title: "Interactive Workshops",
      points: [
        "Cooking classes, pottery, painting, chocolate-making, or craft workshops that families can enjoy together.",
        // "Helps you relax after wedding stress",
      ],
    },
    {
      icon: <BsSunrise /> ,
      title: "Farm Visit / Plantation Tour",
      points: [
        "Visits to farms, tea/coffee plantations, fruit orchards, or countryside experiences with guided explanations and tastings.",
        // "Perfect for photos & romantic moments",
      ],
    },
    {
      icon: <MdPool /> ,
      title: "Light & Sound Show",
      points: [
        "Evening heritage shows, monument light-and-sound programs, or storytelling performances—great for large family groups.",
        // "Great for relaxation & romantic photos",
      ],
    },
    {
       icon: <MdMonochromePhotos /> ,
      title: "Local Festival or Community Experience",
      points: [
        "Participation in local fairs, cultural events, or themed evenings (subject to dates)—very memorable for families.",
        // "Beach, waterfalls, gardens & resorts",
      ],
    },
  ];


const DESTINATION_DATA = {
  domestic: {
    summer: [
      {
        title: "Shimla – Manali – Dharamshala",
        image: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Hill stations", "Ropeways", "Group sightseeing"],
        featured: true,
      },
      {
        title: "Kashmir",
        image: "https://images.unsplash.com/photo-1614056965546-42fbe24eb36c?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Gardens", "Gondola rides", "Houseboat stays"],
      },
      {
        title: "Nainital – Mussoorie – Ranikhet",
        image: "https://images.unsplash.com/photo-1593598403786-49a230711943?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Lakes", "Viewpoints", "Family attractions"],
      },
      {
        title: "Sikkim (Gangtok & Pelling)",
        image: "https://images.unsplash.com/photo-1709730705114-74080546e165?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Monasteries", "Nature", "Mountain views"],
      },
      {
        title: "Ooty – Kodaikanal – Coonoor",
        image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d",
        points: ["Relaxed hill tours", "Suitable for all age groups"],
      },
    ],

    monsoon: [
      {
        title: "Kerala (Munnar – Thekkady – Alleppey)",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
        points: ["Nature", "Wildlife", "Backwaters"],
        featured: true,
      },
      {
        title: "Coorg – Wayanad",
        image: "https://images.unsplash.com/photo-1710612198146-77512950a4b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Coffee estates", "Waterfalls"],
      },
      {
        title: "Udaipur – Mount Abu",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        points: ["Lakes", "Palaces", "Hill charm"],
      },
      {
        title: "Lonavala – Mahabaleshwar",
        image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
        points: ["Short scenic getaways", "Group travel friendly"],
      },
    ],

    winter: [
      {
        title: "Rajasthan (Jaipur – Jodhpur – Jaisalmer – Udaipur)",
        image: "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Forts", "Palaces", "Desert safaris"],
        featured: true,
      },
      {
        title: "Goa",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Beaches", "Group resorts", "Sightseeing"],
      },
      {
        title: "Gujarat (Statue of Unity – Gir – Somnath)",
        image: "https://images.unsplash.com/photo-1642841819300-20ed449c02a1?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Culture", "Wildlife", "Pilgrimage"],
      },
      {
        title: "Kerala (Kochi – Alleppey – Kovalam)",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        points: ["Relaxing group tours", "Backwaters", "Beaches"],
      },
      {
        title: "Andaman & Nicobar Islands",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        points: ["Safe beaches", "Group activities"],
      },
    ],
  },

  international: {
    summer: [
      {
        title: "Switzerland",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        points: ["Scenic trains", "Mountains", "Lakes"],
        featured: true,
      },
      {
        title: "Singapore",
        image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac",
        points: ["Theme parks", "Zoos", "City attractions"],
      },
      {
        title: "Malaysia",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07",
        points: ["Theme parks", "Shopping", "Cultural sites"],
      },
      {
        title: "Mauritius",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        points: ["Beach resorts", "Water sports", "Relaxed group travel"],
      },
      {
        title: "United Kingdom",
        image: "https://images.unsplash.com/photo-1488747279002-c8523379faaa",
        points: ["Iconic landmarks", "Museums", "Family attractions"],
      },
    ],

    winter: [
      {
        title: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        points: ["Theme parks", "Desert safaris", "Shopping festivals"],
        featured: true,
      },
      {
        title: "Thailand",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Beaches", "Island tours", "Group-friendly resorts"],
      },
      {
        title: "Sri Lanka",
        image: "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Cultural sites", "Wildlife parks", "Beaches"],
      },
      {
        title: "Hong Kong",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
        points: ["Disneyland", "City attractions"],
      },
      {
        title: "Vietnam",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592",
        points: ["Halong Bay cruises", "Cultural sightseeing"],
      },
    ],
  },
};

const SEASONS_CONFIG = [
  {
    key: "summer",
    title: "Summer Family Group Tour Destinations",
    period: "(March – June)",
    desc: "Ideal for pleasant weather and scenic landscapes.",
  },
  {
    key: "monsoon",
    title: "Monsoon Family Group Tour Destinations",
    period: "(July – September)",
    desc: "Best for greenery, heritage, and leisure travel.",
  },
  {
    key: "winter",
    title: "Winter Family Group Tour Destinations",
    period: "(October – February)",
    desc: "Perfect for culture, beaches, and wildlife experiences.",
  },
];


    return (
        <div>
            <HeroBannerTours title="Multi-Generation & Large Family Tours"
                description="Perfect for large families and multi-generational groups. We handle the logistics, safety, and planning so you can focus on making memories together with guided tours and group-friendly accommodations." />
            <Activites activitiesData={activitiesData} title="Activities We Offer  Family Group Tours" />
                <AboutPackage
              title="Family Group Holidays"
              description="Family Group Tours are specially designed for large families, multi-generation travelers, and groups looking to explore destinations together in a comfortable and well-organized manner. These tours focus on convenience, safety, group-friendly hotels, guided sightseeing, and seamless logistics. With planned itineraries, shared experiences, and dedicated support, family group tours make traveling together enjoyable, memorable, and stress-free."
              images={[
                "https://plus.unsplash.com/premium_photo-1664391877478-c81dd0d181ec?q=80&w=1476&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/photo-1551559347-b2df2a690bd5?q=80&w=1509&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "https://images.unsplash.com/flagged/photo-1559425704-7bea20c777de?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              ]}
            />
            <WhatWeOfferComponent images={images} />
            <BookPackage
                       title="Plan Your Next Family Group Tour"
                       description="Travel together, explore together, and create unforgettable memories. Contact us today to design a customized family group tour tailored to your group size, travel season, and budget."
                       bgImage="https://plus.unsplash.com/premium_photo-1664367173144-7e854e199524?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                     />


                         <HoneymoonSeasonSection
              title="Best Family Group Tour Destinations"
              destinationData={DESTINATION_DATA}
              seasonsConfig={SEASONS_CONFIG}
            />
            <PopularPackages />
            <FaqSection
  title="Family Group Tours – Frequently Asked Questions"
  subtitle="Everything you need to know about traveling together with comfort and ease"
  defaultOpen="item-0"
  faqs={[
    {
      id: 1,
      question: "What is a family group tour?",
      answer: [
        "A family group tour is designed for families traveling together, including relatives across multiple generations.",
        "Asiago Travels carefully plans group tours that maintain the perfect balance between sightseeing, comfort, and leisure for travelers of all age groups."
      ],
    },
    {
      id: 2,
      question: "Can Asiago Travels customize family group tours?",
      answer: [
        "Yes, Asiago Travels specializes in fully customized family group tours.",
        "Tours are tailored based on your group size, destination, budget, and travel preferences to ensure a seamless and enjoyable experience for everyone."
      ],
    },
    {
      id: 3,
      question: "Are family group tours suitable for children and senior citizens?",
      answer: [
        "Absolutely. Asiago Travels designs family group tours keeping the needs of all age groups in mind.",
        "This includes relaxed itineraries, comfortable transportation, child-friendly attractions, and senior-friendly arrangements."
      ],
    },
    {
      id: 4,
      question: "What services are included in Asiago Travels’ family group tours?",
      answer: [
        "Asiago Travels offers complete end-to-end travel solutions for family group tours.",
        "Services include flights, hotels, airport and local transfers, sightseeing tours, tour managers (if required), visa assistance, and travel insurance for a hassle-free journey."
      ],
    },
  ]}
/>

        </div>
    )
}
