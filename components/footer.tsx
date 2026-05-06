import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-[#1C768F]/15 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-lg font-bold text-[#032539]">Local Presence Labs</p>
          <p className="mt-3 text-sm text-[#334155]">
            Get Found. Get Trusted. Get Booked.
          </p>
          <p className="mt-2 text-sm text-[#334155]">
            Websites, ads, and online presence systems for local businesses.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1C768F]">
            Quick Links
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#334155]">
            <Link href="/services">Services</Link>
            <Link href="/packages">Packages</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/free-audit">Free Audit</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#1C768F]">
            Legal
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#334155]">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
          <p className="mt-4 text-sm text-[#334155]">
            Bay Area, CA + remote support for U.S. local businesses.
          </p>
        </div>
      </div>
      <div className="border-t border-[#1C768F]/15 py-4 text-center text-xs text-[#334155]">
        © {new Date().getFullYear()} Local Presence Labs. All rights reserved.
      </div>
    </footer>
  );
}
