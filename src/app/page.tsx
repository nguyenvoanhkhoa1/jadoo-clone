"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AOS from "aos"
import Slider, { Settings } from "react-slick"
import { useClickAway, useLockBodyScroll, useMedia } from "react-use"

import "aos/dist/aos.css"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import useScrollPosition from "@/hooks/useScrollStatus"

enum Language {
  EN = "EN",
  VI = "VI",
}
const languageOptions = Object.values(Language)

export default function Home() {
  const HEADER_NAV = ["Destinations", "Hotels", "Flights", "Bookings", "Login"]
  const CATEGORIES = [
    {
      title: "Calculated Weather",
      description:
        "Built Wicket longer admire do barton vanity itself do in it.",
      imgLink: "/assets/homepage/calculated-weather.svg",
    },
    {
      title: "Best Flights",
      description:
        "Engrossed listening. Park gate sell they west hard for the.",
      imgLink: "/assets/homepage/best-flights.svg",
    },
    {
      title: "Local Events",
      description:
        "Barton vanity itself do in it. Prefferd to men it engrossed listening.",
      imgLink: "/assets/homepage/local-events.png",
    },
    {
      title: "Customization",
      description:
        "We deliver outsourced aviation services for military customers",
      imgLink: "/assets/homepage/customization.svg",
    },
  ]
  const TOP_SELLING = [
    {
      location: "Rome, Italty",
      price: "$5,42k",
      duration: "10 Days Trip",
      thumb: "/assets/homepage/rome.png",
    },
    {
      location: "London, UK",
      price: "$4.2k",
      duration: "12 Days Trip",
      thumb: "/assets/homepage/london.png",
    },
    {
      location: "Full Europe",
      price: "$15k",
      duration: "28 Days Trip",
      thumb: "/assets/homepage/europe.png",
    },
  ]
  const STEPS = [
    {
      title: "Choose Destination",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
      icon: "/assets/homepage/selection.svg",
      color: "#F0BB1F",
    },
    {
      title: "Make Payment",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
      icon: "/assets/homepage/water-sport.svg",
      color: "#F15A2B",
    },
    {
      title: "Reach Airport on Selected Date",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. ",
      icon: "/assets/homepage/taxi.svg",
      color: "#006380",
    },
  ]
  const TESTIMONIALS = [
    {
      avatar: "/assets/homepage/avatar-1.png",
      name: "Mike taylor",
      title: "Lahore, Pakistan",
      comment:
        "“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
    },
    {
      avatar: "/assets/homepage/avatar-2.png",
      name: "Jane Cooper",
      title: "New York, USA",
      comment:
        "“Absolutely wonderful experience! The service was top-notch and the product exceeded expectations. I would highly recommend it to others.”",
    },
    {
      avatar: "/assets/homepage/avatar-3.png",
      name: "John Smith",
      title: "Sydney, Australia",
      comment:
        "“The attention to detail and level of customer service was outstanding. I am extremely satisfied and will be returning for future purchases.”",
    },
  ]

  const FOOTER = [
    {
      title: "Company",
      children: [
        {
          label: "About",
          href: "#",
        },
        {
          label: "Careers",
          href: "#",
        },
        {
          label: "Mobile",
          href: "#",
        },
      ],
    },
    {
      title: "Contact",
      children: [
        {
          label: "Help/FAQ",
          href: "#",
        },
        {
          label: "Press",
          href: "#",
        },
        {
          label: "Affiliates",
          href: "#",
        },
      ],
    },
    {
      title: "More",
      children: [
        {
          label: "Airlinefees",
          href: "#",
        },
        {
          label: "Airline",
          href: "#",
        },
        {
          label: "Low fare tips",
          href: "#",
        },
      ],
    },
  ]
  const { isAtTop, isAtBottom, scrollDirection } = useScrollPosition()
  const [openMobileMenu, setOpenMobileMenu] = useState(false)
  const [language, setLanguage] = useState<Language>(Language.EN)
  const [isOpenLangSelect, setIsOpenLangSelect] = useState(false)
  const [current, setCurrent] = useState(0)
  const isDesktop = useMedia("(min-width: 1024px)", true)
  const isMd = useMedia("(min-width: 768px)", false)

  const langSelectRef = useRef(null)
  const sliderRef = useRef<Slider>(null)

  useClickAway(langSelectRef, () => {
    setIsOpenLangSelect(false)
  })
  useLockBodyScroll(isOpenLangSelect)
  useLockBodyScroll(openMobileMenu)

  var settings: Settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    pauseOnDotsHover: false,
    fade: false,
    arrows: false,
    vertical: true,
    swipe: false,
    beforeChange(_, nextSlide) {
      setCurrent(nextSlide)
    },
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          vertical: false,
          swipe: true,
        },
      },
    ],
  }

  useEffect(() => {
    if (isDesktop) {
      setOpenMobileMenu(false)
    }
  }, [isDesktop])

  useEffect(() => {
    AOS.init({
      // // Global settings:
      // disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      // startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
      // initClassName: 'aos-init', // class applied after initialization
      // animatedClassName: 'aos-animate', // class applied on animation
      // useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      // disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      // debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      // throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      // offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease-in-out", // default easing for AOS animations
      // once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      // anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    })

    return () => {
      AOS.refresh()
    }
  }, [isDesktop])

  return (
    <>
      <header
        className={`fixed z-10 w-full transition-all duration-300 ease-in-out ${isAtTop ? "bg-transparent py-6 shadow-none lg:py-8 xl:py-9" : "bg-white/60 py-2 shadow-md"}`}
      >
        <div className="section-container flex w-full items-center justify-between">
          <Link href={"/"} className="h-fit w-[100px] shrink-0">
            <Image
              src={"/assets/jadoo-travel-logo.svg"}
              alt={""}
              width={115}
              height={34}
            />
          </Link>
          <div className="hidden items-center gap-4 lg:flex">
            <nav className="flex gap-4">
              {HEADER_NAV.map((item) => (
                <Link
                  href={""}
                  key={item}
                  className="p-5 text-[17px] font-medium text-[#212832] transition-colors duration-300 ease-in-out hover:text-[#F1A501]"
                >
                  {item}
                </Link>
              ))}
            </nav>
            <button className="h-10 w-[102px] rounded-md border border-solid border-[#212832] text-[17px] font-medium text-[#212832] transition-colors duration-300 ease-in-out hover:bg-[#212832] hover:text-white">
              Sign up
            </button>
            <div className="relative" ref={langSelectRef}>
              <button
                className="group flex items-center gap-1.5 p-3 text-[17px] font-medium text-[#212832] transition-colors duration-300 ease-in-out hover:text-[#F1A501]"
                onClick={() => setIsOpenLangSelect(true)}
              >
                <span className="w-6">{language}</span>
                <svg
                  width="10"
                  height="6"
                  viewBox="0 0 10 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-[#212832] transition-colors duration-300 ease-in-out group-hover:stroke-[#F1A501]"
                >
                  <path d="M0.5 0.5L5 5L9.5 0.5" />
                </svg>
              </button>
              <div
                className={`absolute right-0 w-full space-y-1 rounded-md bg-white p-1 drop-shadow-lg transition-all duration-300 ease-in-out ${isOpenLangSelect ? "pointer-events-auto top-full opacity-100" : "pointer-events-none top-1/2 opacity-0"}`}
              >
                {languageOptions.map((lang) => (
                  <button
                    key={lang}
                    onClick={() => {
                      setLanguage(lang)
                      setIsOpenLangSelect(false)
                    }}
                    className={`w-full rounded-md bg-white px-3 py-1 text-center transition-colors duration-300 ease-out hover:bg-slate-100 ${
                      lang === language ? "bg-slate-100" : ""
                    }`}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <button
            className="flex size-12 items-center justify-center rounded-md transition-all duration-300 ease-in-out hover:shadow-lg lg:hidden"
            onClick={() => setOpenMobileMenu(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
            </svg>
          </button>
          <div
            className={`fixed left-0 top-0 block h-screen w-screen bg-black/90 transition-all duration-300 ease-in-out lg:hidden ${openMobileMenu ? "left-0" : "left-full"}`}
          >
            <div className={`section-container ${isAtTop ? "py-6" : "py-2"}`}>
              <button
                className="top-4 float-end flex size-12 items-center justify-center transition-all duration-300 ease-in-out hover:shadow-lg"
                onClick={() => setOpenMobileMenu(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  stroke="white"
                  fill="white"
                >
                  <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z"></path>
                </svg>
              </button>
              <div className="float-none mt-12 flex flex-col gap-2">
                {HEADER_NAV.map((item, index) => (
                  <Link
                    href={"/"}
                    key={index}
                    className="block py-4 text-center text-[#F1A501] transition-all duration-200 ease-in-out active:bg-[#F1A501] active:text-[#212832]"
                    onClick={() =>
                      setTimeout(() => {
                        setOpenMobileMenu(false)
                      }, 500)
                    }
                  >
                    {item}
                  </Link>
                ))}
                <button className="mx-auto mt-4 h-10 w-[102px] rounded-md bg-[#F1A501] text-[17px] font-medium text-[#212832] transition-colors duration-300 ease-in-out">
                  Sign up
                </button>
                <div className="relative" ref={langSelectRef}>
                  <button
                    className="group mx-auto flex items-center gap-1.5 p-3 text-[17px] font-medium text-[#F1A501] transition-colors duration-300 ease-in-out"
                    onClick={() => setIsOpenLangSelect(true)}
                  >
                    <span className="w-6">{language}</span>
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="stroke-[#F1A501]"
                    >
                      <path d="M0.5 0.5L5 5L9.5 0.5" />
                    </svg>
                  </button>
                  <div
                    className={`absolute right-0 w-full space-y-1 rounded-md p-1 drop-shadow-lg transition-all duration-300 ease-in-out ${isOpenLangSelect ? "pointer-events-auto top-full opacity-100" : "pointer-events-none top-1/2 opacity-0"}`}
                  >
                    {languageOptions.map((lang) => (
                      <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang)
                          setIsOpenLangSelect(false)
                        }}
                        className={`w-full rounded-md px-3 py-1 text-center transition-colors duration-300 ease-out ${
                          lang === language ? "text-[#F1A501]" : "text-white"
                        }`}
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className="overflow-x-hidden">
        <div className="bg-[url('/assets/homepage/purple-blur.png'),_url('/assets/homepage/yellow-side.svg')] bg-[position:-80%_60%,100%_0%] bg-no-repeat pb-12 pt-24 md:bg-[position:-80%_60%,100%_100%] md:pt-32 lg:bg-[position:-58%_-135%,100%_-5%] lg:pt-48">
          <div className="section-container relative">
            <div className="flex w-full flex-col items-center justify-center text-center md:w-fit md:items-start md:text-start">
              <div
                className="text-lg font-bold uppercase text-[#DF6951] lg:text-xl"
                data-aos="fade-right"
                data-aos-delay={0}
              >
                Best destinations around the world
              </div>
              <h1
                className="mt-4 max-w-[400px] px-4 font-volkhov text-[50px] font-bold leading-[106%] tracking-[-4px] text-[#181E4B] md:px-0 md:text-[56px] lg:mt-6 lg:max-w-[470px] lg:text-[74px] xl:max-w-[545px] xl:text-[84px]"
                data-aos="fade-right"
                data-aos-delay={150}
              >
                Travel,{" "}
                <span className="bg-[url('/assets/homepage/orange-undermark.svg')] bg-[50%_84%] bg-no-repeat">
                  enjoy
                </span>{" "}
                and live a new and full life
              </h1>
              <p
                className="mt-6 max-w-[350px] text-sm font-medium leading-[187.5%] text-[#5E6282] lg:mt-[30px] lg:max-w-[450px] lg:text-base xl:max-w-[472px]"
                data-aos="fade-right"
                data-aos-delay={300}
              >
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
              <div
                className="mt-7 flex gap-8 lg:mt-[34px] lg:gap-11"
                data-aos="fade-right"
                data-aos-delay={450}
              >
                <button className="h-12 w-[150px] rounded-[10px] bg-[#F1A501] text-base font-medium text-white transition-all duration-300 ease-in-out hover:bg-[#c98f11] lg:h-[60px] lg:w-[170px] lg:text-lg">
                  Find out more
                </button>
                <button className="flex items-center gap-5 text-base font-medium text-[#686D77] lg:text-[17px]">
                  <div className="relative size-11 lg:size-[52px]">
                    <Image
                      src={"/assets/homepage/play-button.svg"}
                      alt={""}
                      width={52}
                      height={52}
                      className="size-full drop-shadow-[0_15px_15px_rgba(223,105,81,0.5)]"
                    />
                    <span className="absolute left-0 top-0 inline-flex size-full animate-ping rounded-full bg-[rgba(223,105,81,0.5)] opacity-100"></span>
                  </div>
                  Play Demo
                </button>
              </div>
            </div>
            <Image
              src={"/assets/homepage/woman-planes.png"}
              alt="Traveling lady with luggage"
              width={500}
              height={500}
              className="relative right-0 top-1/2 mx-auto mt-8 h-auto w-full translate-x-0 translate-y-0 md:absolute md:mx-0 md:mt-0 md:w-[63%] md:-translate-y-1/2 lg:w-[65%] xl:w-[70%] xl:translate-x-[10%]"
              {...(!isMd
                ? {
                    "data-aos": "fade-right",
                    "data-aos-delay": 600,
                  }
                : {
                    "data-aos": "",
                    "data-aos-delay": 0,
                  })}
            />
          </div>
        </div>
        <div className="pb-16 pt-24 lg:pb-20 lg:pt-32 xl:pt-36">
          <div className="section-container flex flex-col items-center bg-[url('/assets/homepage/plus-graphics-1.svg')] bg-right-top bg-no-repeat">
            <div
              className="text-base font-semibold text-[#5E6282] lg:text-lg"
              data-aos="zoom-in"
            >
              CATEGORY
            </div>
            <h2
              className="mt-2.5 max-w-96 text-center font-volkhov text-4xl font-bold leading-[111%] text-[#14183E] sm:max-w-full sm:text-[40px] md:text-[44px] lg:text-[50px]"
              data-aos="zoom-in"
            >
              We Offer Best Services
            </h2>
            <div className="mt-12 grid max-w-96 grid-cols-1 gap-6 ps-4 sm:max-w-full sm:grid-cols-2 sm:ps-0 lg:mt-16 lg:grid-cols-4 lg:gap-9">
              {CATEGORIES.map((category, index) => (
                <div
                  key={index}
                  className="group relative"
                  data-aos="fade-up"
                  data-aos-delay={isDesktop ? index * 200 : 0}
                >
                  <div className="flex h-full flex-col items-center rounded-[36px] bg-white px-6 py-11 text-center drop-shadow-lg transition-shadow duration-300 ease-linear hover:drop-shadow-lg md:drop-shadow-none">
                    <Image
                      src={category.imgLink}
                      alt=""
                      width={90}
                      height={90}
                      className="h-[90px] w-auto"
                    />
                    <div className="mt-7 whitespace-nowrap font-openSans text-xl font-semibold text-[#1E1D4C]">
                      {category.title}
                    </div>
                    <p className="mt-4 font-medium text-[#5E6282]">
                      {category.description}
                    </p>
                  </div>
                  <Image
                    src={"/assets/homepage/category-active.svg"}
                    alt=""
                    width={100}
                    height={100}
                    className="absolute bottom-0 left-0 -z-10 size-auto opacity-0 transition-all duration-300 ease-in-out group-hover:-bottom-6 group-hover:-left-6 group-hover:opacity-100 lg:group-hover:-bottom-9 lg:group-hover:-left-9"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="section-container flex flex-col items-center pb-16 pt-12 lg:pb-20 lg:pt-16">
            <div
              className="text-base font-semibold text-[#5E6282] lg:text-lg"
              data-aos="zoom-in"
            >
              Top Selling
            </div>
            <h2
              className="mt-2.5 max-w-96 text-center font-volkhov text-4xl font-bold leading-[111%] text-[#14183E] sm:max-w-full sm:text-[40px] md:text-[44px] lg:text-[50px]"
              data-aos="zoom-in"
            >
              Top Destinations
            </h2>
            <div className="relative mt-16 grid w-full max-w-96 grid-cols-1 gap-9 sm:max-w-full sm:grid-cols-4 lg:grid-cols-3">
              {TOP_SELLING.map((item, index) => (
                <div
                  key={index}
                  className={`group col-span-1 cursor-pointer overflow-hidden rounded-3xl drop-shadow-md transition-all duration-300 ease-in-out hover:drop-shadow-xl sm:col-span-2 lg:col-span-1 ${index === 2 ? "col-start-1 sm:col-start-2 lg:col-start-3" : ""} `}
                  {...(isDesktop && {
                    "data-aos": "fade-up",
                    "data-aos-delay": index * 200,
                  })}
                >
                  <div className="h-[328px] w-full overflow-hidden">
                    <Image
                      src={item.thumb}
                      alt=""
                      width={400}
                      height={500}
                      className="size-full overflow-hidden object-cover object-top transition-all duration-300 ease-in-out group-hover:scale-125"
                    />
                  </div>
                  <div className="bg-white px-5 pb-10 pt-7 font-medium text-[#5E6282]">
                    <div className="flex items-center justify-between">
                      <span className="text-lg transition-all duration-300 ease-in-out group-hover:text-[#F1A501]">
                        {item.location}
                      </span>
                      <span>{item.price}</span>
                    </div>
                    <div className="mt-5 flex gap-3.5">
                      <Image
                        src={"/assets/homepage/location-mark.svg"}
                        alt=""
                        width={20}
                        height={20}
                        className=""
                      />
                      <span className="">{item.duration}</span>
                    </div>
                  </div>
                </div>
              ))}
              <Image
                src={"/assets/homepage/decore.svg"}
                alt=""
                width={96}
                height={252}
                className="absolute right-0 top-1/2 -z-10 hidden -translate-y-1/2 translate-x-1/2 xl:block"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="section-container grid grid-cols-1 py-12 md:py-16 lg:grid-cols-2 lg:py-20">
            <div className="flex flex-col items-center lg:items-start">
              <div
                className="text-base font-semibold text-[#5E6282] lg:text-lg"
                data-aos="fade-right"
              >
                Easy and Fast
              </div>
              <h2
                className="sm-max-w-[520px] mt-2.5 max-w-96 text-center font-volkhov text-4xl font-bold leading-[111%] text-[#14183E] sm:text-[40px] md:text-[44px] lg:text-start lg:text-[50px]"
                data-aos="fade-right"
              >
                Book your next trip in 3 easy steps
              </h2>
              <div className="mt-8 flex flex-col gap-6 md:flex-row md:gap-8 lg:flex-col lg:gap-12">
                {STEPS.map((step, index) => (
                  <div
                    key={index}
                    className="flex max-w-[400px] flex-row gap-5 md:flex-col lg:flex-row"
                    data-aos="fade-right"
                  >
                    <div
                      className="mt-2 flex size-12 shrink-0 items-center justify-center rounded-xl"
                      style={{ backgroundColor: step.color }}
                    >
                      <Image
                        src={step.icon}
                        alt=""
                        width={22}
                        height={22}
                        className=""
                      />
                    </div>
                    <div className="text-[#5E6282]">
                      <div className="font-bold">{step.title}</div>
                      <p className="mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="relative mt-8 flex items-center justify-center lg:mt-0"
              data-aos="fade-left"
            >
              <Image
                src={"/assets/homepage/blue-blur.png"}
                alt=""
                width={500}
                height={518}
                className="absolute left-[20%] top-[-10%] -z-10 h-auto w-[500px]"
              />
              <div className="max-w-[370px] rounded-[28px] bg-white px-6 pb-8 pt-5 drop-shadow-xl">
                <Image
                  src={"/assets/homepage/booking-thumb.png"}
                  alt=""
                  width={500}
                  height={250}
                  className="rounded-2xl"
                />
                <div className="mt-6 font-medium text-[#84829A]">
                  <div className="text-lg tracking-wide text-[#080809]">
                    Trip To Greece
                  </div>
                  <div className="mt-3">
                    <span className="tracking-tight">14-29 June</span>
                    <span className="ml-1 mr-3">|</span>
                    <span className="tracking-tight">by Robbin joseph</span>
                  </div>
                  <div className="mt-5 flex gap-4">
                    {[
                      "/assets/homepage/leaf.svg",
                      "/assets/homepage/map.svg",
                      "/assets/homepage/send.svg",
                    ].map((item, index) => (
                      <button
                        key={index}
                        className="flex size-9 items-center justify-center rounded-full bg-[#F5F5F5]"
                      >
                        <Image
                          src={item}
                          alt=""
                          width={14}
                          height={14}
                          className=""
                        />
                      </button>
                    ))}
                  </div>
                  <div className="mt-7 flex items-end justify-between">
                    <div className="flex items-center gap-4">
                      <Image
                        src={"/assets/homepage/building.svg"}
                        alt=""
                        width={16}
                        height={16}
                        className=""
                      />
                      <span className="tracking-tighter">24 people going</span>
                    </div>
                    <div className="group relative flex cursor-pointer items-center p-2">
                      <span className="absolute left-0 top-0 inline-flex size-full animate-ping rounded-full bg-[#4152CA] opacity-50"></span>
                      <button>
                        <Image
                          src={"/assets/homepage/heart.svg"}
                          alt=""
                          width={20}
                          height={19}
                          className=""
                        />
                      </button>
                      <div className="pointer-events-none absolute bottom-0 left-full hidden w-max -translate-x-1/2 items-start gap-3 rounded-[18px] bg-white p-5 opacity-0 drop-shadow-xl transition-all duration-300 ease-in-out group-hover:pointer-events-auto group-hover:bottom-full group-hover:opacity-100 md:flex">
                        <Image
                          src={"/assets/homepage/trip-thumb.png"}
                          alt=""
                          width={50}
                          height={50}
                          className="rounded-full"
                        />
                        <div className="flex flex-col font-medium">
                          <span className="text-sm text-[#84829A]">
                            Ongoing
                          </span>
                          <span className="mt-1.5 text-lg tracking-tight text-[#080809]">
                            Trip to rome
                          </span>
                          <span className="mt-3.5 text-sm -tracking-wider text-[#080809]">
                            <span className="text-[#8A79DF]">40%</span>{" "}
                            completed
                          </span>
                          <div className="mt-2.5 h-[5px] w-[156px] rounded-full bg-[#F5F5F5]">
                            <div className="h-full w-2/5 rounded-full bg-[#8A79DF]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section-container grid grid-cols-1 py-12 md:py-16 lg:grid-cols-2 lg:py-20">
            <div
              className="flex flex-col items-center lg:items-start"
              data-aos="fade-right"
            >
              <div className="text-base font-semibold text-[#5E6282] lg:text-lg">
                Testimonials
              </div>
              <h2 className="mt-2.5 max-w-96 text-center font-volkhov text-4xl font-bold leading-[111%] text-[#14183E] sm:max-w-[520px] sm:text-[40px] md:text-[44px] lg:text-start lg:text-[50px]">
                What people say about Us.
              </h2>
              <div className="mt-20 hidden gap-6 lg:flex">
                {TESTIMONIALS.map((_, index) => (
                  <div
                    key={index}
                    className={`size-3 cursor-pointer rounded-full transition-colors duration-300 ease-in-out ${
                      index === current ? "bg-[#39425D]" : "bg-[#E5E5E5]"
                    }`}
                    onClick={() => sliderRef.current?.slickGoTo(index)}
                  ></div>
                ))}
              </div>
            </div>
            <div
              className="relative mt-8 flex flex-col lg:mt-0"
              data-aos="fade-left"
            >
              <Slider {...settings} ref={sliderRef} className="{styles.slider}">
                {TESTIMONIALS.map((item, index) => (
                  <div key={index} className="p-[34px]">
                    <div className="relative rounded-[10px] bg-white p-8 text-[#5E6282] drop-shadow-lg">
                      <Image
                        src={item.avatar}
                        alt={""}
                        width={200}
                        height={200}
                        className="absolute left-0 top-0 size-[68px] -translate-x-1/2 -translate-y-1/2 rounded-full"
                      />
                      <p className="font-medium leading-8">{item.comment}</p>
                      <div className="mt-8 font-semibold">{item.name}</div>
                      <div className="mt-1 text-sm">{item.title}</div>
                    </div>
                  </div>
                ))}
              </Slider>
              <div className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-full flex-col gap-3 xl:flex">
                <button
                  className="flex h-12 w-16 items-center justify-center rounded-md transition-all duration-300 ease-in-out hover:shadow-lg"
                  onClick={sliderRef.current?.slickPrev}
                >
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={``}
                  >
                    <path
                      d="M1 8.5L8 1.5L15 8.5"
                      stroke="#3E2E4D"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <button
                  className="flex h-12 w-16 items-center justify-center rounded-md transition-all duration-300 ease-in-out hover:shadow-lg"
                  onClick={sliderRef.current?.slickNext}
                >
                  <svg
                    width="16"
                    height="10"
                    viewBox="0 0 16 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L8 8L15 1"
                      stroke="#3E2E4D"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
              <div className="mx-auto mt-8 flex gap-6 lg:hidden">
                {TESTIMONIALS.map((_, index) => (
                  <div
                    key={index}
                    className={`size-3 cursor-pointer rounded-full transition-colors duration-300 ease-in-out ${
                      index === current ? "bg-[#39425D]" : "bg-[#E5E5E5]"
                    }`}
                    onClick={() => sliderRef.current?.slickGoTo(index)}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="section-container flex flex-wrap justify-center gap-6 py-12 md:py-16 lg:py-20 xl:flex-nowrap xl:justify-between xl:gap-0">
            {["axon", "jetstar", "expedia", "qantas", "alitalia"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex h-20 cursor-pointer items-center justify-center rounded-xl bg-white px-8 grayscale transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-lg hover:grayscale-0"
                  {...(isDesktop && {
                    "data-aos": "fade-up",
                    "data-aos-delay": index * 150,
                  })}
                >
                  <Image
                    src={`/assets/homepage/logo-${item}.png`}
                    alt=""
                    width={150}
                    height={50}
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div>
          <div className="section-container py-12 md:py-16 lg:py-20">
            <div className="relative flex flex-col items-center rounded-[20px] rounded-ss-[80px] bg-[#DFD7F9]/20 bg-[url('/assets/homepage/mask-1.svg'),_url('/assets/homepage/mask-2.svg')] bg-[position:-15%_100%,100%_0%] bg-no-repeat px-6 py-12 md:rounded-ss-[128px] md:px-8 md:py-16 lg:py-20">
              <p
                className="text-center text-2xl font-semibold text-[#5E6282] md:text-3xl xl:text-[33px]"
                data-aos="zoom-in"
              >
                Subscribe to get information, latest news and other interesting
                offers about Jadoo
              </p>
              <div className="mt-9 flex w-full flex-col items-center gap-6 md:mt-12 md:w-auto md:flex-row lg:mt-[74px]">
                <div
                  className="relative w-full md:w-auto"
                  data-aos="fade-right"
                >
                  <Image
                    src={"assets/homepage/envelop.svg"}
                    alt={""}
                    width={21}
                    height={18}
                    className="absolute left-6 top-1/2 -translate-y-1/2"
                  />
                  <input
                    className="h-[68px] w-full rounded-[10px] p-6 ps-16 font-montserrat outline-none transition-all duration-300 ease-in-out placeholder:text-[#39425D] focus:outline-none focus:ring md:w-[420px]"
                    placeholder="Your email"
                  />
                </div>
                <button
                  className="h-[68px] w-44 rounded-[10px] bg-gradient-to-b from-[#FF946D] to-[#FF7D68] font-openSans text-[17px] font-semibold text-white"
                  data-aos="fade-left"
                >
                  Subscribe
                </button>
              </div>
              <button className="absolute right-0 top-0 flex size-[70px] -translate-y-1/4 translate-x-1/4 items-center justify-center rounded-full bg-gradient-to-b from-[#747DEF] to-[#5E3BE1]">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#5E3BE1] opacity-75"></span>
                <Image
                  src={"/assets/homepage/send-1.svg"}
                  alt={""}
                  width={46}
                  height={44}
                />
              </button>
              <Image
                src={"assets/homepage/plus-graphics-2.svg"}
                alt={""}
                width={153}
                height={166}
                className="absolute bottom-[-70px] right-[-99px] hidden lg:block"
              />
            </div>
          </div>
        </div>
      </main>
      <footer className="py-12 md:py-16 lg:py-20">
        <div className="section-container">
          <div className="flex flex-col items-center justify-between gap-6 lg:flex-row lg:items-start lg:gap-0">
            <div className="flex flex-col items-center lg:items-start">
              <Link
                href={"/"}
                className="text-[44px] font-medium text-[#181E4B] transition-colors duration-300 ease-in-out hover:text-[#F1A501]"
              >
                Jadoo.
              </Link>
              <p className="mt-5 max-w-52 text-center text-[13px] font-medium text-[#5E6282] lg:text-start">
                Book your trip in minute, get full Control for much longer.
              </p>
            </div>
            <div className="flex w-auto flex-wrap justify-center gap-10 sm:w-max sm:flex-nowrap sm:gap-16 xl:gap-20">
              {FOOTER.map((column, index) => (
                <div key={index} className="mt-5">
                  <div className="text-xl font-bold text-[#080809]">
                    {column.title}
                  </div>
                  <div className="mt-8 flex flex-col gap-3">
                    {column.children.map((item, i) => (
                      <Link
                        key={i}
                        href={item.href}
                        className="text-lg font-medium text-[#5E6282]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <div className="flex justify-center gap-6 lg:justify-start">
                <button className="flex size-10 items-center justify-center rounded-full bg-white drop-shadow-lg">
                  <Image
                    src={"/assets/homepage/facebook.svg"}
                    width={6}
                    height={13}
                    alt={""}
                  />
                </button>
                <button className="flex size-11 items-center justify-center rounded-full bg-[url('/assets/homepage/ins-bg.png')] drop-shadow-lg">
                  <Image
                    src={"/assets/homepage/instagram.svg"}
                    width={16}
                    height={16}
                    alt={""}
                  />
                </button>
                <button className="flex size-10 items-center justify-center rounded-full bg-white drop-shadow-lg">
                  <Image
                    src={"/assets/homepage/twitter.svg"}
                    width={16}
                    height={13}
                    alt={""}
                  />
                </button>
              </div>
              <div className="mt-6 text-center text-xl font-medium text-[#5E6282] lg:text-start">
                Discover our app
              </div>
              <div className="mt-4 flex gap-2">
                <Image
                  src={"/assets/homepage/google-play.svg"}
                  width={107}
                  height={35}
                  alt={""}
                />
                <Image
                  src={"/assets/homepage/play-store.svg"}
                  width={100}
                  height={35}
                  alt={""}
                />
              </div>
            </div>
          </div>
          <div className="mt-20 text-center text-sm font-medium text-[#5E6282]">
            All rights reserved@jadoo.co
          </div>
        </div>
      </footer>
    </>
  )
}
