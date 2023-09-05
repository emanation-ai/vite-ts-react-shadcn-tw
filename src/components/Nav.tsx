'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import { Link } from 'react-router-dom';

export interface IComponent {
  title: string;
  href: string;
  description: string;
}
export interface INavData {
  dropdown_menus: { dropdown_title: string; dropdown_items: IComponent[] }[];
  buttons: { title: string; href: string }[];
}
export function NavigationMenuDemo({ dropdown_menus, buttons }: INavData) {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {dropdown_menus.map((menu, index) => (
          <NavigationMenuItem key={index}>
            <NavigationMenuTrigger>{menu.dropdown_title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              {/* grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] */}
              <ul
                className={
                  index % 2 === 0
                    ? 'grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]'
                    : 'grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'
                }
              >
                {menu.dropdown_items.map((c) => (
                  <ListItem key={c.title} title={c.title} href={c.href}>
                    {c.description}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
        {buttons.map((button, index) => (
          <NavigationMenuItem key={index}>
            <Link to={button.href}>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {button.title}
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = 'ListItem';
