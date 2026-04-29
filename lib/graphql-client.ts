export async function fetchGraphQL<T>(
  query: string,
  variables = {},
): Promise<T> {
  const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;

  if (!endpoint) {
    throw new Error("Missing WORDPRESS_GRAPHQL_ENDPOINT environment variable");
  }

  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  const json = await res.json();

  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch GraphQL API");
  }

  return json.data;
}
