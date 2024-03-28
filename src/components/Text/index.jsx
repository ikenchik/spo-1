import React from "react";

const sizes = {
  "5xl": "text-[32px] font-normal md:text-3xl sm:text-[28px]",
  xs: "text-[7px] font-medium",
  lg: "text-[15px] font-normal",
  "6xl": "text-4xl font-normal md:text-[34px] sm:text-[32px]",
  "7xl": "text-[40px] font-normal md:text-[38px] sm:text-4xl",
  "8xl": "text-5xl font-normal md:text-[44px] sm:text-[38px]",
  s: "text-xs font-normal",
  "2xl": "text-xl font-normal",
  "3xl": "text-2xl font-normal md:text-[22px]",
  "4xl": "text-[28px] font-normal md:text-[26px] sm:text-2xl",
  xl: "text-base font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
