import React, {useEffect, useState} from "react";
import Carousel from "../../component/carousel/Carousel";
import "./home.scss";
import { AiOutlinePlayCircle, AiOutlineHeart } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { useMusic } from "../../hooks/useMusic";
import UseApi from "../../API/UseApi";
import { Link } from "react-router-dom";

const Home = () => {
  const { listTrack } = useMusic();

  const [top, setTop] = useState([])
//topMusic
    useEffect(() => {
        const topMusic = async () => {
        try {
            const params = {size: 3}
            const response = await UseApi.topSong(params);
            response ? setTop(response) : setTop([])
        } catch (error) {
            console.log("error get list playlist: ", error);
        }
        };
        topMusic();
    }, []);

    // console.log(top)
  return (
    <div className="home-page-container">
      <div className="topic-music">
        <h3 className="topic tittle">Topic to day</h3>
        <Carousel show={2}>
            {
                listTrack.slice(0,5).map((val) => (
                    <div className="topic-item carousel-item" key={val.id}>
                        <div style={{ padding: 8 }}>
                        <img
                            src={val.album.cover_big}
                            alt="placeholder"
                            style={{ width: "100%", height: 250 }}
                        />
                        </div>
                    </div>
                ))
            }
        </Carousel>
      </div>

      <div className="playlists-music">
        <div className="playlists-music-header">
          <h3 className="playlists tittle">Playlists</h3>
          <Link to={'/newsong'} className="playlists-more more">More</Link>
        </div>
        <div className="playlists-music-box">

            {listTrack.slice(0,5).map((val) => (

                <div className="playlist-music-item" key={val.id}>
                    <div className="playlist-music-item-img">
                    <img
                        src={val.artist.picture}
                        alt="placeholder"
                    ></img>
                    <div className="playlist-music-item-img-hov">
                        <Tippy delay={[0, 200]} content="Add to playlist">
                        <div className="hov-heart">
                            <span>
                            <AiOutlineHeart />
                            </span>
                        </div>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="Play">
                        <div className="hov-play">
                            <span>
                            <AiOutlinePlayCircle />
                            </span>
                        </div>
                        </Tippy>
                        <Tippy delay={[0, 200]} content="More">
                        <div className="hov-more">
                            <span>
                            <FiMoreHorizontal />
                            </span>
                        </div>
                        </Tippy>
                    </div>
                    </div>
                    <div className="playlist-music-item-desc">
                    <p className="playlists-tittle">{val.title}</p>
                    <p className="playlists-singer">{val.artist.name}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>

      <div className="top-music">
        <div className="top-music-header ">
          <h3 className="tops tittle">Top</h3>
          <p className="tops-more more">More</p>
        </div>
        <div className="top-music-box">
        
        {top?.map((val,idx) => (
          <div className="top-music-item" key={val.id}>
            <div className="top-music-item-content">
              <div className="top-music-item-img">
                <img
                  src={val.artist.picture}
                  alt="placeholder"
                ></img>
                <div className="top-music-item-img-hov">
                  <div className="hov-play">
                    <span>
                      <AiOutlinePlayCircle />
                    </span>
                  </div>
                </div>
              </div>
              <div className="top-music-item-status">
                <div className="top-music-item-desc">
                  <p className="top-tittle">{val.title}</p>
                  <p className="top-singer">{val.artist.name}</p>
                </div>
                <div className="top-number">{`#${idx +1}`}</div>
              </div>
            </div>
          </div>

        ))}

         
        </div>
      </div>
    </div>
  );
};

export default Home;
