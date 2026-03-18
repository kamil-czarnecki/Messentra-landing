import { Network, FolderTree, Search, Mail, Send, KeyboardIcon } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Connection Management",
    description: "Add and manage multiple namespace connections. Supports both Connection String and Entra ID (Azure AD) authentication.",
  },
  {
    icon: FolderTree,
    title: "Resource Explorer",
    description: "Browse queues, topics, and subscriptions in a collapsible tree with live message counts for active and dead-letter queues.",
  },
  {
    icon: Search,
    title: "Smart Search & Filtering",
    description: "Filter resources by name, namespace, or dead-letter status using smart search phrases with autocomplete.",
  },
  {
    icon: Mail,
    title: "Message Operations",
    description: "Fetch, peek, receive, resend, complete, abandon, or dead-letter messages. Full control over message lifecycle.",
  },
  {
    icon: Send,
    title: "Send Messages",
    description: "Send messages with JSON or plain text body, custom broker properties, and application properties.",
  },
  {
    icon: KeyboardIcon,
    title: "Keyboard Shortcuts",
    description: "Quick navigation with keyboard shortcuts. F5 to refresh, arrow keys to navigate messages.",
  },
];

export function Features() {
  return (
    <section className="border-t border-border bg-muted/30 py-20 sm:py-24">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Cross-platform Desktop Solution
          </h2>
          <p className="mt-4 text-muted-foreground">
            A native desktop application for exploring and managing Azure Service Bus resources
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-[#2F90F2]/50">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-[#2F90F2]/10 text-[#2F90F2]">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
