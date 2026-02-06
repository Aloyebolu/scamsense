// data/scamLevels.ts
export interface ScamLevel {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  estimatedTime: string;
  redFlags: string[];
  alerts: AlertTrigger[];
  uiElements: UIElements;
}

export interface AlertTrigger {
  action: 'click' | 'focus' | 'type' | 'submit';
  elementId: string;
  alertId: string;
}

export interface UIElements {
  title: string;
  subtitle?: string;
  urgencyText?: string;
  fakeReward?: string;
  countdownTime?: number; // in seconds
  ctaButtons: CTAButton[];
  inputs: InputField[];
}

export interface CTAButton {
  id: string;
  text: string;
  variant: 'primary' | 'danger' | 'success' | 'outline';
  isSuspicious: boolean;
}

export interface InputField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'phone';
  placeholder: string;
  isSensitive: boolean;
}

export const scamLevels: ScamLevel[] = [
  {
    id: 1,
    title: "Fake Giveaway Scam",
    description: "You've won a prize! Just need to claim it quickly...",
    category: "Social Media",
    difficulty: "Beginner",
    estimatedTime: "3-5 minutes",
    redFlags: [
      "urgency",
      "unexpected_reward",
      "payment_required",
      "poor_grammar"
    ],
    alerts: [
      { action: 'click', elementId: 'claim-prize', alertId: 'urgency_tactic' },
      { action: 'focus', elementId: 'credit-card', alertId: 'payment_redflag' },
      { action: 'click', elementId: 'pay-shipping', alertId: 'fake_reward' },
      { action: 'submit', elementId: 'giveaway-form', alertId: 'data_harvesting' }
    ],
    uiElements: {
      title: "🎉 CONGRATULATIONS! 🎉",
      subtitle: "You've been selected as today's winner!",
      urgencyText: "Limited time offer! Claim within 5 minutes",
      fakeReward: "$500 Gift Card + Latest Smartphone",
      countdownTime: 300,
      ctaButtons: [
        { id: 'claim-prize', text: '🚀 CLAIM PRIZE NOW', variant: 'primary', isSuspicious: true },
        { id: 'learn-more', text: 'Learn More', variant: 'outline', isSuspicious: false },
        { id: 'pay-shipping', text: 'Pay $9.99 Shipping', variant: 'success', isSuspicious: true }
      ],
      inputs: [
        { id: 'full-name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name', isSensitive: true },
        { id: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email', isSensitive: true },
        { id: 'credit-card', label: 'Credit Card (for "verification")', type: 'text', placeholder: 'xxxx xxxx xxxx xxxx', isSensitive: true },
        { id: 'address', label: 'Shipping Address', type: 'text', placeholder: 'Enter your address', isSensitive: true }
      ]
    }
  },
  {
    id: 2,
    title: "Phishing Login",
    description: "Your account needs verification immediately!",
    category: "Email",
    difficulty: "Intermediate",
    estimatedTime: "4-6 minutes",
    redFlags: [
      "fake_urgency",
      "authority_impersonation",
      "suspicious_link",
      "generic_greeting"
    ],
    alerts: [
      { action: 'click', elementId: 'verify-now', alertId: 'phishing_attempt' },
      { action: 'focus', elementId: 'email-input', alertId: 'credential_theft' },
      { action: 'type', elementId: 'password-input', alertId: 'password_risk' },
      { action: 'submit', elementId: 'login-form', alertId: 'fake_login' }
    ],
    uiElements: {
      title: "⚠️ URGENT: Account Verification Required",
      subtitle: "Your account will be suspended in 24 hours",
      urgencyText: "Immediate action required to prevent suspension",
      ctaButtons: [
        { id: 'verify-now', text: 'VERIFY ACCOUNT NOW', variant: 'danger', isSuspicious: true },
        { id: 'ignore', text: 'Ignore Warning', variant: 'outline', isSuspicious: false }
      ],
      inputs: [
        { id: 'email-input', label: 'Email Address', type: 'email', placeholder: 'user@example.com', isSensitive: true },
        { id: 'password-input', label: 'Password', type: 'password', placeholder: 'Enter your password', isSensitive: true }
      ]
    }
  },
  {
    id: 3,
    title: "Crypto Investment Scam",
    description: "Guaranteed returns? Too good to be true.",
    category: "Investment",
    difficulty: "Advanced",
    estimatedTime: "5-7 minutes",
    redFlags: [
      "guaranteed_returns",
      "pressure_to_invest",
      "fake_testimonials",
      "complex_terms"
    ],
    alerts: [
      { action: 'click', elementId: 'invest-now', alertId: 'investment_scam' },
      { action: 'focus', elementId: 'crypto-amount', alertId: 'money_at_risk' },
      { action: 'click', elementId: 'view-testimonials', alertId: 'fake_proof' },
      { action: 'submit', elementId: 'investment-form', alertId: 'financial_scam' }
    ],
    uiElements: {
      title: "🚀 300% ROI in 30 Days Guaranteed!",
      subtitle: "Join our exclusive crypto trading program",
      fakeReward: "Limited to first 100 investors",
      ctaButtons: [
        { id: 'invest-now', text: 'INVEST NOW ($500 min)', variant: 'success', isSuspicious: true },
        { id: 'view-testimonials', text: 'See Success Stories', variant: 'outline', isSuspicious: true },
        { id: 'contact-support', text: 'Chat with Advisor', variant: 'primary', isSuspicious: true }
      ],
      inputs: [
        { id: 'full-name', label: 'Investor Name', type: 'text', placeholder: 'Your full name', isSensitive: true },
        { id: 'crypto-amount', label: 'Investment Amount ($)', type: 'text', placeholder: 'Minimum $500', isSensitive: true },
        { id: 'wallet-address', label: 'Crypto Wallet Address', type: 'text', placeholder: '0x...', isSensitive: true }
      ]
    }
  },
  {
    id: 4,
    title: "Tech Support Scam",
    description: "Your computer has a virus! Call this number...",
    category: "Tech",
    difficulty: "Intermediate",
    estimatedTime: "4-6 minutes",
    redFlags: [
      "fake_warnings",
      "urgent_calls",
      "remote_access",
      "payment_demands"
    ],
    alerts: [
      { action: 'click', elementId: 'call-support', alertId: 'tech_support_scam' },
      { action: 'click', elementId: 'download-software', alertId: 'malware_risk' },
      { action: 'focus', elementId: 'payment-info', alertId: 'payment_trap' },
      { action: 'submit', elementId: 'support-form', alertId: 'access_scam' }
    ],
    uiElements: {
      title: "🚨 CRITICAL VIRUS DETECTED!",
      subtitle: "Your system is at immediate risk",
      urgencyText: "Call within 10 minutes to prevent data loss",
      ctaButtons: [
        { id: 'call-support', text: '📞 CALL SUPPORT NOW', variant: 'danger', isSuspicious: true },
        { id: 'download-software', text: 'Download Fix Tool', variant: 'primary', isSuspicious: true },
        { id: 'ignore-warning', text: 'Ignore (Not Recommended)', variant: 'outline', isSuspicious: false }
      ],
      inputs: [
        { id: 'phone-number', label: 'Phone Number', type: 'phone', placeholder: '(555) 123-4567', isSensitive: true },
        { id: 'payment-info', label: 'Payment for Service ($199)', type: 'text', placeholder: 'Credit card information', isSensitive: true }
      ]
    }
  }
];