import request from "../utils/request"
import { useRouter } from "next/router"

const Nav = () => {
      const router = useRouter()
      return (
            <nav className="relative">
                  <div className="flex items-center px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide h-10">
                        {
                              Object.entries(request).map(([key, { title, url }]) => {
                                    return (
                                          <h1 key={key} className="last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125 active:text-zinc-500" onClick={() => {
                                                router.push(`/?genre=${key}`)
                                          }} >{title}
                                          </h1>
                                    )
                              })
                        }
                  </div>
                  <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202a] w-1/12 h-10" />
            </nav>
      )
}

export default Nav
