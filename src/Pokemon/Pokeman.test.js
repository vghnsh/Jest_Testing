import { act, renderHook } from "@testing-library/react-hooks";
import { usePoke } from "./usePoke";

const getControlledPromise = () => {
  let deferred;
  const promise = new Promise((resolve, reject) => {
    deferred = { resolve, reject };
  });
  return { deferred, promise };
};

describe("usePokemon", () => {
  it("fetches pokemon by the url constructed from pokemonName", async () => {
    global.fetch = jest.fn();

    await act(async () => renderHook(() => usePoke("pikachu")));

    expect(global.fetch).toBeCalledWith(
      "https://pokeapi.co/api/v2/pokemon/pikachu"
    );
  });

  describe("while fetching data", () => {
    it("handles loading state correctly", async () => {
      const { deferred, promise } = getControlledPromise();

      global.fetch = jest.fn(() => promise);

      const { result, waitForNextUpdate } = renderHook(usePoke);

      expect(result.current.isLoad).toBe(true);
      deferred.resolve();

      await waitForNextUpdate();
      expect(result.current.isLoad).toBe(false);
    });
  });

  describe("when got data successfully", () => {
    it("handles successful state correctly", async () => {
      const { deferred, promise } = getControlledPromise();
      global.fetch = jest.fn(() => promise)

      const { result, waitForNextUpdate } = renderHook(usePoke);

      deferred.resolve({json: () => ({poke: "pikachu"})})

      await waitForNextUpdate()

      expect(result.current.poke).toStrictEqual({poke: "pikachu"})
    });
  });

  describe("with an error during request", () => {
    it("handles error state correctly", async () => {
      global.fetch = jest.fn(() => {
        return new Promise(() => {
          throw "Fetch error"
        })
      }) 

      const { result, waitForNextUpdate } = renderHook(usePoke);
      await waitForNextUpdate()

      expect(result.current.err).toStrictEqual("Fetch error")
    });
  });
});