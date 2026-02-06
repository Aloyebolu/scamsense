// components/simulator/RedFlagHighlight.tsx
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface RedFlagHighlightProps {
  isActive: boolean;
  elementId?: string;
  redFlagType: string;
}

export default function RedFlagHighlight({ isActive, elementId, redFlagType }: RedFlagHighlightProps) {
  if (!isActive) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className="absolute inset-0 pointer-events-none"
    >
      {/* Glowing border effect */}
      <div className="absolute inset-0 border-2 border-error rounded-lg animate-pulse" />
      
      {/* Warning badge */}
      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
        <div className="flex items-center gap-1 px-3 py-1 bg-error text-on-brand rounded-full text-sm font-semibold whitespace-nowrap">
          <AlertTriangle size={14} />
          <span className="capitalize">{redFlagType.replace('_', ' ')}</span>
        </div>
      </div>
    </motion.div>
  );
}