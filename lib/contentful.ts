const SPACE = process.env.CONTENTFUL_SPACE_ID!;
const ENV = process.env.CONTENTFUL_ENVIRONMENT || "master";
const ENDPOINT = `https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/${ENV}`;

type FetchOpts = { preview?: boolean; revalidate?: number; tags?: string[] };

export async function cf<T>(
    query: string,
    variables: Record<string, unknown> = {},
    { preview = false, revalidate = Number(process.env.REVALIDATE_SECONDS || 60), tags = [] }: FetchOpts = {}
): Promise<T> {
    const token = preview ? process.env.CONTENTFUL_PREVIEW_TOKEN! : process.env.CONTENTFUL_CDA_TOKEN!;
    const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ query, variables }),
        next: { revalidate, tags },
    });

    const json = await res.json();
    if (!res.ok || json.errors) {
        throw new Error(`Contentful error: ${JSON.stringify(json.errors || json)}`);
    }
    return json.data as T;
}
