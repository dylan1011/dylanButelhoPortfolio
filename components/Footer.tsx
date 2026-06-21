import Link from "next/link";
import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="footer-wrap flex flex-col sm:flex-row flex-wrap gap-4 justify-between items-center px-4 sm:px-6 lg:px-12 py-6 sm:py-8 mt-auto">
      <Link href="/" className="footer-logo no-underline">
        <span className="font-extrabold">Dylan</span>
        <span className="font-extrabold">
          <span>.</span>Butelho
        </span>
      </Link>
      <p className="footer-copy">
        © {new Date().getFullYear()} <span className="font-extrabold">{profile.shortName}</span> — DESIGNED & BUILT WITH CARE
      </p>
      <div className="footer-socials flex gap-5">
        <a href={profile.github} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
        <a href={`mailto:${profile.email}`}>Email</a>
      </div>
    </footer>
  );
}
