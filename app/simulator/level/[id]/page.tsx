// app/simulator/level/[id]/page.tsx
'use client';

import { useState, useEffect, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Shield, AlertTriangle } from 'lucide-react';
import { scamLevels } from '@/data/scamLevels';
import { alertTexts } from '@/data/alertTexts';
import AlertModal from '@/components/ui/AlertModal';
import FakeInput from '@/components/ui/FakeInput';
import Button from '@/components/ui/Button';
import EducationPanel from '@/components/simulator/EducationPanel';
import RedFlagHighlight from '@/components/simulator/RedFlagHighlight';
import ScoreCard from '@/components/simulator/ScoreCard';
import WarningBadge from '@/components/ui/WarningBadge';

export default function LevelPage() {
  const params = useParams();
  const router = useRouter();
  const id = parseInt(params.id as string);
  
  const [currentLevel, setCurrentLevel] = useState(scamLevels.find(l => l.id === id));
  const [activeAlert, setActiveAlert] = useState<string | null>(null);
  const [alertModalOpen, setAlertModalOpen] = useState(false);
  const [currentAlertData, setCurrentAlertData] = useState<any>(null);
  const [showScoreCard, setShowScoreCard] = useState(false);
  const [redFlagsSpotted, setRedFlagsSpotted] = useState(0);
  const [riskyActions, setRiskyActions] = useState(0);
  const [timeSpent, setTimeSpent] = useState(0);
  const [countdown, setCountdown] = useState<number | null>(null);
  const [formData, setFormData] = useState<Record<string, string>>({});
  const [highlightedElement, setHighlightedElement] = useState<string | null>(null);
  const [disabledElements, setDisabledElements] = useState<Set<string>>(new Set());

  // Start timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Start countdown if level has one
  useEffect(() => {
    if (currentLevel?.uiElements.countdownTime && !showScoreCard) {
      setCountdown(currentLevel.uiElements.countdownTime);
      const countdownTimer = setInterval(() => {
        setCountdown(prev => {
          if (prev === null || prev <= 0) {
            clearInterval(countdownTimer);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(countdownTimer);
    }
  }, [currentLevel?.uiElements.countdownTime, showScoreCard]);

  const handleAction = useCallback((action: 'click' | 'focus' | 'type' | 'submit', elementId: string) => {
    if (disabledElements.has(elementId)) return;

    const alertTrigger = currentLevel?.alerts.find(
      alert => alert.action === action && alert.elementId === elementId
    );

    if (alertTrigger) {
      const alertData = alertTexts.find(a => a.id === alertTrigger.alertId);
      if (alertData) {
        setCurrentAlertData(alertData);
        setActiveAlert(alertTrigger.alertId);
        setAlertModalOpen(true);
        setHighlightedElement(elementId);
        
        // Count this red flag as spotted
        if (!disabledElements.has(elementId)) {
          setRedFlagsSpotted(prev => prev + 1);
          setRiskyActions(prev => prev + 1);
        }
        
        // Disable this element temporarily
        setDisabledElements(prev => new Set(prev).add(elementId));
      }
    }
  }, [currentLevel, disabledElements]);

  const handleAlertClose = () => {
    setAlertModalOpen(false);
    setTimeout(() => {
      setHighlightedElement(null);
      setActiveAlert(null);
    }, 500);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleAction('submit', 'giveaway-form');
  };

  const handleRestart = () => {
    setShowScoreCard(false);
    setRedFlagsSpotted(0);
    setRiskyActions(0);
    setTimeSpent(0);
    setFormData({});
    setDisabledElements(new Set());
    setCountdown(currentLevel?.uiElements.countdownTime || null);
  };

  const handleNextLevel = () => {
    const nextLevel = scamLevels.find(l => l.id === id + 1);
    if (nextLevel) {
      router.push(`/simulator/level/${nextLevel.id}`);
    } else {
      router.push('/simulator');
    }
  };

  if (!currentLevel) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Level not found</h2>
          <Button onClick={() => router.push('/simulator')}>
            Back to Simulations
          </Button>
        </div>
      </div>
    );
  }

  if (showScoreCard) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-background to-background2 py-8">
        <div className="container mx-auto px-4">
          <ScoreCard
            levelTitle={currentLevel.title}
            redFlagsSpotted={redFlagsSpotted}
            totalRedFlags={currentLevel.alerts.length}
            riskyActions={riskyActions}
            timeSpent={timeSpent}
            onRestart={handleRestart}
            onNext={scamLevels.some(l => l.id === id + 1) ? handleNextLevel : undefined}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background2">
      <AlertModal
        isOpen={alertModalOpen}
        onClose={handleAlertClose}
        alert={currentAlertData}
      />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <Button
                variant="outline"
                onClick={() => router.push('/simulator')}
                className="mb-4"
              >
                <ArrowLeft size={20} />
                Back to Simulations
              </Button>
              <h1 className="text-3xl md:text-4xl font-bold mb-2">{currentLevel.title}</h1>
              <p className="text-text2">{currentLevel.description}</p>
            </div>
            <div className="flex flex-wrap gap-2">
              <WarningBadge text={currentLevel.category} variant="info" />
              <WarningBadge text={currentLevel.difficulty} variant="warning" />
            </div>
          </div>

          {/* Urgency Banner */}
          {currentLevel.uiElements.urgencyText && (
            <div className="bg-error/10 border border-error/20 rounded-xl p-4 mb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <AlertTriangle className="w-5 h-5 text-error" />
                  <span className="font-semibold text-error">{currentLevel.uiElements.urgencyText}</span>
                </div>
                {countdown !== null && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-error" />
                    <span className="font-mono font-bold text-error">
                      {Math.floor(countdown / 60)}:{(countdown % 60).toString().padStart(2, '0')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Simulation Area */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-surface border border-border rounded-2xl p-6 shadow-2xl"
            >
              {/* Fake Reward Banner */}
              {currentLevel.uiElements.fakeReward && (
                <div className="bg-gradient-to-r from-primary to-accent rounded-xl p-6 mb-8 text-center text-on-brand">
                  <h2 className="text-2xl font-bold mb-2">🎉 {currentLevel.uiElements.fakeReward} 🎉</h2>
                  <p className="opacity-90">Claim your prize before time runs out!</p>
                </div>
              )}

              {/* Scam Content */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-2">{currentLevel.uiElements.title}</h2>
                  {currentLevel.uiElements.subtitle && (
                    <p className="text-text2 mb-6">{currentLevel.uiElements.subtitle}</p>
                  )}
                </div>

                {/* Form */}
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {currentLevel.uiElements.inputs.map((input) => (
                    <div key={input.id} className="relative">
                      <FakeInput
                        id={input.id}
                        label={input.label}
                        type={input.type}
                        placeholder={input.placeholder}
                        isSensitive={input.isSensitive}
                        onFocus={() => handleAction('focus', input.id)}
                        onChange={() => handleAction('type', input.id)}
                        value={formData[input.id] || ''}
                        disabled={disabledElements.has(input.id)}
                      />
                      {highlightedElement === input.id && (
                        <RedFlagHighlight
                          isActive={true}
                          redFlagType={currentAlertData?.redFlag || 'suspicious_input'}
                        />
                      )}
                    </div>
                  ))}

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {currentLevel.uiElements.ctaButtons.map((button) => (
                      <div key={button.id} className="relative">
                        <Button
                          type={button.id === 'giveaway-form' ? 'submit' : 'button'}
                          variant={button.variant}
                          onClick={() => handleAction('click', button.id)}
                          disabled={disabledElements.has(button.id)}
                          className={button.isSuspicious ? 'animate-pulse' : ''}
                        >
                          {button.text}
                        </Button>
                        {highlightedElement === button.id && (
                          <RedFlagHighlight
                            isActive={true}
                            redFlagType={currentAlertData?.redFlag || 'suspicious_button'}
                          />
                        )}
                        {button.isSuspicious && !disabledElements.has(button.id) && (
                          <div className="absolute -top-2 -right-2">
                            <span className="text-xs px-2 py-1 bg-error text-on-brand rounded-full">
                              ⚠️
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </form>

                {/* Safety Notice */}
                <div className="pt-6 border-t border-border">
                  <div className="flex items-start gap-3 p-4 bg-background2 rounded-lg">
                    <Shield className="w-5 h-5 text-success flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium mb-1">Safety Reminder</p>
                      <p className="text-xs text-text2">
                        This is a simulation. No real data is being collected. Every suspicious action triggers an educational alert.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Progress Summary */}
            <div className="mt-6 p-6 bg-surface border border-border rounded-2xl">
              <h3 className="text-lg font-semibold mb-4">Your Progress</h3>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">{redFlagsSpotted}</div>
                  <div className="text-sm text-text2">Red Flags Spotted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-warning">{riskyActions}</div>
                  <div className="text-sm text-text2">Risky Actions</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">{timeSpent}s</div>
                  <div className="text-sm text-text2">Learning Time</div>
                </div>
              </div>
              <Button
                onClick={() => setShowScoreCard(true)}
                variant="outline"
                className="w-full mt-4"
              >
                Complete Simulation
              </Button>
            </div>
          </div>

          {/* Education Panel */}
          <div className="lg:col-span-1">
            <EducationPanel currentRedFlag={activeAlert || undefined} />
          </div>
        </div>
      </div>
    </div>
  );
}