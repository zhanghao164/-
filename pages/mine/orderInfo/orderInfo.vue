<template>
	<view class="order-content">
		<view class="orderNumber">
			<text>订单号 245678987</text>
			<text>已完成</text>
		</view>
		<!-- 使用情况 -->
		<view class="use-info">
			<view class="title">
				<text></text>
				<text>使用情况</text>
				<text></text>
			</view>
			<view class="tips">
				<text>租借地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
			<view class="tips">
				<text>租借时间</text>
				<text>2019-01-31 16:37:13</text>
			</view>
			<view class="tips">
				<text>归还时间</text>
				<text>2019-01-31 17:58:32</text>
			</view>
			<view class="tips">
				<text>归还地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
		</view>
		<!-- 价格明细 -->
		<view class="use-info">
			<view class="title">
				<text></text>
				<text>价格明细</text>
				<text></text>
			</view>
			<view class="tips">
				<text>计费标准</text>
				<text>1元/1小时</text>
			</view>
			<view class="tips">
				<text>使用时长</text>
				<text>1小时22分钟</text>
			</view>
			<view class="tips">
				<text>租金总额</text>
				<text>2元</text>
			</view>
			<view class="tips">
				<text>归还地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
			<view class="tips">
				<text>归还地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
			<view class="tips">
				<text>归还地点</text>
				<text>尚艺时光(坂田电)</text>
			</view>
		</view>
		<!-- 计费规则 -->
		<view class="use-info">
			<view class="title">
				<text></text>
				<text>计费规则</text>
				<text></text>
			</view>
			<view class="tips2">
				<text>(1)</text>
				<text>自借出后开始计时，前10分钟内免费。</text>
			</view>
			<view class="tips2">
				<text>(2)</text>
				<text>超出部分按每1小时1元计费，不足1小时按1小 时计算。</text>
			</view>
			<view class="tips2">
				<text>(3)</text>
				<text>
					每24小时10元封顶(该计费规则为订单计费规则，
					即租借时商家设定的计费规则，订单开始后计费 规则不会变更)
				</text>
			</view>
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
.order-content {
	width: 100%;
	padding: 10upx 48upx 0;
	box-sizing: border-box;

	.orderNumber {
		font-size: 30upx;
		font-family: PingFang-SC-Light;
		color: #474747;
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 44upx 0 38upx 0;

		text:nth-child(2) {
			font-size: 24upx;
			color: #7185ea;
		}
	}
	.use-info {
		width: 654upx;
		border-radius: 20upx;
		padding: 30upx 38upx 53upx;
		box-sizing: border-box;
		font-size: 24upx;
		font-family: PingFang-SC-Light;
		color: rgba(71, 71, 71, 1);
		margin-bottom: 32upx;

		background: #ffffff;
		box-shadow: 0px 10upx 20upx 0px rgba(146, 151, 183, 0.77);

		.title {
			display: flex;
			justify-content: center;
			align-items: center;
			margin-bottom: 10upx;

			text:nth-child(1),
			text:nth-child(3) {
				width: 28upx;
				height: 2upx;
				background: rgba(102, 102, 102, 1);
				margin: 0 15upx;
			}
		}
		.tips {
			display: flex;
			justify-content: space-between;
			line-height: 46upx;
		}
		.tips2 {
			line-height: 48upx;
			display: flex;
		}
	}
}
</style>
