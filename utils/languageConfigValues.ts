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
 * @param user Take the GithuUser name
 * @returns Return the most language used by the user
 */
export const languageConfigValues = async (user: any) => {
  try {
    let returnData = {};
    let languageCount: string[] = [];

    // ::::> Verified User to fetch the details
    const ownerRaw = await fetch(`https://api.github.com/users/${user}`, {
      headers: {
        method: "GET",
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
          headers: {
            method: "GET",
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: `token ${process.env.AUTH_TOKEN}`,
          },
        }
      );
      const data = await dataRaw.json();

      // ::::> Making Language Container Array
      data?.map((item: any, index: any) => {
        languageCount.push(item?.language);
      });

      const language = languageDataConfig(languageCount);

      returnData = {
        language: language,
      };

      return returnData;
    }

    return null;
  } catch (error) {
    let returnData = {};
    console.log("error", error);
    returnData = {
      language: "",
    };
    return returnData;
  }
};

/**
 *
 * @param languageContainer Take the languages Array
 * @returns Return Sorted data
 */
const languageDataConfig = (languageContainer: string[]) => {
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
  let forMetricCard: any = [];
  let customArray = [
    { name: "", value: 0, fill: "" },
    { name: "", value: 0, fill: "" },
    { name: "", value: 0, fill: "" },
    { name: "", value: 0, fill: "" },
    { name: "", value: 0, fill: "" },
  ];
  let countTotalValues = 0;

  // ::::> Sorting the item with the highest value
  langChecker.map((item, index) => {
    countTotalValues = countTotalValues + item?.value;
    if (item?.checker !== "other") {
      if (item?.value > customArray[0].value) {
        let getValue = customArray[0];
        customArray[0] = {
          name: item?.name,
          value: item?.value,
          fill: item?.fill,
        };
        customArray[1] = getValue;
      } else if (item?.value > customArray[1].value) {
        let getValue = customArray[1];
        customArray[1] = {
          name: item?.name,
          value: item?.value,
          fill: item?.fill,
        };
        customArray[2] = getValue;
      } else if (item?.value > customArray[2].value) {
        let getValue = customArray[2];
        customArray[2] = {
          name: item?.name,
          value: item?.value,
          fill: item?.fill,
        };
        customArray[3] = getValue;
      } else if (item?.value > customArray[3].value) {
        let getValue = customArray[3];
        customArray[3] = {
          name: item?.name,
          value: item?.value,
          fill: item?.fill,
        };
        customArray[4] = getValue;
      }
    }
  });

  // ::::> Sending the item whose value is greater than 0
  customArray.map((item, index) => {
    if (item?.value > 0) {
      let percent_value = Math.floor((item?.value / countTotalValues) * 100);
      forMetricCard.push({
        name: item?.name,
        value: percent_value,
        fill: item?.fill,
      });
    }
  });

  // ::::> Debug
  // console.log("languageContainer", languageContainer);
  // console.log("customArray", customArray);
  // console.log("countTotalValues", countTotalValues);
  // console.log("langChecker", langChecker);
  // console.log("forMetricCard", forMetricCard);

  return forMetricCard;
};
