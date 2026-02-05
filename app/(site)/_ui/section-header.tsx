interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="relative inline-block text-3xl font-bold md:text-4xl text-gray-800">
        {title}
        <span className="absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 bg-accent" />
      </h1>
      {subtitle && <p className="mt-6 text-gray-600">{subtitle}</p>}
    </div>
  );
}
