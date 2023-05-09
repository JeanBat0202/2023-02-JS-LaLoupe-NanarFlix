import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CommentBox from "./AddComment";
import Rating from "./Rating";

export default function MovieDetails() {
  const [currentMovie, setCurrentMovie] = useState();

  const { id } = useParams();

  const getOneMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${
        import.meta.env.VITE_API_KEY
      }&language=fr|en&over`
    )
      .then((res) => res.json())
      .then((data) => setCurrentMovie(data));
  };

  useEffect(() => {
    getOneMovie();
  }, [id]);

  if (!currentMovie) {
    return <p>Please wait...</p>;
  }

  return (
    <div className="parent md:mr-100px">
      <div className="div1 flex justify-center ">
        <img
          className="imgMovieDetail h-80 w-auto mt-4 md:mb-6 "
          src={`https://www.themoviedb.org/t/p/w400${currentMovie.poster_path}`}
          alt={currentMovie.title}
        />
      </div>

      <div className="div2">
        <div className="flex justify-between ">
          <h2 className="text-5xl mt-3 ml-3 md:mt-5 text-[#9EBA9B]">
            {currentMovie.title}
          </h2>
        </div>

        <div className=" flex md:pr-12 mb-4">
          <Rating id={id} />
        </div>
        <div className="  text-sm ml-3 md: text-white">
          Sortie : {currentMovie.release_date}
        </div>
      </div>

      <div className="div4 md:mt-8 ">
        <h2 className="text-2xl mt-6 ml-3  text-white">SYNOPSIS :</h2>
        {currentMovie.overview ? (
          <p className="text-left ml-3 mr-3 md:mr-32 md:text-left text-[#9EBA9B]">
            {currentMovie.overview}
          </p>
        ) : (
          <p className="text-left ml-3 mr-3 md:text-left text-[#9EBA9B]">
            Oups... Il semblerait que la description du film ne soit pas
            disponible ! N'hésite pas à nous envoyer un message pour que l'on
            corrige ça !
          </p>
        )}
      </div>
      <CommentBox />
    </div>
  );
}
