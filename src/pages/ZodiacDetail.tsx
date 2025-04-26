import { useParams, Link } from "react-router-dom";
import { zodiacSigns } from "@/data/zodiacSigns";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Star } from "lucide-react";
import { ZodiacNav } from "@/components/ZodiacNav";

const ZodiacDetail = () => {
  const { id } = useParams<{ id: string }>();
  const zodiacSign = zodiacSigns.find((sign) => sign.id === id);

  if (!zodiacSign) {
    return (
      <div className="container mx-auto py-10 text-center">
        <h1 className="text-3xl font-bold mb-4">Знак зодиака не найден</h1>
        <p className="mb-6">К сожалению, запрашиваемый знак зодиака не существует.</p>
        <Button asChild>
          <Link to="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  // Получение связанных знаков по стихии
  const relatedSigns = zodiacSigns
    .filter((sign) => sign.element === zodiacSign.element && sign.id !== zodiacSign.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-4 py-8">
        <Button variant="ghost" asChild className="mb-6">
          <Link to="/" className="flex items-center gap-2">
            <ArrowLeft size={16} />
            Назад к списку
          </Link>
        </Button>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-2">
            <div className="relative rounded-lg overflow-hidden mb-6 aspect-video">
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <img
                src={zodiacSign.imageUrl}
                alt={zodiacSign.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
                <Badge className="mb-2 bg-primary/80 hover:bg-primary">
                  {zodiacSign.element}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold text-white flex items-center gap-3">
                  {zodiacSign.name} 
                  <span className="text-3xl md:text-4xl text-zodiac-starYellow animate-pulse">
                    {zodiacSign.symbol}
                  </span>
                </h1>
                <p className="text-white/80 text-lg mt-2">{zodiacSign.dates}</p>
              </div>
            </div>

            <div className="bg-card rounded-lg shadow-lg p-6 mb-6">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Star size={20} className="mr-2 text-yellow-500" />
                Характеристика знака
              </h2>
              <p className="text-muted-foreground mb-4">
                {zodiacSign.name} — это знак, принадлежащий к стихии {zodiacSign.element.toLowerCase()}.
                Люди, родившиеся под этим знаком ({zodiacSign.dates}), обладают особыми качествами и 
                характеристиками, которые определяют их подход к жизни и взаимодействие с окружающими.
              </p>
              
              <h3 className="text-xl font-semibold mt-6 mb-3">Основные черты</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Уникальная энергетика {zodiacSign.element.toLowerCase()}ной стихии</li>
                <li>Сильные духовные и интуитивные способности</li>
                <li>Особый подход к решению жизненных задач</li>
                <li>Гармоничное взаимодействие с природными циклами</li>
              </ul>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Информация о знаке</h2>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Стихия:</span>
                  <span className="font-medium">{zodiacSign.element}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Символ:</span>
                  <span className="font-medium">{zodiacSign.symbol}</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-muted-foreground">Период:</span>
                  <span className="font-medium">{zodiacSign.dates}</span>
                </li>
              </ul>
            </div>

            <div className="bg-card rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold mb-4">Родственные знаки</h2>
              <p className="text-sm text-muted-foreground mb-4">
                Знаки стихии {zodiacSign.element.toLowerCase()}:
              </p>
              <div className="space-y-3">
                {relatedSigns.map((sign) => (
                  <Link 
                    key={sign.id} 
                    to={`/zodiac/${sign.id}`}
                    className="flex items-center p-3 rounded-md transition-colors hover:bg-accent group"
                  >
                    <span className="mr-2 text-xl group-hover:animate-pulse">{sign.symbol}</span>
                    <span className="font-medium">{sign.name}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <ZodiacNav />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ZodiacDetail;
