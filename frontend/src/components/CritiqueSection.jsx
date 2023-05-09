import React from "react";
// import PropTypes from "prop-types";

export default function CritiqueSection() {
  const reviews = [
    {
      image_avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBun&accessoriesType=Prescription01&hairColor=Auburn&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=BlazerSweater&eyeType=Dizzy&eyebrowType=SadConcernedNatural&mouthType=Sad&skinColor=Yellow",
      reviewer: "Jacques Ouzi",
      review:
        "Sharknado - Ce film est tellement mauvais que c'en est hilarant ! Les effets spéciaux sont terribles et l'intrigue est absurde, mais vous ne pourrez pas vous empêcher de rire devant des requins qui volent dans une tornade.",
    },
    {
      image_avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairShavedSides&accessoriesType=Prescription02&hairColor=Black&facialHairType=BeardMedium&facialHairColor=Platinum&clotheType=GraphicShirt&clotheColor=Blue03&graphicType=Selena&eyeType=Side&eyebrowType=RaisedExcitedNatural&mouthType=Concerned&skinColor=DarkBrown",
      reviewer: "Ali Gator",
      review:
        " Plan 9 from Outer Space - Considéré comme l'un des pires films de tous les temps, Plan 9 from Outer Space est tellement mauvais qu'il en devient bon. Les dialogues sont absurdes, les costumes sont ridicules et les effets spéciaux sont horribles, mais vous ne pourrez pas vous empêcher de rire devant l'absurdité totale de ce film.",
    },
    {
      image_avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairCurvy&accessoriesType=Prescription02&hairColor=PastelPink&facialHairType=Blank&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=ScreamOpen&skinColor=Pale",
      reviewer: "Lara Tatouille",
      review:
        "Troll 2 - Ce film est tellement nul que c'en est presque une œuvre d'art. Les acteurs sont mauvais, les effets spéciaux sont terribles et l'intrigue est complètement folle. Mais il y a quelque chose de si amusant à propos de ce film que vous ne pourrez pas vous empêcher de rire tout au long du film. ",
    },
    {
      image_avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBigHair&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Gray01&eyeType=Wink&eyebrowType=SadConcerned&mouthType=Tongue&skinColor=Black",
      reviewer: "Odile Deray",
      review:
        "Birdemic: Shock and Terror - Les effets spéciaux sont si mauvais que cela en devient hilarant. Des oiseaux qui attaquent les humains en volant maladroitement à travers l'écran, des explosions qui semblent avoir été faites avec Paint, Birdemic: Shock and Terror est un film à ne pas manquer pour une soirée cinéma décalée.",
    },
    {
      image_avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Prescription01&hairColor=Red&facialHairType=MoustacheMagnum&facialHairColor=Blonde&clotheType=BlazerShirt&clotheColor=Gray01&eyeType=Default&eyebrowType=UnibrowNatural&mouthType=Default&skinColor=Tanned",
      reviewer: "Pierre Kiroul",
      review:
        "The Room - The Room est un film si mauvais qu'il est devenu culte. L'intrigue est confuse, les acteurs sont mauvais et les dialogues sont ridicules, mais vous ne pourrez pas vous empêcher de rire devant ce film qui est tellement maladroit et embarrassant.",
    },
    {
      image_avatar:
        "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Kurt&hairColor=BlondeGolden&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=ShirtScoopNeck&clotheColor=Heather&eyeType=Default&eyebrowType=UpDown&mouthType=Sad&skinColor=Light'",
      reviewer: "Xavier Kapaètrela",
      review:
        "Killer Clowns from Outer Space - Les clowns sont censés être amusants, mais dans ce film, ils sont tout simplement terrifiants. Les effets spéciaux sont mauvais et l'intrigue est complètement absurde, mais vous ne pourrez pas vous empêcher de rire devant ces clowns maladroits qui tentent de prendre le contrôle de la Terre.",
    },
  ];

  return (
    <div>
      <h2 className="bg-gradient-to-r from-orange-200 to-purple-400 uppercase rounded-md my-6 mx-3 px-3 py-1 text-[#472f4a] text-lg md:ml-12 md:mr-12 font-bold">
        Dernières critiques
      </h2>
      <section className="flex flex-wrap md:ml-1 md:mr-1 justify-center mb-7">
        {reviews.slice(0, 6).map(({ image_avatar, reviewer, review }) => (
          <div
            className="grid grid-cols-4 gap-2 grid-flow-row grid- bg-[#9EBA9B] w-10/12 h-3/6 p-3 rounded-md mx-3 my-3 md:w-1/4 "
            key={image_avatar}
          >
            <div className="p-2  row-start-1 row-end-3 col-start-1 col-end-2">
              <img
                className="w-full h-full"
                src={image_avatar}
                alt={reviewer}
              />
            </div>
            <h2 className="p-1 mb-2 text-center font-bold text-base col-start-2 col-end-5 row-start-1 row-end-2 h-1">
              {reviewer}
            </h2>
            <p className="p-3 text-center col-start-2 col-end-5 row-start-2 row-end-3 overflow-auto h-20 text-xs">
              {review}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
}

// CritiqueSection.propTypes = {
//   reviewer: PropTypes.string.isRequired,
//   review: PropTypes.string.isRequired,
//   image_avatar: PropTypes.string.isRequired,
// };
