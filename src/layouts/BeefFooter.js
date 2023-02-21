import {
  faGithub,
  faLinkedin,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Container } from "react-bootstrap";

function BeefFooter() {
  return (
    //    make a footer that stays in bottom of page
    // <div style={{ padding: "5px" }}>
    <Container>
      <div className="footer">
        <div className="footer__icongroup">
          <Button
            onClick={() =>
              window.open("https://github.com/Beefeuteer", "_blank")
            }
            className="footer__iconbutton"
            variant="outline-dark"
          >
            <FontAwesomeIcon className="footer__icon" icon={faGithub} />
          </Button>
          <Button
            onClick={() =>
              window.open("https://linkedin.com/in/beefeuter", "_blank")
            }
            className="footer__iconbutton"
            variant="outline-dark"
          >
            <FontAwesomeIcon className="footer__icon" icon={faLinkedin} />
          </Button>
          <Button
            onClick={() =>
              window.open(
                "https://stackoverflow.com/users/16260715/bugra-kucuk",
                "_blank"
              )
            }
            className="footer__iconbutton"
            variant="outline-dark"
          >
            <FontAwesomeIcon className="footer__icon" icon={faStackOverflow} />
          </Button>
        </div>
      </div>
    </Container>
    // </div>
  );
}

export default BeefFooter;
