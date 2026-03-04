/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { profile } from "@/data/resume";
import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="page-wrap border-t-4 border-[var(--portfolio-blue)] bg-[var(--portfolio-bg)] dark:bg-[var(--portfolio-black)]">
      <section className="contact pt-4 lg:pt-6 pb-16 lg:pb-[120px] px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="sr-reveal">
          <p className="section-label text-[var(--portfolio-mid-gray)] mb-3">Get In Touch</p>
          <h1 className="contact-title">
            LET&apos;S
            <br />
            <span className="line-blue">BUILD</span>
            <br />
            <span className="line-red">TOGETHER</span>
          </h1>
          <div className="contact-links flex flex-col gap-4">
            <a href={`mailto:${profile.email}`} className="contact-link no-underline">
              <span className="cl-icon cl-icon-img">
                <img src="/logos/icloud.png" alt="" aria-hidden width={24} height={24} className="object-contain" />
              </span>
              {profile.email}
            </a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="contact-link no-underline">
              <span className="cl-icon">📞</span>
              {profile.phone}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link no-underline">
              <span className="cl-icon">in</span>
              linkedin.com/in/{profile.linkedinHandle}
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link no-underline">
              <span className="cl-icon">gh</span>
              GitHub
            </a>
          </div>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline no-underline"
            >
              View Resume
            </a>
            <Link href="/projects" className="btn-primary no-underline">
              View Projects
            </Link>
          </div>
        </div>
        <div className="sr-reveal" data-sr-delay="120">
          <ContactForm
            nameId="contact-name"
            emailId="contact-email"
            messageId="contact-message"
          />
        </div>
      </section>
    </div>
  );
}
