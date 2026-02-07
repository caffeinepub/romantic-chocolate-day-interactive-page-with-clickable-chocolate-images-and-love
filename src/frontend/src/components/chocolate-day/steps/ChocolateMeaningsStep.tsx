import { Card, CardContent } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';

interface ChocolateMeaning {
  name: string;
  image: string;
  message?: string;
  textAbove?: string;
  textBelow?: string;
  inlineLayout?: {
    before: string;
    after: string;
  };
}

const chocolateMeanings: ChocolateMeaning[] = [
  {
    name: 'Centre Fresh',
    image: '/assets/generated/chocolate-centre-fresh.dim_768x768.png',
    message: 'You gave freshness in my life'
  },
  {
    name: 'Dark Fantasy',
    image: '/assets/generated/chocolate-dark-fantasy.dim_768x768.png',
    textAbove: 'My only dark fantasy',
    textBelow: 'It will be with you forever'
  },
  {
    name: 'Kinder Joy',
    image: '/assets/generated/chocolate-kinder-joy.dim_768x768.png',
    textAbove: 'My love for you is unlimited, just like',
    textBelow: 'Surprises'
  },
  {
    name: 'Dairy Milk',
    image: '/assets/generated/chocolate-fruit-nut.dim_768x768.png',
    inlineLayout: {
      before: "You're the",
      after: 'that makes my life sweeter'
    }
  },
  {
    name: 'Milky Way',
    image: '/assets/generated/chocolate-milky-way.dim_768x768.png',
    textAbove: 'Our relationship is just like',
    textBelow: 'Sweet, endless, and out of this world'
  },
  {
    name: 'Choco Pie',
    image: '/assets/generated/chocolate-choco-pie.dim_768x768.png',
    message: 'Hey my sweetest one! You bring so much joy to my life.'
  },
  {
    name: 'KitKat',
    image: '/assets/generated/chocolate-kitkat.dim_768x768.png',
    message: 'You make my heart go skip a beat every time I see you.'
  },
  {
    name: 'Fuse',
    image: '/assets/generated/chocolate-fuse.dim_768x768.png',
    message: 'My mind gets fused when I see you - you leave me speechless!'
  },
  {
    name: 'Gems',
    image: '/assets/generated/chocolate-gems.dim_768x768.png',
    message: 'You are the true gem of my life, precious and irreplaceable.'
  },
  {
    name: '5 Star',
    image: '/assets/generated/chocolate-5-star.dim_768x768.png',
    message: 'I give you 5 stars for being there for me always!'
  },
  {
    name: 'Snickers',
    image: '/assets/generated/chocolate-extra-1.dim_768x768.png',
    message: "You satisfy my heart's hunger like nothing else can."
  },
  {
    name: 'Twix',
    image: '/assets/generated/chocolate-extra-2.dim_768x768.png',
    message: 'Two hearts, one love - perfectly paired, just like us.'
  },
  {
    name: 'Ferrero Rocher',
    image: '/assets/generated/chocolate-extra-3.dim_768x768.png',
    message: 'You are the golden treasure wrapped in layers of love and care.'
  }
];

export default function ChocolateMeaningsStep() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            Every Chocolate Has a Meaning
          </h2>
          <Sparkles className="w-8 h-8 text-amber-500 animate-pulse" />
        </div>

        <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed">
          Each chocolate represents a special feeling I have for you 💝
        </p>

        {/* Chocolates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {chocolateMeanings.map((chocolate, index) => (
            <Card 
              key={chocolate.name}
              className="bg-white/80 dark:bg-rose-950/80 backdrop-blur-sm border-2 border-rose-200 dark:border-rose-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 space-y-4">
                {/* Inline Layout (text-image-text in one line) */}
                {chocolate.inlineLayout ? (
                  <div className="flex flex-col items-center justify-center gap-4">
                    <div className="flex flex-wrap items-center justify-center gap-3 text-base md:text-lg text-rose-800 dark:text-rose-200 text-center leading-relaxed">
                      <span>{chocolate.inlineLayout.before}</span>
                      <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center flex-shrink-0">
                        <img
                          src={chocolate.image}
                          alt={chocolate.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                        />
                      </div>
                      <span>{chocolate.inlineLayout.after}</span>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* Text Above (if present) */}
                    {chocolate.textAbove && (
                      <p className="text-base md:text-lg text-rose-800 dark:text-rose-200 text-center leading-relaxed">
                        {chocolate.textAbove}
                      </p>
                    )}

                    {/* Chocolate Image */}
                    <div className="flex justify-center">
                      <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                        <img
                          src={chocolate.image}
                          alt={chocolate.name}
                          className="w-full h-full object-contain drop-shadow-lg"
                        />
                      </div>
                    </div>

                    {/* Text Below (if present) */}
                    {chocolate.textBelow && (
                      <p className="text-base md:text-lg text-rose-800 dark:text-rose-200 text-center leading-relaxed font-semibold">
                        {chocolate.textBelow}
                      </p>
                    )}

                    {/* Standard Message (if no textAbove/textBelow) */}
                    {chocolate.message && !chocolate.textAbove && !chocolate.textBelow && (
                      <>
                        {/* Chocolate Name */}
                        <h3 className="text-xl md:text-2xl font-bold text-rose-900 dark:text-rose-100 text-center">
                          {chocolate.name}
                        </h3>

                        {/* Divider with Heart */}
                        <div className="flex items-center justify-center gap-2">
                          <div className="h-px bg-rose-300 dark:bg-rose-700 flex-1" />
                          <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
                          <div className="h-px bg-rose-300 dark:bg-rose-700 flex-1" />
                        </div>

                        {/* Message */}
                        <p className="text-base md:text-lg text-rose-800 dark:text-rose-200 text-center leading-relaxed">
                          {chocolate.message}
                        </p>
                      </>
                    )}
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Final Message */}
        <div className="bg-gradient-to-r from-rose-100 via-pink-100 to-amber-100 dark:from-rose-900 dark:via-pink-900 dark:to-amber-900 rounded-3xl p-8 md:p-12 shadow-xl border-2 border-rose-300 dark:border-rose-700 space-y-4 mt-12">
          <div className="flex justify-center gap-2 mb-4">
            <Heart className="w-10 h-10 text-rose-500 fill-rose-500 animate-pulse" />
            <Heart className="w-10 h-10 text-pink-500 fill-pink-500 animate-pulse" style={{ animationDelay: '0.2s' }} />
            <Heart className="w-10 h-10 text-amber-500 fill-amber-500 animate-pulse" style={{ animationDelay: '0.4s' }} />
          </div>

          <p className="text-xl md:text-2xl text-rose-900 dark:text-rose-100 leading-relaxed font-semibold text-center">
            Every chocolate tells a story of how much you mean to me. You're sweeter than all of these combined! 🍫💖
          </p>

          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed text-center">
            Thank you for being the sweetest part of my life. Happy Chocolate Day, my love! 🌟
          </p>
        </div>
      </div>
    </div>
  );
}
