import Header from "@/components/Header";
import HeroTerminal from "@/components/HeroTerminal";
import FintechExperience from "@/components/FintechExperience";
import GithubRecentRepos from "@/components/GithubRecentRepos";
import LinkedInDispatches from "@/components/LinkedInDispatches";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between selection:bg-[var(--accent)] selection:text-[var(--bg-base)]">
      <Header />
      <main className="flex-1 space-y-6 md:space-y-12">
        <HeroTerminal />
        <FintechExperience />
        <GithubRecentRepos />
        <LinkedInDispatches />
      </main>
      <Footer />
    </div>
  );
}
