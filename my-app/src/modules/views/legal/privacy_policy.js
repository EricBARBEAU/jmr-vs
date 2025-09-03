function PrivacyPolicy() {
  return (
    <div className="view view_legal">
      {/*Hero*/}
      <div className="hero legal_hero ctnr_cntr">
        <div className="hero_content legal_hero-content">
          <div className="content_copy">
            <h1 className="content_copy-main">Privacy Policy</h1>
            <div className="content_copy-secondary">
              <div className="last_update">
                <span>LAST UPDATED</span>
                2 September 2025
              </div>
              <p>
                This Privacy Policy explains how <b>JMR Visa Services </b> collects, uses, and protects your personal data when you use 
                the contact or quotation forms on this website.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*Content*/}
      <div className="legal_content ctnr_cntr">
        <div className="content_list">
          
          <div className="legal_blk">
            <h3 className="title">Data collected</h3>
            <ul className="body">
              <li><b>Contact form:</b> full name, email address, and message.</li>
              <li><b>Quotation form:</b> full name, email address, message, chosen service, and chosen sub-service.</li>
            </ul>
          </div>

          <div className="legal_blk">
            <h3 className="title">Use of data</h3>
            <ul className="body">
              <li><b>Purpose:</b> respond to inquiries and provide quotations.</li>
              <li><b>Marketing:</b> data is not used for newsletters or promotional purposes.</li>
              <li><b>Storage:</b> form submissions are forwarded by EmailJS to the business email account and are not stored elsewhere.</li>
            </ul>
          </div>

          <div className="legal_blk">
            <h3 className="title">Data retention</h3>
            <ul className="body">
              <li><b>Duration:</b> emails remain in the business mailbox until manually deleted by the owner.</li>
              <li><b>Automation:</b> there is no automated retention period configured at this time.</li>
            </ul>
          </div>

          <div className="legal_blk">
            <h3 className="title">Data sharing</h3>
            <ul className="body">
              <li><b>Third parties:</b> data is never shared with third parties.</li>
            </ul>
          </div>

          <div className="legal_blk">
            <h3 className="title">User rights</h3>
            <ul className="body">
              <li><b>Rights:</b> in accordance with the GDPR, you have the right to access, correct, or request the deletion of your personal data.</li>
              <li><b>Contact:</b> requests may be sent to <b>jmrfvs@gmail.com</b>.</li>
            </ul>
          </div>

          <div className="legal_blk">
            <h3 className="title">Cookies</h3>
            <ul className="body">
              <li><b>Usage:</b> this website does not use cookies, except those strictly necessary for its operation.</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy;
