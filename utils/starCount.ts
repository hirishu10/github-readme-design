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
 * @param ownerRepo Take user to fetch the data
 * @returns Return the data for Total Star
 */
export const getStarData = (ownerRepo: []) => {
  try {
    let count: number[] = [];
    // const myRepoRaw = await fetch(
    //   `https://api.github.com/users/${gitUser}/repos12`
    // );

    // const ownerRepo = await myRepoRaw.json();

    ownerRepo?.map((item: { stargazers_count: number }, index: any) => {
      count.push(item?.stargazers_count);
    });

    let finalAdd: number = 0;

    count?.map((item, index) => {
      finalAdd += item;
    });

    return finalAdd;
  } catch (error) {
    console.log("error", error);
  }

  // :::::::::: later we take care the below code
  // const otherRepo: any = [];
  // const starredRepoRaw = await fetch(
  //   `https://api.github.com/users/${gitUser}/starred`
  // );
  // const starredRepo = await starredRepoRaw.json();

  // starredRepo.forEach((item: any, index: any) => {
  //   otherRepo.push(item);
  // });

  // for (let i = 0; i < starredRepo.length; i++) {
  //   for (let j = 0; j < ownerRepo.length; j++) {
  //     if (starredRepo[i].id === ownerRepo[j].id) {
  //       otherRepo.splice(otherRepo[i], 1);
  //     }
  //   }
  // }
  // :::::::>
};
