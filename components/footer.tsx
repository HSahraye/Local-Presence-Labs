import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[#3B82F6]/15 bg-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 md:grid-cols-3 md:px-6">
        <div>
          <p className="text-lg font-bold text-[#0F172A]">Presence Labs</p>
          <p className="mt-3 text-sm text-[#334155]">
            Get Found. Get Trusted. Get Booked.
          </p>
          <p className="mt-2 text-sm text-[#334155]">
            Websites, ads, and online presence systems for local businesses.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-[#3B82F6]/20 bg-[#3B82F6]/10 px-3 py-1 text-xs font-medium text-[#1D4ED8]">
            <MapPin className="h-3.5 w-3.5" />
            Local First: Alameda-based, Bay Area rooted
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#3B82F6]">
            Quick Links
          </p>
          <div className="mt-3 flex flex-col gap-2 text-sm text-[#334155]">
            <Link href="/packages">Packages</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/free-audit">Free Audit</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#3B82F6]">
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
      <div className="border-t border-[#3B82F6]/15 py-4 text-center text-xs text-[#334155]">
        © {new Date().getFullYear()} Presence Labs. All rights reserved.
      </div>
    </footer>
  );
}
