import { useEffect, useMemo, useState } from "react";

interface Character {
  created: string;
  gender: string;
  id: number;
  image: string;
  name: string;
  species: string;
  status: string;
}

function useFetchData<Payload>(url: string): {
  data: Payload | null;
  done: boolean;
} {
  const [data, setData] = useState<Payload | null>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setDone(true);
      });
  }, [url]);
  return {
    data,
    done,
  };
}

function CustomHookComponent() {
  const { data, done } = useFetchData<Character[]>(
    "https://rickandmortyapi.com/api/character"
  );
  const aliveCharacters = useMemo(
    () => (data || []).filter((character) => character.status),
    [data]
  );
  console.log(done);
  return (
    <div>
      {done ? (
        <div>
          {data
            ?.map((character) => (
              <div key={character.id}>
                <h1>{character.name}</h1>
                <img src={character.image} alt={character.name} />
              </div>
            ))
            .splice(0, 4)}
        </div>
      ) : null}
      {done ? (
        <div>
          {aliveCharacters
            ?.map((character) => (
              <div key={character.id}>
                <h1>Alive Characters</h1>
                <h2>{character.name}</h2>
                <img src={character.image} alt={character.name} />
              </div>
            ))
            .splice(4, 4)}
        </div>
      ) : null}
    </div>
  );
}

export default CustomHookComponent;
