<template>
  <div class="Navigation_Container">
    <div class="logo"></div>
    <div class="searchBar">
      <div>
        <input type="text" placeholder="Search item" id="search" />
        <font-awesome-icon icon="search" />
      </div>
    </div>
    <div class="menuBtn">Menu</div>
  </div>
</template>

<script scoped lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return { NavBar: false as boolean };
  },
  methods: {
    ShowHideMenu() {
      this.NavBar = !this.NavBar;
    },
  },
})
export default class Navigation extends Vue {}
</script>

<style scoped lang="scss">
/* Change the white to any color */
input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
  -webkit-box-shadow: 0 0 0 30px white inset !important;
}
/*
 * Author: http://stuffandnonsense.co.uk/blog/about/hardboiled_css3_media_queries/
 */

/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}

/* Smartphones (landscape) ----------- */
.menuBtn {
  cursor: pointer;
}
@media only screen and (min-width: 321px) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}

/* Smartphones (portrait) ----------- */
@media only screen and (max-width: 320px) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}

/* iPhone 4 ----------- */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  .Navigation_Container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 4em;
    background: white;
    padding: 0 1em;
    .searchBar {
      div:first-child {
        display: flex;
        border: 0.1em solid black;
        border-radius: 2em;
        background: transparent;
        color: black;
        justify-content: center;
        align-items: center;
        padding: 0.5em;
        &:hover {
          #search {
            opacity: 1;
            width: 10em;
            padding: 0 0.25em;
            transition: width 2s ease-in-out;
          }
        }
        input {
          opacity: 0;
          border: none;
          width: 0;
          &:focus {
            outline: none;
            background: transparent;
          }
        }
      }
    }
    .menuBtn {
      font-weight: 700;
    }
  }
}
</style>
