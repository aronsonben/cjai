import { motion } from "motion/react";

export default function Contact({ onBack }) {
  return (
    <motion.div
      id="contact-container"
      className="w-full h-full flex flex-col justify-start items-center p-4 md:pt-0 md:p-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div id="contact-header" className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 relative w-full">
        <motion.button
          onClick={onBack}
          className="text-[#E6E5DB] flex items-center gap-2 text-xs px-2 py-1 md:px-3 md:py-2 bg-[#1a1a1a] cursor-pointer rounded-lg border-solid border-[1px] border-transparent md:absolute md:left-0 md:text-lg"
           whileHover={{ scale: 1.15, backgroundColor: "#1a1a1aa8" }}
          whileTap={{ scale: 0.95 }}
        >
          Back
        </motion.button>
        <h1 className="text-[#E6E5DB] text-4xl font-bold">Contact</h1>
      </div>
      <motion.div id="contact-form" className="flex flex-col items-center justify-center gap-4 md:px-8 w-full mt-4" initial={{ opacity: 0 }} animate={{ opacity: 1, transition: { duration: 2 } }} exit={{ opacity: 0 }}>
        <div id="mc_embed_shell" className="flex flex-col items-center justify-center gap-4 max-w-screen">
          <link
            href="//cdn-images.mailchimp.com/embedcode/classic-061523.css"
            rel="stylesheet"
            type="text/css"
          />
          <style type="text/css">
            {`
              #mc_embed_signup {
                background: #E6E5DB;
                color: #61665c;
                padding: 20px 10px;
                border: 1px solid #9d9d9d;
                border-radius: 10px;
                clear: left;
                font: 14px Helvetica, Arial, sans-serif;
                width: 600px;
                max-width: 90%;
              }
            `}
          </style>
          <div id="mc_embed_signup">
            <form
              action="https://club.us21.list-manage.com/subscribe/post?u=19977dc529e445d5c64a4f635&amp;id=3fe1be1929&amp;f_id=004543e6f0"
              method="post"
              id="mc-embedded-subscribe-form"
              name="mc-embedded-subscribe-form"
              className="validate"
              target="_blank"
            >
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                {/* <div className="indicates-required">
                  <span className="asterisk">*</span> indicates required
                </div> */}
                <div id="firstname" className="mc-field-group">
                  <label htmlFor="mce-FNAME">
                    First Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="FNAME"
                    className="required text"
                    id="mce-FNAME"
                    required
                  />
                </div>
                <div id="lastname" className="mc-field-group">
                  <label htmlFor="mce-LNAME">
                    Last Name <span className="asterisk">*</span>
                  </label>
                  <input
                    type="text"
                    name="LNAME"
                    className="required text"
                    id="mce-LNAME"
                    required
                  />
                </div>
                <div id="message" className="mc-field-group">
                  <label htmlFor="mce-MESSAGE">
                    Message
                  </label>
                  <input
                    type="text"
                    name="MESSAGE"
                    className="text"
                    id="mce-MESSAGE"
                  />
                </div>
                <div id="email" className="mc-field-group">
                  <label htmlFor="mce-EMAIL">
                    Email Address <span className="asterisk">*</span>
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    required
                  />
                </div>
                <div id="mce-responses" className="clear">
                  <div
                    className="response"
                    id="mce-error-response"
                    style={{ display: "none" }}
                  ></div>
                  <div
                    className="response"
                    id="mce-success-response"
                    style={{ display: "none" }}
                  ></div>
                </div>
                <div
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-5000px" }}
                >
                  <input
                    type="text"
                    name="b_19977dc529e445d5c64a4f635_3fe1be1929"
                    tabIndex="-1"
                  />
                </div>
                <div className="clear">
                  <input
                    type="submit"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                    value="Subscribe"
                    style={{ backgroundColor: "#61665c", color: "#E6E5DB"}}
                  />
                </div>
              </div>
            </form>
          </div>
          <script
            type="text/javascript"
            src="//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js"
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
                (function($) {
                  window.fnames = new Array();
                  window.ftypes = new Array();
                  fnames[0] = 'EMAIL';
                  ftypes[0] = 'email';
                  fnames[1] = 'FNAME';
                  ftypes[1] = 'text';
                  fnames[2] = 'LNAME';
                  ftypes[2] = 'text';
                  fnames[3] = 'ADDRESS';
                  ftypes[3] = 'address';
                  fnames[4] = 'PHONE';
                  ftypes[4] = 'phone';
                  fnames[5] = 'BIRTHDAY';
                  ftypes[5] = 'birthday';
                  fnames[6] = 'MESSAGE';
                  ftypes[6] = 'text';
                })(jQuery);
                var $mcj = jQuery.noConflict(true);
              `,
            }}
          ></script>
        </div>
      </motion.div>
    </motion.div>
  );
}
