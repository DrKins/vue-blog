//fetch promise
import loremipsum from "./getRandomLorem";
//Item interface
import { Item } from "@/store/interface";
import store from "@/store";

const randomGenerate = {
  //async function that will generate random loremipsum string
  async generateItem(): Promise<Item> {
    //await fetch from another .ts file.
    const x = await loremipsum
      .api("https://baconipsum.com/api/?type=meat-and-filler")
      //resolve promise.
      .then((res) => {
        //Array of 5 strings
        const a = res as string[];
        //Select random string from array
        const randomVAl = Math.floor(a.length * Math.random());
        //Separate sentences with "."
        const random = a[randomVAl].split(".");
        //Check if there is empty string
        if (random[randomVAl] !== "")
          //if true return separated sentence
          return random[randomVAl].substring(1);
        // else choose new sentence
        else return random[Math.floor(a.length * Math.random())].substring(1);
      });
    return {
      //return item object into vuex state.
      id: store.state.APIData.length,
      text: x,
      likes: Math.floor(Math.random() * 50) + 1,
      dislikes: Math.floor(Math.random() * 50),
    };
  },
};

export { randomGenerate };
