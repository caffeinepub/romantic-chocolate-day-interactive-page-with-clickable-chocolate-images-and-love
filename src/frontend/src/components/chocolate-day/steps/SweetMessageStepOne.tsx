import { Heart, Sparkles } from 'lucide-react';

export default function SweetMessageStepOne() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            You Are So Sweet
          </h2>
          <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
        </div>

        <div className="bg-white/60 dark:bg-rose-950/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border-2 border-rose-200 dark:border-rose-800 space-y-6">
          <div className="flex justify-center mb-6">
            <Heart className="w-16 h-16 text-rose-500 fill-rose-500 animate-pulse" />
          </div>

          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed">
            Every moment with you feels like unwrapping the sweetest chocolate. Your kindness, your smile, your gentle heart - they all make my world so much brighter and sweeter.
          </p>

          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed">
            Just like the finest chocolate melts in your mouth, you melt my heart with everything you do. Your sweetness isn't just in the treats you love, but in the beautiful person you are.
          </p>

          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed font-semibold">
            You make every day feel like a celebration, and today is all about celebrating YOU! 💝
          </p>
        </div>
      </div>
    </div>
  );
}
