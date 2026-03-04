/* eslint-disable @next/next/no-img-element */
"use client";

import { useRef, useState } from "react";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_ATTACHMENT_BYTES = 100 * 1024 * 1024; // 100 MB per file
const MAX_ATTACHMENTS_TOTAL_BYTES = 300 * 1024 * 1024; // 300 MB total

type ContactFormProps = {
  nameId: string;
  emailId: string;
  messageId: string;
};

function formatMB(bytes: number) {
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

const DRIVE_LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/e/e4/Google_Drive_icon_(2020).png";
const ICLOUD_LOGO_URL =
  "https://upload.wikimedia.org/wikipedia/commons/0/0a/ICloud_logo.svg";
const ONEDRIVE_LOGO_URL =
  "https://static2.sharepointonline.com/files/fabric/assets/brand-icons/product/svg/onedrive_48x1.svg";

export default function ContactForm({ nameId, emailId, messageId }: ContactFormProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [topic, setTopic] = useState("project");
  const [files, setFiles] = useState<File[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [fileError, setFileError] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validateEmail = (value: string): boolean => {
    const trimmed = value.trim().toLowerCase();
    if (!trimmed) return false;
    if (!EMAIL_REGEX.test(trimmed)) return false;
    return true;
  };

  const handleEmailBlur = () => {
    if (!email.trim()) {
      setEmailError(null);
      return;
    }
    setEmailError(validateEmail(email) ? null : "Please enter a valid email address.");
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (emailError) setEmailError(validateEmail(e.target.value) ? null : "Please enter a valid email address.");
  };

  const totalBytes = files.reduce((sum, f) => sum + f.size, 0);

  const addAttachments = (selected: File[]) => {
    if (selected.length === 0) return;

    for (const f of selected) {
      if (f.size > MAX_ATTACHMENT_BYTES) {
        setFileError("Each file must be 100 MB or smaller.");
        return;
      }
    }

    const existingKeys = new Set(files.map((f) => `${f.name}:${f.size}:${f.lastModified}`));
    const deduped = selected.filter((f) => !existingKeys.has(`${f.name}:${f.size}:${f.lastModified}`));
    const next = [...files, ...deduped];
    const nextBytes = next.reduce((sum, f) => sum + f.size, 0);

    if (nextBytes > MAX_ATTACHMENTS_TOTAL_BYTES) {
      setFileError("Total attachments must be 300 MB or smaller.");
      return;
    }

    setFiles(next);
    setFileError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selected = e.target.files ? Array.from(e.target.files) : [];
    addAttachments(selected);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  const removeAttachment = (idx: number) => {
    setFiles((prev) => prev.filter((_, i) => i !== idx));
    setFileError(null);
  };

  const clearAttachments = () => {
    setFiles([]);
    setFileError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    const dropped = e.dataTransfer.files ? Array.from(e.dataTransfer.files) : [];
    addAttachments(dropped);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const trimmedName = name.trim();
    const trimmedEmail = email.trim().toLowerCase();
    const trimmedMessage = message.trim();

    if (!trimmedName) {
      setErrorMessage("Please enter your name.");
      return;
    }
    if (!trimmedEmail) {
      setEmailError("Email is required.");
      return;
    }
    if (!validateEmail(trimmedEmail)) {
      setEmailError("Please enter a valid email address.");
      return;
    }
    setEmailError(null);
    if (!trimmedMessage) {
      setErrorMessage("Please enter a message.");
      return;
    }

    if (files.some((f) => f.size > MAX_ATTACHMENT_BYTES)) {
      setFileError("Each file must be 100 MB or smaller.");
      return;
    }
    if (files.reduce((sum, f) => sum + f.size, 0) > MAX_ATTACHMENTS_TOTAL_BYTES) {
      setFileError("Total attachments must be 300 MB or smaller.");
      return;
    }

    setStatus("sending");
    try {
      const formData = new FormData();
      formData.set("name", trimmedName);
      formData.set("email", trimmedEmail);
      formData.set("message", trimmedMessage);
      formData.set("topic", topic);
      for (const f of files) {
        formData.append("attachment", f);
      }

      const res = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });
      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setErrorMessage(data.error ?? "Failed to send. Please try again.");
        return;
      }
      setStatus("success");
      setName("");
      setEmail("");
      setMessage("");
      setTopic("project");
      clearAttachments();
      setEmailError(null);
      setFileError(null);
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form flex flex-col gap-5">
      <div className="form-field flex flex-col gap-1.5">
        <label htmlFor={nameId} className="form-label">
          Your Name
        </label>
        <input
          id={nameId}
          name="name"
          type="text"
          placeholder="Jane Smith"
          className="form-input w-full"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-required="true"
          aria-invalid={!!errorMessage}
        />
      </div>
      <div className="form-field flex flex-col gap-1.5">
        <label htmlFor={emailId} className="form-label">
          Email Address
        </label>
        <input
          id={emailId}
          name="email"
          type="email"
          placeholder="jane@company.com"
          className={`form-input w-full ${emailError ? "border-[var(--portfolio-red)] focus:border-[var(--portfolio-red)]" : ""}`}
          value={email}
          onChange={handleEmailChange}
          onBlur={handleEmailBlur}
          aria-required="true"
          aria-invalid={!!emailError}
          aria-describedby={emailError ? `${emailId}-error` : undefined}
        />
        {emailError && (
          <p id={`${emailId}-error`} className="text-sm text-[var(--portfolio-red)]" role="alert">
            {emailError}
          </p>
        )}
      </div>
      <div className="form-field flex flex-col gap-1.5">
        <label htmlFor={`${nameId}-topic`} className="form-label">
          Reason
        </label>
        <select
          id={`${nameId}-topic`}
          name="topic"
          className="form-input w-full"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        >
          <option value="project">Project collaboration</option>
          <option value="opportunity">Job / opportunity</option>
          <option value="question">Question</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-field flex flex-col gap-1.5">
        <label htmlFor={messageId} className="form-label">
          Message
        </label>
        <textarea
          id={messageId}
          name="message"
          placeholder="Tell me about your project..."
          rows={4}
          className="form-input w-full resize-none h-[110px]"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-required="true"
        />
      </div>
      <div className="form-field flex flex-col gap-1.5">
        <label htmlFor={`${nameId}-attachment`} className="form-label">
          Attachment (optional)
        </label>
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={openFilePicker}
            className="apple-font text-[0.72rem] font-bold tracking-[0.1em] uppercase border border-black/[0.12] dark:border-white/[0.12] text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] py-2 px-3 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            Browse
          </button>
          <button
            type="button"
            onClick={openFilePicker}
            className="relative group border border-black/[0.12] dark:border-white/[0.12] text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            title="Opens your system file picker (Google Drive if connected)"
            aria-label="Google Drive"
          >
            <img
              src={DRIVE_LOGO_URL}
              alt=""
              className="w-5 h-5 object-contain"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 rounded text-xs apple-font font-bold tracking-wider uppercase whitespace-nowrap bg-[var(--portfolio-black)] dark:bg-[var(--portfolio-white)] text-[var(--portfolio-white)] dark:text-[var(--portfolio-black)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-md z-10">
              Drive
            </span>
          </button>
          <button
            type="button"
            onClick={openFilePicker}
            className="relative group border border-black/[0.12] dark:border-white/[0.12] text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            title="Opens your system file picker (OneDrive if connected)"
            aria-label="OneDrive"
          >
            <img
              src={ONEDRIVE_LOGO_URL}
              alt=""
              className="w-5 h-5 object-contain"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 rounded text-xs apple-font font-bold tracking-wider uppercase whitespace-nowrap bg-[var(--portfolio-black)] dark:bg-[var(--portfolio-white)] text-[var(--portfolio-white)] dark:text-[var(--portfolio-black)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-md z-10">
              OneDrive
            </span>
          </button>
          <button
            type="button"
            onClick={openFilePicker}
            className="relative group border border-black/[0.12] dark:border-white/[0.12] text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            title="Opens your system file picker (iCloud Drive on Apple devices)"
            aria-label="iCloud Drive"
          >
            <img
              src={ICLOUD_LOGO_URL}
              alt=""
              className="w-5 h-5 object-contain"
              loading="lazy"
              decoding="async"
              referrerPolicy="no-referrer"
            />
            <span className="absolute top-full left-1/2 -translate-x-1/2 mt-1.5 px-2.5 py-1 rounded text-xs apple-font font-bold tracking-wider uppercase whitespace-nowrap bg-[var(--portfolio-black)] dark:bg-[var(--portfolio-white)] text-[var(--portfolio-white)] dark:text-[var(--portfolio-black)] opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-150 shadow-md z-10">
              iCloud
            </span>
          </button>
        </div>

        <div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={`rounded-lg border-2 border-dashed p-4 transition-colors ${
            isDragging
              ? "border-[var(--portfolio-blue)] bg-[var(--portfolio-blue)]/5"
              : "border-black/[0.12] dark:border-white/[0.12] bg-transparent"
          }`}
          role="button"
          tabIndex={0}
          aria-label="Drag and drop a file here, or browse"
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") openFilePicker();
          }}
        >
          <div className="text-sm text-[var(--portfolio-mid-gray)]">
            Drag and drop a file here, or click <span className="text-[var(--portfolio-blue)] font-semibold">Browse</span>.
          </div>
          <div className="text-xs text-[var(--portfolio-mid-gray)] mt-1" id={`${nameId}-attachment-help`}>
            Max: 100 MB per file, 300 MB total. You can also choose files from iCloud Drive / Google Drive / OneDrive if they’re available in your system file picker.
          </div>

          {files.length > 0 && !fileError && (
            <div className="mt-3 space-y-2">
              <div className="flex items-center justify-between gap-3">
                <div className="text-xs text-[var(--portfolio-mid-gray)]">
                  Total: {formatMB(totalBytes)} / {formatMB(MAX_ATTACHMENTS_TOTAL_BYTES)}
                </div>
                <button
                  type="button"
                  onClick={clearAttachments}
                  className="apple-font text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[var(--portfolio-red)] hover:underline"
                >
                  Clear
                </button>
              </div>
              {files.map((f, idx) => (
                <div
                  key={`${f.name}:${f.size}:${f.lastModified}`}
                  className="flex items-center justify-between gap-3 rounded-md border border-black/[0.08] dark:border-white/[0.10] bg-[var(--portfolio-gray)]/60 dark:bg-white/5 px-3 py-2"
                >
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-[var(--portfolio-black)] dark:text-[var(--portfolio-white)] truncate">
                      {f.name}
                    </div>
                    <div className="text-xs text-[var(--portfolio-mid-gray)]">
                      {formatMB(f.size)}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeAttachment(idx)}
                    className="apple-font text-[0.68rem] font-bold tracking-[0.12em] uppercase text-[var(--portfolio-red)] border border-[var(--portfolio-red)]/40 px-3 py-1.5 rounded-md hover:bg-[var(--portfolio-red)] hover:text-white transition-colors shrink-0"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <input
          ref={fileInputRef}
          id={`${nameId}-attachment`}
          name="attachment"
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
          aria-describedby={`${nameId}-attachment-help`}
        />
        <p
          className="sr-only"
        />
        {fileError && (
          <p className="text-sm text-[var(--portfolio-red)]" role="alert">
            {fileError}
          </p>
        )}
      </div>
      {(status === "error" && errorMessage) && (
        <p className="text-sm text-[var(--portfolio-red)]" role="alert">
          {errorMessage}
        </p>
      )}
      {status === "success" && (
        <p className="text-sm text-[var(--portfolio-green)]" role="status">
          Message sent. I&apos;ll get back to you soon.
        </p>
      )}
      <button
        type="submit"
        className="btn-submit no-underline w-fit disabled:opacity-60 disabled:pointer-events-none"
        disabled={status === "sending"}
      >
        {status === "sending" ? "Sending…" : "Send Message →"}
      </button>
    </form>
  );
}
