function checkIsBrowser() {
  return typeof window !== "undefined";
}

const defaultGetStorage = () =>
  checkIsBrowser() ? localStorage : null;

export function dataStorage(
  key,
  getStorage = defaultGetStorage
) {
  const storage = getStorage();

  return {
    set: (data) => {
      if (checkIsBrowser() && storage) {
        storage.setItem(key, JSON.stringify(data));
      }
      return data;
    },

    get: () => {
      if (!checkIsBrowser() || !storage) return undefined;

      const json = storage.getItem(key);
      if (!json) return undefined;

      try {
        return JSON.parse(json);
      } catch {
        return json;
      }
    },

    remove: () => {
      if (checkIsBrowser() && storage) {
        storage.removeItem(key);
      }
    },
  };
}

export const dataSessionStorage = (key) =>
  dataStorage(key, () => (checkIsBrowser() ? sessionStorage : null));