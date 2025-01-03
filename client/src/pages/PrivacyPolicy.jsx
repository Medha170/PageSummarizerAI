import React from 'react';
import './../styles/PrivacyPolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy">
      <h1>Privacy Policy</h1>
      <p>Effective Date: 03/01/2025</p>
      <p>
        <strong>Page Summarizer</strong> is committed to protecting your privacy. This policy explains how we collect, use, and safeguard your information.
      </p>

      <h2>Information We Collect</h2>
      <p>
        The extension processes web page content locally within your browser to summarize it. No personal data is collected, stored, or transmitted by the extension itself. However, the content of the active webpage may be sent to the Gemini API for processing in order to generate a summary.
      </p>

      <h2>How We Use the Information</h2>
      <p>
        The data processed by the extension is used solely for providing summarization functionality. The content of the page is sent to the Gemini API, which generates a summary based on the provided text. The summarized content is then displayed locally in your browser.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We use the <strong>Gemini API</strong> to generate the AI-based summaries of web pages. By using this extension, you acknowledge that the content of the web page may be sent to Gemini's servers for processing. The data is used only for generating a summary and is not stored or used for any other purpose.
      </p>
      <p>
        For more details on how Gemini handles data, you can refer to their privacy policy: <a href="https://support.google.com/gemini/answer/13594961?hl=en">https://support.google.com/gemini/answer/13594961?hl=en</a> .
      </p>

      <h2>Data Retention</h2>
      <p>
        The content sent to the Gemini API is not stored or retained by the service once the summarization process is completed. No personal data is collected, stored, or transmitted by the extension beyond the summarization process.
      </p>

      <h2>Your Rights</h2>
      <p>
        You can uninstall the extension at any time to stop further processing of data. Once the extension is uninstalled, no additional data will be sent to Gemini or any other third party.
      </p>

      <h2>Security</h2>
      <p>
        All data transmitted to the Gemini API is encrypted using HTTPS to ensure secure communication and protect your privacy.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions or concerns regarding this privacy policy or the data handling practices of our extension, please contact us at: <a href="mailto:medha.shree.official@gmail.com">medha.shree.official@gmail.com</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
