<template>
	<view class="content">
		<scroll-view scroll-y="true">
			<view class="exchange-btn">
				<input
					type="text"
					value=""
					placeholder="输入兑换码"
					placeholder-style="font-size:20upx;font-family:PingFang-SC-Light;color:#999999;"
				/>
				<text>兑换</text>
			</view>

			<!-- 有效 -->
			<view class="valid" v-if="toggleText == '查看已失效'">
				<view
					class="coupons"
					@tap="toOrderInfo($event, i)"
					v-for="(item, i) in items"
					:key="item.id"
				>
					<view class="coupons-right">立即使用</view>
					<view class="coupons-left">
						<view class="tips">
							<text class="top"></text>
							<text class="bottom"></text>
						</view>

						<text>3元通用代金券</text>
						<text class="fontWeight">截止日期2019.9.23</text>
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

			<!-- 无效 -->
			<view class="valid past-due" v-if="toggleText == '查看可使用'">
				<view
					class="coupons"
					@tap="toOrderInfo($event, i)"
					v-for="(item, i) in items"
					:key="item.id"
				>
					<view class="coupons-right">已失效</view>
					<view class="coupons-left">
						<view class="tips">
							<text class="top"></text>
							<text class="bottom"></text>
						</view>

						<text>3元通用代金券</text>
						<text class="fontWeight">失效原因：过期未使用</text>
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
		</scroll-view>

		<view class="expired" @tap="toggleExpired">
			{{ toggleText }}
			<text class="iconfont download-icon">&#xe63d;</text>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			toggleText: '查看已失效',
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
		console.log(this.toggleText);
		// 		uni.showLoading({
		// 			title: '加载中'
		// 		});
		//
		// 		setTimeout(function() {
		// 			uni.hideLoading();
		// 		}, 500);
	},
	methods: {
		toggleExpired() {
			//点击切换 优惠券是否失效

			if (this.toggleText == '查看已失效') {
				this.toggleText = '查看可使用';
			} else {
				this.toggleText = '查看已失效';
			}

			console.log(this.toggleText);
		},
		toOrderInfo(e, idx) {
			// windowHeight = (res.windowHeight * (750 / res.windowWidth));
			let clientX = e.clientX;

			if (clientX > 167) {
				this.items[idx].popMasking = 1;
			} else {
				this.items[idx].popMasking = 0;
			}

						setTimeout(() => {
							this.items[idx].popMasking = -1;
						}, 300);
		}
	}
};
</script>
<style lang="scss" scoped>
@import '../../common/iconfont.css';
.content {
	position: fixed;
	top: 0;
	left: 48upx;
	bottom: 0;
	width: 534upx;

	// display: none;
	// height: 100%;
	scroll-view {
		box-sizing: border-box;
		height: 88%;

		.valid {
			width: 100%;
			.coupons {
				box-shadow: 0px 10upx 20upx 0px rgba(172, 187, 239, 0.77);
				width: 534upx;
				height: 191upx;
				border-radius: 20upx;
				background: #acbbef;
				margin-bottom: 24upx;
				box-sizing: border-box;
				padding-right: 12upx;
				color: #fff;
				overflow: hidden;
				position: relative;

				.coupons-right {
					width: 60upx;
					height: 100%;
					float: right;
					font-size: 20upx;
					font-family: PingFang-SC-Medium;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					padding: 0 15upx;
					box-sizing: border-box;
					line-height: 28upx;
				}
				.coupons-left {
					width: 444upx;
					height: 100%;
					display: flex;
					flex-direction: column;
					text-align: center;
					justify-content: space-around;
					box-sizing: border-box;
					padding: 24upx 0;
					box-sizing: border-box;
					position: relative;
					border-right: #fff 1upx dashed;

					.tips {
						width: 20upx;
						height: 100%;
						overflow: hidden;
						// background: #8066ff;
						position: absolute;
						top: 0;
						left: 432upx;
						display: flex;
						flex-direction: column;
						justify-content: space-around;
						box-sizing: border-box;
						padding-top: 10upx;

						.top,
						.bottom {
							width: 30upx;
							height: 30upx;
							border-radius: 50%;
							background: #fff;
							position: absolute;

							left: 50%;
							transform: translateX(-50%);
						}
						.top {
							top: -24upx;
						}
						.bottom {
							bottom: -24upx;
						}
					}

					text {
						font-size: 28upx;
						font-family: PingFang-SC-Medium;
					}
					text:last-child {
						font-size: 20upx;
						font-family: PingFang-SC-Light;
					}
					.fontWeight {
						font-weight: normal;
					}
				}
			}
		}
	}
	::-webkit-scrollbar {
		//隐藏滚动条
		width: 0;
		height: 0;
		color: transparent;
	}

	.exchange-btn {
		height: 60upx;
		border-radius: 30upx;
		font-size: 28upx;
		color: #fff;
		line-height: 60upx;
		width: 100%;
		display: flex;
		justify-content: space-between;
		padding: 78upx 0 40upx;

		input {
			width: 320upx;
			height: 60upx;
			background: #fff;
			box-shadow: 0px 0px 10upx 0px rgba(130, 130, 130, 0.1);
			border-radius: 30upx;
			box-sizing: border-box;
			padding-left: 30upx;
			font-size: 20upx;
			font-family: PingFang-SC-Light;
			color: rgba(153, 153, 153, 1);
			text-align: center;
		}

		text {
			width: 150upx;
			height: 60upx;
			background: #7185ea;
			border-radius: 30upx;
			font-size: 28upx;
			font-family: PingFang-SC-Medium;
			color: #fff;
			text-align: center;
		}
	}

	.expired {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		color: #7185ea;
		position: absolute;
		top: 93%;
		left: 50%;
		transform: translateX(-50%);
		display: flex;
		align-items: center;
	}

	scroll-view {
		.past-due.valid {
			.coupons {
				box-shadow: 0px 10upx 20upx 0px rgba(146, 151, 183, 0.77);
				color: #999;
				background: #eef0f4;
			}
		}
	}
}
</style>
