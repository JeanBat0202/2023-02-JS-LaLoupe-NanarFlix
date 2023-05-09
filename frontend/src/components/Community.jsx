import { Link } from "react-router-dom";
import React, { useState } from "react";

export default function Community() {
  const reviews = [
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Black&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Squint&eyebrowType=SadConcernedNatural&mouthType=Concerned&skinColor=Yellow"
          alt="Avatar"
        />
      ),
      id: 1,
      reviewer: "Jean-baptiste Blond",
      presentation: "Le cinéma est un soleil noir inlassablement attractif.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Sunglasses&hairColor=Brown&facialHairType=BeardMedium&facialHairColor=Brown&clotheType=GraphicShirt&clotheColor=Blue02&graphicType=Resist&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Vomit&skinColor=Pale"
          alt="Avatar"
        />
      ),
      id: 2,
      reviewer: "Julien Leroux",
      presentation: "Au cinéma, on joue ; au théâtre, c'est joué.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Prescription02&hairColor=Brown&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Brown"
          alt="Avatar"
        />
      ),
      id: 3,
      reviewer: "Angélique Chartrain",
      presentation:
        "Cinématographe, art militaire. Préparer un film comme une bataille.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&facialHairColor=Blonde&clotheType=BlazerShirt&eyeType=Surprised&eyebrowType=UpDown&mouthType=Twinkle&skinColor=Light"
          alt="Avatar"
        />
      ),
      id: 4,
      reviewer: "Erwan Cherel",
      presentation:
        "L'avion, c'est pareil que le cinéma, il n'y a que des erreurs humaines. Un mauvais film, c'est une erreur humaine.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Sunglasses&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Black&clotheType=CollarSweater&clotheColor=Black&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Serious&skinColor=Pale"
          alt="Avatar"
        />
      ),
      id: 5,
      reviewer: "Benjamin Laroche",
      presentation:
        "Le cinéma c'est l'art de bien faire les choses défendues au commun des mortels.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads01&accessoriesType=Kurt&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Surprised&eyebrowType=UpDownNatural&mouthType=Sad&skinColor=Pale"
          alt="Avatar"
        />
      ),
      id: 6,
      reviewer: "Marion Baston",
      presentation:
        "Le cinéma est une question de ce qui est dans le cadre et de ce qui en sort.",
    },

    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Blank&hairColor=Black&facialHairType=BeardLight&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=PastelYellow&eyeType=Squint&eyebrowType=UpDown&mouthType=Default&skinColor=Pale"
          alt="Avatar"
        />
      ),
      id: 7,
      reviewer: "Luc Lefebure",
      presentation: "Le cinéma, c'est du théâtre en conserve.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat3&accessoriesType=Sunglasses&hatColor=Blue01&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Gray01&graphicType=Bear&eyeType=Side&eyebrowType=Default&mouthType=Twinkle&skinColor=Light"
          alt="Avatar"
        />
      ),
      id: 8,
      reviewer: "Florian Esnault",
      presentation:
        "Ils se prennent pour Tarantino dans le film, mais ils sont morts dans la bande annonce.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairNotTooLong&accessoriesType=Wayfarers&hairColor=Black&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Squint&eyebrowType=SadConcernedNatural&mouthType=Tongue&skinColor=Yellow"
          alt="Avatar"
        />
      ),
      id: 9,
      reviewer: "Jessica Ribeiro",
      presentation:
        "Personne ne va voir un film qui suscite de l'indifférence.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortRound&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Bear&eyeType=Cry&eyebrowType=SadConcernedNatural&mouthType=Concerned&skinColor=Pale"
          alt="Avatar"
        />
      ),
      id: 10,
      reviewer: "Bertrand Robert",
      presentation:
        "Je veux un Oscar pour chaque film que je me suis fait dans la tête.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=GraphicShirt&clotheColor=Pink&graphicType=Bear&eyeType=Squint&eyebrowType=SadConcernedNatural&mouthType=Concerned&skinColor=Yellow"
          alt="Avatar"
        />
      ),
      id: 11,
      reviewer: "Illias Ryffel",
      presentation:
        "Avant on allait plutôt au cinéma pour voir un film. Aujourd'hui il semble qu'on y aille plutôt pour manger.",
    },

    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Close&eyebrowType=FlatNatural&mouthType=Sad&skinColor=Pale"
          alt="Avatar"
        />
      ),
      id: 12,
      reviewer: "Camille Le Gloanic",
      presentation: "Le cinéma sonore nous a fait découvrir le silence.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairDreads&accessoriesType=Kurt&hairColor=Black&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=BlazerShirt&eyeType=Side&eyebrowType=UpDownNatural&mouthType=Smile&skinColor=Pale"
          alt="Avatar"
        />
      ),
      id: 13,
      reviewer: "Quentin Silmain",
      presentation:
        "Si le cinéma est le reflet d'une société alors la nôtre doit être peuplée de cas cliniques.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=PastelYellow&eyeType=Close&eyebrowType=FlatNatural&mouthType=Sad&skinColor=Pale"
          alt="Avatar"
        />
      ),
      id: 14,
      reviewer: "Alicia Coquérant",
      presentation: "Le cinéma ? Je le fais sur un écran, pas dans la vie !",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight2&accessoriesType=Kurt&hairColor=Red&facialHairType=BeardMajestic&facialHairColor=Red&clotheType=CollarSweater&clotheColor=Gray01&eyeType=Cry&eyebrowType=DefaultNatural&mouthType=Grimace&skinColor=Brown"
          alt="Avatar"
        />
      ),
      id: 15,
      reviewer: "Cassandra Heroin",
      presentation: "La télé, c'est la maladie du cinéma.",
    },
    {
      image_avatar: (
        <img
          src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairSides&accessoriesType=Kurt&hairColor=Brown&facialHairType=BeardMajestic&facialHairColor=Black&clotheType=Hoodie&clotheColor=White&eyeType=WinkWacky&eyebrowType=AngryNatural&mouthType=Default&skinColor=Light"
          alt="Avatar"
        />
      ),
      id: 16,
      reviewer: "Xavier Georget",
      presentation: "Cinéma : était muet de naissance.",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);

  const handleClickPrevious = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 6);
    }
  };

  const handleClickNext = () => {
    if (startIndex + 6 < reviews.length) {
      setStartIndex(startIndex + 6);
    }
  };
  return (
    <div>
      <h2 className="bg-gradient-to-r from-orange-200 to-purple-400 uppercase rounded-md my-6 mx-3 px-3 py-1 text-[#472F4A] text-lg md:ml-12 md:mr-12">
        Communauté des regardeurs
      </h2>

      <section className="flex flex-wrap md:ml-1 md:mr-1 justify-center">
        {reviews
          .slice(startIndex, startIndex + 6)
          .map(({ image_avatar, reviewer, presentation, id }) => (
            <div
              className="fondCard grid grid-cols-4 gap-2 grid-flow-row grid- bg-[#9EBA9B] w-10/12 h-3/6 p-3 rounded-md mx-3 my-3 md:w-1/4 "
              key={image_avatar}
            >
              <h2 className="p-2   row-start-1 row-end-3 col-start-1 col-end-2">
                {image_avatar}
              </h2>

              <Link to={`/profil/${id}`}>
                <button
                  type="submit"
                  className="bg-[#321f34] text-white font-bold py-2 px-4 rounded mt-5 w-40"
                >
                  Voir Profil
                </button>
              </Link>
              <h2 className="p-1 mb-2 text-center font-bold col-start-2 col-end-5 row-start-1 row-end-2 h-1">
                {reviewer}
              </h2>
              <p className="p-3 text-center col-start-2 col-end-5 row-start-2 row-end-3 overflow-auto h-20 text-l">
                {presentation}
              </p>
            </div>
          ))}
      </section>
      <div className="buttonPrevNext">
        <button
          className="buttonPrev"
          type="button"
          onClick={() => handleClickPrevious(startIndex - 6)}
        >
          Précédent
        </button>
        <button
          className="buttonNext"
          type="button"
          onClick={() => handleClickNext(startIndex + 6)}
        >
          Suivant
        </button>
      </div>
    </div>
  );
}
