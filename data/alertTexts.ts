// data/alertTexts.ts
export interface AlertText {
  id: string;
  title: string;
  explanation: string;
  redFlag: string;
  safeAdvice: string;
  severity: 'low' | 'medium' | 'high';
}

export const alertTexts: AlertText[] = [
  {
    id: 'urgency_tactic',
    title: '🚨 Urgency Alert!',
    explanation: 'Scammers create fake deadlines to pressure you into making quick decisions without thinking. Real companies don\'t pressure you with immediate deadlines for claiming prizes.',
    redFlag: 'Artificial time pressure',
    safeAdvice: 'Always take your time. Legitimate offers don\'t disappear in minutes. If it\'s urgent, it\'s usually a scam.',
    severity: 'high'
  },
  {
    id: 'payment_redflag',
    title: '💰 Payment Request',
    explanation: 'Legitimate giveaways NEVER ask for payment to claim prizes. This "shipping fee" or "processing charge" is how scammers make money.',
    redFlag: 'Payment required for "free" prize',
    safeAdvice: 'Never pay to receive a prize. Real giveaways are completely free.',
    severity: 'high'
  },
  {
    id: 'fake_reward',
    title: '🎁 Too Good To Be True',
    explanation: 'Unexpected rewards with incredibly high value are a classic scam tactic. If you didn\'t enter a contest, you can\'t win it.',
    redFlag: 'Unsolicited large reward',
    safeAdvice: 'Be skeptical of unexpected prizes. Verify through official channels before taking any action.',
    severity: 'medium'
  },
  {
    id: 'data_harvesting',
    title: '📊 Data Harvesting',
    explanation: 'This form is designed to collect your personal information, which can be used for identity theft or sold to other scammers.',
    redFlag: 'Excessive personal information requested',
    safeAdvice: 'Never share personal details for unexpected offers. Legitimate companies already have your information if you\'re truly a winner.',
    severity: 'high'
  },
  {
    id: 'phishing_attempt',
    title: '🎣 Phishing Attempt Detected',
    explanation: 'This is a fake login page designed to steal your credentials. Notice the urgency and threat of account suspension.',
    redFlag: 'Urgent account verification request',
    safeAdvice: 'Always check the URL. Never click login links from emails. Go directly to the official website.',
    severity: 'high'
  },
  {
    id: 'credential_theft',
    title: '🔐 Credential Theft',
    explanation: 'Entering your email here gives scammers half of what they need to access your accounts. They\'ll try this email with common passwords.',
    redFlag: 'Login request from unexpected source',
    safeAdvice: 'Use unique passwords for each account and enable two-factor authentication.',
    severity: 'high'
  },
  {
    id: 'password_risk',
    title: '⚠️ Password Exposure',
    explanation: 'Never enter your password on a page you reached from an email link. This is a direct attempt to steal your login credentials.',
    redFlag: 'Password field on suspicious page',
    safeAdvice: 'If concerned about your account, visit the official website directly by typing the URL yourself.',
    severity: 'high'
  },
  {
    id: 'investment_scam',
    title: '📈 Investment Scam Alert',
    explanation: 'Guaranteed high returns are mathematically impossible in legitimate investing. This is a "Ponzi scheme" where early investors are paid with money from new investors.',
    redFlag: 'Guaranteed high returns',
    safeAdvice: 'Always research investments thoroughly. If returns sound too good to be true, they probably are.',
    severity: 'high'
  },
  {
    id: 'money_at_risk',
    title: '💸 Money at Risk',
    explanation: 'Once you send cryptocurrency, it\'s irreversible. Scammers know this and use crypto to make recovery impossible.',
    redFlag: 'Cryptocurrency investment pressure',
    safeAdvice: 'Never invest more than you can afford to lose. Verify investment platforms through official regulators.',
    severity: 'high'
  },
  {
    id: 'tech_support_scam',
    title: '💻 Fake Tech Support',
    explanation: 'Legitimate companies never call you about viruses you don\'t know about. This is a scare tactic to get money or remote access to your computer.',
    redFlag: 'Unsolicited tech support warning',
    safeAdvice: 'Never give remote access to your computer. Hang up and call the company directly using their official number.',
    severity: 'high'
  }
];