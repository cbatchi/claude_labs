import React from "react"
import { footerContents } from "../../datas/datas";
import './footer.style.css';

const FooterComponent = () => {
  return (
    <div className="footer container">
      <div className="footer-lists">
        {footerContents["items"].map((fn, index) => (
          <ul className="footer-list" key={index}>
            {fn.map((content, subIndex) => (
              <li key={subIndex}>
                <a href="#!">{content}</a>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}

export default FooterComponent
