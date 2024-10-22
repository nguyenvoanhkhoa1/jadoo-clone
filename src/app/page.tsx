import Image from "next/image"
import Link from "next/link"

export default function Home() {
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

  return (
    <>
      <header className="fixed z-10 w-full bg-white py-9">
        <div className="section-container flex w-full items-center justify-between">
          <Link href={"/"} className="h-fit w-[100px]">
            <Image
              src={"/assets/jadoo-travel-logo.svg"}
              alt={""}
              width={115}
              height={34}
            />
          </Link>
          <div className="flex items-center gap-4">
            <nav className="flex gap-4">
              {["Destinations", "Hotels", "Flights", "Bookings", "Login"].map(
                (item) => (
                  <Link
                    href={""}
                    key={item}
                    className="p-5 text-[17px] font-medium text-[#212832] transition-colors duration-300 ease-linear hover:text-gray-500"
                  >
                    {item}
                  </Link>
                )
              )}
            </nav>
            <button className="h-10 w-[102px] rounded-md border border-solid border-[#212832] text-[17px] font-medium text-[#212832] transition-colors duration-300 ease-linear hover:text-gray-500">
              Sign up
            </button>
            <Link
              href={""}
              className="p-5 text-[17px] font-medium text-[#212832] transition-colors duration-300 ease-linear hover:text-gray-500"
            >
              EN
            </Link>
          </div>
        </div>
      </header>
      <main>
        <div className="bg-[url('/assets/homepage/purple-blur.png'),_url('/assets/homepage/yellow-side.svg')] bg-[position:-58%_-135%,100%_-5%] bg-no-repeat">
          <div className="section-container grid grid-cols-2 gap-4 pb-12 pt-[105px]">
            <div className="flex flex-col justify-center">
              <div className="text-xl font-bold uppercase text-[#DF6951]">
                Best destinations around the world
              </div>
              <h1 className="mt-6 font-volkhov text-[84px] font-bold leading-[89px] text-[#181E4B]">
                Travel,{" "}
                <span className="bg-[url('/assets/homepage/orange-undermark.svg')] bg-[50%_84%] bg-no-repeat">
                  enjoy
                </span>{" "}
                and live a new and full life
              </h1>
              <p className="mt-[30px] max-w-[472px] font-medium leading-[30px] text-[#5E6282]">
                Built Wicket longer admire do barton vanity itself do in it.
                Preferred to sportsmen it engrossed listening. Park gate sell
                they west hard for the.
              </p>
              <div className="mt-[34px] flex gap-11">
                <button className="h-[60px] w-[170px] rounded-[10px] bg-[#F1A501] text-lg font-medium text-white">
                  Find out more
                </button>
                <button className="flex items-center gap-5 text-[17px] font-medium text-[#686D77]">
                  <Image
                    src={"/assets/homepage/play-button.svg"}
                    alt={""}
                    width={52}
                    height={52}
                    className="drop-shadow-[0_15px_15px_rgba(223,105,81,0.5)]"
                  />
                  Play Demo
                </button>
              </div>
            </div>
            <div className="">
              <Image
                src={"/assets/homepage/woman-planes.png"}
                alt="Traveling lady with luggage"
                width={500}
                height={500}
                className="h-auto w-full"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="section-container flex flex-col items-center bg-[url('/assets/homepage/plus-graphics-1.svg')] bg-right-top bg-no-repeat pb-20 pt-12">
            <div className="text-lg font-semibold text-[#5E6282]">CATEGORY</div>
            <h2 className="mt-2.5 font-volkhov text-[50px] font-bold text-[#14183E]">
              We Offer Best Services
            </h2>
            <div className="mt-16 grid grid-cols-4 gap-9">
              {CATEGORIES.map((category, index) => (
                <div key={index} className="group relative">
                  <div className="flex flex-col items-center rounded-[36px] bg-white px-6 py-11 text-center transition-shadow duration-300 ease-linear hover:shadow-lg">
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
                    className="absolute bottom-0 left-0 -z-10 size-auto opacity-0 transition-all duration-300 ease-linear group-hover:-bottom-9 group-hover:-left-9 group-hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <div className="section-container flex flex-col items-center pb-20 pt-16">
            <div className="text-lg font-semibold text-[#5E6282]">
              Top Selling
            </div>
            <h2 className="mt-2.5 font-volkhov text-[50px] font-bold text-[#14183E]">
              Top Destinations
            </h2>
            <div className="relative mt-16 grid w-full grid-cols-3 gap-9">
              {TOP_SELLING.map((item, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-3xl shadow-lg"
                >
                  <Image
                    src={item.thumb}
                    alt=""
                    width={400}
                    height={500}
                    className="h-[328px] w-full overflow-hidden object-cover object-top"
                  />
                  <div className="bg-white px-5 pb-10 pt-7 font-medium text-[#5E6282]">
                    <div className="flex items-center justify-between">
                      <span className="text-lg">{item.location}</span>
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
                className="absolute right-0 top-1/2 -z-10 -translate-y-1/2 translate-x-1/2"
              />
            </div>
          </div>
        </div>
        <div>
          <div className="section-container grid grid-cols-2 py-20">
            <div>
              <div className="text-lg font-semibold text-[#5E6282]">
                Easy and Fast
              </div>
              <h2 className="mt-2.5 max-w-[520px] font-volkhov text-[50px] font-bold text-[#14183E]">
                Book your next trip in 3 easy steps
              </h2>
              <div className="mt-8 flex flex-col gap-12">
                {STEPS.map((step, index) => (
                  <div key={index} className="flex max-w-[400px] gap-5">
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
            <div className="relative flex items-center justify-center">
              <Image
                src={"/assets/homepage/blue-blur.png"}
                alt=""
                width={500}
                height={518}
                className="absolute left-[20%] top-[-10%] -z-10 h-auto w-[500px]"
              />
              <div className="max-w-[370px] rounded-[28px] bg-white px-6 pb-8 pt-5 shadow-xl">
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
                    <div className="relative flex items-center px-2">
                      <button>
                        <Image
                          src={"/assets/homepage/heart.svg"}
                          alt=""
                          width={20}
                          height={19}
                          className=""
                        />
                      </button>
                      <div className="absolute bottom-full left-full flex w-max -translate-x-1/2 items-start gap-3 rounded-[18px] bg-white p-5 shadow-xl">
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
          <div className="section-container grid grid-cols-2 py-20">
            <div>
              <div className="text-lg font-semibold text-[#5E6282]">
                Testimonials
              </div>
              <h2 className="mt-2.5 max-w-[520px] font-volkhov text-[50px] font-bold text-[#14183E]">
                What people say about Us.
              </h2>
            </div>
            <div className=""></div>
          </div>
        </div>
        <div>
          <div className="section-container flex justify-between py-20">
            {["axon", "jetstar", "expedia", "qantas", "alitalia"].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex h-20 cursor-pointer items-center justify-center rounded-xl bg-white px-10 grayscale transition-all duration-300 ease-in-out hover:scale-125 hover:shadow-lg hover:grayscale-0"
                >
                  <Image
                    src={`/assets/homepage/logo-${item}.png`}
                    alt=""
                    width={150}
                    height={50}
                    className="size-auto"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="">
          <div className="section-container py-20">
            <div className="relative flex flex-col items-center rounded-[20px] rounded-ss-[128px] bg-[#DFD7F9]/20 bg-[url('/assets/homepage/mask-1.svg'),_url('/assets/homepage/mask-2.svg')] bg-[position:-15%_100%,100%_0%] bg-no-repeat py-20">
              <p className="text-center text-[33px] font-semibold text-[#5E6282]">
                Subscribe to get information, latest news and other interesting
                offers about Jadoo
              </p>
              <div className="mt-[74px] flex gap-6">
                <div className="relative">
                  <Image
                    src={"assets/homepage/envelop.svg"}
                    alt={""}
                    width={21}
                    height={18}
                    className="absolute left-6 top-1/2 -translate-y-1/2"
                  />
                  <input
                    className="font-montserrat h-[68px] w-[420px] rounded-[10px] p-6 ps-16 outline-none transition-all duration-300 ease-in-out placeholder:text-[#39425D] focus:outline-none focus:ring"
                    placeholder="Your email"
                  />
                </div>
                <button className="h-[68px] w-44 rounded-[10px] bg-gradient-to-b from-[#FF946D] to-[#FF7D68] font-openSans text-[17px] font-semibold text-white">
                  Subscribe
                </button>
              </div>
              <button className="absolute right-0 top-0 flex size-[70px] -translate-y-1/4 translate-x-1/4 items-center justify-center rounded-full bg-gradient-to-b from-[#747DEF] to-[#5E3BE1]">
                <Image
                  src={"/assets/homepage/send-1.svg"}
                  alt={""}
                  width={46}
                  height={44}
                />
              </button>
            </div>
          </div>
        </div>
      </main>
      <footer className="py-20">
        <div className="section-container">
          <div className="flex justify-between">
            <div>
              <p className="mt-5 text-[13px] font-medium text-[#5E6282]">
                Book your trip in minute, get full Control for much longer.
              </p>
            </div>
            {FOOTER.map((column, index) => (
              <div key={index} className="">
                <div>{column.title}</div>
                <div className="">
                  {column.children.map((item, i) => (
                    <Link key={i} href={item.href}>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
