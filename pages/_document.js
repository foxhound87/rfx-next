/* eslint react/no-danger: 0 */
import 'isomorphic-fetch';
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

/* STYLES */
import stylesheet from '@/app/styles.css';

export default class AppDocument extends Document {

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width, height=device-height, shrink-to-fit=no" />
          <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        </Head>
        <body className="helvetica mid-gray bg-near-white">
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
