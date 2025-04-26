import React from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ZodiacSignProps {
  name: string;
  dates: string;
  element: string;
  symbol: string;
  imageUrl: string;
  id: string;
}

const ZodiacCard = ({ name, dates, element, symbol, imageUrl, id }: ZodiacSignProps) => {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:shadow-accent/20 border-accent/10 bg-card/50 backdrop-blur-sm">
      <div className="relative h-48 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zodiac-midnight/30 z-10" />
        <img 
          src={imageUrl} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" 
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="flex items-center justify-between">
          <span>{name}</span>
          <span className="text-xl text-zodiac-starYellow animate-glow">{symbol}</span>
        </CardTitle>
        <CardDescription>{dates}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm text-muted-foreground">Элемент: {element}</p>
      </CardContent>
      <CardFooter>
        <Button asChild variant="outline" className="w-full hover:bg-primary/20 hover:text-primary-foreground">
          <Link to={`/zodiac/${id}`}>Подробнее</Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ZodiacCard;
