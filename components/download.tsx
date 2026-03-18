"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download as DownloadIcon } from "lucide-react";
import useSWR from "swr";

const fetcher = (url: string) =>
  fetch(url, { headers: { Accept: "application/vnd.github.v3+json" } })
    .then((res) => res.json())
    .then((data) => ({
      version: data.tag_name?.replace(/^v/, "") || "0.1.3",
      assets: data.assets || [],
    }));

function getDownloads(version: string) {
  const BASE_URL = `https://github.com/kamil-czarnecki/Messentra/releases/download/v${version}`;
  
  return [
    {
      platform: "Windows",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801" />
        </svg>
      ),
      files: [
        { name: "Setup (Installer)", filename: `Messentra-Setup-${version}.exe` },
        { name: "Portable", filename: `Messentra-${version}.exe` },
      ],
    },
    {
      platform: "macOS",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
        </svg>
      ),
      files: [
        { name: "DMG (Apple Silicon)", filename: `Messentra-${version}-arm64.dmg` },
        { name: "ZIP (Apple Silicon)", filename: `Messentra-${version}-arm64-mac.zip` },
      ],
    },
    {
      platform: "Linux",
      icon: (
        <svg className="h-8 w-8" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c0 .101.012.202.025.303.014.098.058.19.089.28a.82.82 0 00-.016.022c-.14.006-.3-.048-.427-.135a1.03 1.03 0 01-.322-.398 1.696 1.696 0 01-.146-.706v-.105l.003.06c.006-.265.058-.466.163-.724.107-.2.247-.398.437-.533.19-.132.376-.198.583-.198h.012z" />
        </svg>
      ),
      files: [
        { name: "tar.xz (x64)", filename: `messentra-x64-${version}.tar.xz` },
      ],
    },
  ];
}

export function DownloadSection() {
  const { data, isLoading } = useSWR<{ version: string; assets: string[] }>(
    "https://api.github.com/repos/kamil-czarnecki/Messentra/releases/latest",
    fetcher,
    {
    fallbackData: { version: "0.1.3", assets: [] },
    revalidateOnFocus: false,
  });
  
  const version = data?.version || "0.1.3";
  const downloads = getDownloads(version);
  const BASE_URL = `https://github.com/kamil-czarnecki/Messentra/releases/download/v${version}`;

  return (
    <section id="download" className="border-t border-border py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Download Messentra
          </h2>
          <p className="mt-4 text-muted-foreground">
            {isLoading ? (
              "Loading latest version..."
            ) : (
              <>Version {version} — Available for Windows, macOS, and Linux</>
            )}
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {downloads.map((platform) => (
            <Card key={platform.platform} className="flex flex-col">
              <CardHeader className="text-center">
                <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-muted text-foreground">
                  {platform.icon}
                </div>
                <CardTitle>{platform.platform}</CardTitle>
                <CardDescription>
                  {platform.files.length} download{platform.files.length > 1 ? "s" : ""} available
                </CardDescription>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col gap-3">
                {platform.files.map((file) => (
                  <Button
                    key={file.filename}
                    asChild
                    variant="outline"
                    className="w-full justify-start hover:bg-border hover:text-foreground"
                  >
                    <a href={`${BASE_URL}/${file.filename}`} download>
                      <DownloadIcon className="mr-2 h-4 w-4" />
                      {file.name}
                    </a>
                  </Button>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/kamil-czarnecki/Messentra/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
          >
            View all releases on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
