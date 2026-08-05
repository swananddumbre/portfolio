import { useState, type FormEvent } from "react";
import { Github, Mail, MessageCircle, Phone, Send } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";
import { contact } from "@/lib/portfolio-data";

const channels = [
  { icon: Mail, label: "Email Me", value: contact.email, href: `mailto:${contact.email}` },
  { icon: Phone, label: "Call Me", value: contact.phone, href: contact.phoneHref },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: contact.whatsapp },
  { icon: Github, label: "GitHub", value: "swananddumbre", href: contact.github },
];

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${name || "a visitor"}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "w-full rounded-xl border border-border bg-surface-2 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/60 focus:outline-none focus:ring-2 focus:ring-ring/30";

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let's Connect"
        subtitle="Have an opportunity, project, or simply want to connect? Feel free to reach out."
      />

      <div className="mt-14 grid gap-6 lg:grid-cols-2">
        <Reveal className="space-y-4">
          {channels.map(({ icon: Icon, label, value, href }) => (
            <a
              key={label}
              href={href}
              {...(href.startsWith("http")
                ? { target: "_blank", rel: "noreferrer noopener" }
                : {})}
              className="glass-card grid grid-cols-[auto_minmax(0,1fr)] items-center gap-4 rounded-2xl p-5"
            >
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/12 text-primary">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-semibold">{label}</span>
                <span className="block truncate text-sm text-muted-foreground">{value}</span>
              </span>
            </a>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="glass-card space-y-4 rounded-2xl p-6 sm:p-8">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className={field}
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={5}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tell me about the opportunity..."
                className={field}
              />
            </div>
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[image:var(--gradient-accent)] px-5 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" aria-hidden="true" /> Send Message
            </button>
            <p className="text-center text-xs text-muted-foreground">
              This form opens your email app with the message pre-filled — no messages are
              stored on this site.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}