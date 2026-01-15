import { DiReact } from "react-icons/di";
import { FaGithub, FaHeart, FaInstagram, FaLinkedin } from "react-icons/fa";

const styles = {
  link: "text-2xl text-secondary-200 hover:brightness-150 transition-all",
};

const Footer = () => {
  return (
    <footer className="mt-20 w-full flex-col-center gap-y-4 bg-secondary-900 px-8 pt-8 pb-4">
      <div className="flex-row-v-center gap-x-4">
        <a
          className={styles.link}
          href="https://www.linkedin.com/in/ramceconcepcion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin />
        </a>
        <a
          className={styles.link}
          href="https://github.com/rangelojc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub />
        </a>
        <a
          className={styles.link}
          href="https://www.instagram.com/rangelojc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>
      </div>
      <div className="flex-row-v-center gap-x-2 text-neutral-50">
        <span>Ramce Concepcion</span>
        <span>© {new Date().getFullYear()}</span>
      </div>

      <span className="mt-4 text-sm flex-row-v-center gap-x-1">
        Built with <DiReact className="size-5" /> and a little bit of
        <FaHeart className="size-4 ml-1" />
      </span>
    </footer>
  );
};

export default Footer;
