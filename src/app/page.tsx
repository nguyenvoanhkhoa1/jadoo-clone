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
              <h1 className="font-volkhov mt-6 text-[84px] font-bold leading-[89px] text-[#181E4B]">
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
                    src={"assets/homepage/play-button.svg"}
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
      </main>
    </>
  )
}
