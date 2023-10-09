import { useState, useEffect } from "react";
import "./style.scss";
import { useNavigate } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { useSelector } from "react-redux";
import Img from "../../../hooks/useFetch";
import ContentWrapper from "../../../compoenents/contentWrapper/ContentWrapper"

const HeroBanner = () => {
  const [background, setBackground] = useState("");
  const [query, setQuery] = useState("");
  const nav = useNavigate();
  const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch("/movie/upcoming");

  useEffect(() => {
    const bg = url.backdrop + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);

  const searchQueryHandler = (e) => {
    if (e.key == "Enter" && query.length > 0) {
      nav(`/search/${query}`);
    }
  };

  return (
    <div className="heroBanner">
      {!loading && (
        <div className="backdrop-img">
          <Img src={background} />
        </div>
      )}

      <div className="opacityLayer"></div>

      <ContentWrapper>
        <div className="heroBannerContent">
          <span className="title">Welcome.</span>
          <span className="subTitle">Millions of movies, TV shows and people to discover. Explore Now.</span>
        </div>

        <div className="searchInput">
          <input
            type="text"
            placeholder="Search for a movie or TV show..."
            onKeyUp={searchQueryHandler}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button>Search</button>
        </div>
      </ContentWrapper>
    </div>
  );
};

export default HeroBanner;
