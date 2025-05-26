const baseURL = "http://localhost:8899/notes";

export const fetchCreateNote = async (input) => {
  const res = await fetch(baseURL, {
    method: "POST",
    body: JSON.stringify(input),
  });

  return await res.json();
};

export const fetchAllNote = () => {
  const data = fetch(baseURL).then((res) => res.json());
  return data;
};

export const fetchDeleteNote = (id) => {
  fetch(`${baseURL}/${id}`, {
    method: "DELETE",
  });
};

export const fetchUpdateNote = async (id, data) => {
  await fetch(`${baseURL}/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};
