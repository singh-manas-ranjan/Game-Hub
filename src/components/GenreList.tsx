import { Text } from "@chakra-ui/react";
import useGenre from "../hooks/useGenres";

const GenreList = () => {
  const { genres, error } = useGenre();

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {genres.map((g) => (
          <li key={g.id}>{g.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GenreList;
