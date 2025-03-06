import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-base-200 text-base-content">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/icon-iatauvFgwUEpsMfmE1gIURfiRzzxY7.png"
                alt="TechWizard Labs"
                className="h-10 w-10"
              />
              <span className="text-lg font-bold">TechWizard Labs</span>
            </div>
            <p className="max-w-xs">
              Code, innovate, launch. All by one wizard.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/apps"
                  className="hover:text-primary transition-colors"
                >
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="mb-2">Have questions or feedback?</p>
            <a
              href="mailto:support@techwizardlabs.org"
              className="text-primary hover:underline"
            >
              support@techwizardlabs.org
            </a>
          </div>
        </div>

        <div className="border-t border-base-300 mt-8 pt-6 text-center">
          <p>&copy; {currentYear} TechWizard Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
