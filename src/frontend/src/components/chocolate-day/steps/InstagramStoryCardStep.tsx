import { Heart, Sparkles } from 'lucide-react';

export default function InstagramStoryCardStep() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="text-center space-y-6 max-w-3xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
            Share This Sweet Moment
          </h2>
          <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
        </div>

        <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed mb-8">
          A special card just for you, featuring your favorite chocolate! 💝
        </p>

        {/* Instagram Story-Style Card */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Main Story Card Container */}
          <div 
            className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-rose-300 dark:border-rose-700"
            style={{
              aspectRatio: '9/16',
              backgroundImage: 'url(/assets/generated/story-card-bg.dim_1080x1920.png)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            {/* Overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 via-transparent to-rose-500/10" />
            
            {/* Content Container */}
            <div className="relative h-full flex flex-col items-center justify-between p-6 md:p-8">
              
              {/* Header Text */}
              <div className="w-full text-center pt-4">
                <p className="text-white text-lg md:text-xl font-bold drop-shadow-lg px-4 leading-tight">
                  This is your sign to send this to your special one on this chocolate day 💝
                </p>
              </div>

              {/* Center Browser Frame with Chocolate */}
              <div className="flex-1 flex items-center justify-center w-full px-4">
                <div className="relative w-full max-w-sm">
                  {/* Browser Frame */}
                  <div 
                    className="relative rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                      backgroundImage: 'url(/assets/generated/story-browser-frame.dim_900x600.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    {/* Inner Content Area with Grid Paper Background */}
                    <div className="relative p-8 md:p-10" style={{ aspectRatio: '3/2' }}>
                      {/* Grid Paper Pattern */}
                      <div 
                        className="absolute inset-0 opacity-20"
                        style={{
                          backgroundImage: `
                            linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
                          `,
                          backgroundSize: '20px 20px'
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative h-full flex flex-col items-center justify-center space-y-3">
                        {/* Top Message */}
                        <p className="text-rose-900 dark:text-rose-800 text-base md:text-lg font-bold text-center leading-tight">
                          You make my heart go
                        </p>
                        
                        {/* Chocolate Image */}
                        <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
                          <img
                            src="/assets/generated/chocolate-fruit-nut.dim_768x768.png"
                            alt="Dairy Milk Fruit & Nut"
                            className="w-full h-full object-contain drop-shadow-lg"
                          />
                        </div>
                        
                        {/* Bottom Message with Heartbeat Line */}
                        <div className="flex items-center gap-2">
                          <svg 
                            className="w-8 h-8 text-rose-500" 
                            viewBox="0 0 100 50" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="3"
                          >
                            <path d="M0,25 L20,25 L25,10 L30,40 L35,25 L100,25" />
                          </svg>
                          <p className="text-rose-900 dark:text-rose-800 text-base md:text-lg font-bold">
                            (skip a beat)
                          </p>
                        </div>
                      </div>

                      {/* Decorative Stickers */}
                      {/* Teddy Sticker - Bottom Right */}
                      <div className="absolute -bottom-2 -right-2 w-16 h-16 md:w-20 md:h-20 pointer-events-none" aria-hidden="true">
                        <img
                          src="/assets/generated/sticker-teddy.dim_320x320.png"
                          alt=""
                          className="w-full h-full object-contain drop-shadow-lg animate-float-slow"
                        />
                      </div>

                      {/* Bunny Sticker - Top Left */}
                      <div className="absolute -top-2 -left-2 w-12 h-12 md:w-16 md:h-16 pointer-events-none" aria-hidden="true">
                        <img
                          src="/assets/generated/sticker-bunny.dim_320x320.png"
                          alt=""
                          className="w-full h-full object-contain drop-shadow-lg animate-float-slow"
                          style={{ animationDelay: '0.5s' }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Additional Doodles Around Frame */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 pointer-events-none opacity-80" aria-hidden="true">
                    <Sparkles className="w-full h-full text-amber-400 animate-pulse" />
                  </div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 pointer-events-none opacity-80" aria-hidden="true">
                    <Heart className="w-full h-full text-pink-400 fill-pink-400 animate-pulse" style={{ animationDelay: '0.3s' }} />
                  </div>
                </div>
              </div>

              {/* Bottom Space */}
              <div className="h-8" />
            </div>
          </div>
        </div>

        {/* Description Below Card */}
        <div className="bg-white/60 dark:bg-rose-950/60 backdrop-blur-sm rounded-3xl p-6 md:p-8 shadow-xl border-2 border-rose-200 dark:border-rose-800 space-y-4 mt-8">
          <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 leading-relaxed text-center">
            Your favorite Dairy Milk Fruit & Nut chocolate, wrapped in a sweet message just for you! This is how you make my heart skip a beat every single day. 💖
          </p>
        </div>
      </div>
    </div>
  );
}
