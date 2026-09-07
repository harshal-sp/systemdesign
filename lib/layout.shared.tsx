import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import { appName, gitConfig } from './shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <span className="font-bold tracking-tight text-fd-foreground">{appName}</span>
          <span className="text-[11px] text-fd-muted-foreground font-medium border border-fd-border rounded px-1.5 py-0.5 hidden sm:inline-block">
            harshal.pro
          </span>
        </div>
      ),
    },
    links: [
      {
        text: 'harshal.pro',
        url: 'https://harshal.pro',
        external: true,
      },
    ],
    githubUrl: `https://github.com/${gitConfig.user}/${gitConfig.repo}`,
  };
}
