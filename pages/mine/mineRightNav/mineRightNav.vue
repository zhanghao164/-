<template>
	<view class="mine-box">
		<view v-if="showComponente[0].isShow"><order-form></order-form></view>

		<view v-else-if="showComponente[1].isShow"><coupons></coupons></view>

		<view v-else-if="showComponente[2].isShow"><faq></faq></view>

		<view v-else-if="showComponente[3].isShow"><about-us></about-us></view>

		<view v-else><mine-index></mine-index></view>
		
		<view class="right-mask">
			<view class="logOut"><text>登出</text></view>

			<view class="mask">
				<view
					class="top"
					:class="{
						top0: navIndex == 0,
						top1: navIndex == 1,
						top2: navIndex == 2,
						top3: navIndex == 3,
						top4: navIndex == 4
					}"
				>
					<view class="sub-user-info" @tap="hideUserIcon(5)">
						<view
							:class="{ icon: navIndex < 5 && navIndex >= 0, leftShift: userIconPop }"
							@tap="userIconleftShift"
						></view>
					</view>
				</view>
				<view
					class="bottom"
					:class="{
						bottom0: navIndex == 0,
						bottom1: navIndex == 1,
						bottom2: navIndex == 2,
						bottom3: navIndex == 3,
						bottom4: navIndex == 4
					}"
				></view>
			</view>
			<view class="right-nav">
				<view class="text-icon" @tap="getUpx(0)">
					<text
						class="iconfont download-icon"
						:class="{ downloadIconColor: navIndex == 4 || showComponente[0].isShow }"
					>
						&#xe60c;
					</text>
					<text>订单</text>
				</view>
				<view class="text-icon" @tap="getUpx(1)">
					<text
						class="iconfont download-icon"
						:class="{ downloadIconColor: showComponente[1].isShow }"
					>
						&#xe60e;
					</text>
					<text>优惠券</text>
				</view>
				<view class="text-icon" @tap="getUpx(2)">
					<text
						class="iconfont download-icon"
						:class="{ downloadIconColor: showComponente[2].isShow }"
					>
						&#xe60d;
					</text>
					<text>常见问题</text>
				</view>
				<view class="text-icon" @tap="getUpx(3)">
					<text
						class="iconfont download-icon"
						:class="{ downloadIconColor: showComponente[3].isShow }"
					>
						&#xe60f;
					</text>
					<text>关于我们</text>
				</view>
				<view class="text-icon" @tap="makingACall">
					<text class="iconfont download-icon">&#xe610;</text>
					<text>联系客服</text>
				</view>
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			// tabBarId: 3,
			navIndex: -1, // 判断右边导航栏动画移动的高度
			userIconPop: false,
			showComponente: [
				//  判断 显示 那一个  组件页面
				{
					isShow: false,
					id: 0
				},
				{
					isShow: false,
					id: 1
				},
				{
					isShow: false,
					id: 2
				},
				{
					isShow: false,
					id: 3
				},
				{
					isShow: false,
					id: 4
				}
			]
		};
	},
	methods: {
		getUpx(index) {
			// 点击  显示 相对应的组件以及右边导航栏的动画移动位置
			this.userIconPop = false;
			this.navIndex = index;
			this.showComponente.forEach((v, i) => {
				v.isShow = false;
				if (v.id == index) {
					v.isShow = true;
				}
			});
		},
		makingACall() {
			//点击客服  拨打电话
			uni.makePhoneCall({
				phoneNumber: '114' //仅为示例
			});
		},
		hideUserIcon(idx) {
			this.navIndex = idx;
			this.showComponente.forEach((v, i) => {
				v.isShow = false;
				// 				if (v.id == index) {
				// 					v.isShow = true;
				// 				}
			});
		},
		userIconleftShift() {
			this.userIconPop = true;
		}
	},
	onLoad() {
		this.userIconPop = true;
		// 		uni.showLoading({
		// 			title: '加载中'
		// 		});
		//
		// 		setTimeout(function() {
		// 			uni.hideLoading();
		// 		}, 500);
	}
};
</script>
<style lang="scss" scoped>
body {
	background: #fff;
}
@import '../../../common/iconfont.css';

.mine-box {
	position: relative;
	
}
.right-mask {
	position: fixed;
	z-index: 99;
	right: 0;
	width: 120upx;
	top: 296upx;
	// height: 1110upx;
	box-sizing: border-box;
	top: 0;
	// overflow: hidden;
	bottom: 0;
	.mask {
		height: 940upx;
		position: absolute;
		width: 100%;
		left: 0;
		top: 0;
		.top {
			width: 120upx;
			background: #7185ea;
			position: absolute;
			height: 0;
			// overflow: hidden;
			transition: height 0.5s;
			border-radius: 0px 0px 0px 40upx;

			.sub-user-info {
				position: absolute;
				top: 0;
				width: 100%;
				background: #7185ea;
				border-radius: 0px 0px 0px 40upx;

				view {
					// display: none;
					// 					width: 75upx;
					// 					height: 75upx;
					background: #fff;
					border-radius: 50%;
					// margin: 140upx auto 0;
					position: absolute;
					transition: all 0.5s;
					top: 0;
					left: 50%;
					transform: translateX(-50%);
				}
				.icon {
					// display: block;
					width: 75upx;
					height: 75upx;
					top: 140upx;
				}
				.leftShift {
					transform: scale(2.2) translate(-166upx, 55upx);
					width: 75upx;
					height: 75upx;
					background: red;
				}
			}
		}
		.top0 {
			height: 310upx;
		}
		.top1 {
			height: 437upx;
		}
		.top2 {
			height: 563upx;
		}
		.top3 {
			height: 690upx;
		}
		.top4 {
			height: 0upx;
		}

		.bottom {
			width: 120upx;
			height: 648upx;
			background: #7185ea;
			border-radius: 40upx 0px 0px 0px;
			position: absolute;
			bottom: 0;
			transition: height 0.5s;
		}
		.bottom0 {
			height: 504upx;
		}
		.bottom1 {
			height: 378upx;
		}
		.bottom2 {
			height: 252upx;
		}
		.bottom3 {
			height: 126upx;
		}
		.bottom4 {
			height: 648upx;
		}
	}
	.right-nav {
		position: absolute;
		width: 100%;
		height: 630upx;
		box-sizing: border-box;
		top: 310upx;
		// background: red;
		display: flex;
		flex-direction: column;
		align-items: center;

		.text-icon {
			width: 100upx;
			height: 100upx;
			font-size: 24upx;
			text-align: center;
			margin: 15upx 0;
			display: flex;
			flex-direction: column;
			color: #7185ea;

			.download-icon {
				font-size: 70upx;
				line-height: 70upx;
				color: #fff;
			}
			.colorWhite {
				color: #fff;
			}
			.downloadIconColor {
				color: #7185ea;
			}
		}
	}
	.logOut {
		position: fixed;
		font-size: 26upx;
		font-family: PingFang-SC-Light;
		font-weight: bold;
		color: #fefefe;
		top: 940upx;
		background: #7185ea;
		bottom: 0;

		width: 120upx;
		right: 0;

		text {
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			bottom: 45upx;
		}
	}
}
</style>
