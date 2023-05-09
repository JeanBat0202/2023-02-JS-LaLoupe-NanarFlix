import { Link, NavLink } from "react-router-dom";

const series = [
  {
    title: "X-or, le sherif de l'espace",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rnjMGvlaXZnUkbMjGnMaxAbADIH.jpg",
    id: 4937,
    genre: "",
    overview:
      "La Terre est menacée par les Makkus qui sont dirigés par Don Hora. Gavan est un justicier de l'espace qui se voit chargé de protéger la Terre. Ainsi, Gavan va devoir arriver incognito sur Terre, sous l'apparence d'un civil, et en utilisant son nom terrien Retsu Ichijouji. En plus de devoir affronter plusieurs créatures envoyées par Don Hora, Gavan va essayer de retrouver son père Voicer qui a disparu, certainement à cause des Makkus.",
    released: "01/01/1982",
  },
  {
    title: "Smallville",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/el4r3RABoLe5Hh6U2I3OybBjrme.jpg",
    id: 4604,
    genre: "Science-fiction",
    overview:
      "Dans une petite bourgade qui a connu une pluie de météorites quelques années plus tôt, le jeune Clark Kent est élevé par une famille de fermiers. Contraint de cacher ses pouvoirs exceptionnels, il va apprendre à les utiliser pour aller au secours de son prochain.",
    released: "2001-10-16",
  },
  {
    title: "Plus belle la vie",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/jmU8HlTDn87xmRqXagcL2swDr8I.jpg",
    id: 8590,
    genre: "Drame",
    overview:
      "Plus belle la vie met en scène, jour après jour, le quotidien des habitants d’un quartier imaginaire de Marseille : le Mistral. Il y a des familles aisées comme les Chaumette ou les Frémont, ainsi que des familles plus modestes comme les Marci ou les Torres. Le feuilleton s’organise autour de deux principaux types d’intrigue : La vie personnelle des habitants du Mistral, avec leurs joies et tracas quotidiens, l’évolution des amours et des amitiés. Des intrigues criminelles dans lesquelles sont impliqués certains habitants du Mistral.",
    released: "2004-08-30",
  },
  {
    title: "Resident Evil",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tQprVBqg9ANfZZ0KNN6WQ5QP6X4.jpg",
    id: 108296,
    genre: "Drame",
    overview:
      "Tandis que l'étau d'Umbrella se resserre, Jade préconise l'utilisation d'une arme monstrueuse. Adolescente, Jade enrôle Simon dans une mission fatidique au QG d'Umbrella.",
    released: "2022-07-14",
  },
  {
    title: "The Witcher",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rhErSlk0M236rNFertVAZa9lz9S.jpg",
    id: 71912,
    genre: "Action",
    overview:
      "Le sorcier Geralt, un chasseur de monstres mutant, se bat pour trouver sa place dans un monde où les humains se révèlent souvent plus vicieux que les bêtes.",
    released: "2019-12-20",
  },
  {
    title: "Mercredi",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/9ifSmhXDP36tFZXdcczJzRDGo5b.jpg",
    id: 119051,
    genre: "Science-fiction",
    overview:
      "Infusée de mystère et de surnaturel, la série suit les aventures de Mercredi Addams, désormais étudiante à la Nevermore Academy. Alors qu'elle apprend à dompter ses nouveaux pouvoirs psychiques, la jeune fille doit aussi déjouer une série de meurtres monstrueux qui terrorisent la ville, et résoudre le mystère auquel ont été mêlés ses parents il y a 25 ans, le tout en tentant péniblement de nouer de nouvelles relations au sein de Nevermore.",
    released: "2022-11-23",
  },
  {
    title: "Les feux de l'amour",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/gF6FmAqBB6c7yv5ddRLMi0UemvD.jpg",
    id: 1054,
    genre: "Soap",
    overview:
      "L'histoire tourne autour de familles vivant à Genoa City, dans le Wisconsin, aux États-Unis. Les personnages du feuilleton sont répartis en différents clans et plusieurs familles. Au début, le feuilleton  était centré sur la rivalité entre les Brooks et les Foster, mais a  depuis fortement évolué. Aujourd'hui, les Chancellor possèdent une forte  notoriété historique dans la ville tandis que les Newman et les Abbott  dominent le monde de l'entreprise sur le plan national.",
    released: "1973-03-26",
  },
  {
    title: "L'impératrice",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/5CWBHRTd068AyZOevaI0rx13DPC.jpg",
    id: 131488,
    genre: "Drame",
    overview:
      "Cette mini-série va se concentrer sur la période qui a immédiatement suivi la rencontre entre les monarques Élisabeth “Sissi” von Wittelsbach et François-Joseph.",
    released: "2022-09-29",
  },
  {
    title: "Le miel et les abeilles",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/w28F4IRToZHLt6eAD8rofs9ElDX.jpg",
    id: 75025,
    genre: "Comédie",
    overview:
      "Une jolie lycéenne du nom de Lola (Mallaury Nataf) attire vers elle les garçons aussi efficacement que le miel attire les abeilles.",
    released: "1992-12-21",
  },
  {
    title: "Friends",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/f496cm9enuEsZkSPzCwnTESEK5s.jpg",
    id: 1668,
    genre: "Comédie",
    overview:
      "Les péripéties de 6 jeunes newyorkais liés par une profonde amitié. Entre amour, travail, famille, ils partagent leurs bonheurs et leurs soucis au Central Perk, leur café favori...",
    released: "1994-09-22",
  },
  {
    title: "Dawson",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rDWPkR9jgDHg3D3XkKsxUy7S3NW.jpg",
    id: 2327,
    genre: "Drame",
    overview:
      "A Capeside, Dawson découvre les aléas de l'adolescence et voit ses relations avec Joey et Pacey, ses amis de toujours, mises à rude épreuve.",
    released: "1998-01-20",
  },
  {
    title: "The 100",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/1ePsCN6vpduAX1LxEdqfbwfS4nf.jpg",
    id: 48866,
    genre: "Science-fiction",
    overview:
      "Après une apocalypse causée par l'Homme lors d'une Troisième Guerre mondiale, les survivants se réfugient dans des stations spatiales et parviennent à y vivre et à se reproduire, atteignant le nombre de 4000. Mais 97 ans plus tard, le vaisseau mère, The Ark, est en piteux état.\n\nUne centaine de jeunes délinquants, emprisonnés au fil des années pour des crimes ou des trahisons, sont choisis comme cobayes par les autorités pour redescendre sur Terre et tester les chances de survie. Dès leur arrivée, ils découvrent un nouveau monde dangereux mais fascinant...",
    released: "2014-03-19",
  },
  {
    title: "Le Bureau",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/lZUesUH1aMqlZZ20mSk5LgJs2b1.jpg",
    id: 4215,
    genre: "Comédie",
    overview:
      "C'est le jour du verdict :Juliette Lebrac annonce à Gilles qu'il est promu au rang de directeur national, mais au prix du sacrifice de son équipe qui sera réduite et absorbée par le site de Massy. Sur un nuage, Gilles accepte le poste sur-le-champ. Il doit juste passer un entretien formel au siège à Oslo. Gilles annonce maladroitement la nouvelle à son staff.",
    released: "2006-05-25",
  },
];

export default function SerieSection() {
  return (
    <div className="md:p-5 md:col-start-2 md:col-end-4">
      <h2 className="bg-gradient-to-r from-purple-400 to-orange-200 uppercase rounded-md my-6 mx-3 px-3 py-1 text-[#472f4a] text-lg md:ml-3 md:mr-7 font-bold">
        <NavLink to="/annuaire" className="navlink">
          Séries
        </NavLink>
      </h2>
      <div className="flex gap-6 overflow-x-auto  mx-3 md:gap-5 w-auto md:ml-11 md:mr-11">
        {series.map((serie) => (
          <Link to={`/tv/${serie.id}`}>
            <div className="w-24 md:w-36 flex-shrink-0 " key={serie.title}>
              <img src={serie.image} alt={serie.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
