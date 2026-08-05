import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About, Footer, Showcase } from "@/components/portfolio/Sections";
import { Contact } from "@/components/portfolio/Contact";
import { WelcomeLoader } from "@/components/portfolio/WelcomeLoader";

const title = "Swanand Dumbre | Data Science Enthusiast";
const description =
  "Swanand Dumbre is a BSc Computer Science graduate pursuing MSc Computer Science, passionate about Python, Data Analytics, Machine Learning, and data-driven solutions.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { name: "author", content: "Swanand Dumbre" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Swanand Dumbre",
          jobTitle: "Data Science Enthusiast",
          email: "mailto:swananddumbre10@gmail.com",
          telephone: "+918668398669",
          sameAs: ["https://github.com/swananddumbre"],
          alumniOf: "Savitribai Phule Pune University",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <WelcomeLoader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Showcase />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
