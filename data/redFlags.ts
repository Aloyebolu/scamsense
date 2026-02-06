// data/redFlags.ts
export interface RedFlag {
  id: string;
  title: string;
  description: string;
  icon: string;
  examples: string[];
}

export const redFlags: RedFlag[] = [
  {
    id: 'urgency',
    title: 'Artificial Urgency',
    description: 'Creating false deadlines to pressure quick decisions',
    icon: '⏰',
    examples: [
      'Limited time offer!',
      'Act within 24 hours!',
      'Last chance to claim!',
      'Immediate action required'
    ]
  },
  {
    id: 'unexpected_reward',
    title: 'Unexpected Reward',
    description: 'Prizes or rewards for something you didn\'t enter',
    icon: '🎁',
    examples: [
      'You\'ve been selected!',
      'Congratulations, you won!',
      'Exclusive offer just for you',
      'Free gift for being a loyal customer'
    ]
  },
  {
    id: 'payment_required',
    title: 'Payment for "Free" Items',
    description: 'Asking for money to receive something supposedly free',
    icon: '💳',
    examples: [
      'Small shipping fee',
      'Processing charge',
      'Tax payment required',
      'Verification fee'
    ]
  },
  {
    id: 'authority_impersonation',
    title: 'Authority Impersonation',
    description: 'Pretending to be from a legitimate company or government',
    icon: '👔',
    examples: [
      'Microsoft tech support',
      'IRS tax department',
      'Bank security team',
      'Government agency'
    ]
  },
  {
    id: 'guaranteed_returns',
    title: 'Guaranteed High Returns',
    description: 'Promising unrealistic investment profits',
    icon: '📈',
    examples: [
      '300% return guaranteed',
      'No risk, high reward',
      'Proven trading system',
      'Get rich quick scheme'
    ]
  },
  {
    id: 'suspicious_link',
    title: 'Suspicious Links',
    description: 'URLs that don\'t match the claimed organization',
    icon: '🔗',
    examples: [
      'bit.ly/random-link',
      'misspelled company names',
      'HTTP instead of HTTPS',
      'Unfamiliar domains'
    ]
  },
  {
    id: 'poor_grammar',
    title: 'Poor Grammar & Spelling',
    description: 'Obvious mistakes in professional communications',
    icon: '✏️',
    examples: [
      'Multiple spelling errors',
      'Unprofessional formatting',
      'Odd capitalization',
      'Inconsistent branding'
    ]
  },
  {
    id: 'pressure_to_invest',
    title: 'Investment Pressure',
    description: 'Pushing for immediate financial decisions',
    icon: '💸',
    examples: [
      'Limited spots available',
      'Price increases tomorrow',
      'Once-in-a-lifetime opportunity',
      'Don\'t miss out'
    ]
  }
];