import { useState } from "react";
// import { useNavigate } from "react-router-dom";

const avatars = [
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortFlat&accessoriesType=Sunglasses&hairColor=Platinum&facialHairType=BeardLight&facialHairColor=BrownDark&clotheType=BlazerSweater&eyeType=Default&eyebrowType=UnibrowNatural&mouthType=Grimace&skinColor=Brown",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairShavedSides&accessoriesType=Prescription01&facialHairType=Blank&clotheType=CollarSweater&clotheColor=Black&eyeType=Cry&eyebrowType=UnibrowNatural&mouthType=Serious&skinColor=Black",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShaggyMullet&accessoriesType=Blank&hairColor=Blue&facialHairType=Blank&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=White&eyeType=Surprised&eyebrowType=RaisedExcited&mouthType=Concerned&skinColor=Light",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortWaved&accessoriesType=Prescription02&hairColor=BrownDark&facialHairType=BeardLight&facialHairColor=Red&clotheType=ShirtVNeck&clotheColor=Red&eyeType=Squint&eyebrowType=SadConcernedNatural&mouthType=Default&skinColor=Light",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairStraight&accessoriesType=Blank&hairColor=SilverGray&facialHairType=Blank&clotheType=ShirtVNeck&clotheColor=Blue02&eyeType=Default&eyebrowType=UpDown&mouthType=Smile&skinColor=Light",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=LongHairBob&accessoriesType=Wayfarers&hairColor=BrownDark&facialHairType=MoustacheFancy&facialHairColor=Red&clotheType=ShirtCrewNeck&clotheColor=Black&eyeType=EyeRoll&eyebrowType=Default&mouthType=Vomit&skinColor=Light",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=WinterHat1&accessoriesType=Blank&hatColor=Red&hairColor=Black&facialHairType=MoustacheMagnum&facialHairColor=Auburn&clotheType=ShirtScoopNeck&clotheColor=Blue01&eyeType=Dizzy&eyebrowType=UpDown&mouthType=Concerned&skinColor=Brown",
  },
  {
    image:
      "https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairDreads02&accessoriesType=Kurt&hatColor=PastelOrange&hairColor=Black&facialHairType=Blank&facialHairColor=Platinum&clotheType=CollarSweater&clotheColor=PastelOrange&eyeType=Surprised&eyebrowType=SadConcerned&mouthType=Serious&skinColor=Tanned",
  },
];

export default function CommentBox() {
  // const navigate = useNavigate();
  const [newReviewer, setReviewer] = useState("");
  const [newComment, setComment] = useState("");
  const [allComments, setAllComments] = useState([]);

  const handleReviewerChange = (event) => {
    setReviewer(event.target.value);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAvatarIndex = Math.floor(Math.random() * avatars.length);
    const newAvatarImage = avatars[newAvatarIndex].image;
    setAllComments([
      ...allComments,
      { reviewer: newReviewer, comment: newComment, avatar: newAvatarImage },
    ]);
    setReviewer("");
    setComment("");

    // if (!newReviewer || !newComment) {
    //   alert("You must provide a pseudo and a comment!!!");
    // } else {
    //   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/comments`, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({
    //       newReviewer,
    //       newComment,
    //       newAvatarImage,
    //     }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log(data);
    //       navigate(`/comments/${data.id}`);
    //     })
    //     .catch((err) => {
    //       console.error(err);
    //       alert("Error to add the comment, please try again!!!");
    //     });
    // }
  };

  return (
    <div className="div5 flex flex-col justify-center items-center">
      <form className="w-3/4 md:w-2/4 mt-10" onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className="flex flex-col justify-center items-center text-white"
        >
          Pseudo :
        </label>
        <input
          type="text"
          value={newReviewer}
          onChange={handleReviewerChange}
          id="name"
          name="name"
          className="w-full px-3 py-2 rounded-md shadow-sm mb-6"
          required
        />
        <label
          htmlFor="message"
          className="flex flex-col justify-center items-center text-white"
        >
          Ajouter un commentaire :
        </label>
        <textarea
          id="message"
          name="message"
          value={newComment}
          onChange={handleCommentChange}
          className="w-full px-3 py-2 rounded-md shadow-sm text-black"
          required
        />
        <button
          type="submit"
          className="bg-[#9EBA9B] text-white py-2 px-4 rounded mt-5 flex flex-col justify-center items-center mx-auto mb-1"
        >
          Ajouter
        </button>
      </form>
      <div className="flex flex-wrap md:ml-1 md:mr-1 justify-center mb-10">
        {allComments.map(({ reviewer, comment, avatar }) => (
          <div
            className="grid grid-cols-4 gap-2 grid-flow-row grid- bg-[#9EBA9B] w-10/12 h-30 p-3 rounded-md mx-3 my-3 md:w-96 md:h-28 "
            key={reviewer}
          >
            <div className="p-2 row-start-1 row-end-3 col-start-1 col-end-2 ">
              <img src={avatar} alt={reviewer} />
            </div>
            <h2 className="p-1 mb-2 text-center font-bold text-base col-start-2 col-end-5 row-start-1 row-end-2 h-1">
              {reviewer}
            </h2>
            <p className="p-3 text-center col-start-2 col-end-5 row-start-2 row-end-3 overflow-auto h-12 text-xs">
              {comment}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
