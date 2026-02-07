import { chocolates, type Chocolate } from './chocolateData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles } from 'lucide-react';

interface ChocolateGalleryProps {
  onChocolateClick: (chocolate: Chocolate) => void;
}

export default function ChocolateGallery({ onChocolateClick }: ChocolateGalleryProps) {
  return (
    <section className="space-y-8">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-rose-900 dark:text-rose-100">
          Your Favorite Chocolate
        </h2>
        <p className="text-lg text-rose-700 dark:text-rose-300">
          Click to reveal its sweet message
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          {chocolates.map((chocolate) => (
            <Card
              key={chocolate.id}
              className="group relative overflow-hidden border-2 border-rose-200 dark:border-rose-800 hover:border-rose-400 dark:hover:border-rose-600 transition-all duration-300 hover:shadow-2xl hover:scale-105 bg-white/80 dark:bg-rose-950/80 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={chocolate.image}
                    alt={chocolate.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {chocolate.isFavorite && (
                    <div className="absolute top-3 right-3 bg-rose-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg animate-pulse">
                      <Heart className="w-3 h-3 fill-white" />
                      Favorite
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-rose-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                
                <div className="p-4 space-y-3">
                  <h3 className="text-lg font-bold text-rose-900 dark:text-rose-100 text-center">
                    {chocolate.name}
                  </h3>
                  <Button
                    onClick={() => onChocolateClick(chocolate)}
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                  >
                    <Sparkles className="w-4 h-4 mr-2" />
                    Reveal Message
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
