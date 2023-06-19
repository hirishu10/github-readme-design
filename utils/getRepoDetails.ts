/**
 * With love from ❤️  Github-Readme-Design
 * Github - https://github.com/hirishu10/github-readme-design
 * App Link - https://github-readme-design.vercel.app/
 * API Link - https://github-readme-design.vercel.app/api
 * Version - 1.0.0
 * License - MIT
 */
/**
 *
 * @param user Passed username of the Github Owner
 * @param repo Passed the Repository name to fetch all details
 * @returns Data for the above repo
 */
export const getRepoDetails = async (user: any, repo: any) => {
  const res = await fetch(`https://api.github.com/repos/${user}/${repo}`, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/vnd.github.v3+json",
      Authorization: `token ${process.env.AUTH_TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
};
