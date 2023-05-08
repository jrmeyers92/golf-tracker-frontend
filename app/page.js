import Image from "next/image";

async function getGames() {
  const res = await fetch("http://localhost:3000/api/v1/games");
  const data = res.json();
  return data;
}

export default async function Home() {
  const games = await getGames();
  const htmlFromGamesData = games.data.games.map((game) => {
    return <h1>{game.title}</h1>;
  });
  console.log(games.data.games);
  return (
    <main className="p-24">
      {games.data.games?.map((game) => {
        return <h1 key={game.id}>{game.jakes_score}</h1>;
      })}
    </main>
  );
}
