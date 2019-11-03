

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  created_at: string;
  updated_at: string;
}

export function getRepos(): Promise<GitHubRepo[]> {
  return Promise.resolve(require("./data.json"))
}
