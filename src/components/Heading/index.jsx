import React from "react";

const sizes = {
  s: "text-xl font-semibold",
  md: "text-[44px] font-semibold md:text-[40px] sm:text-[34px]",
  xs: "text-base font-semibold",
};

const Heading = ({ children, className = "", size = "s", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-black-900 font-opensans ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
