import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#2F90F2]/10 via-background to-background" />
      
      <div className="relative mx-auto max-w-5xl px-6 py-24 sm:py-32">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="mb-6 flex justify-center">
            <img
              src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/logo.svg`}
              alt="Messentra Logo"
              className="h-auto w-[220px] sm:w-[280px] lg:w-[320px]"
            />
          </div>
          
          {/* Tagline */}
          <p className="text-lg text-muted-foreground sm:text-xl">
            Azure Service Bus Desktop Explorer
          </p>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg text-pretty">
            A cross-platform desktop GUI for Azure Service Bus — browse resources, 
            inspect and send messages, manage dead-letter queues. Built with Blazor 
            and Electron.NET for Windows, macOS, and Linux.
          </p>

          {/* GitHub Badges */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a href="https://github.com/kamil-czarnecki/Messentra" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/github/stars/kamil-czarnecki/Messentra?style=flat-square&logo=github&color=f97516"
                alt="GitHub Stars"
                className="h-5"
              />
            </a>
            <a href="https://github.com/kamil-czarnecki/Messentra/releases/latest" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/github/v/release/kamil-czarnecki/Messentra?style=flat-square&logo=github&color=f97516"
                alt="Latest Release"
                className="h-5"
              />
            </a>
            <a href="https://github.com/kamil-czarnecki/Messentra/blob/main/LICENSE" target="_blank" rel="noopener noreferrer">
              <img
                src="https://img.shields.io/github/license/kamil-czarnecki/Messentra?style=flat-square&color=f97516"
                alt="License"
                className="h-5"
              />
            </a>
            <img
              src="https://img.shields.io/badge/platform-Windows%20%7C%20macOS%20%7C%20Linux-f97516?style=flat-square"
              alt="Platforms"
              className="h-5"
            />
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-[#2F90F2] hover:bg-[#2580d9] text-white border-0">
              <a href="#download">
                <Download className="mr-2 h-5 w-5" />
                Download
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="hover:bg-border hover:text-foreground">
              <a href="https://github.com/kamil-czarnecki/Messentra" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
