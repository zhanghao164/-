<template>
	<view class="content">
		<view
			class="FAQ-list"
			v-for="(item, index) in items"
			@tap="getFAQInfo(index)"
			:key="item.id"
			:class="{ height500: item.isShow }"
		>
			<view class="title">
				<text>如何收费</text>
				<!-- <text v-if="item.isShow" class="iconfont download-icon">&#xe617;</text> -->
				<!-- <text v-if="!item.isShow" class="iconfont download-icon">&#xe606;</text> -->
				<text :class="{ rotate180: item.isShow }" class="iconfont download-icon">&#xe617;</text>
			</view>
			<view class="text" >
				<text>（1）若在充电过程中突然无法充电，请 尝试租借新的充电宝。</text>
				<text>（2）若在充电过程中突然无法充电，请 尝试租借新的充电宝。</text>
			</view>
		</view>

		<view class="bottom-btn">
			<navigator url="#">需要更多帮助</navigator>
			<text @tap="getFeedback">反馈问题</text>
		</view>

		<view class="feedback-box" :class="{ feedbackBoxShow: isShow }">
			<!-- 编辑反馈 -->
			<view class="feedback-redact feedback">
				<textarea
					placeholder="请输入您的详情问题，我们将尽快为您解决"
					placeholder-style="color: #999;font-size: 24upx;"
					maxlength="200"
					@input="getCharacterNum"
				/>
				<view class="num">{{ CharacterNum }}/200</view>
				<view class="feedback-btn">
					<text @tap="abolishRetroaction">取消</text>
					<text @tap="submitRetroaction" class="confirm-btn">确认提交</text>
				</view>
			</view>
			<!-- 反馈提交成功 -->
			<view class="feedback-succed feedback">
				<view class="icon"></view>
				<view class="text">提交成功</view>
				<view class="confirm-btn"><text>确定</text></view>
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
					id: 0,
					isShow: false
				},
				{
					id: 1,
					isShow: false
				},
				{
					id: 2,
					isShow: false
				},
				{
					id: 3,
					isShow: false
				},
				{
					id: 4,
					isShow: false
				},
				{
					id: 5,
					isShow: false
				},
				{
					id: 6,
					isShow: false
				},
				{
					id: 7,
					isShow: false
				}
			],
			CharacterNum: 0,
			isShow: false
		};
	},
	methods: {
		getFAQInfo(index) {
			
			this.items[index].isShow = !this.items[index].isShow;

			
		},
		getFeedback() {
			//点击 反馈问题  弹出弹框
			// 			let res = uni.getSystemInfoSync()
			// 			console.log(res)
			// 			this.screenWidth =  res.screenWidth
			// 			this.screenHeight =  res.screenHeight
			// 			console.log(this.escreenWidth)
			// 			console.log(this.screenHeight)
			this.isShow = !this.isShow;

			console.log(this.isShow);
		},
		getCharacterNum(e) {
			//  获取输入文字数量
			// console.log(e.detail.value)
			this.CharacterNum = e.detail.value.length;
		},
		abolishRetroaction() {
			//点击取消  取消反馈
			this.isShow = !this.isShow;
		},
		submitRetroaction() {
			//点击提交反馈
			this.isShow = !this.isShow;
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
.content {
	padding: 30upx 0 0 48upx;
	width: 536upx;

	.FAQ-list {
		position: relative;
		font-size: 26upx;
		font-family: PingFang-SC-Light;
		color: rgba(71, 71, 71, 1);
		height: 94upx;
		transition: all 0.4s;
		width: 100%;
		overflow: hidden;

		.title {
			width: 100%;
			height: 94upx;
			background: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			box-sizing: border-box;
			padding-top: 30upx;
			position: absolute;
			top: 0;
			z-index: 10;

			text {
				font-size: 26upx;
				line-height: 26upx;
				
			}
			.iconfont {
				transition: all 0.4s;
// 				width: 30upx;
// 				height: 30upx;
				
				
			}
			.rotate180 {
				transform: rotate(180deg);
				transform-origin: 50% 50%;
			}
		}

		.text {
			width: 100%;
			position: absolute;
			bottom: 0;
			font-size: 24upx;
			font-family: PingFang-SC-Light;
			color: rgba(153, 153, 153, 1);
			display: flex;
			flex-direction: column;
			line-height: 36upx;
			height: 384upx;
			// background: red;

			text {
				margin-top: 8upx;
			}
		}
		
	}

	.height500 {
		height: 500upx;
	}
	.bottom-btn {
		margin-top: 128upx;
		text-align: center;

		navigator {
			width: 230upx;
			height: 60upx;
			background: #7185ea;
			border-radius: 30upx;
			font-size: 24upx;
			font-family: PingFang-SC-Light;
			color: rgba(255, 255, 255, 1);
			line-height: 60upx;
			text-align: center;
			margin: 0 auto 29upx;
		}
		text {
			font-size: 24upx;
			font-family: PingFang-SC-Light;
			color: rgba(153, 153, 153, 1);
		}
	}
	.feedback-box {
		z-index: 88;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: blue;
		background: rgba(0, 0, 0, 0.2);

		display: none;
		.feedback {
			width: 654upx;
			height: 400upx;
			background: rgba(255, 255, 255, 1);
			box-shadow: 0px 0px 30upx 2upx rgba(174, 184, 216, 0.68);
			border-radius: 20upx;
			position: absolute;
			left: 50%;
			transform: translateX(-50%);
			top: 467upx;
			padding: 70upx 80upx 44upx;
			box-sizing: border-box;
			color: rgba(153, 153, 153, 1);
			font-size: 24upx;
		}
		.feedback-redact {
			textarea {
				width: 480upx;
				height: 170upx;
			}
			.num {
				color: rgba(153, 153, 153, 1);
				text-align: right;
			}
			.feedback-btn {
				font-size: 26upx;
				font-family: PingFang-SC-Light;
				box-sizing: border-box;
				padding: 0 48upx;
				margin-top: 52upx;
				.confirm-btn {
					float: right;

					color: rgba(128, 102, 255, 1);
				}
			}
		}
		.feedback-succed {
			box-sizing: border-box;
			padding: 0;
			padding-top: 100upx;
			margin: 0 auto;
			.icon {
				width: 100upx;
				height: 100upx;
				background: blue;
				margin: 0 auto;
				
			}
			.text {
				font-size: 30upx;
				font-family: PingFang-SC-Light;
				color: rgba(102, 102, 102, 1);
				margin-top: 23upx;
				text-align: center;
			}
			.confirm-btn {
				margin-top: 60upx;
				text-align: center;
				text {
					font-size: 26upx;
					font-family: PingFang-SC-Light;
					color: rgba(128, 102, 255, 1);
				}
			}
		}
	}
	.feedbackBoxShow {
		display: block;
	}
}
@keyframes accordion {
	from {
		transform: translateY(-100%);
	}
	to {
		transform: translateY(0%);
	}
}
</style>
