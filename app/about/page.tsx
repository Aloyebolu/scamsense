// app/about/page.tsx
import Link from 'next/link';
import { Shield, Users, BookOpen, Target, Heart, Lock } from 'lucide-react';
import Button from '@/components/ui/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background2">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-4xl md:text-5xl font-bold">
              About <span className="text-primary">ScamGuard</span>
            </h1>
          </div>
          <p className="text-xl text-text2">
            Empowering people to recognize and avoid online scams through safe, interactive education.
          </p>
        </div>

        {/* Mission */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-6 h-6 text-primary" />
              Our Mission
            </h2>
            <p className="text-lg mb-6">
              To create a world where no one falls victim to online scams by providing accessible, 
              effective education in a completely safe environment.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-background2 rounded-lg">
                <h3 className="font-semibold mb-2">Why We Exist</h3>
                <p className="text-text2">
                  Scams cost people billions each year. Traditional warnings aren't effective enough. 
                  People need to experience scam tactics safely to recognize them in real life.
                </p>
              </div>
              <div className="p-4 bg-background2 rounded-lg">
                <h3 className="font-semibold mb-2">Our Approach</h3>
                <p className="text-text2">
                  Learn by doing. Our simulations let you interact with realistic scam scenarios 
                  while providing immediate, educational feedback.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="max-w-6xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">What Makes ScamGuard Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-surface p-8 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Lock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">100% Safe</h3>
              <p className="text-text2 mb-4">
                No real data collection. No backend servers. Everything happens locally in your browser.
              </p>
              <ul className="space-y-2 text-sm text-text2">
                <li>• No data storage</li>
                <li>• No tracking</li>
                <li>• No real submissions</li>
                <li>• No impersonation</li>
              </ul>
            </div>

            <div className="bg-surface p-8 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Interactive Learning</h3>
              <p className="text-text2 mb-4">
                Experience scam tactics firsthand with immediate educational feedback when you encounter red flags.
              </p>
              <ul className="space-y-2 text-sm text-text2">
                <li>• Realistic simulations</li>
                <li>• Instant feedback</li>
                <li>• Progressive difficulty</li>
                <li>• Repeatable practice</li>
              </ul>
            </div>

            <div className="bg-surface p-8 rounded-2xl border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Accessible to All</h3>
              <p className="text-text2 mb-4">
                Designed with clear language, large text, and simple interfaces for everyone, especially elders.
              </p>
              <ul className="space-y-2 text-sm text-text2">
                <li>• Elder-friendly design</li>
                <li>• Simple language</li>
                <li>• Clear explanations</li>
                <li>• Mobile optimized</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Safety & Ethics */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-6 h-6 text-success" />
              Safety & Ethics Commitment
            </h2>
            <div className="space-y-6">
              <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                <h3 className="font-semibold mb-2 text-success">No Real Data Collection</h3>
                <p>
                  We never collect, store, or transmit any personal information. 
                  Everything you type in simulations is immediately discarded.
                </p>
              </div>
              <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                <h3 className="font-semibold mb-2 text-success">No Impersonation</h3>
                <p>
                  We don't impersonate real companies or organizations. 
                  All scam scenarios are fictional and clearly marked as educational.
                </p>
              </div>
              <div className="p-4 bg-success/5 rounded-lg border border-success/20">
                <h3 className="font-semibold mb-2 text-success">No Shaming</h3>
                <p>
                  Our educational feedback is positive and constructive. 
                  We focus on learning, not blaming.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* For Families */}
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Perfect for Families</h2>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-3 mb-4">
                  <Heart className="w-6 h-6 text-error" />
                  <h3 className="text-xl font-bold">Protect Your Loved Ones</h3>
                </div>
                <p className="text-text2 mb-6">
                  Elders are particularly vulnerable to online scams. ScamGuard provides a safe way for 
                  them to learn without fear or risk.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Build confidence in recognizing scams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Learn together as a family</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Create open conversations about online safety</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/2">
                <div className="p-6 bg-primary/5 rounded-xl border border-primary/20">
                  <h4 className="font-semibold mb-4 text-center">How to Use ScamGuard with Family</h4>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">1</span>
                      </div>
                      <p className="text-sm">Try simulations together and discuss each red flag</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">2</span>
                      </div>
                      <p className="text-sm">Share stories of suspicious messages you've received</p>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="font-bold">3</span>
                      </div>
                      <p className="text-sm">Establish a "check with family first" rule for suspicious offers</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-surface border border-border rounded-2xl p-8">
            <h2 className="text-2xl font-bold mb-6">Ready to Learn Safely?</h2>
            <p className="text-text2 mb-8">
              Join thousands who have improved their scam-spotting skills without any risk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/simulator">
                <Button size="lg" className="px-8">
                  Start Learning Now
                </Button>
              </Link>
              <Link href="/">
                <Button variant="outline" size="lg" className="px-8">
                  Back to Home
                </Button>
              </Link>
            </div>
            <p className="text-xs text-text2 mt-6">
              Remember: ScamGuard is 100% free, safe, and educational. No sign-up required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}