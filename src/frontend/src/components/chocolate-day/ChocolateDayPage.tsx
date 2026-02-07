import { useState } from 'react';
import ChocolateGallery from './ChocolateGallery';
import ChocolateMessageReveal from './ChocolateMessageReveal';
import FlowProgressIndicator from './FlowProgressIndicator';
import FlowNavigation from './FlowNavigation';
import SweetMessageStepOne from './steps/SweetMessageStepOne';
import SweetMessageStepTwo from './steps/SweetMessageStepTwo';
import InstagramStoryCardStep from './steps/InstagramStoryCardStep';
import VirtualChocolateGiftStep from './steps/VirtualChocolateGiftStep';
import ChocolateMeaningsStep from './steps/ChocolateMeaningsStep';
import { type Chocolate } from './chocolateData';
import { Heart } from 'lucide-react';

const TOTAL_STEPS = 6;

export default function ChocolateDayPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedChocolate, setSelectedChocolate] = useState<Chocolate | null>(null);

  const handleNext = () => {
    if (currentStep < TOTAL_STEPS) {
      setCurrentStep(currentStep + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50 dark:from-rose-950 dark:via-pink-950 dark:to-amber-950">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-rose-500/10 to-transparent" />
        <div className="container mx-auto px-4 py-12 md:py-16 relative">
          <div className="text-center space-y-4 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-amber-600 bg-clip-text text-transparent">
                Happy Chocolate Day
              </h1>
              <Heart className="w-8 h-8 text-rose-500 fill-rose-500 animate-pulse" />
            </div>
            <p className="text-lg md:text-xl text-rose-900 dark:text-rose-100 font-medium">
              A sweet celebration crafted just for you
            </p>
          </div>
        </div>
      </header>

      {/* Progress Indicator */}
      <div className="container mx-auto px-4 py-4">
        <FlowProgressIndicator currentStep={currentStep} totalSteps={TOTAL_STEPS} />
      </div>

      {/* Main Content - Step-based Flow */}
      <main className="container mx-auto px-4 py-8 md:py-12">
        <div className="max-w-4xl mx-auto">
          {currentStep === 1 && <SweetMessageStepOne />}
          {currentStep === 2 && <SweetMessageStepTwo />}
          {currentStep === 3 && <InstagramStoryCardStep />}
          {currentStep === 4 && (
            <div className="space-y-8">
              <div className="text-center space-y-3 mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-rose-900 dark:text-rose-100">
                  Your Favorite Chocolate
                </h2>
                <p className="text-lg text-rose-700 dark:text-rose-300">
                  Click to reveal its sweet message
                </p>
              </div>
              <ChocolateGallery onChocolateClick={setSelectedChocolate} />
            </div>
          )}
          {currentStep === 5 && <VirtualChocolateGiftStep />}
          {currentStep === 6 && <ChocolateMeaningsStep />}
        </div>
      </main>

      {/* Navigation Controls */}
      <div className="container mx-auto px-4 py-8">
        <FlowNavigation
          currentStep={currentStep}
          totalSteps={TOTAL_STEPS}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>

      {/* Footer */}
      <footer className="py-8 text-center text-rose-700 dark:text-rose-300 border-t border-rose-200 dark:border-rose-800">
        <p className="flex items-center justify-center gap-2 text-sm">
          © 2026. Built with <Heart className="w-4 h-4 fill-rose-500 text-rose-500" /> using{' '}
          <a 
            href="https://caffeine.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="font-semibold hover:text-rose-600 dark:hover:text-rose-400 transition-colors underline"
          >
            caffeine.ai
          </a>
        </p>
      </footer>

      {/* Message Reveal Dialog */}
      <ChocolateMessageReveal
        chocolate={selectedChocolate}
        onClose={() => setSelectedChocolate(null)}
      />
    </div>
  );
}
