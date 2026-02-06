// app/simulator/page.tsx
import Link from 'next/link';
import { ArrowLeft, Shield, Target, Clock } from 'lucide-react';
import ScamCard from '@/components/simulator/ScamCard';
import ProgressBar from '@/components/ui/ProgressBar';
import { scamLevels } from '@/data/scamLevels';

export default function SimulatorPage() {
  const completedLevels = 0; // This would come from localStorage in a real implementation
  const totalLevels = scamLevels.length;
  const progressPercentage = Math.round((completedLevels / totalLevels) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background2">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-text2 hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Scam Simulation Lab</h1>
              <p className="text-text2">
                Practice spotting scams in a safe, controlled environment. No real risks.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 bg-surface px-4 py-2 rounded-full border border-border">
              <Shield className="w-4 h-4 text-success" />
              <span className="text-sm font-medium">100% Safe Learning</span>
            </div>
          </div>

          {/* Progress */}
          <div className="max-w-2xl mb-8">
            <ProgressBar 
              current={completedLevels} 
              total={totalLevels} 
              label="Your Learning Progress" 
            />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="bg-surface p-6 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Target className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-2xl font-bold">{scamLevels.length}</div>
                <div className="text-sm text-text2">Scam Scenarios</div>
              </div>
            </div>
            <p className="text-xs text-text2">Interactive simulations to practice with</p>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-warning/10 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-warning" />
              </div>
              <div>
                <div className="text-2xl font-bold">23+</div>
                <div className="text-sm text-text2">Red Flags to Learn</div>
              </div>
            </div>
            <p className="text-xs text-text2">Common tactics used by scammers</p>
          </div>

          <div className="bg-surface p-6 rounded-2xl border border-border">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-success/10 rounded-lg flex items-center justify-center">
                <Clock className="w-5 h-5 text-success" />
              </div>
              <div>
                <div className="text-2xl font-bold">15-30</div>
                <div className="text-sm text-text2">Minutes Total</div>
              </div>
            </div>
            <p className="text-xs text-text2">Estimated learning time</p>
          </div>
        </div>

        {/* Learning Tips */}
        <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6 mb-12">
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
            <Shield className="w-5 h-5 text-primary" />
            How to Use This Simulator
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            <p className="text-sm">
              <strong>1. Interact freely:</strong> Click buttons, type in fields - everything is safe and fake.
            </p>
            <p className="text-sm">
              <strong>2. Learn from alerts:</strong> Educational popups explain scam tactics when you encounter them.
            </p>
            <p className="text-sm">
              <strong>3. No data collected:</strong> Nothing you type is stored or transmitted.
            </p>
            <p className="text-sm">
              <strong>4. Practice makes perfect:</strong> Repeat simulations to improve your scam-spotting skills.
            </p>
          </div>
        </div>

        {/* Scam Cards Grid */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Choose a Simulation</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {scamLevels.map((level, index) => (
              <ScamCard key={level.id} level={level} index={index} />
            ))}
          </div>
        </div>

        {/* Safety Disclaimer */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-surface border border-border rounded-2xl p-6">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Shield className="w-6 h-6 text-success" />
              <h3 className="text-lg font-bold">Important Safety Note</h3>
            </div>
            <p className="text-text2">
              This simulator uses realistic-looking scam interfaces for educational purposes only. 
              No real companies are impersonated, no data is collected, and all interactions are completely fake. 
              The goal is to train your scam-spotting skills in a risk-free environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}