<template>
    <div class='outLoading' v-show='loading'>
        <div class="shade"></div>
        <div class="loding">
            <!--经典loding-->
            <svg class="lds-microsoft" width="100%" height="100px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                <g transform="rotate(0)">
                    <circle cx="81.73413361164941" cy="74.35045716034882" fill="#e15b64" r="5" transform="rotate(82.6075 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="0s"></animateTransform>
                    </circle>
                    <circle cx="74.35045716034882" cy="81.73413361164941" fill="#f47e60" r="5" transform="rotate(107.001 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.0625s"></animateTransform>
                    </circle>
                    <circle cx="65.3073372946036" cy="86.95518130045147" fill="#f8b26a" r="5" transform="rotate(134.254 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.125s"></animateTransform>
                    </circle>
                    <circle cx="55.22104768880207" cy="89.65779445495241" fill="#abbd81" r="5" transform="rotate(163.458 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.1875s"></animateTransform>
                    </circle>
                    <circle cx="44.77895231119793" cy="89.65779445495241" fill="#849b87" r="5" transform="rotate(193.4 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.25s"></animateTransform>
                    </circle>
                    <circle cx="34.692662705396415" cy="86.95518130045147" fill="#e15b64" r="5" transform="rotate(222.742 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.3125s"></animateTransform>
                    </circle>
                    <circle cx="25.649542839651176" cy="81.73413361164941" fill="#f47e60" r="5" transform="rotate(250.251 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.375s"></animateTransform>
                    </circle>
                    <circle cx="18.2658663883506" cy="74.35045716034884" fill="#f8b26a" r="5" transform="rotate(274.976 50 50)">
                        <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;360 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s" begin="-0.4375s"></animateTransform>
                    </circle>
                    <animateTransform attributeName="transform" type="rotate" calcMode="spline" values="0 50 50;0 50 50" times="0;1" keySplines="0.5 0 0.5 1" repeatCount="indefinite" dur="1.5s"></animateTransform>
                </g>
            </svg>
            <p class="loding_write">加载中,请稍后……</p>
        </div>
    </div>
</template>

<script>
export default {
  props: ["loading"]
};
</script>

<style scoped>
.outLoading .shade {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 10001;
    background-color: rgba(0, 0, 0, 0.35);
    /*background-color: rgba(53, 41, 82,.72);*/
}
.outLoading .loding {
    width: 200px;
    height: 150px;
    background-color: rgba(0, 0, 0, 0.7);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -75px;
    z-index: 10002;
    /*border: 1px solid rgba(204,204,204,.72);*/
    border-radius: 15px;
    /*box-shadow: 1px 1px 25px rgba(135,135,135,0.96);*/
}
.outLoading .loding_write {
    position: absolute;
    bottom: 0;
    color: #faf;
    font-size: 22px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    cursor: default;
}
</style>
