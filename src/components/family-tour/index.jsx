import React from 'react'
import { HeroBannerTours } from '../bachelor-tours/HeroBannerTours';
import { Activites } from '../bachelor-tours/Activites';
import { AboutPackage } from '../bachelor-tours/AboutPackage';
import { WhatWeOfferComponent } from '../landingpage/WhatweOffer';
import { BookPackage } from '../bachelor-tours/BookPackage';
import { PopularPackages } from '../landingpage/PopularTravel';
import { FaqSection } from '../global/Faq';
import { TbBeach, TbMassage } from 'react-icons/tb';
import { MdFamilyRestroom, MdOutlineRestaurant, MdPhotoCamera, MdSportsVolleyball } from 'react-icons/md';
import { GiAnimalSkull } from 'react-icons/gi';
import HoneymoonSeasonSection from '../global/HoneymoonSeasonSection';



export const FamilyTourComponent = () => {
      const images = [
    { src: "https://images.unsplash.com/photo-1622610607501-32ac9c927216?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhbWlseSUyMHZhY2F0aW9ufGVufDB8fDB8fHww", text: "Family-friendly stays", href: "/honeymoon-trips" },
    { src: "https://images.unsplash.com/photo-1541542684-be0c46417a12?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFkdmVudHVyZXxlbnwwfHwwfHx8MA%3D%3D", text: "Everyone's adventure, perfectly planned", href: "/family-holidays" },
    { src: "https://plus.unsplash.com/premium_photo-1718146019127-ebfb31a4af15?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dG91ciUyMGd1aWRlfGVufDB8fDB8fHww", text: "Private transfers and guided sightseeing", href: "/bachelor-tours" },
    { src: "https://plus.unsplash.com/premium_photo-1701113010478-b16fb74e6b8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", text: "24/7 on-trip assistance", href: "/luxury-tours" },
    { src: "https://plus.unsplash.com/premium_photo-1681505189991-157ecae8c0e6?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHN1cHBvcnR8ZW58MHx8MHx8fDA%3D", text: "Easy visa assistance and documentation support", href: "/premium-holiday-packages" },
  ];

  // DYNAMIC DATA
  const activitiesData = [
  {
    icon: <MdOutlineRestaurant />,
    title: "City Sightseeing Tour",
    points: [
      "Guided or private city tours covering major attractions, landmarks, and photo stops—comfortable and suitable for all ages.",
      // "Beautiful parks or scenic spots with room to play",
    ],
  },
  {
    icon: <TbBeach />,
    title: "Theme Park or Water Park Visit",
    points: [
      "A guaranteed hit with kids and enjoyable for adults; includes rides, shows, and family-friendly entertainment.",
      // "Beach games, swimming, and family sandcastle contests",
    ],
  },
  {
    icon: <MdSportsVolleyball />,
    title: "Boat Cruise / Dinner Cruise",
    points: [
      "Relaxing experience for the whole family, such as river cruises, lake cruises, or evening dinner cruises with light entertainment.",
      // "Options like mini-golf, bowling, or relay races",
    ],
  },
  {
    icon: <GiAnimalSkull />,
    title: "Beach Time or Resort Leisure Activities",
    points: [
      "Free time at the beach or resort with swimming pools, kids’ play areas, and family games.",
      // "Educational and exciting for both kids and adults",
    ],
  },
  {
    icon: <MdFamilyRestroom />,
    title: "Cultural Show & Local Experience",
    points: [
      "Folk dance, music shows, traditional performances, or simple workshops that introduce local culture in an engaging way.",
      // "Splash zones, water slides, and relaxed swimming",
    ],
  },
  {
    icon: <MdPhotoCamera />,
    title: "Zoo, Aquarium, or Wildlife Park Visit",
    points: [
      "Educational and fun, especially for children—safe, interactive, and memorable.",
      // "Captures genuine moments and smiles from everyone",
    ],
  },
];


const SEASONS_CONFIG = [
  {
    key: "summer",
    title: "Summer Family Holiday Destinations",
    period: "(March – June)",
    desc: "Ideal for cooler climates and outdoor activities.",
  },
  {
    key: "monsoon",
    title: "Monsoon Family Holiday Destinations",
    period: "(July – September)",
    desc: "Best for lush landscapes and relaxed sightseeing.",
  },
  {
    key: "winter",
    title: "Winter Family Holiday Destinations",
    period: "(October – February)",
    desc: "Perfect for festivals, beaches, and wildlife experiences.",
  },
];



 const DESTINATION_DATA = {
  domestic: {
    summer: [
      {
        title: "Shimla & Manali",
        image: "https://images.unsplash.com/photo-1641735735000-c9719ac2740b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Pleasant weather", "Scenic views", "Family attractions"],
        featured: true,
      },
      {
        title: "Kashmir",
        image: "https://images.unsplash.com/photo-1614056965546-42fbe24eb36c?q=80&w=1829&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Mughal gardens", "Gondola rides", "Houseboat stays"],
      },
      {
        title: "Nainital & Mussoorie",
        image: "https://images.unsplash.com/photo-1593598403786-49a230711943?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Lakes", "Ropeways", "Hill charm"],
      },
      {
        title: "Darjeeling & Gangtok",
        image: "https://images.unsplash.com/photo-1573398643956-2b9e6ade3456?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Toy train rides", "Monasteries", "Mountain views"],
      },
      {
        title: "Ooty & Kodaikanal",
        image: "https://images.unsplash.com/photo-1588416936097-41850ab3d86d",
        points: ["Relaxed hill stations", "Greenery", "Lakes"],
      },
    ],

    monsoon: [
      {
        title: "Munnar",
        image: "https://images.unsplash.com/photo-1593693397690-362cb9666fc2",
        points: ["Tea gardens", "Waterfalls", "Nature walks"],
        featured: true,
      },
      {
        title: "Coorg",
        image: "https://images.unsplash.com/photo-1709730705114-74080546e165?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Coffee plantations", "Nature resorts"],
      },
      {
        title: "Lonavala & Mahabaleshwar",
        image: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2",
        points: ["Short family getaways", "Scenic viewpoints"],
      },
      {
        title: "Udaipur",
        image: "https://images.unsplash.com/photo-1599661046289-e31897846e41",
        points: ["Lakes", "Palaces", "Cultural experiences"],
      },
    ],

    winter: [
      {
        title: "Goa",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Beaches", "Water sports", "Family resorts"],
        featured: true,
      },
      {
        title: "Kerala",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
        points: ["Backwaters", "Houseboats", "Ayurvedic experiences"],
      },
      {
        title: "Rajasthan",
        image: "https://images.unsplash.com/photo-1587295656906-b06dca8f2340?q=80&w=864&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Forts", "Palaces", "Desert safaris"],
      },
      {
        title: "Jim Corbett & Ranthambore",
        image: "https://images.unsplash.com/photo-1656828059237-add66db82a2b?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Wildlife safaris", "Nature stays"],
      },
      {
        title: "Andaman & Nicobar Islands",
        image: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3",
        points: ["Clean beaches", "Safe island activities"],
      },
    ],
  },

  international: {
    summer: [
      {
        title: "Singapore",
        image: "https://images.unsplash.com/photo-1508964942454-1a56651d54ac",
        points: ["Theme parks", "Zoos", "Family-friendly attractions"],
        featured: true,
      },
      {
        title: "Switzerland",
        image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429",
        points: ["Scenic train rides", "Snow experiences", "Lakes"],
      },
      {
        title: "Malaysia",
        image: "https://images.unsplash.com/photo-1596422846543-75c6fc197f07",
        points: ["Theme parks", "Shopping", "City attractions"],
      },
      {
        title: "Mauritius",
        image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21",
        points: ["Beaches", "Water sports", "Family resorts"],
      },
      {
        title: "United Kingdom",
        image: "https://images.unsplash.com/photo-1488747279002-c8523379faaa",
        points: ["Museums", "Theme parks", "Iconic landmarks"],
      },
    ],

    winter: [
      {
        title: "Dubai, UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
        points: ["Theme parks", "Desert safari", "Shopping festivals"],
        featured: true,
      },
      {
        title: "Thailand",
        image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
        points: ["Beaches", "Island tours", "Family resorts"],
      },
      {
        title: "Sri Lanka",
        image: "https://images.unsplash.com/photo-1651264042769-ef84e30f4ac8?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        points: ["Beaches", "Wildlife parks", "Cultural sites"],
      },
      {
        title: "Hong Kong",
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03",
        points: ["Disneyland", "City attractions"],
      },
      {
        title: "Vietnam",
        image: "https://images.unsplash.com/photo-1528127269322-539801943592",
        points: ["Halong Bay cruises", "Cultural tours"],
      },
    ],
  },
};


  return (
    <div>
        <HeroBannerTours  title="Travel Together, Celebrate Together"
  description="We believe the greatest souvenir is a strengthened bond. Let us handle the details so you can focus on what truly matters." />
        <Activites activitiesData={activitiesData} title="Activities We Offer Family Tour"   />
     <AboutPackage
  title="Family Holidays"
  description="Family holidays are the perfect way to bond, relax, and create lifelong memories together. Designed to suit all age groups, our family holiday packages combine comfort, fun, sightseeing, and leisure. From kid-friendly attractions and scenic destinations to relaxing resorts and cultural experiences, we ensure a stress-free and enjoyable vacation for every member of the family"
  images={[
    "https://images.unsplash.com/photo-1588979355313-6711a095465f?q=80&w=972&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1503431153573-96e959f4d9b7?q=80&w=2148&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1578496780896-7081cc23c111?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]}
/>

       <WhatWeOfferComponent images={images} />
     <BookPackage
            title="Plan Your Perfect Family Holiday"
            description="Let us design a family holiday that suits your travel style, season, and budget. Get in touch with us today to explore customized family holiday packages for India and abroad."
            bgImage="https://plus.unsplash.com/premium_photo-1661440028839-447e432ed10f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />

              <HoneymoonSeasonSection
                        title="Best Family Tour Destinations"
                        destinationData={DESTINATION_DATA}
                        seasonsConfig={SEASONS_CONFIG}
                      />
         <PopularPackages />
   <FaqSection
  title="Family Holiday – Frequently Asked Questions"
  subtitle="Everything you need to know to plan a memorable family vacation"
  defaultOpen="item-0"
  faqs={[
    {
      id: 1,
      question: "What destinations are best for family holidays?",
      answer: [
        "The best family holiday destinations depend on your interests such as relaxation, adventure, theme parks, or cultural experiences.",
        "Asiago Travels recommends destinations that offer safe environments, kid-friendly attractions, and comfortable accommodations suitable for all age groups."
      ],
    },
    {
      id: 2,
      question: "Can Asiago Travels customize family holiday packages?",
      answer: [
        "Yes, Asiago Travels offers fully customized family holiday packages.",
        "Packages are designed based on your budget, travel dates, family size, and personal preferences to ensure a smooth and enjoyable trip for everyone."
      ],
    },
    {
      id: 3,
      question: "Are family holiday packages suitable for children and senior citizens?",
      answer: [
        "Absolutely. Asiago Travels carefully plans family holidays keeping all age groups in mind.",
        "This includes child-friendly activities, relaxed travel schedules, and senior-friendly accommodations and transportation."
      ],
    },
    {
      id: 4,
      question: "Does Asiago Travels provide complete travel assistance for family holidays?",
      answer: [
        "Yes, Asiago Travels provides end-to-end travel assistance for family vacations.",
        "Our services include flights, hotels, airport transfers, sightseeing tours, visa support, and travel insurance for a completely stress-free experience."
      ],
    },
  ]}
/>

    </div>
  )
}
