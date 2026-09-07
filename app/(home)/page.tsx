import Link from 'next/link';
import { BookOpen, Layers, Zap, ArrowRight, ShieldCheck, Database, Cpu } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center flex-1 max-w-5xl mx-auto px-6 py-16 text-center">
      {/* Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-fd-secondary text-fd-secondary-foreground border border-fd-border mb-6">
        <Zap className="w-3.5 h-3.5 text-fd-primary" />
        <span>The Modern System Design Knowledge Base</span>
      </div>

      {/* Main Headline */}
      <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-fd-foreground max-w-3xl mb-6">
        Master Large-Scale Systems & Architecture
      </h1>

      {/* Subtitle */}
      <p className="text-lg sm:text-xl text-fd-muted-foreground max-w-2xl mb-10 leading-relaxed">
        A unified, battle-tested engineering resource merging <strong>ByteByteGo 101</strong>'s visual infographics with <strong>liquidSLR</strong>'s comprehensive 28-chapter masterclass handbook.
      </p>

      {/* Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
        <Link
          href="/docs"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-fd-primary text-fd-primary-foreground hover:opacity-90 transition-opacity shadow-sm"
        >
          <BookOpen className="w-4 h-4" />
          Read The Codex
          <ArrowRight className="w-4 h-4" />
        </Link>
        <Link
          href="/docs/chapters/01-scaling"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold bg-fd-secondary text-fd-secondary-foreground border border-fd-border hover:bg-fd-accent transition-colors"
        >
          Chapter 1: Scaling to Millions
        </Link>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 w-full max-w-3xl mb-16">
        <div className="p-4 rounded-xl border border-fd-border bg-fd-card">
          <div className="text-3xl font-extrabold text-fd-foreground mb-1">428</div>
          <div className="text-xs text-fd-muted-foreground uppercase tracking-wider font-medium">Total Topics</div>
        </div>
        <div className="p-4 rounded-xl border border-fd-border bg-fd-card">
          <div className="text-3xl font-extrabold text-fd-foreground mb-1">28</div>
          <div className="text-xs text-fd-muted-foreground uppercase tracking-wider font-medium">Masterclasses</div>
        </div>
        <div className="p-4 rounded-xl border border-fd-border bg-fd-card">
          <div className="text-3xl font-extrabold text-fd-foreground mb-1">400</div>
          <div className="text-xs text-fd-muted-foreground uppercase tracking-wider font-medium">Visual Guides</div>
        </div>
        <div className="p-4 rounded-xl border border-fd-border bg-fd-card">
          <div className="text-3xl font-extrabold text-fd-foreground mb-1">15</div>
          <div className="text-xs text-fd-muted-foreground uppercase tracking-wider font-medium">Domains</div>
        </div>
      </div>

      {/* Features Overview */}
      <div className="grid sm:grid-cols-3 gap-6 text-left w-full">
        <div className="p-6 rounded-xl border border-fd-border bg-fd-card">
          <div className="w-10 h-10 rounded-lg bg-fd-accent flex items-center justify-center mb-4 text-fd-foreground">
            <BookOpen className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold mb-2 text-fd-foreground">28 Masterclass Chapters</h3>
          <p className="text-sm text-fd-muted-foreground leading-normal">
            Step-by-step textbook architectures: Scaling, Rate Limiters, Consistent Hashing, Distributed Queues, S3, YouTube, and Stock Exchanges.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-fd-border bg-fd-card">
          <div className="w-10 h-10 rounded-lg bg-fd-accent flex items-center justify-center mb-4 text-fd-foreground">
            <Layers className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold mb-2 text-fd-foreground">400 Visual Infographics</h3>
          <p className="text-sm text-fd-muted-foreground leading-normal">
            ByteByteGo's bite-sized architectural breakdowns across storage, caching, security, protocols, and real-world tech case studies.
          </p>
        </div>

        <div className="p-6 rounded-xl border border-fd-border bg-fd-card">
          <div className="w-10 h-10 rounded-lg bg-fd-accent flex items-center justify-center mb-4 text-fd-foreground">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold mb-2 text-fd-foreground">Full Text & LLM Search</h3>
          <p className="text-sm text-fd-muted-foreground leading-normal">
            Built with instant client search, dark/light modes, table of contents, and built-in llms.txt endpoints.
          </p>
        </div>
      </div>
    </div>
  );
}
