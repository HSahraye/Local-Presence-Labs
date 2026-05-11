export function TrustChips({ items }: { items: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-[#3B82F6]/25 bg-white/80 px-4 py-2 text-sm font-medium text-[#0F172A]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
