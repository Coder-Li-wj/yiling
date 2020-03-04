<template>
    <div class="content">
      <div class="top">
        <img src=".././assets/f12_share_img.png" alt="">
      </div>
      <div class="bottom">
        <img src=".././assets/share_logo.png">
        <div class="box">
          <div class="boxItem1">
            <p>以岭药业 你的常伴医生</p>
          </div>
          <div class="boxItem2">
            <button class="btn1" @click="downloadApp1">下载APP</button>
            <button class="btn1" @click="downloadApp2">下载医生APP</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>


  export default {
    name: "sendOrder",
    data() {
      return {
        timer:null,
        u:'',
        e:'',
        n:'',
        r:'',
        t:''
      }
    },
    methods: {
      downloadApp1() {
        window.location.href="http://www.baidu.com";
      },
      downloadApp2() {
        // alert("尚未实现")
        window.location.href="http://www.baidu.com";
      }
    }
  }
</script>

<style lang="less" scoped>
  .content{
    width: 100%;
    height: 100vh;
    .top{
      height: 85%;
       width: 100%;
       background-color: #2C83F6;
       img{
         height:100%;
         width: 87%;
       }
     }
    .bottom{
      display: flex;
      height: 15%;
      width: 100%;
      img{
        height: 70px;
        width: 70px;
        margin: 15px 0 6.5px 10.5px;
      }
      .box{
        display: flex;
        flex-wrap: wrap;
        .boxItem1{
          width: 100%;
          height: 50%;
          p{
            float: left;
            color: #333333;
            font-size: 14px;
            height: auto;
            margin: 16.5px auto 15px 17.5px;
          }
        }
        .boxItem2{
          display: flex;
          width: 100%;
          height: 50%;
          .btn1{
            /*width: 45%;*/
            height: 70%;
            width: 100%;
            /*height: 100%;*/
            background-color: #05B58D;
            border-radius: 5px;
            border:0;
            color: #ffffff;
            font-size: 13px;
            margin-left: 5px;
            margin-right: 5px;
            /*margin-top: -12px;*/
          }
          .btn2{
            /*width: 45%;*/
            height: 70%;
            width: 100%;
            /*height: 100%;*/
            background-color: #05B58D;
            border-radius: 5px;
            border:0;
            color: #ffffff;
            font-size: 13px;
            /*margin: -12px 0 0 0;*/
          }
        }
      }
    }
    /*.bottom{
      position: relative;
      display: flex;
      height: 15%;
      width: 100%;
      background-color: #ffffff;
      img{
        height: 70px;
        width: 70px;
        float: left;
        margin: 8.5px 0 6.5px 15.5px;
      }
      .box{
        p{
          float: left;
          color: #333333;
          font-size: 14px;
          height: auto;
          margin: 16.5px auto 15px 17.5px;
        }
        .download1{
          position: absolute;
          top: 52.35%;
          left: 27.07%;
          right: 0;
          margin:0px;
          color: #ffffff;
          font-size: 13px;
          display: inline-block;
          width: 29.33%;
          height: 31.76%;
          line-height: 27px;
          text-align: center;
          background-color: #05B58D;
          border-radius: 5px;
        }
        .download2{
          position: absolute;
          top: 52.35%;
          right: 10%;
          color: #ffffff;
          font-size: 13px;
          display: inline-block;
          width: 29.33%;
          height: 31.76%;
          line-height: 27px;
          text-align: center;
          background-color: #05B58D;
          border-radius: 5px;
        }
      }
    }*/
  }

</style>
