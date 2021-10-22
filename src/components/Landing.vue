<template>
  <div class="Landing_Container">
    <div class="TopQuote_Container" v-for="(item, index) in fetch" :key="index">
      <div class="TopQuote">
        <p class="Quote">"{{ item.quote }}"</p>
        <div class="Reactions">
          <div class="Likes">
            <font-awesome-icon icon="heart" />
            <p>{{ item.likes }}</p>
          </div>
          <div class="Dislikes">
            <font-awesome-icon icon="heart-broken" />
            <p>{{ item.dislikes }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="ScrollButton animate__animated animate__fadeIn">
      <font-awesome-icon icon="chevron-circle-down" />
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
@Options({
  data() {
    return {
      fetch: [
        {
          titleName: "Example title",
          likes: 12,
          dislikes: 2,
          quote: "Commodo amet in deserunt nostrud Lorem duis eiusmod.",
        },
        {
          titleName: "Example title",
          likes: 12,
          dislikes: 2,
          quote:
            "Incididunt enim nisi dolor Lorem. Velit aliqua enim ex consectetur sit Lorem fugiat et. Dolore quis pariatur exercitation pariatur dolore qui tempor sit et. Officia exercitation ea aute ea deserunt voluptate duis incididunt laboris nulla Lorem. Cillum est velit nostrud aute nisi ex exercitation et id aliquip incididunt anim labore non. Tempor laboris consequat velit velit officia commodo. Mollit et adipisicing cupidatat ad nulla nostrud ex consequat sunt mollit.",
        },
      ],
    };
  },
})
export default class Landing extends Vue {}
</script>

<style scoped lang="scss">
$border: #5f9ea0;

.Likes,
.Dislikes {
  cursor: pointer;
}
.ScrollButton {
  -webkit-tap-highlight-color: transparent;
}
/*
 * Author: http://stuffandnonsense.co.uk/blog/about/hardboiled_css3_media_queries/
 */
/* Smartphones (portrait and landscape) ----------- */
@media only screen and (min-device-width: 320px,) and (max-device-width: 480px,) {
  .Landing_Container {
    padding: 2em;
    .TopQuote_Container {
      .TopQuote {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        text-align: left;
        height: auto;
        background: #ece9e6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        border-radius: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 1em 0;

          .Likes {
            display: flex;
            width: 50%;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 50%;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* Smartphones (landscape) ----------- */
@media only screen and (min-width: 321px) {
  .Landing_Container {
    padding: 2em;
    .TopQuote_Container {
      .TopQuote {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        text-align: left;
        height: auto;
        background: #ece9e6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        border-radius: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 1em 0;

          .Likes {
            display: flex;
            width: 50%;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 50%;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

// /* Smartphones (portrait) ----------- */
// @media only screen and (max-width: 320px) {
//   /* Styles */
// }

/* iPads (portrait and landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) {
  .Landing_Container {
    padding: 2em;
    .TopQuote_Container {
      .TopQuote {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        text-align: left;
        height: auto;
        background: #ece9e6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        border-radius: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 1em 0;

          .Likes {
            display: flex;
            width: 50%;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 50%;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* iPads (landscape) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) {
  .Landing_Container {
    padding: 2em;
    .TopQuote_Container {
      .TopQuote {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        text-align: left;
        height: auto;
        background: #ece9e6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        border-radius: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 1em 0;

          .Likes {
            display: flex;
            width: 50%;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 50%;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* iPads (portrait) ----------- */
@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) {
  .Landing_Container {
    padding: 2em;
    .TopQuote_Container {
      .TopQuote {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        text-align: left;
        height: auto;
        background: #ece9e6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        border-radius: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 1em 0;

          .Likes {
            display: flex;
            width: 50%;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 50%;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* Desktops and laptops ----------- */
@media only screen and (min-width: 1224px) {
  .Landing_Container {
    padding: 2em 40%;
    .TopQuote_Container {
      .TopQuote {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        text-align: left;
        height: auto;
        background: #ece9e6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        border-radius: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 1em 0;

          .Likes {
            display: flex;
            width: 50%;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 50%;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* Large screens ----------- */
@media only screen and (min-width: 1824px) {
  .Landing_Container {
    padding: 2em 40%;
    .TopQuote_Container {
      .TopQuote {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        text-align: left;
        height: auto;
        background: #ece9e6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        border-radius: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 1em 0;

          .Likes {
            display: flex;
            width: 50%;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 50%;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}

/* iPhone 4 ----------- */
@media only screen and (-webkit-min-device-pixel-ratio: 1.5),
  only screen and (min-device-pixel-ratio: 1.5) {
  .Landing_Container {
    padding: 2em;
    .TopQuote_Container {
      .TopQuote {
        margin: 2em 0;
        padding: 1em 1em 0 1em;
        text-align: left;
        height: auto;
        background: #ece9e6; /* fallback for old browsers */
        background: -webkit-linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(
          to right,
          #ffffff,
          #ece9e6
        ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

        border-radius: 1em;
        box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
          rgba(0, 0, 0, 0.23) 0px 6px 6px;
        .Quote {
          font-style: italic;
          font-weight: 500;
          font-size: 1em;
        }
        .Reactions {
          display: flex;
          justify-content: space-evenly;
          color: white;
          padding: 1em 0;

          .Likes {
            display: flex;
            width: 50%;
            padding: 1em 2em;
            justify-content: center;
            align-items: center;
            border-radius: 0.5em 0 0 0.5em;
            background-image: linear-gradient(
              135deg,
              #81fbb8 10%,
              #28c76f 100%
            );
            margin-right: 0.5em;
            p {
              margin-left: 0.5em;
            }
          }
          .Dislikes {
            display: flex;
            padding: 1em 2em;
            width: 50%;
            justify-content: center;
            align-items: center;
            border-radius: 0 0.5em 0.5em 0;
            background-image: linear-gradient(
              135deg,
              #feb692 10%,
              #ea5455 100%
            );
            p {
              margin-left: 0.5em;
            }
          }
        }
      }
    }
    .ScrollButton {
      font-size: 3rem;
      color: #fff;
      cursor: pointer;
      display: inline-block;
    }
  }
}
</style>
