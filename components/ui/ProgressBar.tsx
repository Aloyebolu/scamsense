// components/ui/ProgressBar.tsx
interface ProgressBarProps {
  current: number;
  total: number;
  label?: string;
}

export default function ProgressBar({ current, total, label }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);
  
  return (
    <div className="space-y-2">
      {label && (
        <div className="flex justify-between items-center">
          <span className="text-sm font-medium text-foreground">{label}</span>
          <span className="text-sm font-semibold text-primary">{percentage}%</span>
        </div>
      )}
      <div className="h-2 bg-background2 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {!label && (
        <div className="flex justify-between text-xs text-text2">
          <span>{current} of {total} complete</span>
          <span>{percentage}%</span>
        </div>
      )}
    </div>
  );
}