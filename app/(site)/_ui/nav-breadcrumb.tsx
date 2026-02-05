import Link from "next/link";

interface NavBreadcrumbItem {
  label: string;
  href: string;
}

interface NavBreadcrumbProps {
  items: NavBreadcrumbItem[];
}

export function NavBreadcrumb({ items }: NavBreadcrumbProps) {
  return (
    <nav className="bg-beige-dark px-6 py-4">
      <ol className="mx-auto flex max-w-7xl items-center gap-2 text-sm">
        {items.map((item, index) => (
          <li key={item.href} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-400">/</span>}
            {index === items.length - 1 ? (
              <span className="text-gray-600">{item.label}</span>
            ) : (
              <Link
                href={item.href}
                className="text-wood hover:text-wood-dark hover:underline"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
