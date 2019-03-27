<template>
	<view class="order-form-content">
		<view
			class="order-list"
			@tap="toOrderInfo($event, item.id)"
			v-for="(item, i) in items"
			:key="item.id"
		>
			<!-- "{ event: goToDetail, params: [item.orderId]}" -->
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
			<view
				class="maskingRight masking"
				:class="{ maskingRightShow: items[i].popMasking == 0 }"
			></view>
			<view
				class="maskingLeft masking"
				:class="{ maskingLeftShow: items[i].popMasking == 1 }"
			></view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			maskingDirection: -1, // 判断 蒙版  移动方向
			items: [
				{
					id: 0,
					popMasking: -1
				},
				{
					id: 1,
					popMasking: -1
				},
				{
					id: 2,
					popMasking: -1
				},
				{
					id: 3,
					popMasking: -1
				},
				{
					id: 4,
					popMasking: -1
				},
				{
					id: 5,
					popMasking: -1
				},
				{
					id: 6,
					popMasking: -1
				},
				{
					id: 7,
					popMasking: -1
				}
			]
		};
	},
	onLoad() {
		// 		uni.showLoading({
		// 			title: '加载中'
		// 		});
		//
		// 		setTimeout(function() {
		// 			uni.hideLoading();
		// 		}, 2000);
	},
	methods: {
		toOrderInfo(e, idx) {
			// windowHeight = (res.windowHeight * (750 / res.windowWidth));
			let clientX = e.clientX;

			if (clientX > 167) {
				this.items[idx].popMasking = 1;
			} else {
				this.items[idx].popMasking = 0;
			}
			console.log(0);
			setTimeout(() => {
				uni.navigateTo(
					{
						url: '/pages/mine/orderInfo/orderInfo'
					}
					
				);
			},200);

			
			console.log(1);
		}
	},
	onShow() {
		this.items.forEach(v => {
			v.popMasking = -1;
		});
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
		position: relative;
		overflow: hidden;

		view {
			display: flex;
			justify-content: space-between;
		}
		.order-num {
			font-size: 20upx;
			font-family: PingFang-SC-Light;
		}

		.order-site {
			margin: 26upx 0 28upx 0;
		}
		
	}
}
</style>
