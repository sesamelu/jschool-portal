<template>
    <div class="pg-news">
        <div class="pg-news-wrapper">
            <div class="row">
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="thumbnail">
                <img src="@assets/img/images/news-list-default.png" style="width:100%;">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                    
                </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="thumbnail">
                <img src="@assets/img/images/news-list-default.png">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                    
                </div>
                </div>
            </div>
            <div class="col-xs-12 col-sm-6 col-md-4">
                <div class="thumbnail">
                <img src="@assets/img/images/news-list-default.png">
                <div class="caption">
                    <h3>Thumbnail label</h3>
                    <p>...</p>
                    
                </div>
                </div>
            </div>
        </div>

        </div>
        

    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    mounted(){

    },
    methods:{

    },
}
</script>
<style scoped lang="scss">
/* 超小屏幕（手机，小于 768px） */
/* 没有任何媒体查询相关的代码，因为这在 Bootstrap 中是默认的（还记得 Bootstrap 是移动设备优先的吗？） */
.pg-news{
    .pg-news-wrapper{
        padding: 0 3%;
    }
}
/* 小屏幕（平板，大于等于 768px） */
@media (min-width: 768px) { 
    .pg-news{
        .pg-news-wrapper{
            padding: 0 3%;
        }
    }

 }

/* 中等屏幕（桌面显示器，大于等于 992px） */
@media (min-width: 992px) { 
    .pg-news{
        .pg-news-wrapper{
            padding: 0 5%;
        }
    }

 }

/* 大屏幕（大桌面显示器，大于等于 1200px） */
@media (min-width: 1200px) { 
    .pg-news{
        .pg-news-wrapper{
            padding: 0 14%;
        }
    }
 }

</style>
<style >

</style>