import Link from 'next/link'
import { Home, Star, FileVideo2 } from 'lucide-react'
import { NavLinks } from './NavLinks'

export const Header = () => {

  interface InavSegment {
    name: string
    href: string
    icon: React.ReactNode
    targetSegment: string | null
  }

  const navSegments: InavSegment[] = [
    {
      name: 'home',
      href: '/',
      icon: <Home />,
      targetSegment: null
    },
    {
      name: 'favorites',
      href: '/favorites',
      icon: <Star />,
      targetSegment: 'favorites'
    }
  ]

  return (
    <header className='flex flex-col bg-slate-800 w-20 min-h-screen gap-10 pt-5 fixed'>
      <span>
        <Link href="/" className='flex flex-col items-center'>
          <FileVideo2 size={40} color="purple" />
        </Link>
      </span>

      <nav className='flex flex-col justify-center'>
        {
          navSegments.map((segment) => {
            return (
              <NavLinks key={segment.targetSegment} {...segment} />
            )
          })
        }
      </nav>
    </header>
  )
}