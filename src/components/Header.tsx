import React from "react";
import { ReactNode } from "react";

interface HeaderProps {
  image: {
    src: string;
    alt: string;
  };
  children: ReactNode;
}
export default function Header({ image, children }: HeaderProps) {
  return (
    <header>
      <img src={image.src} alt={image.alt}></img>
      {/*<img {...img}></img> we can also do this for more concise code*/}
      {children}
    </header>
  );
}
