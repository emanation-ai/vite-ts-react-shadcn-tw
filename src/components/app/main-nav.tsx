import { Link } from "react-router-dom";

import { cn } from "@/lib/utils";
import { links } from "../data/nav_menu.json";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      {links.map((link) => (
        <Link
          to={link.href}
          className={`text-sm font-medium transition-colors hover:text-primary`}
        >
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
