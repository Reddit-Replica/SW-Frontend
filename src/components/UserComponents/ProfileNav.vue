<template>
  <nav>
    <div class="basecontainer">
      <ul>
        <li v-for="profileLink in viewedLinks" :key="profileLink.id" :class="{active : profileLink.active}">
          <router-link :to="`/user/${userName}`+ profileLink.path" :class="{ linkactive : profileLink.active}">
            {{profileLink.linkName}}</router-link>
        </li>
        <li @click="showLinkBox = !showLinkBox" class="overflow"><span>...</span></li>
      </ul>
    </div>
    <ul v-show="showLinkBox" class="linkbox">
      <li v-for="profileLink in hiddenLinks" :key="profileLink.id" :class="{active : profileLink.active}">
        <router-link :to="$route.path+ profileLink.path" :class="{ linkactive : profileLink.active}">
          {{profileLink.linkName}}</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ['userName'],
  data() {
    return {
      showLinkBox: false,
      profileLinks: [
        {
          id: '1',
          linkName: 'overview',
          path: '/',
          active: false,
        },
        {
          id: '2',
          linkName: 'Posts',
          path: '/submitted',
          active: false
        },
        {
          id: '3',
          linkName: 'Comments',
          path: '/comments',
          active: false
        }, {
          id: '4',
          linkName: 'history',
          path: '/history',
          active: false
        },
        {
          id: '5',
          linkName: 'hidden',
          path: '/hidden',
          active: false
        },
        {
          id: '6',
          linkName: 'saved',
          path: '/saved',
          active: false
        },
        {
          id: '7',
          linkName: 'upvoted',
          path: '/upvoted',
          active: false
        },
        {
          id: '8',
          linkName: 'Down voted',
          path: '/downvoted',
          active: false
        },
        {
          id: '9',
          linkName: 'awards received',
          path: '/gilded',
          active: false
        },
        {
          id: '10',
          linkName: 'awards given',
          path: '/gildedgiven',
          active: false
        }
      ],
      viewedLinks: [],
      hiddenLinks: [],
      windowWidths: window.innerWidth
    }
  },
  mounted() {
    this.viewedLinks = this.profileLinks;
    this.onResize();
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
    })
  },
  unmounted() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.windowWidths = window.innerWidth;
      // if (this.windowWidths < 1000)
      //10 - 900/100
      const x = ++this.windowWidths / 100;
      if (this.windowWidths < 1000) {
        this.viewedLinks = this.profileLinks.slice(0, x);
        this.hiddenLinks = this.profileLinks.slice(x, this.profileLinks.length);
      } else {
        this.viewedLinks = this.profileLinks;
      }
      // for(let i=0; i<x; i++)
      // {
      //   this.profilelinks.pop();
      // }
    },
  },
  computed: {
    // for(profilelink in this.profilelinks) {
    // x =document.querySelector("a.router-link-active");
    // profilelink.active = profilelink.path ? this.
    // }
  },

  // computed: {
  //   windowSize(){
  //   this.windowWidths = window.innerWidth; 
  //   return this.windowSize;
  //   }
  // }
}
</script>


<style scoped>
a {
  text-decoration: none;
  text-decoration: none;
  display: inline-block;
  color: #1A1A1B;
  text-transform: uppercase;
  white-space: nowrap;
  /* word-wrap:initial; */
}

a.router-link-active {
  color: #0079D3;
}

li:has(> a.router-link-active) {
  box-shadow: inset 0 -2px 0 0 #0079D3;
}

nav {
  position: relative;
  width: 100%;
  background-color: #ffffff;
  height: 39px;
  border-bottom: 1px solid #EDEFF1;
  border-top: 1px solid #EDEFF1;
}

nav ul:first-child {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  font-size: 12px;
  list-style: none;
}

nav ul:first-child li:not(:last-child) {
  width: fit-content;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  align-items: center;
  display: flex;
  margin: 0 5px;
  padding: 0 5px;
  height: 100%;

}

nav ul:first-child li:hover a {
  color: #0079D3;
  /* box-shadow: inset 0 -2px 0 0 #0079D3; */
}

li.active {
  box-shadow: inset 0 -2px 0 0 #0079D3;
  /* border-bottom: 2px solid #0079D3; */
}

/* a.linkactive {
  color: #0079D3;
} */

.basecontainer {
  width: 100%;
  height: 100%;
  position: relative;
  padding: 0px 24px;
}

.overflow span {
  display: inline-block;
  font-size: 24px;
  line-height: 18px;
  position: absolute;
  top: 0;
  transform: translateY(50%);
  cursor: pointer;
  /* font-weight: 500; */
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
  /* width: 100%; */
  /* min-height: 100%;  */
}

.overflow {
  position: relative;
  height: 100%;
  display: none;
  /* overflow: hidden; */
}

.linkbox {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  flex-direction: column;
  /* width: 200px; */
  align-items: center;
  /* justify-content: center; */
  /* padding: 15px; */
  height: max-content;
  position: absolute;
  right: 0;
  z-index: 1000;
  overflow: hidden;
  border-radius: 4px;
  border: 1px solid #EDEFF1;
  box-shadow: 0 2px 4px 0 rgba(28, 28, 28, 0.2);
  color: #1c1c1c;
  background-color: #FFFFFF;
  transform: translateY(1px);
}

.linkbox li a {
  cursor: pointer;
  box-sizing: border-box;
  display: block;
  color: #1A1A1B;
  fill: #1A1A1B;
  padding: 10px 16px;

}

.linkbox li {
  width: 100%;
}

.linkbox li:hover {
  background-color: #e5f1fa;
  color: #1c1c1c;
  fill: #1c1c1c;
}

.linkbox {
  /* display: none; */
}

@media (max-width:1000px) {
  .overflow {
    display: block;
  }
}

@media (min-width:1000px) {
  .linkbox {
    display: none;
  }
}
</style>