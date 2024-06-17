type Season = {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
};

type Episode = {
  id: number;
  overview: string;
  name: string;
  vote_average: number;
  vote_count: number;
  air_date: string;
  episode_number: number;
  episode_type: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
};

type Serie = {
  backdrop_path: string;
  first_air_date: string;
  homepage: string;
  last_episode_to_air: Episode;
  name: string;
  number_of_episodes: number;
  number_of_seasons: number;
  overview: string;
  poster_path: string;
  seasons: Season[];
  vote_average: number;
};

export async function getSerie() {
  const response = await fetch(
    "https://api.themoviedb.org/3/tv/1396?api_key=57762c9d04d6200c065266d3f986a0c5"
  );
  return (await response.json()) as Serie;
}

// export async function getSeasons() {
//   const response = await getSerie();
//   const data = await response.json();
//   return data.seasons as Season[];
// }
