<template>
    <div id="home">
        <HomeBj></HomeBj>
        <div class="Main">
            <div class="mainHeader">
                <img src="/src/assets/global/logo.png" alt="" />
                <div class="text">元易宝·数字版权资产卡交易服务平台</div>
            </div>
            <div class="mainContent">
                <div class="mainContentTop">
                    <img src="/src/assets/home/mainContentTopImg.png" alt="">
                </div>
                <div class="mainContentMain">
                    <img src="/src/assets/home/mainContentMainImg.png" alt="">
                </div>
                <div class="mainContentBottom">
                    <img src="@/assets/home/homeContentText.png" alt="">
                </div>
            </div>
            <div class="mainFooter">
                <div class="btn">敬请期待...</div>
            </div>

        </div>
    </div>
</template>
<script setup lang="ts">
import HomeBj from "./components/homeBj.vue"

</script>


<style scoped lang="scss">
#home {
    width: 100%;
    height: 100vh;
    overflow: hidden;

    .Main {
        background: rgba(0, 0, 0, 0.60);
        height: 100vh;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        overflow: auto;

        .mainHeader {
            width: 100%;
            height: 70px;
            padding: 20px 0 0px 20px;
            display: flex;
            align-items: center;

            img {
                width: 34px;
                height: 34px;
                border-radius: 9px;
                box-shadow: 0px 0px 12px 0px rgba(255, 255, 255, 0.25);
            }

            .text {
                color: #FFF;
                font-size: 10px;
                font-weight: 400;
                margin-left: 10px;
            }
        }

        .mainContent {
            margin-top: 35px;

            .mainContentTop {
                text-align: center;

                img {
                    width: 72px;
                    height: 34px;
                }
            }

            .mainContentMain {
                margin-top: 14px;
                text-align: center;

                img {
                    width: 202px;
                    height: 408px;
                }
            }

            .mainContentBottom {
                margin-top: 10px;
                text-align: center;

                img {
                    width: 217px;
                    height: 33px;
                }
            }
        }

        .mainFooter {
            width: 375px;
            margin-top: 16px;

            .btn {
                margin: 0 auto;
                width: 311px;
                height: 42px;
                text-align: center;
                line-height: 42px;
                border-radius: 32px;
                border: 1px solid #FFF;
                background: linear-gradient(89deg, #7F7F7F 0.64%, #303030 97.74%);
                color: #FFF;
                font-size: 16px;
                font-weight: 400;
            }
        }
    }
}
</style>
