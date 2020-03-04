<template>
  <div class="instruction">
    <div class="content">
      <div>
        <p>{{article.title}}</p>
        <h6>{{article.updateAt}}</h6>
      </div>
      <div v-html="article.imageContent" class="imageContent">{{article.imageContent}}</div>
    </div>
  </div>
</template>

<script>
  import  {post}  from '@/utils/request/index'
  export default {
    name: "instruction",
    data() {
      return {
        article:''
      }
    },
    created() {
      this.searchById()
    },
    methods: {
      searchById(){
        post('api/article/get', {
          "id": this.$route.params.id
        }, res => {
          if(res.data.code === 200){
            this.article = res.data.data
            // console.log(this.article)
            this.article.cover = 'http://27.128.171.84:8090/attachment/'+ res.data.data.cover
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  .instruction{
    .content{
      height: 100vh;
      p{
        margin-left: 12px;
        margin-bottom: 0;
        text-align: left;
        font-size: 16px;
        color: #333333;
        font-weight: bold;
      }
      h6{
        margin: 9.5px 0 14px 12px;
        text-align: left;
        font-size: 13px;
        color: #999999;
        font-weight: normal;
      }
      .imageContent{
        /deep/img{
          max-width: 100%;
        }
      }
    }
  }
</style>
