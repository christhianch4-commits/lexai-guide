"use client";

import { useMemo, useState } from "react";
import { STATES } from "@/lib/states";

const todayIso = () => new Date().toISOString().slice(0, 10);

const formatDate = (iso: string) => {
  if (!iso) return "[Date]";
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

export default function DemandLetterGenerator() {
  const [senderName, setSenderName] = useState("");
  const [senderAddress, setSenderAddress] = useState("");
  const [recipientName, setRecipientName] = useState("");
  const [recipientAddress, setRecipientAddress] = useState("");
  const [date, setDate] = useState(todayIso());
  const [amount, setAmount] = useState("");
  const [reason, setReason] = useState("");
  const [deadlineDays, setDeadlineDays] = useState("14");
  const [stateSlug, setStateSlug] = useState("");
  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const state = STATES.find((s) => s.slug === stateSlug);

  const letterText = useMemo(() => {
    const name = senderName || "[Your Name]";
    const addr = senderAddress || "[Your Address]";
    const rName = recipientName || "[Recipient Name]";
    const rAddr = recipientAddress || "[Recipient Address]";
    const amt = amount ? `$${parseFloat(amount).toFixed(2)}` : "[Amount Owed]";
    const days = deadlineDays || "14";
    const why = reason || "[Describe what is owed and why — include dates, invoice numbers, or the agreement that was broken.]";

    return [
      name,
      addr,
      "",
      formatDate(date),
      "",
      rName,
      rAddr,
      "",
      "Re: Demand for Payment",
      "",
      `Dear ${rName},`,
      "",
      `This letter is a formal demand for payment of ${amt}, which I am owed for the following reason:`,
      "",
      why,
      "",
      `Please remit payment in full within ${days} days of the date of this letter${
        state ? `, consistent with applicable ${state.name} law` : ""
      }. If I do not receive payment or a written response by that date, I intend to pursue all available legal remedies — including filing a claim in small claims court — without further notice.`,
      "",
      "This letter serves as formal notice of this debt. I would prefer to resolve this without further escalation, and I am open to discussing a reasonable resolution before the deadline above.",
      "",
      "Sincerely,",
      "",
      name,
    ].join("\n");
  }, [senderName, senderAddress, recipientName, recipientAddress, date, amount, reason, deadlineDays, state]);

  async function handleCopy() {
    let success = false;

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(letterText);
        success = true;
      }
    } catch {
      success = false;
    }

    if (!success) {
      // Fallback for browsers/contexts that block the async Clipboard API.
      try {
        const textarea = document.createElement("textarea");
        textarea.value = letterText;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.focus();
        textarea.select();
        success = document.execCommand("copy");
        document.body.removeChild(textarea);
      } catch {
        success = false;
      }
    }

    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  async function handleDownloadPdf() {
    setDownloading(true);
    try {
      const { jsPDF } = await import("jspdf");
      const doc = new jsPDF({ unit: "pt", format: "letter" });
      const margin = 72;
      const maxWidth = doc.internal.pageSize.getWidth() - margin * 2;
      const lineHeight = 16;
      let y = margin;

      doc.setFont("times", "normal");
      doc.setFontSize(12);

      for (const paragraph of letterText.split("\n")) {
        if (paragraph === "") {
          y += lineHeight;
          continue;
        }
        const lines: string[] = doc.splitTextToSize(paragraph, maxWidth);
        for (const line of lines) {
          if (y > doc.internal.pageSize.getHeight() - margin) {
            doc.addPage();
            y = margin;
          }
          doc.text(line, margin, y);
          y += lineHeight;
        }
      }

      const fileName = `demand-letter-${(recipientName || "draft").toLowerCase().replace(/[^a-z0-9]+/g, "-")}.pdf`;
      doc.save(fileName);
    } finally {
      setDownloading(false);
    }
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-start">
      {/* Form */}
      <div className="rounded-lg border border-mist bg-paper-raised p-6 md:p-7">
        <h2 className="font-display text-lg font-semibold text-ink">Your Details</h2>
        <div className="mt-5 space-y-4">
          <div>
            <label htmlFor="dl-sender-name" className="text-sm font-medium text-ink">
              Your name
            </label>
            <input
              id="dl-sender-name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
              placeholder="Jordan Rivera"
              className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
            />
          </div>
          <div>
            <label htmlFor="dl-sender-addr" className="text-sm font-medium text-ink">
              Your address
            </label>
            <input
              id="dl-sender-addr"
              value={senderAddress}
              onChange={(e) => setSenderAddress(e.target.value)}
              placeholder="123 Main St, Springfield, IL 62704"
              className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="dl-recipient-name" className="text-sm font-medium text-ink">
                Recipient name
              </label>
              <input
                id="dl-recipient-name"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="Acme Property LLC"
                className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
              />
            </div>
            <div>
              <label htmlFor="dl-date" className="text-sm font-medium text-ink">
                Date
              </label>
              <input
                id="dl-date"
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
              />
            </div>
          </div>
          <div>
            <label htmlFor="dl-recipient-addr" className="text-sm font-medium text-ink">
              Recipient address
            </label>
            <input
              id="dl-recipient-addr"
              value={recipientAddress}
              onChange={(e) => setRecipientAddress(e.target.value)}
              placeholder="456 Business Ave, Springfield, IL 62704"
              className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="dl-amount" className="text-sm font-medium text-ink">
                Amount owed
              </label>
              <div className="mt-1.5 flex items-center rounded-md border border-mist bg-paper focus-within:outline focus-within:outline-2 focus-within:outline-authority">
                <span className="pl-3.5 text-ink-soft">$</span>
                <input
                  id="dl-amount"
                  type="number"
                  min="0"
                  step="0.01"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  placeholder="850.00"
                  className="w-full bg-transparent px-2 py-2.5 text-sm text-ink outline-none"
                />
              </div>
            </div>
            <div>
              <label htmlFor="dl-deadline" className="text-sm font-medium text-ink">
                Deadline (days)
              </label>
              <input
                id="dl-deadline"
                type="number"
                min="1"
                value={deadlineDays}
                onChange={(e) => setDeadlineDays(e.target.value)}
                className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
              />
            </div>
          </div>
          <div>
            <label htmlFor="dl-state" className="text-sm font-medium text-ink">
              State <span className="font-normal text-ink-soft">(optional)</span>
            </label>
            <select
              id="dl-state"
              value={stateSlug}
              onChange={(e) => setStateSlug(e.target.value)}
              className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
            >
              <option value="">Not specified</option>
              {STATES.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="dl-reason" className="text-sm font-medium text-ink">
              What&rsquo;s owed and why
            </label>
            <textarea
              id="dl-reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              rows={4}
              placeholder="On March 3, 2026, I completed freelance design work per our written agreement dated February 1, 2026. Invoice #1042 for $850.00 remains unpaid as of the date of this letter, despite two follow-up requests on March 10 and March 20."
              className="mt-1.5 w-full rounded-md border border-mist bg-paper px-3.5 py-2.5 text-sm text-ink outline-none focus-visible:outline-2 focus-visible:outline-authority"
            />
          </div>
        </div>
      </div>

      {/* Live preview */}
      <div className="lg:sticky lg:top-24">
        <h2 className="font-display text-lg font-semibold text-ink">Preview</h2>
        <div className="mt-5 rounded-lg border border-mist bg-white p-8 shadow-[0_12px_32px_-16px_rgba(15,25,35,0.2)]">
          <pre className="whitespace-pre-wrap break-words font-serif text-[13.5px] leading-relaxed text-ink">
            {letterText}
          </pre>
        </div>

        <div className="mt-5 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleDownloadPdf}
            disabled={downloading}
            className="inline-flex items-center gap-2 rounded-md bg-authority px-5 py-3 text-sm font-medium text-paper transition-colors duration-200 hover:bg-authority-dark disabled:opacity-60"
          >
            {downloading ? "Generating…" : "Download PDF"}
          </button>
          <button
            type="button"
            onClick={handleCopy}
            className="inline-flex items-center gap-2 rounded-md border border-mist px-5 py-3 text-sm font-medium text-ink transition-colors duration-200 hover:border-authority hover:text-authority"
          >
            {copied ? "Copied ✓" : "Copy Text"}
          </button>
        </div>
      </div>
    </div>
  );
}
