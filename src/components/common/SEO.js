import React from "react";
import { Helmet } from "react-helmet-async";

const DEFAULT_TITLE = "European Spirit of Youth Orchestra";
const DEFAULT_DESCRIPTION =
  "The European Spirit of Youth Orchestra (ESYO) embodies the European youth's Spirit through music, showcasing a harmonious blend of diverse voices, intercultural dialogue, and exceptional young musical talents from across Europe.";
const DEFAULT_IMAGE = "https://esyo.eu/logo.png";
const SITE_URL = "https://esyo.eu";

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  keywords,
  canonical,
  ogType = "website",
  ogImage = DEFAULT_IMAGE,
  ogImageAlt = "European Spirit of Youth Orchestra Logo",
  schema,
  noindex = false,
}) => {
  const fullTitle = title
    ? title.includes("European Spirit of Youth Orchestra")
      ? title
      : `${title} | European Spirit of Youth Orchestra`
    : DEFAULT_TITLE;

  // Ensure image URL is absolute
  const absoluteImage = ogImage.startsWith("http")
    ? ogImage
    : `${SITE_URL}${ogImage.startsWith("/") ? "" : "/"}${ogImage}`;

  // Ensure canonical URL is absolute
  const canonicalUrl = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${SITE_URL}${canonical.startsWith("/") ? "" : "/"}${canonical}`
    : SITE_URL;

  return (
    <Helmet>
      {/* Basic metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph / Facebook / LinkedIn / WhatsApp */}
      <meta property="og:site_name" content="European Spirit of Youth Orchestra" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:image:secure_url" content={absoluteImage} />
      <meta property="og:image:alt" content={ogImageAlt} />

      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ESYO_Europe" />
      <meta name="twitter:creator" content="@ESYO_Europe" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {/* Structured Data (Schema.org) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
