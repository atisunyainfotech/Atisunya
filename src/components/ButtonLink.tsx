import Link from "next/link";
import { PropsWithChildren } from "react";


type ButtonLinkProps = {
  href : string
  variant : "blue" | "orange" | "white"
}

const ButtonLink = ({ href, variant, children } : PropsWithChildren<ButtonLinkProps>) => {

  const baseClass = `px-5 py-2 ouline-none border border-transparent block rounded-sm leading-5`
  const classNames : {
    [k in ButtonLinkProps["variant"]] : string
  } = {
    blue : "bg-blue text-white hover:bg-yellow transition",
    orange : "",
    white : "bg-white hover:bg-transparent hover:border-white text-black hover:text-white"
  }

  return (
    <Link href={href} className={`${baseClass} ${classNames[variant]}`} >
      {children}
    </Link>
  )
}

export default ButtonLink