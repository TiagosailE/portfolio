import { contact } from "@/content/profile";

const API = "https://api.github.com";
const SIX_HOURS = 60 * 60 * 6;

export type MergedPull = {
  title: string;
  url: string;
  repo: string;
  mergedAt: string;
};

export type GithubActivity = {
  commitsLastYear: number;
  mergedPulls: number;
  publicRepos: number;
  memberSince: number;
  recentPulls: MergedPull[];
};

type SearchCount = { total_count: number };
type SearchPulls = {
  items: {
    title: string;
    html_url: string;
    repository_url: string;
    pull_request?: { merged_at: string | null };
  }[];
};
type User = { public_repos: number; created_at: string };

async function request<T>(path: string): Promise<T> {
  const headers: HeadersInit = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  const response = await fetch(`${API}${path}`, { headers, next: { revalidate: SIX_HOURS } });
  if (!response.ok) throw new Error(`GitHub ${response.status} em ${path}`);
  return response.json() as Promise<T>;
}

function oneYearAgo() {
  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);
  return date.toISOString().slice(0, 10);
}

// Retorna null quando a API falha (limite de requisições, rede) para a seção mostrar o aviso em vez de quebrar a página.
export async function getGithubActivity(): Promise<GithubActivity | null> {
  const user = contact.githubUser;
  const mergedQuery = encodeURIComponent(`author:${user} type:pr is:merged`);

  try {
    const [commits, merged, profile] = await Promise.all([
      request<SearchCount>(`/search/commits?q=${encodeURIComponent(`author:${user} committer-date:>${oneYearAgo()}`)}&per_page=1`),
      request<SearchPulls & SearchCount>(`/search/issues?q=${mergedQuery}&sort=updated&order=desc&per_page=5`),
      request<User>(`/users/${user}`),
    ]);

    return {
      commitsLastYear: commits.total_count,
      mergedPulls: merged.total_count,
      publicRepos: profile.public_repos,
      memberSince: new Date(profile.created_at).getFullYear(),
      recentPulls: merged.items.map((item) => ({
        title: item.title,
        url: item.html_url,
        repo: item.repository_url.split("/").slice(-2).join("/"),
        mergedAt: item.pull_request?.merged_at ?? "",
      })),
    };
  } catch (error) {
    console.error(error);
    return null;
  }
}
