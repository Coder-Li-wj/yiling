<template>
  <div class="dynamic">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="body">
        <ul>
          <li v-for="item in list">
            <div class="card" @click="toDetails(item.id)">
              <img :src="item.cover" alt="">
              <div>
                <p>{{item.title}}</p>
                <h4>{{item.subtitle}}</h4>
                <h6>{{item.updateAt}}</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
  import  {post}  from '@/utils/request/index'

  export default {
    name: "dynamic",
    data() {
      return {
        value:'',
        isLoading: false,
        list:[]
      }
    },
    created() {
      this.searchByParentId();
    },
    methods:{
      toDetails(id){
        this.$router.push({path:'/activityDetail/' + id})
      },
      //上拉刷新
      onRefresh() {
        setTimeout(() => {
          this.$toast('刷新成功');
          this.isLoading = false;
        }, 500);
      },
      searchByParentId(){
        post('api/article/getByTypeAndCategoryId',{
          "type": "健康文章",
          "categoryId": this.$route.params.categoryId,
        },res => {
          if (res.data.code === 200) {
            this.list = res.data.data;
            this.list.map(v=>{
              v.cover='http://27.128.171.84:8090/attachment/'+v.cover
            })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>

  .dynamic {
    background-color: #eeeeee;
    /*height: 100vh;*/
    .body {
      margin:10px 10px 0;
      display: flex;
      flex-wrap: wrap;
      /*.topInfo{
        width: 100%;
        background-color: #fff;
        margin-bottom: 21px;
        img{
          height: 233.1px;
          width: 100%;
        }
        .imgInfo{
          p{
            text-align: left;
            color: #333333;
            font-size: 13.45px;
            margin: 11.5px 0 0 10px;
          }
          .subheading{
            color: #999999;
            font-size: 11.66px;
            float: left;
            margin-left: 8.5px;
            margin-top: 9.5px;
            margin-bottom: 11.5px;
          }
          .time{
            float: right;
            color: #999999;
            font-size: 11.66px;
            margin-right: 9px;
            margin-top: 9.5px;
            margin-bottom: 12px;
          }*/
      ul{
        width: 100%;
        height: 100vh;
        li {
          position: relative;
          height: 100.5px;
          margin-bottom: 10px;
          background-color: #fff;
          .card {
            display: flex;
            img {
              border-radius: 5px;
              height: 100px;
              width: 100px;
              float: left;
            }
            p {
              /*margin-left: 13px;
              margin-bottom: 0px;
              margin-top: 9px;*/
              margin: 9px auto 0 13px;
              font-size: 15px;
            }
            h4 {
              font-family: PingFang-SC-Bold;
              /*margin: 5px 13px 9px 0;*/
              margin-left: 13px;
              margin-top: 10px;
              text-align: left;
              color: #ccc;
              font-size: 13px;
            }
            h6 {
              position: absolute;
              /*margin: 0 15.5px 11.5px 0;*/
              margin: 0;
              right: 15.5px;
              top: 76.5px;
              text-align: right;
              color: #ccc;
              font-size: 13px;
            }
          }
        }
      }
    }
  }
</style>
