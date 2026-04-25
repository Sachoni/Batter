import { APP_VERSION } from "../version";
import { getLatestGitHubCommit } from "./github";

export async function checkForUpdate() {
  const latestGitHubVersion = await getLatestGitHubCommit();

  console.log("Local version:", APP_VERSION);
  console.log("GitHub version:", latestGitHubVersion);

  if (latestGitHubVersion !== APP_VERSION) {
    return {
      updateAvailable: true,
      latest: latestGitHubVersion,
      current: APP_VERSION
    };
  }

  return {
    updateAvailable: false,
    current: APP_VERSION
  };
}