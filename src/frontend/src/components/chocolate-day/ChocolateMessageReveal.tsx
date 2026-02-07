import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { type Chocolate } from './chocolateData';
import { Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeartsConfetti from './HeartsConfetti';

interface ChocolateMessageRevealProps {
  chocolate: Chocolate | null;
  onClose: () => void;
}

export default function ChocolateMessageReveal({ chocolate, onClose }: ChocolateMessageRevealProps) {
  if (!chocolate) return null;

  return (
    <Dialog open={!!chocolate} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl bg-gradient-to-br from-rose-50 to-pink-50 dark:from-rose-950 dark:to-pink-950 border-2 border-rose-300 dark:border-rose-700 p-0 overflow-hidden">
        <HeartsConfetti />
        
        <div className="relative p-6 md:p-8">
          <Button
            onClick={onClose}
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-10 rounded-full bg-white/80 dark:bg-rose-900/80 hover:bg-rose-100 dark:hover:bg-rose-800"
          >
            <X className="w-5 h-5" />
          </Button>

          <DialogHeader className="space-y-4 text-center">
            <div className="flex justify-center">
              <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden shadow-2xl border-4 border-rose-200 dark:border-rose-800 animate-scale-in">
                <img
                  src={chocolate.image}
                  alt={chocolate.name}
                  className="w-full h-full object-cover"
                />
                {chocolate.isFavorite && (
                  <div className="absolute top-3 right-3 bg-rose-500 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center gap-1 shadow-lg">
                    <Heart className="w-4 h-4 fill-white" />
                    Your Favorite!
                  </div>
                )}
              </div>
            </div>

            <DialogTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
              {chocolate.name}
            </DialogTitle>

            <DialogDescription className="text-base md:text-lg text-rose-900 dark:text-rose-100 leading-relaxed max-w-xl mx-auto animate-fade-in">
              {chocolate.message}
            </DialogDescription>
          </DialogHeader>

          <div className="mt-6 flex justify-center">
            <Button
              onClick={onClose}
              className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Heart className="w-5 h-5 mr-2 fill-white" />
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
