const customFetch =
  (method: "GET" | "POST" | "PUT" | "DELETE") =>
  (path: string, body?: BodyInit) => {
    return fetch("http://localhost:3000" + path, {
      method,
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

export const getReq = customFetch("GET");
export const postReq = customFetch("POST");
export const putReq = customFetch("PUT");
export const deleteReq = customFetch("DELETE");
