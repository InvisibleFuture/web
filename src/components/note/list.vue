<style lang="less" scoped>
.note {
  padding: 20px 32px;
  width: 100%;
  overflow: auto;
  .create {
    height: 50px;
    line-height: 50px;
    text-align: center;
    margin-top: 20px;
    position: relative;
    color: rgb(51, 51, 51);
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 2px 5px 0px rgba(144, 144, 144, 0.27);
  }
  ul {
    list-style-type: none;
    padding: 0;
    //display: flex;
    //justify-content: flex-end;
    text-align: center;
    margin-top: 20px;
    position: relative;
    color: #bbbbbb;
    background-color: #fff;
    border-radius: 2px;
    box-shadow: 0px 2px 5px 0px rgba(144, 144, 144, 0.27);
    li {
      padding: 34px 40px;
      border-bottom: 1px solid #e8e8e8;
      display: flex;
      flex-direction: row;
      img {
        width: 48px;
        height: 48px;
        border-radius: 50%;
      }
      div {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        padding: 0 5px;
        h5 {
          color: #222222;
          font-size: 15px;
          line-height: 20px;
          overflow: hidden;
          padding: 0;
          margin: 0;
          text-align: left;
          font-weight: 400;
        }
        p {
          font-size: 14px;
          color: #999;
          line-height: 20px;
          white-space: nowrap;
          padding: 0;
          margin: 0;
        }
      }
    }
  }
}
</style>

<template>
  <div class="note">
    <!-- 创建新的记事本 -->
    <div class="create">
      <span>创建记录本</span>
    </div>
    <!-- 记事本列表 -->
    <ul>
      <li v-for="item in list" v-bind:key="item.id">
        <img alt="logo" src="../../assets/70914.png" />
        <div>
          <h5 v-text="item.name"></h5>
          <p>哦哈哈哈 这是一个记事本</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "news",
  data: function() {
    return {
      list: [
        {
          id: "1",
          name: "一个记事本",
          username: "Last",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "2",
          name: "开发计划",
          username: "觉",
          time: "20190204",
          discuss: "12",
          view: "22"
        },
        {
          id: "3",
          name: "关于接口原则",
          username: "Last",
          time: "20190204",
          discuss: "12",
          view: "22"
        }
      ]
    };
  }
};
</script>