import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

export const socials = [
  {
    icon: <FaFacebook />,
    link: 'https://www.instagram.com/',
  },
  {
    icon: <FaWhatsapp />,
    link: 'https://www.facebook.com/',
  },
  {
    icon: <FaTwitter />,
    link: 'https://twitter.com/',
  },
  {
    icon: <FaInstagram />,
    link: 'https://twitter.com/',
  },
];

export const links = [
  { to: 'https://enugustate.gov.ng/our-history/', text: 'About Enugu' },
  { to: 'https://enugustate.gov.ng/the-governor/', text: 'Administration' },
  { to: 'https://enugustate.gov.ng/news-3/', text: 'News & Blog' },
];

export const companyLinks = [
  { to: 'https://enugustate.gov.ng/parastatals/', text: 'Other MDAs' },
  { to: 'https://enugustate.gov.ng/lgas/', text: 'LGAs' },
  { to: 'https://enuguemploymentportal.org/', text: 'Employment' },
];

export function cashFormater(cash) {
  cash += "";
  const indexOfDecimal = cash.indexOf(".");

  cash =
    cash.substr(indexOfDecimal).length > 3
      ? cash.substr(0, indexOfDecimal + 3)
      : cash;
  cash += cash.indexOf(".") === -1 ? ".00" : "";
  cash = cash.substr(cash.indexOf(".")).length === 2 ? `${cash}0` : cash;
  return cash
    .replace(/(\d((?=(.{3})+$)))/g, "$1,")
    .replace(/,\./, ".")
    .replace(".00", "");
}