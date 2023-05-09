import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";

const datas = [
  {
    id: 457712,
    image:
      "https://images-na.ssl-images-amazon.com/images/S/pv-target-images/277bd83c2b5426e8dac7f5df59c380cd864f4436d7b200ff023aaf17b4d9c210._RI_V_TTW_.jpg",
    title: "The velocipastor",
    genre: "Horreur",
    released: "03/05/2019",
    overview: `Après le décès de ses parents, un jeune prêtre se rend en Chine. Il hérite d'un pouvoir qui le rend capable de se transformer en dinosaure. Horrifié par cette faculté, l'homme d'église veut à tout prix s'en débarasser. Une prostituée le convainc cependant à utiliser cette force afin de combattre le crime et les ninjas.`,
  },
  {
    id: 10658,
    image: "https://www.lucasfilm.com/app/uploads/howard-marq.jpg",
    title: "Howard the Duck",
    genre: "Comédie",
    released: "10/12/1986",
    overview: `Une jeune chanteuse et un professeur qui veulent aider un canard à regagner sa planète d'origine, doivent affronter un monstre extra-terrestre.`,
  },
  {
    id: 205321,
    image:
      "https://images.ladepeche.fr/api/v1/images/view/5c33a73b8fe56f7c0f555495/hd/image.jpg?v=1",
    title: "Sharknado",
    genre: "Horreur",
    released: "24/10/2013",
    overview: `Un ouragan s'empare de Los Angeles. Des milliers de requins s'abattent sur la ville et terrorisent la population. Fin, un surfer également propriétaire de bar, accompagné de ses amis Baz et Nova, part à l'aventure afin de sauver son ex-femme April et leur fille Claudia.`,
  },
  {
    id: 510452,
    image:
      "https://imgr.cineserie.com/2021/06/b9727357548z.1_20210614082743_000gvviap81r.2-0.jpg?imgeng=/f_jpg/cmpr_0/w_1190/h_669/m_cropbox&ver=1",
    title: "All inclusive",
    genre: "Comédie",
    released: "13/02/2019",
    overview: `Planté par sa fiancée à l'aéroport, Bruno s'envole seul pour sa semaine de lune de miel dans un club 'All Inclusive' aux Caraïbes. Une mauvaise nouvelle n'arrivant jamais seule, il va devoir partager sa chambre avec Jean-Paul Cisse, éternel célibataire très envahissant. Avec Lulu, retraitée et veuve très open, Caroline, Manon et Sonia, trois copines venues enterrer le divorce de la première et Edouard Laurent, le directeur du club, les deux vacanciers ne sont pas prêts d'oublier leur séjour.`,
  },
  {
    id: 254474,
    image:
      "https://plotandtheme.files.wordpress.com/2015/05/zombeavers-poster.jpg",
    title: "Zombeavers",
    genre: "Horreur",
    released: "17/02/2015",
    overview: `Un groupe d'adolescents, partis pour un week-end de débauche au bord d'une rivière, se retrouve confronté à une horde de castors-zombies affamés. Pour réussir à rester en vie, les jeunes vont devoir affronter ces animaux d'une nouvelle espèce.`,
  },
  {
    id: 11891,
    image:
      "https://aws.vdkimg.com/film/2/5/2/0/252012_backdrop_scale_1280xauto.jpg",
    title: "Kung pow",
    genre: "Comédie",
    released: "23/07/2002",
    overview: `La légende dit que Bruce Lee a débuté son entraînement à l'âge de six ans. L'élu est réputé avoir commencé à l'entraîner alors qu'il n'était encore qu'un fœtus. Quand le légendaire Master Pain, malveillant maître Kung-fu, massacre sa famille, l'élu entreprend une quête pour venger la mort des siens...`,
  },
];

export default function Carrousel() {
  return (
    <Carousel
      autoPlay
      interval={4000}
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      className="md:max-w-6xl ml-auto mr-auto"
    >
      {datas.map((movie) => (
        <Link to={`/movies/${movie.id}`}>
          {" "}
          <div key={movie.id}>
            <img src={movie.image} alt={movie.title} />
            <div className="overlay">
              <h2 className="text-lg font-bold px-4 py-2">{movie.title}</h2>
              <p className="text-xs p-4 py-1 md:text-sm">{movie.overview}</p>
            </div>
          </div>
        </Link>
      ))}
    </Carousel>
  );
}
