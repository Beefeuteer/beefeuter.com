import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

function BeefHome() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    //  create a container for the body responsive to the screen size
    <div className="beefhome">
      <div className="beefhome__content">
        <div className="d-flex justify-content-center align-items-center">
          <section>
            <h1 className="beefhome__title">
              <span className="banner__txt__rotate__name">{`Hi! I'm Bugra`}</span>
              <span
                dataPeriod="1000"
                data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'
              >
                <span className="wrap">
                  {"<"}
                  {text}
                  {"/>"}
                </span>
              </span>
            </h1>

            <p className="beefhome__subtitle">
              <br />
              I'm a Front-end web developer that creates websites and web apps
              with clean code,proper versioning, optimized tools, and up-to-date
              technologies. <br /> <br /> Apart from knowing several frameworks,
              I can also conveniently use vanilla HTML, CSS, and JS.
            </p>

            <button onClick={() => console.log("connect")}>
              Let’s Connect
              {/* <ArrowRightCircle size={25} /> */}
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

export default BeefHome;
