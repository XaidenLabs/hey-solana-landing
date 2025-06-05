interface HeadSEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    pathname: string; 
  }
  
  export default function HeadSEO({ title, description, keywords, image, pathname }: HeadSEOProps) {
    const siteUrl = "https://heysolana.yraylabs.fun";
    const canonicalUrl = `${siteUrl}${pathname}`;
  
    return (
      <>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={image || `${siteUrl}/pngs/logo.png`} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image || `${siteUrl}/pngs/logo.png`} />
      </>
    );
  }