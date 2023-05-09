import { Link, NavLink } from "react-router-dom";

const movies = [
  {
    title: "Sharknado 3 : Oh Hell No!",
    id: 331446,
    genre: "Science-Fiction",
    overview:
      "Après avoir fait des ravages à Los Angeles, puis à New York, la troisième tornade de requins fait un retour destructeur dans la capitale des Etats-Unis, juste au moment où Fin se rend à la Maison Blanche. Après avoir détruit Washington D.C., la ’Sharknado’ détruira tout sur son passage jusqu’aux côtes de Floride, où April, enceinte de 9 mois atend impatiemment Fin. Alors qu’il rejoint sa famille au plus vite, des centaines de tornades de requins font alors leurs apparitions pour ne former plus qu’une tornade géante, qui menace de détruire toute la côte Est. Fin réalise qu’il va devoir trouver une solution, qui ne se trouve peut-être pas sur Terre ...",
    release: "23/07/2015",
    image:
      "https://www.themoviedb.org/t/p/w1280/r7pYDCfhqw1DIxAcNNPvwKnn8ms.jpg",
  },
  {
    title: "Zombie Ass",
    id: 101733,
    genre: "Comédie",
    overview:
      "Un groupe d’amis se fait attaquer par des zombies sortant des toilettes. Ils doivent également faire face à une mystérieuse infection avec des vers parasites...",
    release: "25/02/2012",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sKJ1uRFB8eFUD40uVOqGl9MXAoY.jpg",
  },
  {
    title: "L'attaque du requin à 6 têtes",
    id: 522438,
    genre: "Horreur",
    overview:
      "Plusieurs couples se rendent sur une île pour participer à un camp censé resserrer leurs liens. Hélas, un requin à six têtes se pointe. Une bonne occasion de prouver la valeur du travail collectif.",
    release: "18/08/2018",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/fS37m9pRBG0QYTeCEtzNBVVVL3H.jpg",
  },
  {
    title: "Ninja Kids",
    id: 763529,
    genre: "Action",
    overview:
      "Un groupe de jeunes ninjas entre dans une école de ninja où ils rencontrent un groupe d'enseignants excentriques et apprennent diverses techniques de ninja bizarres. Cependant, au milieu de leur aventure hilarante et de leur jeune amour naissant, des forces obscures menacent leur école. Les enfants ninja doivent apprendre à se débrouiller et à se débrouiller avec leur école.",
    released: "01-06-1997",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/nWcKe4GjeSZTiqKA9YqPsuRDlNg.jpg",
  },
  {
    title: "Le jugement dernier",
    id: 72174,
    genre: "Science-Fiction",
    overview:
      "Partout sur Terre, des perturbations géologiques menacent l'humanité. Une recherche désespérée s'engage pour retrouver un écrivain disparu, qui pourrait détenir la clé de ce mystère et prédire les futures catastrophes. Celui-ci est retrouvé mort, en possession d'une baguette antique qui permet à celui qui le détient d'avoir des visions de l'avenir...",
    released: "13-08-2011",
    image:
      "https://www.themoviedb.org/t/p/w500/vdHUOCEDrlYOOLYO0bafRHpaz4h.jpg",
  },
  {
    title: "Twilight",
    id: 8966,
    genre: "Fantastique",
    overview:
      "Isabella Swan, 17 ans, déménage à Forks, petite ville pluvieuse dans l'État de Washington, pour vivre avec son père. Elle s'attend à ce que sa nouvelle vie soit aussi ennuyeuse que la ville elle-même. Or, au lycée, elle est terriblement intriguée par le comportement d'une étrange fratrie, deux filles et trois garçons. Bella tombe follement amoureuse de l'un d'eux, Edward Cullen. Une relation sensuelle et dangereuse commence alors entre les deux jeunes gens : lorsque Isabella comprend que Edward est un vampire, il est déjà trop tard.",
    released: "07-01-2009",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/8phJ4i9m1tBDJbOwwQPvdeWhN2h.jpg",
  },
  {
    title: "Barbare",
    id: 913290,
    genre: "Horreur",
    overview:
      "Une jeune femme se rend à Détroit pour un entretien d'embauche, loue une maison, le temps de son séjour. Mais lorsqu'elle arrive tard dans la nuit, elle découvre que la demeure est occupée par deux personnes et qu'un homme étrange y réside déjà... N'ayant pas d'autre choix, elle décide de passer la nuit sur place, à ses risques et périls.",
    release: "26/10/2022",
    image:
      "https://www.themoviedb.org/t/p/w1280/rJS3o7TgR0pvdtD045kQJQpHXMd.jpg",
  },
  {
    title: "La colline a des yeux",
    id: 9792,
    genre: "Horreur",
    overview:
      "Pour fêter leur anniversaire de mariage, Big Bob Carter, un ancien policier de Cleveland, et sa femme Ethel ont demandé à leur famille de partir avec eux en Californie. Big Bob est sûr que faire la route tous ensemble les aidera à resserrer des liens familiaux un peu distendus. Même si tout le monde vient, personne n'est vraiment ravi d'être là. Lynn, la fille aînée, s'inquiète du confort de son bébé. Son mari, Doug, redoute de passer trop de temps près de son beau-père. La jeune Brenda regrette de ne pas être allée faire la fête à Cancun avec ses amis. Et Bobby ne s'intéresse qu'aux deux chiens de la famille. Une route désertique va conduire les Carter vers le pire des cauchemars…",
    release: "21/06/2006",
    image:
      "https://www.themoviedb.org/t/p/w1280/41oCubeJ4tkEI7r8QZmUTbChFRX.jpg",
  },
  {
    title: "Les Visiteurs en Amérique",
    id: 56715,
    genre: "Comédie",
    overview:
      "Durant la guerre de cent ans, le duc français Thibault de Malfète s'apprête à épouser Rosaline, la fille du roi de Grande-Bretagne. Cependant, Earl de Warrick a l'intention de s'opposer au mariage. Une sorcière lui a concocté une potion à offrir au duc Thibault. Celui-ci, ne soupçonnant pas la traîtrise, l'ingurgite. Aussitôt victime d'hallucinations, il tue accidentellement sa bien-aimée. Un geste irréversible qui lui vaut la peine de mort. Le duc Thibault est toutefois sauvé par son fidèle serviteur, André le Pâté, et le magicien anglais. Celui-ci leur prépare un breuvage qui leur permettra de remonter le temps et ainsi de pouvoir empêcher la mort de Rosaline. Mais il oublie d'inclure dans la potion un élément crucial et les deux hommes se retrouvent plongés dans les couloirs du temps.",
    release: "11/04/2001",
    image:
      "https://www.themoviedb.org/t/p/w1280/dnbJG1IUY19mKyVSwFxDMZ1v2On.jpg",
  },
  {
    title: "Alien : Covenant",
    id: 126889,
    genre: "Science-Fiction",
    overview:
      "Les membres d’équipage du vaisseau Covenant, à destination d’une planète située au fin fond de notre galaxie, découvrent ce qu’ils pensent être un paradis encore intouché. Il s’agit en fait d’un monde sombre et dangereux, cachant une menace terrible. Ils vont tout tenter pour s’échapper.",
    release: "10/05/2017",
    image:
      "https://www.themoviedb.org/t/p/w1280/gJL4noFkpXHkNBX2MgzEo6PbYUy.jpg",
  },
  {
    title: "La Colère des Titans",
    id: 57165,
    genre: "Fantastique",
    overview:
      "Une décennie après sa victoire héroïque sur le monstrueux Kraken, Persée, le fils demi‐dieu de Zeus, tente de mener une vie plus tranquille de pêcheur dans un village et élève seul son fils de 10 ans, Hélius. Pendant ce temps, les dieux et les Titans se livrent à une lutte de pouvoir. Dangereusement affaiblis par le manque de dévotion des humains, les dieux sont sur le point de perdre le contrôle des Titans emprisonnés et de leur redoutable chef, Kronos, père du triumvirat au pouvoir, Zeus, Hadès et Poséidon. Longtemps auparavant, les trois frères avaient renversé leur père puissant, le laissant croupir dans le sombre abîme du Tartare, un donjon enterré au plus profond des entrailles des enfers.",
    release: "28/03/2012",
    image:
      "https://www.themoviedb.org/t/p/w1280/wjIU7QBUVqhQRqEInW6GNNV87OM.jpg",
  },
  {
    title: "Jurassic World",
    id: 135397,
    genre: " Aventure",
    overview:
      "Après le décès de son fondateur John Hammond, la société de biotechnologie InGen a été rachetée par Simon Masrani, PDG de la Masrani Global Corporation. Deux décennies après les événements tragiques de 1993, un nouveau parc a ouvert ses portes sur Isla Nublar, au large du Costa Rica. C’est plus de vingt mille visiteurs qui débarquent chaque jour à « Jurassic World », le « plus grand parc à thèmes jamais construit dans l’histoire humaine » pour profiter pleinement du cadre idyllique de l’île et de ses attractions. Les scientifiques de la réserve biologique, sous la direction du Dr Henry Wu, étudient le comportement des animaux, des dinosaures vivants recréés à partir de leur ADN fossilisé dans de lʼambre. Mais alors que tout le monde croyait les leçons du passé assimilées, un nouvel incident éclate…",
    release: "10/06/2015",
    image:
      "https://www.themoviedb.org/t/p/w1280/gUY5B8OaRqPnLUwjNxITUTrPbIN.jpg",
  },
  {
    title: "Elle voit des nains partout",
    id: 54147,
    genre: "Comédie",
    overview:
      "La reine de France meurt en couche. Elle met au monde une petite fille prénommée Blanche‐neige. Le roi deçu de n’avoir pas eu un fils est résolu à faire disparaître sa progéniture mais c’est sans compter sur la protection de nombreux personnages de la littérature enfantine : les fées, Tarzan, Robin des Bois ou d’autres encore…",
    release: "07/04/1982",
    image:
      "https://www.themoviedb.org/t/p/w1280/t92Z6p7Bt4UHZhTVD1MNi2k5aK.jpg",
  },
  {
    title: "La horde",
    id: 37905,
    genre: "Horreur",
    overview:
      " Au Nord de Paris. Décidé à venger la mort d'un des leurs, un groupe de policiers prend d'assaut une tour HLM, dans laquelle s'est barricadée une bande de gangsters, et se retrouve sans le savoir confronté à une horde de zombies. Flics et malfrats n'auront d'autre solution qu'unir leurs forces pour venir à bout de ces êtres terrifiants...",
    releaseDate: "10/02/2010",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/2B8QBVjUNUuqZFvvHsAw3gasEfQ.jpg",
  },
  {
    title: "Dune",
    id: 438631,
    genre: "Science-Fiction",
    overview:
      "histoire de Paul Atreides, jeune homme aussi doué que brillant, voué à connaître un destin hors du commun qui le dépasse totalement. Car, s'il veut préserver l'avenir de sa famille et de son peuple, il devra se rendre sur Dune, la planète la plus dangereuse de l'Univers. Mais aussi la seule à même de fournir la ressource la plus précieuse capable de décupler la puissance de l'Humanité. Tandis que des forces maléfiques se disputent le contrôle de cette planète, seuls ceux qui parviennent à dominer leur peur pourront survivre…",
    releaseDate: "15/09/2021",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/qpyaW4xUPeIiYA5ckg5zAZFHvsb.jpg",
  },
  {
    title: "The Human Centipede ",
    id: 37169,
    genre: "Horreur",
    overview:
      "Une nuit, deux jeunes américaines en voyage à travers l’Europe, tombent en panne en plein milieu d’une forêt. Par chance, elles découvrent une maison dans laquelle vit un ancien chirurgien allemand, le Dr.Heiter. Ravies d’y trouver refuge, elles sont alors loin d’imaginer qu’elles vont devenir les cobayes d’une expérience chirurgicale inédite : le médecin entend en effet créer un mille-pattes humain en les reliant entre elles par un seul et même tube digestif : THE HUMAN CENTIPEDE !",
    releaseDate: "31/10/2009",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/6D74L1A8OkQXpeQRcNGy6CQ0aZ.jpg",
  },
  {
    title: "All inclusive",
    id: 510452,
    genre: "Comedie",
    overview:
      "Planté par sa fiancée à l’aéroport, Bruno s’envole seul pour une semaine dans un club de vacances All Inclusive aux Caraïbes. Une mauvaise nouvelle n’arrivant jamais seule, il va devoir partager sa chambre avec Jean-Paul Cisse, éternel célibataire très envahissant…  Avec  Lulu, retraitée et veuve très open, Caroline, Manon et Sonia, trois copines venues enterrer le divorce de la première et Edouard Laurent, le directeur du Club Caraïbes Princess, les deux vacanciers ne sont pas prêts d’oublier leur séjour sous le soleil des cocotiers.",
    releaseDate: "13/02/2019",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sKcPccGVDmst7TC0MYEgsP3fj6p.jpg",
  },
  {
    title: "Le Fabuleux Destin d'Amélie Poulain  ",
    id: 194,
    genre: "Comédie",
    overview:
      "Amélie, une jeune serveuse dans un bar de Montmartre, passe son temps à observer les gens et à laisser son imagination divaguer. Elle s'est fixée un but: faire le bien de ceux qui l'entourent. Elle invente alors des stratagèmes pour intervenir incognito dans leur existence. Le chemin d'Amélie est jalonné de rencontres: Georgette, la buraliste hypocondriaque, Lucien, le commis d'épicerie, Madeleine Wallace, la concierge portée sur le porto et les chiens empaillés, ou encore Raymond Dufayel alias «l'homme de verre», son voisin qui ne vit qu'à travers une reproduction d'un tableau de Renoir. Cette quête du bonheur amène Amélie à faire la connaissance de Nino Quincampoix, un étrange «prince charmant». Celui-ci partage son temps entre un train fantôme et un sex-shop, et cherche à identifier un inconnu dont la photo réapparaît sans cesse dans plusieurs cabines de photomaton.",
    releaseDate: "25/04/2001",
    image:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/tdXtLG6L1QMwrv0MNdW6B9IwC8B.jpg",
  },
];

export default function MovieSection() {
  return (
    <div className="md:p-5 md:col-start-1 md:col-end-2">
      <h2 className="bg-gradient-to-r from-orange-200 to-purple-400 uppercase rounded-md my-6 mx-3 px-3 py-1 text-[#472F4A] text-lg md:ml-7 md:mr-3 font-bold">
        <NavLink to="/annuaire" className="navlink">
          Films
        </NavLink>
      </h2>
      <div className="flex  gap-6 overflow-x-auto  mx-3 md:gap-5 w-auto md:ml-14 md:mr-11">
        {movies.map((movie) => (
          <Link to={`/movies/${movie.id}`}>
            <div className=" w-24 md:w-36 flex-shrink-0" key={movie.title}>
              <img src={movie.image} alt={movie.title} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
