import React from "react";
import { Tooltip, Chip } from "@mui/material";
import "./Card.css";
import { Link } from "react-router-dom";

const Cards = ({ data, type }) => {
  function card(type) {
    switch (type) {
      case "album": {
        const { image, title, follows, slug, songs } = data;

        return (
          <Tooltip
            title={`${songs.length} songs`}
            placement="top"
            className="body"
          >
            <Link to={`/album/${slug}`} className="card">
              <div className="image">
                <img src={image} alt="album" loading="lazy" />
                <div className="chipParent">
                  <Chip
                    label={`${follows} follows`}
                    size="small"
                    className="chip"
                  />
                </div>
              </div>
              <div className="content">
                <p>{title}</p>
              </div>
            </Link>
          </Tooltip>
        );
      }

      case "song": {
        const { image, title, follows, slug, songs } = data;

        return (
          <Tooltip
            title={`${songs.length} songs`}
            placement="top"
            className="body"
          >
            <Link to={`/album/${slug}`} className="card">
              <div className="image">
                <img src={image} alt="album" loading="lazy" />
                <div className="chipParent">
                  <Chip
                    label={`${follows} follows`}
                    size="small"
                    className="chip"
                  />
                </div>
              </div>
              <div className="content">
                <p>{title}</p>
              </div>
            </Link>
          </Tooltip>
        );
      }

      default:
        return <></>;
    }
  }
  return card(type);
};

export default Cards;
