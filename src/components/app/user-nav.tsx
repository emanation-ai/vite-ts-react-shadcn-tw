import { useContext } from 'react'
import { AppContext, IGlobalDataType } from '@/contexts/AppContextData'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

export function UserNav() {
  const appData = useContext<IGlobalDataType>(AppContext)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="relative h-8 w-8 rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage
              src={appData.user.img_src}
              alt={appData.user.img_alt}
            />
            <AvatarFallback>SC</AvatarFallback>
          </Avatar>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="end" forceMount>
        <DropdownMenuLabel className="font-normal">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium leading-none">
              {appData.user.username}
            </p>
            <p className="text-xs leading-none text-muted-foreground">
              {appData.user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {appData.menus.map((menu) => (
            <DropdownMenuItem>
              {menu.name}
              {menu.shortcut && (
                <DropdownMenuShortcut>{menu.shortcut}</DropdownMenuShortcut>
              )}
            </DropdownMenuItem>
          ))}
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        {appData.menus_other.map((menu) => (
          <DropdownMenuItem>
            {menu.name}
            {menu.shortcut && (
              <DropdownMenuShortcut>{menu.shortcut}</DropdownMenuShortcut>
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
