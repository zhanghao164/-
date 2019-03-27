<template>
	<view class="content">
		<view class="icon"><image src="" mode=""></image></view>
		<view class="title">充值失败</view>
		<view class="addMoneyInfo">
			<view class="">
				<text>订单号</text>
				<text>152525121122</text>
			</view>
			<view class="">
				<text>订单余额</text>
				<text>99.00元</text>
			</view>
			<view class="">
				<text>支付时间</text>
				<text>2017-3-17 23:21:12</text>
			</view>
			<view class="">
				<text>商品</text>
				<text>押金</text>
			</view>
		</view>
		<view class="toHome-btn">
			返回首页
		</view>
	</view>
</template>
<script>
export default {
	
};
</script>
<style lang="scss">
.content {
	padding: 190upx 49upx 0 49upx;
	.icon {
		width: 473upx;
		height: 321upx;
		margin: 0 auto;
		background: blue;
		image {
			width: 100%;
			height: 100%;
		}
	}
	.title {
		font-size: 32upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		text-align: center;
		margin: 98upx 0 70upx 0;
	}
	.addMoneyInfo {
		view {
			height: 58upx;
			line-height: 58upx;
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			font-weight: bold;
			color: rgba(71, 71, 71, 1);
			text:nth-child(2) {
				float: right;
				font-family: PingFang-SC-Light;
			}
		}
	}
	.toHome-btn {
		width:300upx;
height:80upx;
background:rgba(128,102,255,1);
box-shadow:0px 17upx 32upx 0px rgba(164,128,255,0.77);
border-radius:40upx;
font-size:28upx;
font-family:PingFang-SC-Medium;
font-weight:bold;
color:rgba(255,255,255,1);
margin: 72upx auto 0;
line-height: 80upx;
text-align: center
	}
}
</style>
