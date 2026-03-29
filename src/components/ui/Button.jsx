export default function Button({
  children,
  variant = "primary",
  as = "button",
  href,
  className = "",
  ...props
}) {
  const baseStyles =
    "px-6 py-3 rounded-xl font-semibold transition duration-300";

  const variants = {
    primary: "bg-green-500 text-black hover:bg-green-400",
    outline:
      "border border-white/20 text-white hover:border-green-400 hover:text-green-400",
  };

  const Component = as;

  return (
    <Component
      href={as === "a" ? href : undefined}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}