import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface FlowNavigationProps {
  currentStep: number;
  totalSteps: number;
  onNext: () => void;
  onBack: () => void;
}

export default function FlowNavigation({ currentStep, totalSteps, onNext, onBack }: FlowNavigationProps) {
  const isFirstStep = currentStep === 1;
  const isLastStep = currentStep === totalSteps;

  return (
    <div className="flex items-center justify-between max-w-4xl mx-auto gap-4">
      <Button
        onClick={onBack}
        disabled={isFirstStep}
        variant="outline"
        size="lg"
        className="border-2 border-rose-300 dark:border-rose-700 text-rose-700 dark:text-rose-300 hover:bg-rose-100 dark:hover:bg-rose-900 disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
      >
        <ChevronLeft className="w-5 h-5 mr-2" />
        Back
      </Button>

      <Button
        onClick={onNext}
        disabled={isLastStep}
        size="lg"
        className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        Next
        <ChevronRight className="w-5 h-5 ml-2" />
      </Button>
    </div>
  );
}
