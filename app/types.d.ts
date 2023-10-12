interface Film {
  properties: FilmProperties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

interface FilmProperties {
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  producer: string;
  title: string;
  episode_id: number;
  director: string;
  release_date: string;
  opening_crawl: string;
  url: string;
}

interface FilmsResponse {
  message: string;
  result: Film[];
}

interface FilmResponse {
  message: string;
  result: Film;
}

interface VehiclesResponse {
  message: string;
  total_records: number;
  total_pages: number;
  previous: any;
  next: string;
  results: Vehicles[];
}

interface Vehicles {
  uid: string;
  name: string;
  url: string;
}

interface VehicleResponse {
  message: string;
  result: VehicleResult;
}

interface VehicleResult {
  properties: Properties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

interface Properties {
  model: string;
  vehicle_class: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  crew: string;
  passengers: string;
  max_atmosphering_speed: string;
  cargo_capacity: string;
  consumables: string;
  films: any[];
  pilots: any[];
  created: string;
  edited: string;
  name: string;
  url: string;
}

export interface PeopleRoot {
  message: string;
  total_records: number;
  total_pages: number;
  previous: any;
  next: string;
  results: Result[];
}

export interface PeopleResult {
  uid: string;
  name: string;
  url: string;
}

export interface PersonRoot {
  message: string;
  result: Result;
}

export interface PersonResult {
  properties: Properties;
  description: string;
  _id: string;
  uid: string;
  __v: number;
}

export interface PersonProperties {
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  created: string;
  edited: string;
  name: string;
  homeworld: string;
  url: string;
}
