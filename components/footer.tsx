import { Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto max-w-5xl px-6">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Messentra</span>
            <span className="text-border">•</span>
            <span>Open source under GPL-3.0</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/kamil-czarnecki/Messentra"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground transition-colors hover:text-foreground"
              aria-label="GitHub repository"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <p className="mt-6 text-center text-xs text-muted-foreground">
          Created by{" "}
          <a
            href="https://github.com/kamil-czarnecki"
            target="_blank"
            rel="noopener noreferrer"
            className="underline-offset-4 hover:underline"
          >
            kamil-czarnecki
          </a>
        </p>
      </div>
    </footer>
  );
}
