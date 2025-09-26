import { PosterItem } from "./Poster_Item";

const posterData = [
  {
    id: 1,
    title: "Hogwarts Legacy",
    image: "/hogwarts-legacy-game-poster-with-castle.jpg",
    date: "10 July 2023",
  },
  {
    id: 2,
    title: "Character Design",
    image: "/yellow-and-black-character-poster-design.jpg",
    date: "10 July 2023",
  },
  {
    id: 3,
    title: "Black Cinema",
    image: "/black-cinema-movie-poster-with-dark-theme.jpg",
    date: "10 July 2023",
  },
  {
    id: 4,
    title: "Du Tonkin",
    image: "/du-tonkin-poster-with-silhouettes.jpg",
    date: "10 July 2023",
  },
];

export function PosterGallery({ aspectRatio = "1:1" }) {
  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">
          Social Media Poster Design
        </h2>
        <p className="text-sm text-gray-600 leading-relaxed">
          I'm excited to let you know that your complete website is ready! The
          site has been carefully developed with SEO best practices in mind to
          ensure strong visibility on search engines, improved speed, and
          user-friendly performance. I'm excited to let you know that your
          complete website is ready! The site has been carefully developed with
          SEO best practices in mind to ensure strong visibility on search
          engines, improved speed, and user-friendly performance.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {posterData.map((poster) => (
          <PosterItem
            key={poster.id}
            title={poster.title}
            image={poster.image}
            date={poster.date}
            aspectRatio={aspectRatio}
          />
        ))}
      </div>
    </div>
  );
}
