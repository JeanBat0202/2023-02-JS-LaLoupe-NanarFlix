import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Rating from "./Rating";
import CommentBox from "./AddComment";

export default function MovieDetails() {
  const [currentTv, setCurrentTv] = useState();

  const { id } = useParams();

  const getOneTv = () => {
    fetch(
      `https://api.themoviedb.org/3/tv/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => setCurrentTv(data));
  };

  useEffect(() => {
    getOneTv();
  }, [id]);

  if (!currentTv) {
    return <p>Please wait...</p>;
  }

  return (
    <div className="parent md:mr-100px">
      <div className="div1 flex justify-center ">
        <img
          className="imgMovieDetail h-80 w-auto mt-4 md:mb-4 "
          src={`https://www.themoviedb.org/t/p/w400${currentTv.poster_path}`}
          alt={currentTv.name}
        />
      </div>

      <div className="div2">
        <div className="flex justify-between ">
          <h2 className="text-5xl mt-3 ml-3 md:mt-5 text-[#9EBA9B]">
            {currentTv.name}
          </h2>
        </div>

        <div className=" flex md:pr-12 mb-4">
          <Rating />
        </div>
        <div className="  text-sm ml-3 md: text-white">
          Sortie : {currentTv.first_air_date}
        </div>
        <div className="  text-sm ml-3 md: text-white">
          Nombre de saison : {currentTv.number_of_seasons}
        </div>
        <div className="  text-sm ml-3 md: text-white">
          Nombre d'épisodes : {currentTv.number_of_episodes}
        </div>
      </div>

      <div className="div4 md:mt-8 ">
        <h2 className="text-2xl mt-6 ml-3  text-white">SYNOPSIS :</h2>
        {currentTv.overview ? (
          <p className="text-left ml-3 mr-3 md:text-left text-[#9EBA9B]">
            {currentTv.overview}
          </p>
        ) : (
          <p className="text-left ml-3 mr-3 md:text-left text-[#9EBA9B]">
            Oups... Ils semblerait que la description de la série ne soit pas
            disponible ! N'hésite pas à nous envoyer un message pour que l'on
            corrige ça !
          </p>
        )}
      </div>
      <CommentBox />
    </div>
  );
}
