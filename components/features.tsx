import { Network, FolderTree, Search, Mail, Send, UploadIcon, DownloadIcon, Folder, FlaskConical } from "lucide-react";

const features = [
  {
    icon: Network,
    title: "Connection Management",
    description: "Add, edit, and delete named namespace connections with Connection String or Entra ID (Azure AD) authentication. Manage multiple connections side by side.",
  },
  {
    icon: FolderTree,
    title: "Resource Explorer",
    description: "Browse queues, topics, and subscriptions in a collapsible tree with live active and dead-letter message counts shown inline.",
  },
  {
    icon: Mail,
    title: "Message Fetching & Operations",
    description: "Peek (non-destructive) or Receive messages with PeekLock or ReceiveAndDelete. Complete, abandon, dead-letter, or resend with multi-select bulk actions.",
  },
  {
    icon: Send,
    title: "Send Messages",
    description: "Send messages with JSON (one-click formatting) or plain text body, full broker properties, and custom application key/value pairs.",
  },
  {
    icon: UploadIcon,
    title: "Import & Export",
    description: "Export messages to JSON for backup or replay, and import from JSON into any queue or topic. Jobs run in the background with status tracking.",
  },
  {
    icon: Search,
    title: "Smart Search & Filtering",
    description: "Filter by name, namespace:x, or has:dlq using special-phrase autocomplete. Combine phrases freely for powerful triage.",
  },
  {
    icon: Folder,
    title: "Custom Virtual Folders",
    description: "Organize resources into virtual folders per namespace by workflow, team, or incident context - without changing anything in Azure.",
  },
  {
    icon: FlaskConical,
    title: "Emulator Support",
    description: "Connect to the Azure Service Bus Emulator for local development. View resources, send messages, and fetch messages without a live Azure subscription.",
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
