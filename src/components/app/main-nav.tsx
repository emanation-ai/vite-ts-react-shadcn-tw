import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { INavigationContext } from '@/interfaces'
import { NavigationContext } from '@/contexts/NavigationContext'

import { cn } from '@/lib/utils'

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  const { links } = useContext<INavigationContext>(NavigationContext)

  return (
    <nav
      className={cn('flex items-center space-x-4 lg:space-x-6', className)}
      {...props}
    >
      {links.map((link, i: number) => (
        <Link
          key={`${link.label}-${i}`}
          to={link.href}
          className={`text-sm font-medium transition-colors hover:text-primary`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  )
}
