import React from "react";
import Link from "next/link";

interface ButtonProps {
  children?: React.ReactNode;
  href?: string; // 👈 add this
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  type = "button",
  onClick,
  className = "",
  variant = "primary",
  size = "md",
  fullWidth = false,
  disabled = false,
  leftIcon,
  rightIcon,
  iconOnly = false,
}) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded transition-all duration-200 focus:outline-none";

  const variantClasses = {
    primary:
      "bg-[#2563EB] text-white hover:bg-[#1d4ed8] border border-[#2563EB]",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300",
    outline:
      "bg-transparent text-[#2563EB] border border-[#2563EB] hover:bg-blue-50",
  };

  const sizeClasses = {
    sm: iconOnly ? "p-2 text-sm" : "px-3 py-1.5 text-sm",
    md: iconOnly ? "p-2.5 text-sm" : "px-4 py-2 text-sm",
    lg: iconOnly ? "p-3 text-base" : "px-6 py-3 text-base",
  };

  const classes = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}
    ${className}
  `.trim();

  // ✅ If href exists → render Link
  if (href) {
    return (
      <Link href={href} className={classes}>
        {leftIcon}
        {!iconOnly && children}
        {rightIcon}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      disabled={disabled}
    >
      {leftIcon}
      {!iconOnly && children}
      {rightIcon}
    </button>
  );
};

export default Button;
