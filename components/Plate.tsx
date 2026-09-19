"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import type { ImageEntry } from "@/lib/images";

export function Plate({
  image,
  src,
  alt,
  priority = false,
  className = "",
  sizes,
  objectPosition,
  objectPositionTablet,
  objectPositionMobile,
  quality,
}: {
  image?: ImageEntry;
  src?: string;
  alt?: string;
  priority?: boolean;
  className?: string;
  sizes: string;
  objectPosition?: string;
  objectPositionTablet?: string;
  objectPositionMobile?: string;
  quality?: number;
}) {
  const desktopSrc = image?.desktopSrc ?? src ?? "";
  const mobileSrc = image?.mobileSrc ?? desktopSrc;
  const splitSrc = Boolean(desktopSrc && mobileSrc && desktopSrc !== mobileSrc);
  const resolvedAlt = image?.alt ?? alt ?? "";
  const posD = objectPosition ?? image?.desktopObjectPosition ?? "center";
  const posT =
    objectPositionTablet ??
    image?.tabletObjectPosition ??
    posD;
  const posM =
    objectPositionMobile ??
    image?.mobileObjectPosition ??
    posD;
  const q = quality ?? image?.quality ?? 75;

  const imgClass = "object-cover";

  return (
    <div
      className={`plate-art relative overflow-hidden ${className}`}
      style={
        {
          background: "var(--plate)",
          "--pos-d": posD,
          "--pos-t": posT,
          "--pos-m": posM,
        } as CSSProperties
      }
    >
      {splitSrc ? (
        <>
          <div className="absolute inset-0 md:hidden">
            <Image
              src={mobileSrc}
              alt={resolvedAlt}
              fill
              priority={priority}
              sizes={sizes}
              quality={q}
              className={imgClass}
            />
          </div>
          <div className="absolute inset-0 hidden md:block">
            <Image
              src={desktopSrc}
              alt=""
              fill
              priority={priority}
              sizes={sizes}
              quality={q}
              aria-hidden
              className={imgClass}
            />
          </div>
        </>
      ) : desktopSrc ? (
        <Image
          src={desktopSrc}
          alt={resolvedAlt}
          fill
          priority={priority}
          sizes={sizes}
          quality={q}
          className={imgClass}
        />
      ) : null}
    </div>
  );
}
