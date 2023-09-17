import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "@Components/Logo";
import { useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: "https://github.com/ShihTingJustin/blog-nextra",
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
  docsRepositoryBase: "https://github.com/ShihTingJustin/blog-nextra",
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath !== "/") {
      return {
        titleTemplate: "%s – Web Worker",
      };
    }

    return {
      titleTemplate: "Home – Web Worker",
    };
  },
  head: function useHead() {
    const { title } = useConfig();
    const { route } = useRouter();
    const socialCard =
      route === "/" || !title
        ? "https://www.sthdev.app/og.png"
        : `https://www.sthdev.app/api/og?title=${title}`;

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta name="description" content="Two cents from a web worker." />
        <meta name="apple-mobile-web-app-title" content="Web Worker" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="sthdev.app" />
        <meta name="twitter:url" content="https://www.sthdev.app" />

        {/* Open Graph */}
        <meta
          name="og:title"
          content={title ? title + " – Web Worker" : "Web Worker"}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="og:url" content="https://www.sthdev.app" />
        <meta name="og:description" content="Two cents from a web worker." />

        {/* LinkedIn */}
        <meta
          property="og:title"
          content={title ? title + " – Web Worker" : "Web Worker"}
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.sthdev.app" />
        <meta
          property="og:description"
          content="Two cents from a web worker."
        />
        <meta property="og:image" content={socialCard} />

        {/* Favicons */}
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon-dark.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    );
  },
  footer: {
    text: `Copyright © ${new Date().getFullYear()} Web Worker, Inc. Built with Nextra.`,
  },
};

export default config;
