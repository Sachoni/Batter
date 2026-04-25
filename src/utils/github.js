export async function getLatestGitHubCommit() {
  const response = await fetch(
    "https://api.github.com/repos/Sachoni/batter-app/commits/main"
  );

  const data = await response.json();

  return data.sha;
}