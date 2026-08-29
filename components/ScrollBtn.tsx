// components/ScrollBtn.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";

interface ScrollBtnProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}

export default function ScrollBtn({
  href,
  className,
  children,
  onClick,
}: ScrollBtnProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    const [targetPath, hash] = href.split("#");
    const isSamePage = targetPath === pathname || targetPath === "";

    if (isSamePage && hash) {
      const el = document.getElementById(hash);
      if (el) {
        const navbarHeight = 80;
        const top =
          el.getBoundingClientRect().top + window.scrollY - navbarHeight;
        window.scrollTo({ top, behavior: "smooth" });
      }
    } else if (hash) {
      // different page + has a target section → stash it, navigate clean, no auto-scroll-to-top
      sessionStorage.setItem("scrollTarget", hash);
      router.push(targetPath, { scroll: false });
    } else {
      router.push(targetPath, { scroll: false });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
