/**
 * Copyright Rishu Chowdhary 2022
 *
 * Github - https://github.com/hirishu10
 *
 */
/**
 *
 * @param data String of the Cookie data
 * @returns `Object` Converted the Cookie String and return as a Object
 */
export const convertCookieData = (data: string) => {
  // First spliting the cookie data as a Array
  let makeArray = data.split(";");
  let flag = false; // This helps to check the data will add as a Key or Value
  let key = ""; // Store the key
  let value = ""; // Store the key
  let newObj = []; // Store the Object which return at the end
  // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
  //   console.log("checking");
  //   console.log(makeArray);
  // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::

  // This will run the length of the cookies
  for (let i = 0; i < makeArray.length; i++) {
    // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
    // console.log(i,makeArray[i])
    // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::

    //  This will iterate the current cookie
    // and store as the [key, value] pair in the Obj
    for (let x = 0; x < makeArray[i].length; x++) {
      if (makeArray[i][x] == "=") {
        flag = true;
      }
      if (makeArray[i][x] != "=") {
        if (flag) {
          value = value + makeArray[i][x];
        } else {
          key = key + makeArray[i][x];
        }
      }
      // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
      // let testingData = key + makeArray[i][x];
      //   console.log("test",flag,makeArray[i][x]);
      // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
    }
    // Pushing the [key,value] inside the newObject:-
    newObj.push({ key: key, value: value });
    // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
    // console.log('value',value);
    // console.log('key',key);
    // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
    // After storing the data we have to clear the state and restore the new data
    value = "";
    key = "";
    flag = false;
    // [Optional]:: ==> Debug ::::::::::::::::::::::::::::::::
    // console.log(newObj)
    // ::::::::::::::::::::::::::::::::::::: <== Debug:::::::
  }
  //   returning the final Object with all the [key, value] data
  return newObj;
};
