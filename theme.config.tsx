import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import { Logo } from "@Components/Logo";

const config: DocsThemeConfig = {
  logo: Logo,
  project: {
    link: "https://github.com/ShihTingJustin/blog-nextra",
  },
  docsRepositoryBase: "https://github.com/ShihTingJustin/blog-nextra",
  footer: {
    text: `Copyright © ${new Date().getFullYear()} Web Worker, Inc. Built with Nextra.`,
  },
};

export default config;
