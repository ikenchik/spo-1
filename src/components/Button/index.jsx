import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-[10px]",
  square: "rounded-[0px]",
};
const variants = {
  outline: {
    black_900: "border-black-900 border-[1.5px] border-solid",
  },
  fill: {
    teal_400: "bg-teal-400 text-white-A700",
    orange_A100: "bg-orange-A100",
    red_200: "bg-red-200",
    cyan_200: "bg-cyan-200",
    red_A700_4c: "bg-red-A700_4c",
    white_A700: "bg-white-A700",
  },
};
const sizes = {
  sm: "h-[30px] px-1.5 text-[15px]",
  "4xl": "h-[64px]",
  "3xl": "h-[60px] px-[25px] text-[28px]",
  lg: "h-[43px] px-[35px] text-xl",
  md: "h-[37px] px-[18px] text-[15px]",
  xs: "h-[26px] px-[17px] text-sm",
  "2xl": "h-[49px] px-2.5",
  xl: "h-[45px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xl",
  color = "white_A700",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "4xl", "3xl", "lg", "md", "xs", "2xl", "xl"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["black_900", "teal_400", "orange_A100", "red_200", "cyan_200", "red_A700_4c", "white_A700"]),
};

export { Button };
