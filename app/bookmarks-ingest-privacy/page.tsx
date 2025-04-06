import React from 'react';

export default function BookmarksIngestPrivacy() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">AI Bookmarks Ingest Chrome Extension Privacy Policy</h1>
      
      <div className="prose prose-lg text-white">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
          <p>
            This privacy policy explains how we handle your bookmarks data during the ingestion process.
            We take your privacy seriously and are committed to protecting your personal information.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Data Collection</h2>
          <p>
            When you use our bookmarks ingestion service, we access the following information:
          </p>
          <ul className="list-disc pl-6 mt-2">
            <li>Bookmark URLs</li>
            <li>Bookmark titles</li>
            <li>Bookmark descriptions (if available)</li>
            <li>Creation dates</li>
          </ul>

          <p> However, all this happens on client side, we do not store any data on our servers. </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our data practices, please contact us at:
          </p>
          <p className="mt-2">
            Email: dragos@colorfulcoding.com
          </p>
        </section>
      </div>
    </div>
  );
} 