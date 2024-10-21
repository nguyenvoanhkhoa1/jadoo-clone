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

  return (
    <>
      <header className="fixed w-full bg-white py-9">
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
                  <div className="flex flex-col items-center rounded-[36px] bg-white px-9 py-11 text-center transition-shadow duration-300 ease-linear hover:shadow-lg">
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
      </main>
    </>
  )
}
