import type { Metadata } from "next";

const siteName = "Bytecode Consulting";
const siteUrl = "https://bytecodeconsulting.com";
const defaultImage = "/brand/linkedin-banner.svg";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
};

export function buildMetadata({
  title,
  description,
  path,
  keywords = [],
}: BuildMetadataInput): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title: `${title} | ${siteName}`,
      description,
      url,
      siteName,
      locale: "en_GB",
      type: "website",
      images: [
        {
          url: defaultImage,
          width: 1584,
          height: 396,
          alt: "Bytecode Consulting brand banner",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteName}`,
      description,
      images: [defaultImage],
    },
  };
}

export const siteSeo = {
  siteName,
  siteUrl,
  defaultImage,
};
