'use client'
// components/simulator/ScamCard.tsx
import { motion } from 'framer-motion';
import { Lock, Shield, AlertTriangle, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { ScamLevel } from '@/data/scamLevels';
import Button from '@/components/ui/Button';

interface ScamCardProps {
  level: ScamLevel;
  index: number;
}

export default function ScamCard({ level, index }: ScamCardProps) {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Social Media': return '💬';
      case 'Email': return '📧';
      case 'Investment': return '📈';
      case 'Tech': return '💻';
      default: return '🎭';
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-success/20 text-success';
      case 'Intermediate': return 'bg-warning/20 text-warning';
      case 'Advanced': return 'bg-error/20 text-error';
      default: return 'bg-primary/20 text-primary';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="bg-surface border border-border rounded-2xl p-6 shadow-medium hover:shadow-lg transition-shadow"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-background2 flex items-center justify-center text-2xl">
            {getCategoryIcon(level.category)}
          </div>
          <div>
            <h3 className="text-xl font-bold">{level.title}</h3>
            <p className="text-sm text-text2">{level.category}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(level.difficulty)}`}>
          {level.difficulty}
        </span>
      </div>

      <p className="text-text2 mb-6">{level.description}</p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center justify-between text-sm">
          <span className="text-text2">Red Flags to Spot:</span>
          <span className="font-semibold">{level.redFlags.length}</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {level.redFlags.slice(0, 3).map((flagId, i) => (
            <span key={i} className="px-2 py-1 bg-background2 text-xs rounded-md border border-border">
              {flagId.replace('_', ' ')}
            </span>
          ))}
          {level.redFlags.length > 3 && (
            <span className="px-2 py-1 bg-background2 text-xs rounded-md border border-border">
              +{level.redFlags.length - 3} more
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-border">
        <div className="text-sm text-text2">
          ⏱️ {level.estimatedTime}
        </div>
        <Link href={`/simulator/level/${level.id}`}>
          <Button variant="outline">
            Start Simulation
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}