import { act, fireEvent, render, renderHook, screen, waitFor } from "@testing-library/react";
import {} from "@testing-library/react"
import { usePokemon } from "./hooks";
import { Pokemon } from "./types";

test('render usePokemon', async () => {
  let pokemons: Array<Pokemon> = [];
  const wrapper = ({ children }: any) => <div>{children}</div>;

  await waitFor(() => {
    const nineTails = renderHook(() => usePokemon(1));
    nineTails.rerender();
    console.log("hello again")
  });


  // pokemons = result.current.pokemons;

  waitFor(() => {
    console.log("Hello");
    console.log(pokemons);
    expect(pokemons[0].name).toEqual("hello");
  });

});
