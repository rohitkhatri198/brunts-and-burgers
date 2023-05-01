import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Banner from '@/components/Banner'
import About from '@/components/About'
import Specialities from '@/components/Specialities'
import Text from '@/components/Text'
import GetStarted from '@/components/GetStarted'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='bg-[#1d1c1c] relative h-screen bg-gradient-to-b lg:h-[unset]'
    >
      <Header/>
      <Banner/>
      <About/>
      <Specialities/>
      <Text/>
      <GetStarted/>
      <Footer/>
    </main>
  )
}
