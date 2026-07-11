import wandersite from "../assets/wandersite.png";
import video from "../assets/video.png";
import weather from "../assets/weather.png";

const projects = [
  {
    id: 1,
    title: "WanderSite",
    description:
      "A full-stack travel listing platform inspired by Airbnb featuring secure authentication, authorization, image uploads, reviews, interactive maps, and complete CRUD functionality.",
    image: wandersite,
    github: "https://github.com/somildholakia/Mini-airbnb",
    live: "",
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
    ],
    featured: true,
  },

  {
    id: 2,
    title: "Video Conferencing Platform",
    description:
      "A Zoom-like real-time video conferencing platform built using WebRTC and Socket.io with meeting rooms, audio/video streaming and screen sharing.",
    image: video,
    github: "https://github.com/somildholakia/conferencing",
    live: "",
    tech: [
      "React",
      "Node.js",
      "Socket.io",
      "WebRTC",
    ],
    featured: true,
  },

  {
    id: 3,
    title: "Weather App",
    description:
      "A responsive weather application that fetches live weather information using the OpenWeather API with dynamic search and clean UI.",
    image: weather,
    github: "https://github.com/somildholakia/Weather_app_react",
    live: "",
    tech: [
      "React",
      "REST API",
      "CSS",
      "OpenWeather",
    ],
    featured: true,
  },
];

export default projects;