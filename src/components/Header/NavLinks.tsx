'use client'

import { useSelectedLayoutSegment } from "next/navigation"
import Link from "next/link"
import { FavoritesCounter } from "../FavoritesList/FavoritesCounter"
interface INavLinkProps {
  name: string
  href: string
  icon: React.ReactNode
  targetSegment: string | null
}

export const NavLinks = ({ name, href, icon, targetSegment }: INavLinkProps) => {
  const activeSegment = useSelectedLayoutSegment()

  return (
    <>
      {
        <Link href={href} key={name} className={`relative flex flex-col items-center p-5 text-white ${activeSegment === targetSegment ? 'bg-slate-900' : ''}`}>
          {icon}
          {name}
          {targetSegment === 'favorites' && <FavoritesCounter />}
        </Link>
      }
    </>
  )
}