import gifDefaultPage from "@assets/gif-defaultPage.gif";
import "./defaultPage.scss";

export default function DefaultPage() {
  return (
    <section className="defaultPage-container">
      <img
        src={gifDefaultPage}
        alt="gif default page"
        className="gifDefaultPage"
      />
      {/* <p className="textDefaultPage">
        Il semblerait que cette page n'existe pas !
      </p> */}
    </section>
  );
}
