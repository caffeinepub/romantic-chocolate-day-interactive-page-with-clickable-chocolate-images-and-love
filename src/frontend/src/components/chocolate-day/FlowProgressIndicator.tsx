interface FlowProgressIndicatorProps {
  currentStep: number;
  totalSteps: number;
}

export default function FlowProgressIndicator({ currentStep, totalSteps }: FlowProgressIndicatorProps) {
  return (
    <div className="flex flex-col items-center gap-4">
      {/* Step Text */}
      <div className="text-center">
        <p className="text-sm font-medium text-rose-700 dark:text-rose-300">
          Step <span className="font-bold text-rose-900 dark:text-rose-100">{currentStep}</span> of {totalSteps}
        </p>
      </div>

      {/* Progress Dots */}
      <div className="flex items-center gap-3" role="progressbar" aria-valuenow={currentStep} aria-valuemin={1} aria-valuemax={totalSteps}>
        {Array.from({ length: totalSteps }, (_, index) => {
          const stepNumber = index + 1;
          const isActive = stepNumber === currentStep;
          const isCompleted = stepNumber < currentStep;

          return (
            <div
              key={stepNumber}
              className={`
                h-3 rounded-full transition-all duration-300
                ${isActive ? 'w-12 bg-rose-500 dark:bg-rose-400' : 'w-3'}
                ${isCompleted ? 'bg-rose-400 dark:bg-rose-500' : ''}
                ${!isActive && !isCompleted ? 'bg-rose-200 dark:bg-rose-800' : ''}
              `}
              aria-current={isActive ? 'step' : undefined}
              aria-label={`Step ${stepNumber}${isActive ? ' (current)' : ''}${isCompleted ? ' (completed)' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}
