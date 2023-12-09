import Image from 'next/image'
import { Inter } from 'next/font/google'
import Template from '@/src/components/Template/Template'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen'>
     <Template />
    </main>
  )
}
