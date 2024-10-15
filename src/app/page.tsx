import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <header className="fixed w-full py-9">
        <div className="section-container flex w-full items-center justify-between">
          <Link href={"/"} className="h-fit w-[100px]">
            <Image
              src={"assets/jadoo-travel-logo.svg"}
              alt={""}
              width={115}
              height={34}
            />
          </Link>
          <div className="flex items-center">
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
      <main className="">
        <div className="section-container flex pb-12 pt-[105px]">
          <div>
            <div>Best destinations around the world</div>
            <h1>Travel, enjoy and live a new and full life</h1>
            <p>
              Built Wicket longer admire do barton vanity itself do in it.
              Preferred to sportsmen it engrossed listening. Park gate sell they
              west hard for the.
            </p>
            <div>
              <button>Find out more</button>
              <button>
                <img
                  src="https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938d0a54d313ce148aa83_play-button.svg"
                  loading="lazy"
                  alt="Play button"
                />
                Play Demo
              </button>
            </div>
          </div>
          <div className="">
            <img
              src="https://cdn.prod.website-files.com/6170700f1a1db6b3a0ac16ed/617938cf58e87917dc7a61ec_woman-planes.png"
              loading="lazy"
              alt="Traveling lady with luggage"
            />
          </div>
        </div>
      </main>
    </>
  )
}
