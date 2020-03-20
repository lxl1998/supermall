<template>
<div>
  <div id="hangs-swiper">
    <div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
      <slot></slot>
    </div>
    <slot name="indicator"></slot>
    <div class="indicator">
      <slot name="indicator" v-if="showIndicator && slideCount>1">
        <div
          v-for="(item, index) in slideCount"
          class="indi-item"
          :class="{active: index === currentIndex-1}"
          :key="index"
        ></div>
      </slot>
    </div>
  </div>
</div>
  
</template>


<script>
export default {
  name: "swiper",
  props: {
    interval: {
      type: Number,
      default: 3000
    },
    animDuration: {
      type: Number,
      default: 300
    },
    moveRatio: {
      type: Number,
      default: 0.25
    },
    showIndicator: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      slideCount: 0, //元素个数
      totalWidth: 0, //轮播图宽度
      swiperStyle: {}, //swiper样式
      currentIndex: 1, //当前图下标
      scrolling: false //是否正在滚动的标志
    };
  },
  mounted() {
    setTimeout(() => {
      this.handleDom();
      this.startTimer();
    }, 200);
  },
  methods: {
    /**
     * @description: 定时器开关
     */
    startTimer() {
      this.playTimer = window.setInterval(() => {
        this.currentIndex++;
        this.scrollCotent(-this.currentIndex * this.totalWidth);
      }, this.interval);
    },
    stopTimer() {
      window.clearInterval(this.playTimer);
    },
    /**
     * @description: 滚动操作
     * @param {Number} currentPosition 轮播图现在的偏移量
     */
    scrollCotent(currentPosition) {
      this.scrolling = true;
      //开始滚动动画
      this.swiperStyle.transition = "transform " + this.animDuration + "ms";
      this.setTransfrom(currentPosition);
      //判断滚动到的位置
      this.checkPosition();
      //滚动完成
      this.scrolling = false;
    },
    /**
     * @description: 滚动操作
     * @param {Number} position 滚动条位置
     */
    setTransfrom(position) {
      this.swiperStyle.transfrom = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[
        `-webkit-transform`
      ] = `translate3d(${position}px, 0, 0)`;
      this.swiperStyle[`-ms-transform`] = `translate3d(${position}px, 0, 0)`;
    },
    //判断是否滚动完成
    checkPosition() {
      window.setTimeout(() => {
        //1.校验正确位置
        this.swiperStyle.transition = "0ms";
        if (this.currentIndex >= this.slideCount + 1) {
          this.currentIndex = 1;
          this.setTransfrom(-this.currentIndex * this.totalWidth);
        } else if (this.currentIndex <= 0) {
          this.currentIndex = this.slideCount;
          this.setTransfrom(-this.currentIndex * this.totalWidth);
        }
        //2.结束移动后的回调
        this.$emit("transitonEnd", this.currentIndex - 1);
      }, this.animDuration);
    },
    /**
     * 操作DOM
     */
    handleDom() {
      //1.获取元素
      let swiperEl = document.querySelector(".swiper");
      let slideEls = document.getElementsByClassName("slide");
      //2.保存个数
      this.slideCount = slideEls.length;
      //3.如果大于1那么在前后分别添加一个slide
      if (this.slideCount > 1) {
        let cloneFirstSlide = slideEls[0].cloneNode(true);
        let cloneLastSlide = slideEls[this.slideCount - 1].cloneNode(true);
        swiperEl.insertBefore(cloneLastSlide, slideEls[0]);
        swiperEl.appendChild(cloneFirstSlide);
        this.totalWidth = swiperEl.offsetWidth;
        this.swiperStyle = swiperEl.style;
      }
      this.setTransfrom(-this.totalWidth);
    },
    /**
     * 拖动时间的处理
     */
    touchStart(e) {
      if (this.scrolling) return;
      this.stopTimer();
      this.startX = e.touches[0].pageX;
    },
    touchMove(e) {
      //1.计算拖动距离
      this.currentX = e.touches[0].pageX;
      this.distance = this.currentX - this.startX;
      let currentPosition = -this.currentIndex * this.totalWidth;
      let moveDistance = currentPosition + this.distance;
      //2.设置当前位置
      this.setTransfrom(moveDistance);
    },
    touchEnd(e) {
      let currentMove = Math.abs(this.distance);
      if (this.distance === 0) {
        return;
      } else if (
        this.distance > 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex--;
      } else if (
        this.distance < 0 &&
        currentMove > this.totalWidth * this.moveRatio
      ) {
        this.currentIndex++;
      }
      this.scrollCotent(-this.currentIndex * this.totalWidth);
      this.startTimer();
    },
    
    /**
     * 控制上一个, 下一个
     */
    previous: function() {
      this.changeItem(-1);
    },
    next: function() {
      this.changeItem(1);
    },
    changeItem: function(num) {
      // 1.移除定时器
      this.stopTimer();
      // 2.修改index和位置
      this.currentIndex += num;
      this.scrollContent(-this.currentIndex * this.totalWidth);
      // 3.添加定时器
      this.startTimer();
    }
  }
};
</script>

<style scoped>
#hangs-swiper {
  overflow: hidden;
  position: relative;
}
.swiper {
  display: flex;
}
.indicator {
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 8px;
  width: 100%;
}
.indi-item {
  box-sizing: border-box;
  width: 8px;
  height: 8px;
  line-height: 8px;
  text-align: center;
  font-size: 12px;
  margin: 0 5px;
  border-radius: 50%;
  background-color: #fff;
}
.indi-item.active {
  background-color: red;
} 
</style>