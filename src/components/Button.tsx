import React from "react";
import style from "@/components/button.module.scss";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: "primary" | "secondary";
};

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button {...props} className={style.button}>
      {children}
    </button>
  );
}
