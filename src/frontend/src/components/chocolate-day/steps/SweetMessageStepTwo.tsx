import { Heart, Star } from 'lucide-react';

export default function SweetMessageStepTwo() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Star className="w-8 h-8 text-amber-500 fill-amber-500 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            How Amazing You Are
          </h2>
          <Star className="w-8 h-8 text-amber-500 fill-amber-500 animate-pulse" />
        </div>

        <div className="bg-white/60 dark:bg-rose-950/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-rose-200 dark:border-rose-800 space-y-6">
          <div className="flex justify-center gap-3 mb-6">
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" />
            <Heart className="w-12 h-12 text-pink-500 fill-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-12 h-12 text-rose-500 fill-rose-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>

          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed">
            Your warmth and care touch everyone around you. The way you light up a room with your presence is truly magical. You have this incredible ability to make people feel special and loved.
          </p>

          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed">
            Your thoughtfulness never goes unnoticed. Whether it's a kind word, a gentle gesture, or just being there when someone needs you - you always know how to make things better.
          </p>

          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed">
            You deserve all the sweetness in the world because you bring so much sweetness into the lives of others. Your heart is pure gold, and being around you is a gift I cherish every single day.
          </p>

          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed font-semibold">
            Thank you for being the wonderful, sweet, amazing person you are! 🌟💖
          </p>
        </div>
      </div>
    </div>
  );
}
