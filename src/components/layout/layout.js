import React from 'react';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

import './layout.css';
import '../_variables.css';
import "syntax-highlighting/assets/css/prism/prism-base16-ateliersulphurpool.light.css";

import Navbar from '../navbar';
import Footer from '../footer';

export default function TemplateWrapper({ children }) {
  return (
    <StaticQuery
      query={graphql`
        query HeadingQuery {
          site {
            siteMetadata {
              title,
              description,
            }
          }
        }
      `}
      render={data => (
        <main className="main">
          <Helmet>
            <html lang="en" />
            <title>{data.site.siteMetadata.title}</title>
            <meta name="description" content={data.site.siteMetadata.description} />
          </Helmet>

          <Navbar/>

          {children}

          <Footer/>
        </main>
      )}
    />
  );
}
