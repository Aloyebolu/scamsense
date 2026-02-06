// components/simulator/EducationPanel.tsx
import { useState } from 'react';
import { BookOpen, Lightbulb, Shield, Target } from 'lucide-react';
import { redFlags } from '@/data/redFlags';

interface EducationPanelProps {
  currentRedFlag?: string;
}

export default function EducationPanel({ currentRedFlag }: EducationPanelProps) {
  const [activeTab, setActiveTab] = useState<'psychology' | 'redflags' | 'prevention'>('psychology');

  const psychologyTips = [
    {
      title: 'Urgency Creates Panic',
      description: 'Scammers use deadlines to override your logical thinking. When panicked, you\'re more likely to make mistakes.',
      icon: '⏰'
    },
    {
      title: 'Greed Overrides Caution',
      description: 'The promise of easy money or rewards can make people ignore obvious warning signs.',
      icon: '💰'
    },
    {
      title: 'Authority Triggers Obedience',
      description: 'People tend to comply with figures of authority, even fake ones claiming to be from official organizations.',
      icon: '👔'
    },
    {
      title: 'Fear Disables Critical Thinking',
      description: 'Threats of account suspension or legal action can make people act without verification.',
      icon: '😨'
    }
  ];

  const preventionTips = [
    'Always verify unexpected requests through official channels',
    'Never click links in unsolicited emails or messages',
    'Take your time - legitimate offers don\'t disappear',
    'Check for poor grammar and spelling errors',
    'Look for HTTPS and verify website URLs',
    'Never share passwords or sensitive information',
    'Enable two-factor authentication everywhere',
    'Trust your instincts - if it feels wrong, it probably is'
  ];

  return (
    <div className="bg-surface border border-border rounded-2xl p-6 h-full">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-6 h-6 text-primary" />
        <h3 className="text-xl font-bold">Scam Education Center</h3>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border mb-6">
        <button
          onClick={() => setActiveTab('psychology')}
          className={`flex-1 py-2 text-center font-medium border-b-2 transition-colors ${activeTab === 'psychology' ? 'border-primary text-primary' : 'border-transparent text-text2 hover:text-foreground'}`}
        >
          Psychology
        </button>
        <button
          onClick={() => setActiveTab('redflags')}
          className={`flex-1 py-2 text-center font-medium border-b-2 transition-colors ${activeTab === 'redflags' ? 'border-primary text-primary' : 'border-transparent text-text2 hover:text-foreground'}`}
        >
          Red Flags
        </button>
        <button
          onClick={() => setActiveTab('prevention')}
          className={`flex-1 py-2 text-center font-medium border-b-2 transition-colors ${activeTab === 'prevention' ? 'border-primary text-primary' : 'border-transparent text-text2 hover:text-foreground'}`}
        >
          Prevention
        </button>
      </div>

      {/* Content */}
      <div className="space-y-6">
        {activeTab === 'psychology' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Lightbulb className="w-5 h-5 text-warning" />
              <h4 className="font-semibold">How Scammers Manipulate Thinking</h4>
            </div>
            {psychologyTips.map((tip, index) => (
              <div key={index} className="p-4 bg-background2 rounded-lg border border-border">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{tip.icon}</span>
                  <div>
                    <h5 className="font-semibold mb-1">{tip.title}</h5>
                    <p className="text-sm text-text2">{tip.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'redflags' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Target className="w-5 h-5 text-error" />
              <h4 className="font-semibold">Common Red Flags to Watch For</h4>
            </div>
            {redFlags.map((flag) => (
              <div 
                key={flag.id} 
                className={`p-4 rounded-lg border ${currentRedFlag === flag.id ? 'border-error bg-error/5' : 'border-border bg-background2'}`}
              >
                <div className="flex items-start gap-3">
                  <span className="text-xl">{flag.icon}</span>
                  <div>
                    <h5 className="font-semibold mb-1">{flag.title}</h5>
                    <p className="text-sm text-text2 mb-2">{flag.description}</p>
                    <div className="text-xs text-text2 space-y-1">
                      <span className="font-medium">Examples:</span>
                      <div className="flex flex-wrap gap-1">
                        {flag.examples.map((example, i) => (
                          <span key={i} className="px-2 py-1 bg-surface rounded border border-border">
                            {example}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'prevention' && (
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="w-5 h-5 text-success" />
              <h4 className="font-semibold">Protection Strategies</h4>
            </div>
            <div className="space-y-3">
              {preventionTips.map((tip, index) => (
                <div key={index} className="flex items-start gap-3 p-3 bg-background2 rounded-lg border border-border">
                  <div className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <Shield className="w-3 h-3 text-success" />
                  </div>
                  <p className="text-sm">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="mt-6 pt-6 border-t border-border">
        <p className="text-xs text-text2 text-center">
          This knowledge protects you in real life. Practice makes perfect!
        </p>
      </div>
    </div>
  );
}