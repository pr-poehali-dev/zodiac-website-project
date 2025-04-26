import React from "react";
import { Link } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

const elements = [
  {
    title: "Огненные",
    description: "Импульсивные, страстные и энергичные знаки",
    signs: [
      { name: "Овен", dates: "21 марта - 20 апреля", id: "aries" },
      { name: "Лев", dates: "23 июля - 22 августа", id: "leo" },
      { name: "Стрелец", dates: "23 ноября - 21 декабря", id: "sagittarius" },
    ],
  },
  {
    title: "Земные",
    description: "Практичные, надежные и чувственные знаки",
    signs: [
      { name: "Телец", dates: "21 апреля - 21 мая", id: "taurus" },
      { name: "Дева", dates: "23 августа - 22 сентября", id: "virgo" },
      { name: "Козерог", dates: "22 декабря - 20 января", id: "capricorn" },
    ],
  },
  {
    title: "Воздушные",
    description: "Интеллектуальные, коммуникабельные и социальные знаки",
    signs: [
      { name: "Близнецы", dates: "22 мая - 21 июня", id: "gemini" },
      { name: "Весы", dates: "23 сентября - 22 октября", id: "libra" },
      { name: "Водолей", dates: "21 января - 19 февраля", id: "aquarius" },
    ],
  },
  {
    title: "Водные",
    description: "Эмоциональные, интуитивные и чувствительные знаки",
    signs: [
      { name: "Рак", dates: "22 июня - 22 июля", id: "cancer" },
      { name: "Скорпион", dates: "23 октября - 22 ноября", id: "scorpio" },
      { name: "Рыбы", dates: "20 февраля - 20 марта", id: "pisces" },
    ],
  },
];

const ZodiacNav = () => {
  return (
    <NavigationMenu className="max-w-full justify-start">
      <NavigationMenuList className="flex flex-wrap">
        <NavigationMenuItem>
          <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Главная
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        {elements.map((element) => (
          <NavigationMenuItem key={element.title}>
            <NavigationMenuTrigger>{element.title}</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-4 w-[400px] md:w-[500px] lg:w-[600px] grid-cols-1">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <div className="flex flex-col gap-1 h-full w-full select-none rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md">
                      <div className="text-lg font-medium">
                        {element.title} знаки
                      </div>
                      <p className="text-sm leading-snug text-muted-foreground">
                        {element.description}
                      </p>
                    </div>
                  </NavigationMenuLink>
                </li>
                {element.signs.map((sign) => (
                  <ListItem
                    key={sign.id}
                    title={sign.name}
                    href={`/zodiac/${sign.id}`}
                  >
                    {sign.dates}
                  </ListItem>
                ))}
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, href, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          to={href || "#"}
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default ZodiacNav;
