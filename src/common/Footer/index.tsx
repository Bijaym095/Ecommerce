import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

import Cards from "../../assets/images/cards.png";
import PlayStore from "../../assets/images/playstore.png";
import AppStore from "../../assets/images/appstore.png";
import Container from "../../common/Container";

const Footer: React.FC = () => {
  const footerTitleStyles = "font-bold text-[1.2rem] capitalize mb-4";

  return (
    <footer className="min-h-[350px] bg-black text-white">
      {/* ============ footer-links ======== */}
      <Container className="grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <NavLink className="mb-4 inline-block text-lg font-bold" to="/">
            Ecommerce
          </NavLink>

          {/* ============= contact ========= */}
          <h5 className={`${footerTitleStyles}`}>Contact</h5>

          <ul className="mb-4 space-y-2">
            <li>Kathmandu , Nepal</li>

            <li>
              <a href="tel:+977 9800 0000 00">+977 9800 0000 00</a>
            </li>

            <li>
              <a href="mailto:abc@info.com">abc@info.com</a>
            </li>
          </ul>
          {/* ============= contact ========= */}

          {/*============= social-links ============ */}
          <h5 className={`${footerTitleStyles}`}>Follow Us</h5>

          <ul className="mb-4 flex space-x-2">
            <li>
              <NavLink target="_blank" to="/">
                <FaFacebook />
              </NavLink>
            </li>

            <li>
              <NavLink target="_blank" to="/">
                <FaTwitter />
              </NavLink>
            </li>

            <li>
              <NavLink target="_blank" to="/">
                <FaInstagram />
              </NavLink>
            </li>

            <li>
              <NavLink target="_blank" to="/">
                <FaYoutube />
              </NavLink>
            </li>
          </ul>
          {/*============== social-links ============*/}
        </div>

        {/* =============== About ================= */}
        <div>
          <h5 className={`${footerTitleStyles}`}>About</h5>

          <ul className="space-y-2">
            <li>
              <NavLink to="/">About Us</NavLink>
            </li>

            <li>
              <NavLink to="/">Privacy Policy</NavLink>
            </li>

            <li>
              <NavLink to="/">Terms and conditions</NavLink>
            </li>

            <li>
              <NavLink to="/">Contact Us</NavLink>
            </li>
          </ul>
        </div>
        {/* =============== About ================= */}

        {/* =============== Accounts ============== */}
        <div>
          <h5 className={`${footerTitleStyles}`}>My Account</h5>

          <ul className="space-y-2">
            <li>
              <NavLink to="/signin">SignIn</NavLink>
            </li>

            <li>
              <NavLink to="/cart">View Cart</NavLink>
            </li>

            <li>
              <NavLink to="/">Help</NavLink>
            </li>
          </ul>
        </div>
        {/* =============== Accounts ============== */}

        {/* =============== App-details =========== */}
        <div>
          <h5 className={`${footerTitleStyles}`}>Install App</h5>

          <p className="mb-4">From App Store or Google play</p>

          <div className="mb-4 space-x-2">
            <NavLink type="button" role="button" target="_blank" to="/">
              <picture>
                <img
                  className="w-[100px] object-cover"
                  src={AppStore}
                  alt="Download on the appstore"
                />
              </picture>
            </NavLink>

            <NavLink type="button" role="button" target="_blank" to="/">
              <picture>
                <img
                  className="w-[100px] object-cover"
                  src={PlayStore}
                  alt="Get it on playstore"
                />
              </picture>
            </NavLink>
          </div>

          <p className="mb-4">Secured Payment Gateways</p>

          <picture>
            <img
              className="h-[36px] object-cover"
              src={Cards}
              alt="cards-alt"
            />
          </picture>
        </div>
        {/* =============== App-details =========== */}
      </Container>
      {/* ================= footer-links ========== */}

      {/* ======== copyright ======= */}
      <Container className="flex items-center justify-center py-5">
        <p className="text-center">
          Copyright &copy; 2023 - All rights reserved.
        </p>
      </Container>
      {/* ======== copyright ======= */}
    </footer>
  );
};

export default Footer;
