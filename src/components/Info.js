import React from "react";

const Info = ({ info }) => {
  if (Object.keys(info).length === 0) return null;

  const {
    strArtistThumb,
    strGenre,
    strBiographyES,
    strBiographyEN,
    strFacebook,
    strTwitter,
    strLastFMChart,
  } = info;

  const bioEs = <p className="card-text">{strBiographyES}</p>;
  const bioEN = <p className="card-text">{strBiographyEN}</p>;

  return (
    <div className="card border-light">
      <div className="card-header bg-primary text-ligth font-weight-bold">
        Información Artista
      </div>

      <div className="card-body">
        <img src={strArtistThumb} alt="Logo Artista" />
        <p className="card-text">Género: {strGenre}</p>
        <h2 className="card-text">Biografía: {strGenre}</h2>
        {strBiographyES === null ? bioEN : bioEs}
        <p className="card-text">
          {strFacebook === null ||
          strTwitter === null ||
          strLastFMChart === null ? null : (
            <>
              <a
                href={`https://${strFacebook}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href={`https://${strTwitter}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href={`${strLastFMChart}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-lastfm"></i>
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Info;
