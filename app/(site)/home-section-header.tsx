interface HomeSectionHeaderProps {
  title: string;
  subtitle?: string;
  light?: boolean;
}

export function HomeSectionHeader({
  title,
  subtitle,
  light = false,
}: HomeSectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <h2
        className={`relative inline-block text-3xl font-bold md:text-4xl ${
          light ? "text-beige" : "text-gray-800"
        }`}
      >
        {title}
        <span
          className={`absolute -bottom-2 left-1/2 h-1 w-16 -translate-x-1/2 ${
            light ? "bg-beige" : "bg-accent"
          }`}
        />
      </h2>
      {subtitle && (
        <p className={`mt-6 ${light ? "text-beige/90" : "text-gray-600"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
