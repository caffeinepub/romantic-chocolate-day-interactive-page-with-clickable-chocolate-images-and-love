import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Gift, Heart, Sparkles } from 'lucide-react';

export default function VirtualChocolateGiftStep() {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleReveal = () => {
    setIsRevealed(true);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Gift className="w-8 h-8 text-rose-500 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            A Special Gift For You
          </h2>
          <Gift className="w-8 h-8 text-rose-500 animate-pulse" />
        </div>

        {!isRevealed ? (
          <div className="space-y-6">
            <div className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-200 dark:border-rose-800 bg-gradient-to-br from-rose-100 to-pink-100 dark:from-rose-900 dark:to-pink-900">
              <img
                src="/assets/generated/chocolate-gift-box-closed.dim_1200x800.png"
                alt="Closed gift box"
                className="w-full h-auto"
              />
            </div>

            <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed">
              I've prepared something special for you... A box full of virtual chocolates to sweeten your day! 🎁
            </p>

            <Button
              onClick={handleReveal}
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Open the Gift Box
            </Button>
          </div>
        ) : (
          <div className="space-y-6 animate-scale-in">
            <div 
              className="relative w-full max-w-2xl mx-auto rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-200 dark:border-rose-800"
              style={{
                backgroundImage: 'url(/assets/generated/chocolate-pattern-bg.dim_1600x900.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="bg-white/80 dark:bg-rose-950/80 backdrop-blur-sm">
                <img
                  src="/assets/generated/chocolate-gift-box-open.dim_1200x800.png"
                  alt="Open gift box filled with chocolates"
                  className="w-full h-auto"
                />
              </div>
            </div>

            <div className="bg-white/60 dark:bg-rose-950/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-rose-200 dark:border-rose-800 space-y-6">
              <div className="flex justify-center gap-2 mb-4">
                <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
                <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
                <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
              </div>

              <p className="text-xl md:text-2xl text-rose-900 dark:text-rose-100 leading-relaxed font-semibold text-center">
                A box full of love, sweetness, and joy - just for you! 🍫💝
              </p>

              <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed text-center">
                Each chocolate in this box represents a moment of happiness you've given me. May your life always be as sweet and delightful as these chocolates!
              </p>

              <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed text-center font-semibold">
                Happy Chocolate Day to my boyfriend, my partner, my soulmate, my closest best friend, and my everything! You deserve all the sweetness in the world! 🌟💖🍫
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
