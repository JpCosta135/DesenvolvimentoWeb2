import { InfoCard } from './InfoCard';
import reactLogo from '../assets/react.svg';
import viteLogo from '../assets/vite.svg';

export function NextSteps() {
  return (
    <section id="next-steps">
     <InfoCard iconHref="/icons.svg#documentation-icon" title="Documentation" description="Your questions, answered" links={[
        { url: "https://vite.dev/", imgSrc: viteLogo, label: "Explore Vite" },
        { url: "https://react.dev/", imgSrc: reactLogo, label: "Learn more" }
      ]} />
      <InfoCard iconHref="/icons.svg#social-icon" title="Connect with us" description="Join the Vite community" links={[
       { url: "https://github.com/vitejs/vite", iconHref: "/icons.svg#github-icon", label: "GitHub" },
          { url: "https://chat.vite.dev/", iconHref: "/icons.svg#discord-icon", label: "Discord" },
          { url: "https://x.com/vite_js", iconHref: "/icons.svg#x-icon", label: "X.com" },
          { url: "https://bsky.app/profile/vite.dev", iconHref: "/icons.svg#bluesky-icon", label: "Bluesky" }
      ]} />
    </section>
  );
}