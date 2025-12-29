function checkIsBrowser(): boolean {
  return typeof window !== "undefined";
}

type StorageLike = Pick<Storage, "getItem" | "setItem" | "removeItem"> | null;

const defaultGetStorage = (): StorageLike =>
  checkIsBrowser() ? localStorage : null;

export function dataStorage<T = unknown>(
  key: string,
  getStorage: () => StorageLike = defaultGetStorage
) {
  const storage = getStorage();

  return {
    set: (data: T): T => {
      if (checkIsBrowser() && storage) {
        storage.setItem(key, JSON.stringify(data));
      }
      return data;
    },

    get: (): T | undefined => {
      if (!checkIsBrowser() || !storage) return undefined;

      const json = storage.getItem(key);
      if (!json) return undefined;

      try {
        return JSON.parse(json) as T;
      } catch {
        return json as unknown as T;
      }
    },

    remove: (): void => {
      if (checkIsBrowser() && storage) {
        storage.removeItem(key);
      }
    },
  };
}

export const dataSessionStorage = <T = unknown>(key: string) =>
  dataStorage<T>(key, () => (checkIsBrowser() ? sessionStorage : null));