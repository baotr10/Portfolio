export const Button = ({ className = "", size = "default", variant = "secondary", children, ...props }) => {
  const baseClasses = "relative inline-flex items-center justify-center font-medium rounded-full overflow-hidden transition-all duration-300 ease-out active:scale-95 cursor-pointer";

  const variantClasses = {
    primary: "border border-primary bg-primary text-primary-foreground shadow-[0_0_20px_color-mix(in_srgb,var(--color-primary)_40%,transparent)] hover:shadow-[0_0_30px_color-mix(in_srgb,var(--color-primary)_60%,transparent)] hover:bg-primary/90",
    secondary: "border border-border bg-secondary text-secondary-foreground before:absolute before:inset-0 before:bg-primary before:scale-0 hover:before:scale-100 before:transition-transform before:duration-500 before:ease-out hover:text-primary-foreground hover:border-primary",
    outline: "border border-primary/50 text-primary hover:bg-primary/10 hover:border-primary glass",
    glass: "glass border border-white/10 text-foreground hover:border-primary/50 hover:text-primary",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-5 py-2.5 text-base",
    lg: "px-7 py-3.5 text-lg",
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant] || variantClasses.secondary} ${sizeClasses[size] || sizeClasses.default} ${className}`.trim();

  return (
    <button className={combinedClasses} {...props}>
      <span className="relative z-10 flex items-center justify-center gap-2 font-medium">{children}</span>
    </button>
  );
};

