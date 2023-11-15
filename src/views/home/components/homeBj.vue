<template>
    <div id="homeBj">
        <div class="homeBjPageRow" v-for="(item1, index) in cardArr" :key="index">
            <div class="placeholderBox" v-for="(item, index) in item1.imgList" :key="index">
                <img class="cardImg" :src=item.imgBj alt="" />
            </div>
            <div class="placeholderBox" v-for="(item, index) in item1.imgList" :key="index">
                <img class="cardImg" :src=item.imgBj alt="" />
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive } from 'vue';

const cardArr = reactive(
    [
        {
            id: 1,
            imgList: [
                {
                    id: 1,
                    imgBj: '/src/assets/bjCard/0.png'
                },
                {
                    id: 2,
                    imgBj: '/src/assets/bjCard/1.png'
                },
                {
                    id: 3,
                    imgBj: '/src/assets/bjCard/2.png'
                },
                {
                    id: 4,
                    imgBj: '/src/assets/bjCard/3.png'
                },
                {
                    id: 5,
                    imgBj: '/src/assets/bjCard/4.png'
                },
                {
                    id: 6,
                    imgBj: '/src/assets/bjCard/5.png'
                },
                {
                    id: 7,
                    imgBj: '/src/assets/bjCard/6.png'
                },
                {
                    id: 8,
                    imgBj: '/src/assets/bjCard/7.png'
                },
                {
                    id: 9,
                    imgBj: '/src/assets/bjCard/8.png'
                },
                {
                    id: 10,
                    imgBj: '/src/assets/bjCard/9.png'
                },
            ]
        },
        {
            id: 2,
            imgList: [
                {
                    id: 1,
                    imgBj: '/src/assets/bjCard/20.png'
                },
                // {
                //     id: 2,
                //     imgBj: '/src/assets/bjCard/21.png'
                // },
                // {
                //     id: 3,
                //     imgBj: '/src/assets/bjCard/22.png'
                // },
                // {
                //     id: 4,
                //     imgBj: '/src/assets/bjCard/23.png'
                // },
                // {
                //     id: 5,
                //     imgBj: '/src/assets/bjCard/24.png'
                // },
                {
                    id: 6,
                    imgBj: '/src/assets/bjCard/25.png'
                },
                {
                    id: 7,
                    imgBj: '/src/assets/bjCard/26.png'
                },
                {
                    id: 8,
                    imgBj: '/src/assets/bjCard/27.png'
                },
                {
                    id: 9,
                    imgBj: '/src/assets/bjCard/28.png'
                },
                {
                    id: 10,
                    imgBj: '/src/assets/bjCard/29.png'
                },
                {
                    id: 7,
                    imgBj: '/src/assets/bjCard/36.png'
                },
                {
                    id: 8,
                    imgBj: '/src/assets/bjCard/37.png'
                },
                {
                    id: 9,
                    imgBj: '/src/assets/bjCard/38.png'
                },
                {
                    id: 10,
                    imgBj: '/src/assets/bjCard/39.png'
                },
            ]
        },
        {
            id: 3,
            imgList: [
                {
                    id: 1,
                    imgBj: '/src/assets/bjCard/30.png'
                },
                {
                    id: 2,
                    imgBj: '/src/assets/bjCard/31.png'
                },
                {
                    id: 3,
                    imgBj: '/src/assets/bjCard/32.png'
                },
                {
                    id: 4,
                    imgBj: '/src/assets/bjCard/33.png'
                },
                {
                    id: 5,
                    imgBj: '/src/assets/bjCard/34.png'
                },
                {
                    id: 6,
                    imgBj: '/src/assets/bjCard/35.png'
                },
                {
                    id: 7,
                    imgBj: '/src/assets/bjCard/36.png'
                },
                {
                    id: 8,
                    imgBj: '/src/assets/bjCard/37.png'
                },
                {
                    id: 9,
                    imgBj: '/src/assets/bjCard/38.png'
                },
                {
                    id: 10,
                    imgBj: '/src/assets/bjCard/39.png'
                },
            ]
        },
        {
            id: 4,
            imgList: [
                {
                    id: 1,
                    imgBj: '/src/assets/bjCard/10.png'
                },
                {
                    id: 2,
                    imgBj: '/src/assets/bjCard/11.png'
                },
                {
                    id: 3,
                    imgBj: '/src/assets/bjCard/12.png'
                },
                {
                    id: 4,
                    imgBj: '/src/assets/bjCard/13.png'
                },
                {
                    id: 5,
                    imgBj: '/src/assets/bjCard/14.png'
                },
                {
                    id: 6,
                    imgBj: '/src/assets/bjCard/15.png'
                },
                {
                    id: 7,
                    imgBj: '/src/assets/bjCard/16.png'
                },
                {
                    id: 8,
                    imgBj: '/src/assets/bjCard/17.png'
                },
                {
                    id: 9,
                    imgBj: '/src/assets/bjCard/18.png'
                },
                {
                    id: 10,
                    imgBj: '/src/assets/bjCard/19.png'
                },
            ]
        },
    ]
)


</script>


<style scoped lang="scss">
#homeBj {
    width: 150%;
    position: relative;
    background: #171717;
    transform:  rotateZ(20deg) translateX(-115px) translateY(10px);
    @keyframes homepage_Animate {
        0% {
            transform: translateX(0px);
        }

        100% {
            transform: translateX(-50%);
        }
    }

    .homeBjPageRow {
        width: 4100px;
        // height: 378px;
        margin-bottom: 28px;
        display: flex;
        animation-duration: 100s; // 持续时间
        animation-direction: reverse; // 动画执行方向
        animation-delay: 0s; // 动画延迟
        animation-iteration-count: infinite; // 动画循环次数
        animation-timing-function: linear; // 动画速度曲线
        animation-name: homepage_Animate; // 动画名称

        .placeholderBox {
            width: 177px;
            height: 177px;
            margin-right: 28px;

            .cardImg {
                width: 177px;
                height: 177px;
            }
        }
    }

    & .homeBjPageRow:nth-of-type(2n-1) {
        animation-direction: normal;
    }
}</style>
