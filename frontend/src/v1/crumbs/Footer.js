import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone, faLocationDot } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {

  const tabs = [
    { tab: 'Home', link: "/home" },
    { tab: 'About', link: "/about" },
    { tab: 'Services', link: "/services" },
    { tab: 'Projects', link: "/contact" },
  ]

  const contacts = [
    { type: "Email", icon: faPhone, link: "tel:+1(919)271-0051" },
    { type: "Phone", icon: faEnvelope, link: "mailto:info@icengineeringinc.com" }
  ]

  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center -mx-5 -my-2">
          {tabs.map((tab) => (
            <div key={tab.tab} className="px-5 py-2">
              <a href={tab.link} className="text-base leading-6 text-gray-500 hover:text-gray-900">{tab.tab}</a>
            </div>
          ))}
        </nav>

        <div className="flex justify-center mt-8 space-x-6 w-full">
          {contacts.map((contact) => (
            <a href={contact.link} className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{contact.type}</span>
              <FontAwesomeIcon icon={contact.icon} className="w-6 h-6" aria-hidden="true" fill="currentColor" />
            </a>
          ))}
        </div>

        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          <FontAwesomeIcon icon={faLocationDot} className="w-6 h-6 bg-white" aria-hidden="true" fill="currentColor" />
          5409 Dillard Dr. Raleigh, NC 27606, USA
        </p>
        <p className="mt-8 text-base leading-6 text-center text-gray-400">
          © 2024 IC Engineering Inc, Inc. All rights reserved.
        </p>
      </div>
    </section>

  );
}

export default Footer;
