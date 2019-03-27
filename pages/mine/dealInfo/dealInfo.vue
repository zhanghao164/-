<template>
	<view class="deal-list">
		<view class="deal-info">
			<view class="">
				<text>订单号 245678987</text>
				<text>-￥97.00</text>
			</view>
			<view class=""><text>消费—余额</text></view>
			<view class=""><text>2019-01-31 17:58:32</text></view>
		</view>
		<view class="deal-info">
			<view class="">
				<text>订单号 245678987</text>
				<text class="fon-color">+￥97.00</text>
			</view>
			<view class=""><text>消费—余额</text></view>
			<view class=""><text>2019-01-31 17:58:32</text></view>
		</view>
		<view class="deal-info">
			<view class="">
				<text>订单号 245678987</text>
				<text>-￥97.00</text>
			</view>
			<view class=""><text>消费—余额</text></view>
			<view class=""><text>2019-01-31 17:58:32</text></view>
		</view>
		<view class="deal-info">
			<view class="">
				<text>订单号 245678987</text>
				<text>-￥97.00</text>
			</view>
			<view class=""><text>消费—余额</text></view>
			<view class=""><text>2019-01-31 17:58:32</text></view>
		</view>
		<view class="deal-info">
			<view class="">
				<text>订单号 245678987</text>
				<text>-￥97.00</text>
			</view>
			<view class=""><text>消费—余额</text></view>
			<view class=""><text>2019-01-31 17:58:32</text></view>
		</view>
	</view>
</template>
<script>
export default {};
</script>
<style lang="scss">
@import '../../../common/iconfont.css';
body {
	background: #f4f6fb;
}

.deal-list {
	padding: 43upx 48upx 0;
	box-sizing: border-box;
	.deal-info {
		width: 654upx;
		height: 168upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 7upx 16upx 0upx rgba(205, 197, 233, 0.42);
		border-radius: 20upx;
		font-size: 24upx;
		font-family: PingFang-SC-Light;
		font-weight: bold;
		color: #474747;
		// line-height: 72upx;
		box-sizing: border-box;
		padding: 32upx 39upx 31upx 40upx;
		line-height: 38upx;
		margin-bottom: 28upx;
		view {
			text:nth-child(2) {
				float: right;
			}
			.fon-color {
				color: #7185ea;
			}
		}
	}
}
</style>
