<template>
  <div class="flex-container">
    <div class="flex-column">
      <div class="flex-column-item" v-for="img of imgList" :key="img" @click="changeSrc(img)"><img :src="img" alt="logo"></div>
    </div>
    <!-- <div class="flex-column">
      <div class="flex-column-item"><img src="/static/f.jpg" alt="logo"></div>
      <div class="flex-column-item"><img src="/static/g.jpg" alt="logo"></div>
      <div class="flex-column-item"><img src="/static/h.jpg" alt="logo"></div>
      <div class="flex-column-item"><img src="/static/i.jpg" alt="logo"></div>
      <div class="flex-column-item"><img src="/static/j.jpg" alt="logo"></div>
    </div>
    <div class="flex-column">
      <div class="flex-column-item"><img src="/static/k.jpg" alt="logo"></div>
      <div class="flex-column-item"><img src="/static/l.jpg" alt="logo"></div>
      <div class="flex-column-item"><img src="/static/m.jpg" alt="logo"></div>
      <div class="flex-column-item"><img src="/static/n.jpg" alt="logo"></div>
      <div class="flex-column-item"><img src="/static/o.jpg" alt="logo"></div>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: ['/static/a.jpg']
    }
  },
  methods: {
    changeSrc(img) {
      console.log(img)
    }
  },
  mounted() {
    const bound = document.querySelectorAll('.flex-column-item>img')[1]
    window.addEventListener('scroll', ev => {
      const h = bound.getBoundingClientRect().y - window.innerHeight
      if (h <= 100) {
        console.log('可以显示')
      }
    })
  }
}
</script>

<style scope>
  .flex-container {
    display: flex;
    flex-direction: row;
  }

  .flex-column {
    display: flex;
    flex-direction: column;
    width: calc(100% / 2);
  }

  .flex-column-item {
    margin: 20px;
    width: calc(100% - 40px);
    /* 展示效果,可删 */
    min-height: 400px;
    background: skyblue;
  }

  .flex-column-item > img {
    height: 100%;
    width: 100%;
  }
</style>
