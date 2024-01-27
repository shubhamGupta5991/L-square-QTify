import React from "react";
import { Tooltip, Chip } from "@mui/material";
import  styles from "./Card.module.css";
import { Link } from "react-router-dom";

const Cards = ({ data, type }) => {
  function card(type) {
    switch (type) {
      case "album": {
        const { image, title, follows, slug, songs } = data;
        console.log(songs);

        return (
          <Tooltip
            title={`${songs.length} songs`}
            placement="top"
            className="body"
          >
            <Link to={`/album/${slug}`} className={styles.card}>
              <div className={styles.image}>
                <img src={image} alt="album" loading="lazy" />
                <div className={styles.chipParent}>
                  <Chip
                    label={`${follows} follows`}
                    size="small"
                    className={styles.chip}
                  />
                </div>
              </div>
              <div className={styles.contents}>
                <p>{title}</p>
              </div>
            </Link>
          </Tooltip>
        );
      }

      case "song": {
        const { image, title, follows, slug, songs } = data;
        console.log(songs);

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
