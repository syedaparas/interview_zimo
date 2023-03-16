import Image from 'next/image'
import { Lato } from 'next/font/google'
import styles from './page.module.css'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import InfoContainer from "../components/Info"
import Categories from '../components/Categories'
import Tickets from "../components/Tickets"
import Global from "../components/Global"
import PartnerCompanies from "../components/PartnerCompanies"
// const lato = Lato({ subsets: [Lato] })

export default function Home() {
  return (
    <div className="flex flex-col justify-between text-center h-full bg-white font-Lato  tracking-wide">
      <Navbar />
      <HeroSection />
      <InfoContainer />
      <Categories />
      <Tickets />
      <Global />
      <PartnerCompanies />
    </div>
  )
}
