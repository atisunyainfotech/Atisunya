import Link from "next/link";

interface MobileNavItemProps {
  label: string;
  href: string;
  className?: string;
}

export function MobileNavItem({ label, href, className }: MobileNavItemProps) {
  return (
    <Link
      href={href}
      className={
        `flex w-full cursor-pointer items-center rounded-md p-2 pl-1 font-medium text-muted-foreground hover:text-foreground ${className}`
      }
    >
      {label}
    </Link>
  );
}
