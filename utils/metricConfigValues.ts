import { getRepoDetails } from "./getRepoDetails";

/**
 *
 * @param ownerRepo Take user to fetch the data
 * @returns Return the data for Total Star
 */
export const totalStar = (ownerRepo: []) => {
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

export const metricConfigValues = async (user: any) => {
  try {
    let returnData = {};
    let count: number[] = [];

    const ownerRaw = await fetch(`https://api.github.com/users/${user}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.AUTH_TOKEN}`,
      },
    });
    const owner = await ownerRaw.json();

    console.log("owner :>> ", owner.login);
    if (owner.login === user) {
      const dataRaw = await fetch(
        `https://api.github.com/users/${user}/repos`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${process.env.AUTH_TOKEN}`,
          },
        }
      );
      const data = await dataRaw.json();
      const gistRaw = await fetch(
        `https://api.github.com/users/${user}/gists`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${process.env.AUTH_TOKEN}`,
          },
        }
      );
      const gist = await gistRaw.json();
      const commitRaw = await fetch(
        `https://api.github.com/search/commits?q=author:${user} author-date:>2022-01-01`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${process.env.AUTH_TOKEN}`,
          },
        }
      );
      const commit = await commitRaw.json();
      const prsRaw = await fetch(
        `https://api.github.com/search/issues?q=author:${user} type:pr is:pull-request`,
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${process.env.AUTH_TOKEN}`,
          },
        }
      );
      const prs = await prsRaw.json();

      data?.map((item: { stargazers_count: number }, index: any) => {
        count.push(item?.stargazers_count);
      });

      let finalAdd: number = 0;

      count?.map((item, index) => {
        finalAdd += item;
      });
      // console.log("data :>> ", data);
      // console.log("gist :>> ", gist);
      // console.log("owner :>> ", owner);
      returnData = {
        owner_name: owner?.name !== null ? owner?.name : user,
        total_star: finalAdd,
        total_repo: data?.length,
        total_gist: gist?.length,
        total_prs: prs?.total_count,
        total_commit: commit?.total_count,
      };

      return returnData;
    }

    return null;
  } catch (error) {
    let returnData = {};
    console.log("error", error);
    returnData = {
      owner_name: "Your Name",
      total_star: 0,
      total_repo: 0,
      total_gist: 0,
      total_prs: 0,
      total_commit: 0,
      error: error,
    };
    alert(
      "Something went wrong! Please check your internet connection and try again :)"
    );
    return returnData;
  }
};
