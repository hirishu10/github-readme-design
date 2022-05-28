export const languageDataConfig = (languageContainer: string[]) => {
  //
  //
  let langChecker = [
    {
      name: "C",
      checker: "c",
      value: 0,
      fill: "#333333",
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
      fill: "firebrick",
    },
    {
      name: "Scala",
      checker: "scala",
      value: 0,
      fill: "#333333",
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
      fill: "#272a2e",
    },
    {
      name: "Shell",
      checker: "shell",
      value: 0,
      fill: "#272a2e",
    },
    {
      name: "Other",
      checker: "other",
      value: 0,
      fill: "Yellow",
    },
  ];

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

  let forMetricCard = {
    name: "",
    value: 0,
    fill: "",
  };
  //
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
  console.log("languageContainer", languageContainer);
  console.log("langChecker", langChecker);
  console.log("forMetricCard", forMetricCard);

  return forMetricCard;
};
