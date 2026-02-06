// components/simulator/ScoreCard.tsx
import { motion } from 'framer-motion';
import { Trophy, AlertTriangle, Shield, TrendingUp } from 'lucide-react';
import Button from '@/components/ui/Button';

interface ScoreCardProps {
  levelTitle: string;
  redFlagsSpotted: number;
  totalRedFlags: number;
  riskyActions: number;
  timeSpent: number;
  onRestart?: () => void;
  onNext?: () => void;
}

export default function ScoreCard({
  levelTitle,
  redFlagsSpotted,
  totalRedFlags,
  riskyActions,
  timeSpent,
  onRestart,
  onNext
}: ScoreCardProps) {
  const score = Math.round((redFlagsSpotted / totalRedFlags) * 100);
  const riskPercentage = Math.round((riskyActions / totalRedFlags) * 100);

  const getPerformanceMessage = () => {
    if (score >= 80) return "Excellent! You're a scam-spotting expert!";
    if (score >= 60) return "Good job! You caught most red flags.";
    if (score >= 40) return "You're learning! Practice makes perfect.";
    return "Keep practicing! You'll get better with each simulation.";
  };

  const improvementTips = [
    "Take your time - don't rush decisions",
    "Verify unexpected requests through official channels",
    "Never share sensitive information with unsolicited contacts",
    "Check for poor grammar and suspicious URLs",
    "Remember: if it's too good to be true, it probably is"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-surface border border-border rounded-2xl p-8 max-w-2xl mx-auto shadow-2xl"
    >
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
          <Trophy className="w-8 h-8 text-primary" />
        </div>
        <h2 className="text-3xl font-bold mb-2">Simulation Complete!</h2>
        <p className="text-text2">{levelTitle}</p>
      </div>

      {/* Score Display */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-background2 p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-success/20 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-success" />
            </div>
            <div>
              <div className="text-2xl font-bold">{score}%</div>
              <div className="text-sm text-text2">Detection Score</div>
            </div>
          </div>
          <div className="h-2 bg-surface rounded-full overflow-hidden">
            <div 
              className="h-full bg-success transition-all duration-1000"
              style={{ width: `${score}%` }}
            />
          </div>
        </div>

        <div className="bg-background2 p-6 rounded-xl border border-border">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 bg-error/20 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-error" />
            </div>
            <div>
              <div className="text-2xl font-bold">{redFlagsSpotted}/{totalRedFlags}</div>
              <div className="text-sm text-text2">Red Flags Spotted</div>
            </div>
          </div>
          <div className="h-2 bg-surface rounded-full overflow-hidden">
            <div 
              className="h-full bg-error transition-all duration-1000"
              style={{ width: `${(redFlagsSpotted / totalRedFlags) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-4 mb-8">
        <div className="flex justify-between items-center p-4 bg-background2 rounded-lg">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-warning" />
            <span>Risky Actions Taken</span>
          </div>
          <span className="font-bold text-warning">{riskyActions}</span>
        </div>
        <div className="flex justify-between items-center p-4 bg-background2 rounded-lg">
          <div className="flex items-center gap-3">
            <TrendingUp className="w-5 h-5 text-info" />
            <span>Time Spent Learning</span>
          </div>
          <span className="font-bold">{timeSpent}s</span>
        </div>
      </div>

      {/* Feedback */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Performance Feedback</h3>
        <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
          <p className="text-primary font-medium">{getPerformanceMessage()}</p>
          <p className="text-sm text-text2 mt-2">
            {riskPercentage > 50 
              ? "You took several risky actions - this is great for learning! Now you know what to avoid."
              : "You were cautious - good approach! This mindset protects you in real life."}
          </p>
        </div>
      </div>

      {/* Improvement Tips */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">Tips for Improvement</h3>
        <ul className="space-y-2">
          {improvementTips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                <Shield className="w-3 h-3 text-success" />
              </div>
              <span className="text-sm">{tip}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Actions */}
      <div className="flex gap-4">
        {onRestart && (
          <Button variant="outline" onClick={onRestart} className="flex-1">
            Practice Again
          </Button>
        )}
        {onNext && (
          <Button onClick={onNext} className="flex-1">
            Next Simulation
          </Button>
        )}
      </div>

      {/* Safety Reminder */}
      <div className="mt-6 pt-6 border-t border-border text-center">
        <p className="text-xs text-text2">
          🛡️ Remember: This was a safe simulation. Your data was never collected or stored.
        </p>
      </div>
    </motion.div>
  );
}