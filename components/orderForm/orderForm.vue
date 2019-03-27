<template>
	<view class="order-form-content">
		<navigator url="/pages/mine/orderInfo/orderInfo" class="order-list">
			<view class="order-num">
				<text class="left">订单号245678987</text>
				<text class="right">2019-10-10 10:10:10</text>
			</view>
			<view class="order-site">
				<text class="left">租借地点</text>
				<text class="right">尚艺时光(坂田电)</text>
			</view>
			<view class="order-cost">
				<text class="left">合计费用</text>
				<text class="right">￥6.00</text>
			</view>
		</navigator>
		<navigator url="/pages/mine/orderInfo/orderInfo" class="order-list">
			<view class="order-num">
				<text class="left">订单号245678987</text>
				<text class="right">2019-10-10 10:10:10</text>
			</view>
			<view class="order-site">
				<text class="left">租借地点</text>
				<text class="right">尚艺时光(坂田电)</text>
			</view>
			<view class="order-cost">
				<text class="left">合计费用</text>
				<text class="right">￥6.00</text>
			</view>
		</navigator>
		<navigator url="/pages/mine/orderInfo/orderInfo" class="order-list">
			<view class="order-num">
				<text class="left">订单号245678987</text>
				<text class="right">2019-10-10 10:10:10</text>
			</view>
			<view class="order-site">
				<text class="left">租借地点</text>
				<text class="right">尚艺时光(坂田电)</text>
			</view>
			<view class="order-cost">
				<text class="left">合计费用</text>
				<text class="right">￥6.00</text>
			</view>
		</navigator>
		<navigator url="/pages/mine/orderInfo/orderInfo" class="order-list">
			<view class="order-num">
				<text class="left">订单号245678987</text>
				<text class="right">2019-10-10 10:10:10</text>
			</view>
			<view class="order-site">
				<text class="left">租借地点</text>
				<text class="right">尚艺时光(坂田电)</text>
			</view>
			<view class="order-cost">
				<text class="left">合计费用</text>
				<text class="right">￥6.00</text>
			</view>
		</navigator>
		<navigator url="/pages/mine/orderInfo/orderInfo" class="order-list">
			<view class="order-num">
				<text class="left">订单号245678987</text>
				<text class="right">2019-10-10 10:10:10</text>
			</view>
			<view class="order-site">
				<text class="left">租借地点</text>
				<text class="right">尚艺时光(坂田电)</text>
			</view>
			<view class="order-cost">
				<text class="left">合计费用</text>
				<text class="right">￥6.00</text>
			</view>
		</navigator>
		<navigator url="/pages/mine/orderInfo/orderInfo" class="order-list">
			<view class="order-num">
				<text class="left">订单号245678987</text>
				<text class="right">2019-10-10 10:10:10</text>
			</view>
			<view class="order-site">
				<text class="left">租借地点</text>
				<text class="right">尚艺时光(坂田电)</text>
			</view>
			<view class="order-cost">
				<text class="left">合计费用</text>
				<text class="right">￥6.00</text>
			</view>
		</navigator>
	</view>
</template>
<script>
export default {
	
	onLoad() {
// 		uni.showLoading({
// 			title: '加载中'
// 		});
// 	
// 		setTimeout(function() {
// 			uni.hideLoading();
// 		}, 2000);
	}
};
</script>
<style lang="scss" scoped>
.content-box {
	padding-top: 0;
}
.order-form-content {
	padding: 47upx 0 0 26upx;
	box-sizing: border-box;
	font-size: 24upx;
	font-family: PingFang-SC-Light;
	font-weight: bold;
	color: rgba(71, 71, 71, 1);
	width: 750upx;

	.order-list {
		width: 580upx;
		height: 195upx;
		background: #acbbef;
		border-radius: 15upx;
		box-shadow: 0px 10upx 20upx 0px rgba(172, 187, 239, 0.77);
		border-radius: 8upx;
		margin-bottom: 26upx;
		color: #fff;
		box-sizing: border-box;
		padding: 37upx 39upx 0;

		view {
			display: flex;
			justify-content: space-between;
		}
		.order-num {
			font-size: 20upx;
			font-family: PingFang-SC-Light;
			font-weight: bold;
		}

		.order-site {
			margin: 26upx 0 28upx 0;
		}
	}
}
</style>
