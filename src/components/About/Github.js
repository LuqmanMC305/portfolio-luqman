import React from "react";
import {useState, useEffect} from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {

  const [isMobile, setIsMobile] = useState (window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

     // Listen for browser resize events
    window.addEventListener("resize", handleResize);

     // Remove the listener when the component is removed
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
        <GitHubCalendar
          username="luqmanmc305"
          blockSize={isMobile ? 10 : 15}
          blockMargin={isMobile ? 3 : 5}
          color="#c084f5"
          fontSize={isMobile ? 10 : 14}
        />
    </Row>
  );
}

export default Github;
