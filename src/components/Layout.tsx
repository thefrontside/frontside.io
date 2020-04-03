import React from "react";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import { ThemeProvider } from "../style";

import "syntax-highlighting/assets/css/prism/prism-base16-ateliersulphurpool.light.css";

import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TemplateWrapper({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title
              description
            }
          }
        }
      `}
      render={data => (
        <main className="main">
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta
              name="description"
              content={data.site.siteMetadata.description}
            />
          </Helmet>
          <ThemeProvider>
            <Navbar />
            {children}
            <Footer />
          </ThemeProvider>
        </main>
      )}
    />
  );
}
