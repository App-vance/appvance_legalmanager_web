/* eslint-disable @typescript-eslint/no-explicit-any */
import { cf } from "./contentful";

// Lista de noticias
const NEWS_LIST = /* GraphQL */ `
  query NewsList($limit: Int = 20) {
    newsCollection(order: date_DESC, limit: $limit) {
      items {
        sys { id }
        tittle
        date
        description
        img {
          url
          width
          height
          description
          title
        }
      }
    }
  }
`;

export async function getNewsList(limit = 20) {
    const data = await cf<{ newsCollection: { items: any[] } }>(NEWS_LIST, { limit }, { tags: ["news"] });
    return data?.newsCollection?.items ?? [];
}

// Una noticia por ID (como aún no tienes slug)
const NEWS_BY_ID = /* GraphQL */ `
  query NewsById($id: String!) {
    news(id: $id) {
      sys { id }
      tittle
      date
      description
      img {
        url
        width
        height
        description
        title
      }
    }
  }
`;

export async function getNewsById(id: string) {
    const data = await cf<{ news: any }>(NEWS_BY_ID, { id }, { tags: ["news"] });
    return data.news ?? null;
}

// Para SSG: todos los IDs publicados
const NEWS_IDS = /* GraphQL */ `
  query NewsIds {
    newsCollection {
      items {
        sys { id }
      }
    }
  }
`;

export async function getAllNewsIds() {
    const data = await cf<{ newsCollection: { items: { sys: { id: string } }[] } }>(NEWS_IDS, {}, { tags: ["news"] });
    return data.newsCollection.items.map((i) => i.sys.id);
}