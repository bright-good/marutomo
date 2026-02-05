import Link from "next/link";

type LinkButtonVariant = "primary" | "secondary" | "wood";

interface LinkButtonProps {
  href: string;
  variant?: LinkButtonVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<LinkButtonVariant, string> = {
  primary:
    "bg-accent text-white shadow-lg hover:bg-accent-dark hover:shadow-xl",
  secondary: "bg-wood-dark text-beige hover:bg-wood",
  wood: "bg-wood text-beige hover:bg-wood-dark",
};

export function LinkButton({
  href,
  variant = "primary",
  children,
  className = "",
}: LinkButtonProps) {
  return (
    <Link
      href={href}
      className={`block rounded-lg px-8 py-4 text-center font-bold transition-all hover:-translate-y-0.5 ${variantStyles[variant]} ${className}`}
    >
      {children}
    </Link>
  );
}
