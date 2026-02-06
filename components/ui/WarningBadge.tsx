// components/ui/WarningBadge.tsx
import { AlertTriangle } from 'lucide-react';

interface WarningBadgeProps {
  text: string;
  variant?: 'error' | 'warning' | 'info';
}

export default function WarningBadge({ text, variant = 'warning' }: WarningBadgeProps) {
  const variants = {
    error: 'bg-error/10 text-error border-error/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    info: 'bg-info/10 text-info border-info/20',
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border ${variants[variant]}`}>
      <AlertTriangle size={14} />
      <span className="text-sm font-medium">{text}</span>
    </div>
  );
}