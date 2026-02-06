'use client';

import Head from 'next/head';
import { usePathname } from 'next/navigation';

interface SimpleSEOProps {
  title: string;
  description: string;
  keywords: string[];
  url?: string;
  type?: 'article' | 'website';
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
}

export default function SimpleSEO({
  title,
  description,
  keywords,
  url,
  type = 'website',
  publishedTime,
  modifiedTime,
  author = 'JobTrackr Team',
}: SimpleSEOProps) {
  const pathname = usePathname();
  const fullUrl = url || `https://jobtrackr.example.com${pathname}`;
  const siteName = 'JobTrackr';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords.join(', ')} />
        <meta name="author" content={author} />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={fullUrl} />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content={siteName} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />

        {/* Canonical */}
        <link rel="canonical" href={fullUrl} />

        {/* Article specific */}
        {type === 'article' && publishedTime && (
          <meta property="article:published_time" content={publishedTime} />
        )}
      </Head>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': type === 'article' ? 'Article' : 'WebPage',
            'headline': title,
            'description': description,
            'url': fullUrl,
            'author': {
              '@type': 'Organization',
              'name': author
            },
            'publisher': {
              '@type': 'Organization',
              'name': siteName
            },
            ...(type === 'article' && publishedTime ? { 'datePublished': publishedTime } : {}),
          })
        }}
      />
    </>
  );
}