import React from "react";
import styles from "../../styles/footer.module.scss";
import { GLOBAL_CONSTANTS } from "@/app/commons/constanst/global_constanst.constans";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer}>
        <div className="footer__logo">
          <Image
            src={GLOBAL_CONSTANTS.APP_LOGO_FOOTER}
            alt="logo"
            width={50}
            height={30}
          />
        </div>

        <div className="footer__contact">
          <Link href="https://www.facebook.com/">
            <i className="fas fa-phone-alt"></i>
            {GLOBAL_CONSTANTS.APP_CONTACT_PHONE} {" | "}
          </Link>
          <Link href="https://www.facebook.com/">
            <i className="fas fa-envelope"></i>
            {GLOBAL_CONSTANTS.APP_CONTACT_EMAIL}
          </Link>
        </div>
      </div>
    </footer>
  );
};
