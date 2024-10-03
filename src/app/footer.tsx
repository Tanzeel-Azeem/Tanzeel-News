import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h5 className="text-xl font-bold">Tanzeel Newz</h5>
          <p className="text-lg">
            Our mission is to deliever the latest news to our Customers !!!
          </p>
          <p className="text-sm">
            © {new Date().getFullYear()} Tanzeel Newz. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com/story.php?story_fbid=122101203194514402&substory_index=401785366277678&id=61565432076923&mibextid=qi2Omg&rdid=rKFagGYd7egL9gki"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-xl hover:text-blue-500" />
          </a>

          <a
            href="https://www.linkedin.com/in/tanzeel-azeem-463049303?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-xl hover:text-blue-600" />
          </a>
          <a
            href="https://www.instagram.com/tanjoo.69/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram className="text-xl hover:text-slate-100" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
