import Carrousel from "@components/Carrousel.jsx";
import MovieSection from "@components/MovieSection";
import SerieSection from "@components/SerieSection";
import CritiqueSection from "@components/CritiqueSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Carrousel />
      <div className="md:grid md:grid-cols-2  md:grid-flow-row md:grid-">
        <MovieSection />
        <SerieSection />
      </div>
      <CritiqueSection />
    </main>
  );
}
