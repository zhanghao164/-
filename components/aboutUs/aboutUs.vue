<template>
	<view class="cooperative-content">
		<view class="logo"></view>
		<view class="edition">V1.0</view>
		<view class="cooperation">
			<view
				class="FAQ-list"
				v-for="(item, index) in items"
				:key="item.id"
				:class="{ height60: item.isShow }"
			>
				<view class="title" @tap="getFAQInfo(index)">
					<text>合作洽谈{{ index }}</text>
					<text class="iconfont download-icon" :class="{iconRotate:  item.isShow }">&#xe617;</text>
					<!-- <text v-if="item.isShow" class="iconfont download-icon">&#xe617;</text>
					<text v-else class="iconfont download-icon">&#xe606;</text> -->
				</view>
				<view class="text" >
					(+61)02 8005 0205
					<br />
					Email:support@pwrbus.com
				</view>
			</view>
		</view>
		<view class="footer">
			<view class="agreement">
				<navigator url="">《用户协议》</navigator>
				<navigator url="">《隐私协议》</navigator>
			</view>
			<view class="foot">
				Copyright©2019-2020 无限续航网络科技 保留所有权利
				<br />
				15648897｜9｜MIX 2S
			</view>
		</view>
	</view>
</template>
<script>
export default {
	data() {
		return {
			items: [
				{
					id: 1,
					isShow: true
				},
				{
					id: 2,
					isShow: false
				}
			]
		};
	},
	methods: {
		getFAQInfo(index) {
			this.items[index].isShow = !this.items[index].isShow;
		}
	},
	onLoad() {
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
	
@import '../../common/iconfont.css';
.FAQ-list {
	// border: 1upx solid #ccc;
	position: relative;
	height: 60upx;
	transition: all 0.2s ;
	width: 100%;
	overflow: hidden;
}
.height60 {
	height: 152upx;
}
.cooperative-content {
	padding-top: 151upx;
	width: 630upx;
	position: relative;
	.logo {
		width: 136upx;
		height: 105upx;
		margin: 0 auto;
		background: #ccc;
	}
	.edition {
		font-size: 24upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		text-align: center;
		margin-top: 39upx;
	}
	.cooperation {
		font-size: 26upx;
		font-family: PingFang-SC-Medium;
		font-weight: bold;
		color: rgba(71, 71, 71, 1);
		margin-top: 150upx;
		padding: 0 48upx;
		box-sizing: border-box;

		// 		.FAQ-list {
		// 			height: 60upx;
		// 			position: relative;
		// 			transition: all 0.5s;
		// 			overflow: hidden;
		//
		// 		}
		// 		.FAQheight {
		// 		height:	152upx;
		// }

		.title {
			// width: 100%;
			height: 60upx;
			display: flex;
			justify-content: space-between;
			background: #fff;
			align-items: center;
			position: absolute;
			top: 0;
			z-index: 10;
			width: 100%;
			// 			position: absolute;
			// 			z-index: 10;
			// 			top: 0;
			.iconfont {
				transition: all 0.2s;
				width: 26upx;
				height: 26upx;
				display: flex;
				justify-content: center;
				align-items: center;
				margin-right: 10upx;
			}
			.iconRotate {
				transform: rotateZ(-180deg);
				transform-origin:50% 50%;
			}
		}
		.text {
			// 			width: 100%;
			// 			position: absolute;
			// 			bottom: 0;
			font-size: 24upx;
			font-family: PingFang-SC-Light;
			// display: none;
			font-weight: normal;
			height: 0;
			line-height: 36upx;
			transition: all 1s;
			overflow: hidden;
			height: 82upx;
			position: absolute;
			bottom: 0;
			// background: red;
			width: 100%;

		}
// 		.show {
// 			// display: block;
// 			padding-top: 10upx;
// 			transform: translateY(0%)
// 
// 		}
	}

	.footer {
		text-align: center;
		position: fixed;
		width: 534upx;
		bottom: 88upx;
		line-height: 40upx;
		left: 55upx;
		.agreement {
			font-size: 24upx;
			font-family: PingFang-SC-Light;
			font-weight: normal;
			color: #7185ea;
			display: flex;
			justify-content: center;
			text-align: center;
		}
		.foot {
			font-size: 20upx;
			font-family: PingFang-SC-Light;
			font-weight: normal;
			color: rgba(153, 153, 153, 1);
			line-height: 36upx;
		}
	}
}
</style>
