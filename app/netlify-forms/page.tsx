import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Netlify Forms",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NetlifyFormsPage() {
  return (
    <main className="hidden" aria-hidden>
      <form
        name="free-audit"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="free-audit" />
        <input name="bot-field" />
        <input name="name" />
        <input name="businessName" />
        <input name="websiteUrl" />
        <input name="googleBusinessProfileOrLocation" />
        <input name="email" />
        <input name="phone" />
        <input name="mainGoal" />
        <input name="monthlyAdBudget" />
        <textarea name="message" />
      </form>

      <form
        name="contact"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        hidden
      >
        <input type="hidden" name="form-name" value="contact" />
        <input name="bot-field" />
        <input name="name" />
        <input name="businessName" />
        <input name="email" />
        <input name="phone" />
        <textarea name="message" />
      </form>
    </main>
  );
}
