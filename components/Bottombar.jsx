import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="sponsor-section">
        {/* Sponsor images go here */}
        <img
          src="https://static.igem.wiki/teams/4629/wiki/chulalongkorn-university-official-logo-svg.png"
          className="sponsor-image"
        />
        <img
          src="https://static.igem.wiki/teams/4629/wiki/bangchak.png"
          className="sponsor-image"
        />
        <img
          src="https://static.igem.wiki/teams/4629/wiki/logo-mahachok-fruits-01.png"
          className="sponsor-image"
        />

        <img
          src="https://static.igem.wiki/teams/4629/wiki/ris.png"
          className="sponsor-image"
        />

        {/* Add more sponsor images as needed */}
      </div>
      <div className="cc-license">
        {/* Creative Commons license information */}

        <p class="mb-0">
          <small>
            &copy; 2023 - Content on this site is licensed under a{" "}
            <a
              class="subfoot"
              href="https://creativecommons.org/licenses/by/4.0/"
              rel="license"
            >
              Creative Commons Attribution 4.0 International license
            </a>
            .
          </small>
        </p>
        <p>
          <small>
            The repository used to create this website is available at{" "}
            <a href="https://gitlab.igem.org/2023/thailand-ris">
              gitlab.igem.org/2023/thailand-ris
            </a>
            .
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
