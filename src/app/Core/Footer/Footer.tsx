import React from "react";
import styles from "../../styles/footer.module.scss";
import { GLOBAL_CONSTANTS } from "@/app/commons/constanst/global_constanst.constans";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="footer__logo">
          <img
            src={GLOBAL_CONSTANTS.APP_LOGO}
            alt="logo"
          />
        </div>

        <div className="footer__contact">
          <a href="https://www.facebook.com/">
            <i className="fas fa-phone-alt"></i>
            {GLOBAL_CONSTANTS.APP_CONTACT_PHONE} {" | "}
          </a>
          <a href="https://www.facebook.com/">
            <i className="fas fa-envelope"></i>
            {GLOBAL_CONSTANTS.APP_CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </footer>
  );
};
