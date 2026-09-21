"use client";

import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import type { ImageEntry } from "@/lib/images";

type MediaFieldProps = {
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
  /** Marks a field that can later accept <video> without a section rewrite. */
  videoReady?: boolean;
  /** cover: fill the field. intrinsic: native ratio, no cover-crop. */
  fit?: "cover" | "intrinsic";
  width?: number;
  height?: number;
  children?: ReactNode;
};

export function MediaField({
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
  videoReady = false,
  fit = "cover",
  width,
  height,
  children,
}: MediaFieldProps) {
  const desktopSrc = image?.desktopSrc ?? src ?? "";
  const mobileSrc = image?.mobileSrc ?? desktopSrc;
  const splitSrc = Boolean(desktopSrc && mobileSrc && desktopSrc !== mobileSrc);
  const resolvedAlt = image?.alt ?? alt ?? "";
  const posD = objectPosition ?? image?.desktopObjectPosition ?? "center";
  const posT = objectPositionTablet ?? image?.tabletObjectPosition ?? posD;
  const posM = objectPositionMobile ?? image?.mobileObjectPosition ?? posD;
  const q = quality ?? image?.quality ?? 75;

  return (
    <div
      className={`media-field relative overflow-hidden ${className}`.trim()}
      data-video-ready={videoReady ? "true" : undefined}
      style={
        {
          background: "var(--plate)",
          "--pos-d": posD,
          "--pos-t": posT,
          "--pos-m": posM,
        } as CSSProperties
      }
    >
      {fit === "intrinsic" && desktopSrc ? (
        <Image
          src={desktopSrc}
          alt={resolvedAlt}
          width={width ?? 1600}
          height={height ?? 1200}
          priority={priority}
          sizes={sizes}
          quality={q}
          className="h-auto w-full"
        />
      ) : splitSrc ? (
        <>
          <div className="absolute inset-0 md:hidden">
            <Image
              src={mobileSrc}
              alt={resolvedAlt}
              fill
              priority={priority}
              sizes={sizes}
              quality={q}
              className="object-cover"
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
              className="object-cover"
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
          className="object-cover"
        />
      ) : null}
      {children}
    </div>
  );
}
