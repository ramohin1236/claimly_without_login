import React from "react";

interface ButtonProps {
  children?: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  disabled?: boolean;

  /** Icon props */
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  iconOnly?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
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
  // Base classes
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded transition-all duration-200 focus:outline-none";

  // Variant classes
  const variantClasses = {
    primary:
      "bg-[#2563EB] text-white hover:bg-[#1d4ed8] border border-[#2563EB]",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 border border-gray-300",
    outline:
      "bg-transparent text-[#2563EB] border border-[#2563EB] hover:bg-blue-50",
  };

  // Size classes
  const sizeClasses = {
    sm: iconOnly ? "p-2 text-sm" : "px-3 py-1.5 text-sm",
    md: iconOnly ? "p-2.5 text-sm" : "px-4 py-2 text-sm",
    lg: iconOnly ? "p-3 text-base" : "px-6 py-3 text-base",
  };

  // Width class
  const widthClass = fullWidth ? "w-full" : "";

  // Disabled class
  const disabledClass = disabled
    ? "opacity-50 cursor-not-allowed pointer-events-none"
    : "cursor-pointer";

  // Combine all classes
  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${widthClass}
    ${disabledClass}
    ${className}
  `.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={buttonClasses}
      disabled={disabled}
    >
      {/* Left Icon */}
      {leftIcon && <span className="flex items-center">{leftIcon}</span>}

      {/* Text */}
      {!iconOnly && <span>{children}</span>}

      {/* Right Icon */}
      {rightIcon && <span className="flex items-center">{rightIcon}</span>}
    </button>
  );
};

export default Button;
