// components/ui/AlertModal.tsx
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Shield, Info } from 'lucide-react';
import { AlertText } from '@/data/alertTexts';
import Button from './Button';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  alert: AlertText | null;
}

export default function AlertModal({ isOpen, onClose, alert }: AlertModalProps) {
  if (!alert) return null;

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'bg-error/20 border-error/30 text-error';
      case 'medium': return 'bg-warning/20 border-warning/30 text-warning';
      case 'low': return 'bg-info/20 border-info/30 text-info';
      default: return 'bg-primary/20 border-primary/30 text-primary';
    }
  };

  const getIcon = (severity: string) => {
    switch (severity) {
      case 'high': return <AlertTriangle className="w-6 h-6" />;
      case 'medium': return <AlertTriangle className="w-6 h-6" />;
      case 'low': return <Info className="w-6 h-6" />;
      default: return <Shield className="w-6 h-6" />;
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-surface border border-border rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className={`p-6 border-b border-border ${getSeverityColor(alert.severity)}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {getIcon(alert.severity)}
                  <h2 className="text-2xl font-bold">{alert.title}</h2>
                </div>
                <div className={`px-3 py-1 rounded-full text-sm font-semibold ${getSeverityColor(alert.severity)}`}>
                  {alert.severity.toUpperCase()} RISK
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold mb-2">What just happened?</h3>
                  <p className="text-foreground/90">{alert.explanation}</p>
                </div>

                <div className="bg-background2 p-4 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <span className="text-error">🚩 Red Flag:</span>
                    {alert.redFlag}
                  </h4>
                  <p className="text-sm text-text2">
                    This is a common tactic used by scammers to trick people.
                  </p>
                </div>

                <div className="bg-success/10 p-4 rounded-lg border border-success/20">
                  <h4 className="font-semibold mb-2 flex items-center gap-2 text-success">
                    <Shield className="w-4 h-4" />
                    Safe Alternative:
                  </h4>
                  <p className="text-success/90">{alert.safeAdvice}</p>
                </div>
              </div>

              {/* Educational Tip */}
              <div className="pt-4 border-t border-border">
                <p className="text-sm text-text2 italic">
                  <strong>Remember:</strong> You just practiced spotting this scam in a safe environment. 
                  Now you'll recognize it in real life!
                </p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-border bg-background2/50">
              <Button
                onClick={onClose}
                className="w-full py-3 text-lg"
              >
                I Understand - Continue Simulation
              </Button>
              <p className="text-xs text-text2 text-center mt-3">
                This modal blocks interaction until dismissed for educational purposes
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}