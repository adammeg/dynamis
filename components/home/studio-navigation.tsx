"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  ["Work", "/#portfolio"],
  ["Expertise", "/#services"],
  ["Approach", "/#process"],
  ["Insights", "/blog"],
];

export function Brand() {
  return (
    <Link href="/" className="studio-brand" aria-label="Dynamis Solution home">
      <Image src="/dynamis-mark.png" alt="" width={35} height={33} />
      dynamis<span>.</span>
    </Link>
  );
}

export function StudioHeader() {
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!open) return;
    function dismiss(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    }
    function outside(event: PointerEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    document.addEventListener("keydown", dismiss);
    document.addEventListener("pointerdown", outside);
    return () => {
      document.removeEventListener("keydown", dismiss);
      document.removeEventListener("pointerdown", outside);
    };
  }, [open]);

  return (
    <header ref={header} className="studio-header">
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <div className="studio-wrap header-inner">
        <Brand />
        <nav aria-label="Main navigation" className="desktop-nav">
          {links.map(([name, url]) => (
            <Link key={name} href={url}>
              {name}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link
            href="/#lead-generation"
            className="header-cta"
            onClick={() => setOpen(false)}
          >
            Let’s talk <ArrowUpRight size={16} />
          </Link>
          <button
            ref={button}
            className="menu-button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <nav
        id="mobile-nav"
        aria-label="Mobile navigation"
        className="mobile-nav"
        hidden={!open}
      >
        {links.map(([name, url]) => (
          <Link key={name} href={url} onClick={() => setOpen(false)}>
            {name}
            <ArrowUpRight size={16} />
          </Link>
        ))}
      </nav>
    </header>
  );
}

export function StudioFooter() {
  return (
    <footer className="studio-footer">
      <div className="studio-wrap footer-inner">
        <Brand />
        <div>
          <Link href="/about">About us</Link>
          <Link href="/blog">Insights</Link>
          <a href="tel:+21690053729">+216 90 053 729</a>
        </div>
        <small>© {new Date().getFullYear()} Dynamis Solution</small>
      </div>
    </footer>
  );
}
