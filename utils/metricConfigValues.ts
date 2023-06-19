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
 * @param ownerRepo Take user Repo to fetch the data
 * @returns Return the Total Star from the Repo data
 */
export const totalStar = (ownerRepo: []) => {
  try {
    let count: number[] = [];
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
};

/**
 *
 * @param user Take the GithuUser name
 * @returns Return the most languages array used by the user
 */
export const metricConfigValues = async (user: any) => {
  try {
    let returnData = {};
    let count: number[] = [];
    let languageCount: string[] = [];

    // ::::> Verified User to fetch the details
    const ownerRaw = await fetch(`https://api.github.com/users/${user}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.AUTH_TOKEN}`,
      },
    });
    const owner = await ownerRaw.json();

    // console.log("owner :>> ", owner.login); //Debug

    // ::::> Only works if the user is valid, otherwise throw error!
    if (owner.login === user) {
      const dataRaw = await fetch(
        `https://api.github.com/users/${user}/repos`,
        {
          method: "GET",
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
          method: "GET",
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
          method: "GET",
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
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${process.env.AUTH_TOKEN}`,
          },
        }
      );
      const prs = await prsRaw.json();

      // ::::> Making Language Container Array
      // ::::> Also counting the Stars
      data?.map((item: any, index: any) => {
        count.push(item?.stargazers_count);
        languageCount.push(item?.language);
      });

      const language = findTheLanguageUsed(languageCount);

      // ::::> Counting the star and return
      let finalAdd: number = 0;
      count?.map((item, index) => {
        finalAdd += item;
      });

      // ::::> Debug
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
        most_language: language?.name ? language?.name : "Other",
        fill_color: language?.fill ? language?.fill : "lavender",
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
      most_language: "Other",
      fill_color: "lavender",
      error: error,
    };
    return returnData;
  }
};

/**
 *
 * @param languageContainer Take the languages Array
 * @returns Return highest language use data
 */
const findTheLanguageUsed = (languageContainer: string[]) => {
  //
  let langChecker = [
    {
      name: "C",
      checker: "c",
      value: 0,
      fill: "#346776",
    },
    {
      name: "C++",
      checker: "c++",
      value: 0,
      fill: "#f4g55d",
    },
    {
      name: "C#",
      checker: "c#",
      value: 0,
      fill: "blue",
    },
    {
      name: "Go",
      checker: "go",
      value: 0,
      fill: "skyblue",
    },
    {
      name: "Java",
      checker: "java",
      value: 0,
      fill: "#d40d2e",
    },
    {
      name: "JavaScript",
      checker: "javascript",
      value: 0,
      fill: "#f8ff2e",
    },
    {
      name: "PHP",
      checker: "php",
      value: 0,
      fill: "green",
    },
    {
      name: "Python",
      checker: "python",
      value: 0,
      fill: "#7dab1b",
    },
    {
      name: "Ruby",
      checker: "ruby",
      value: 0,
      fill: "#d40d8e",
    },
    {
      name: "Scala",
      checker: "scala",
      value: 0,
      fill: "#de0b65",
    },
    {
      name: "TypeScript",
      checker: "typescript",
      value: 0,
      fill: "#3870ba",
    },
    {
      name: "HTML",
      checker: "html",
      value: 0,
      fill: "#d40d2e",
    },
    {
      name: "CSS",
      checker: "css",
      value: 0,
      fill: "#384fff",
    },
    {
      name: "SCSS",
      checker: "scss",
      value: 0,
      fill: "pink",
    },
    {
      name: "Bash",
      checker: "bash",
      value: 0,
      fill: "#3c4654",
    },
    {
      name: "Shell",
      checker: "shell",
      value: 0,
      fill: "#9e9e9e",
    },
    {
      name: "Other",
      checker: "other",
      value: 0,
      fill: "lavender",
    },
  ];

  // ::::> Checking which language used may times and update the value of langChecker
  languageContainer.map((itemOne, indexOne) => {
    if (itemOne != null) {
      let flag = false;
      langChecker.map((itemTwo, indexTwo) => {
        if (itemTwo.checker === itemOne.toLocaleLowerCase()) {
          langChecker[indexTwo].value = langChecker[indexTwo].value + 1;
          flag = true;
        }
      });
      if (!flag) {
        langChecker[langChecker.length - 1].value =
          langChecker[langChecker.length - 1].value + 1;
      }
    }
  });

  // ::::> Some usefull variables
  let forMetricCard = {
    name: "",
    value: 0,
    fill: "",
  };

  //::::> Return the most highest language used
  langChecker.map((item, index) => {
    if (item?.checker === "other") {
      if (forMetricCard?.value === 0) {
        forMetricCard = {
          name: item?.name,
          value: item?.value,
          fill: item?.fill,
        };
      }
    } else {
      if (item?.value > forMetricCard?.value) {
        forMetricCard = {
          name: item?.name,
          value: item?.value,
          fill: item?.fill,
        };
      }
    }
  });

  // ::::> Debug
  // console.log("languageContainer", languageContainer);
  // console.log("langChecker", langChecker);
  // console.log("forMetricCard", forMetricCard);

  return forMetricCard;
};
