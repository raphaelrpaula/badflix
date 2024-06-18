type Stars = {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: 0 | 1 | 2;
  id: number;
  know_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
};

export type Episode = {
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

export type Season = {
  id: number;
  air_date: string;
  episode_count: number;
  episodes: Episode[];
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
  vote_average: number;
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

export const api_key = process.env.API_KEY;
export const api_img_url = process.env.API_IMG;

export async function getSerie() {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/1396?api_key=${api_key}`
  );
  return (await response.json()) as Serie;
}

export async function getSeasonEpisodes(season: number) {
  const response = await fetch(
    `https://api.themoviedb.org/3/tv/1396/season/${season}?api_key=${api_key}`
  );
  const json = await response.json();
  return json.episodes as Episode[];
}
