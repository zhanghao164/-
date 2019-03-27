<template>
	<view class="login">
		<view class="logo"><text class="iconfont download-icon">&#xe61d;</text></view>
		<view class="login-box">
			<text class="title">Welcome~请登录</text>
			<!-- <text class="lonig-btn">立即使用</text> -->

			<view class="lonig-btn">
				<!-- <button open-type="getUserInfo" @getUserInfo="getUserInfo">立即使用</button> -->
				<button open-type="getUserInfo" @getuserinfo="getUserInfo"> <text>立即使用</text> </button>
			</view>
		</view>
		<view class="footer">
			<text class="tips">开始使用持电小程序即表示您同意协议</text>
			<view class="protocol">
				<navigator url="">《服务协议》</navigator>
				&
				<navigator url="">《隐私政策》</navigator>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			dis: "111"
		};
	},
	methods:{
		getUserInfo(e) {
			console.log(e)
			//  授权用户信息
			// 			this.userIcon = e.detail.userInfo.avatarUrl
			// 			this.userName = e.detail.userInfo.nickName
			let userInfo = e.detail.userInfo;
			uni.setStorageSync('userInfo', userInfo);
			if(e.detail.errMsg==="getUserInfo:ok"){
				uni.reLaunch({
					
					url:"/pages/near/near"
				})
			}
		}
	}
	
};
</script>

<style lang="scss" scoped>
@import '../../common/iconfont.css';
.login {
	position: fixed;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
}
.logo {
	width: 142upx;
	height: 128upx;
	margin: 233upx auto 88upx;
	position: relative;
	overflow: hidden;

	text {
		font-size: 240upx;
		color: #7185ea;
		line-height: 108upx;
		position: absolute;
		top: 13upx;
		left: -50upx;
	}
}
.login-box {
	width: 593upx;
	height: 445upx;
	background: rgba(255, 255, 255, 1);
	border: 1upx solid rgba(255, 255, 255, 1);
	box-shadow: 8upx 9upx 35upx 0px rgba(113, 133, 234, 0.25);
	border-radius: 0px 50upx 0px 50upx;
	margin: 0 auto;
	display: flex;
	flex-direction: column;
	align-items: center;
	.title {
		font-size: 35upx;
		// font-family: FZZHJW--GB1-0;
		font-weight: bold;
		color: rgba(113, 133, 234, 1);
		line-height: 35upx;
		margin: 100upx 0 90upx;
	}
	.lonig-btn {
		border: none;
		width: 420upx;
		height: 80upx;
		background: rgba(113, 133, 234, 1);
		border-radius: 40upx;
		font-size: 30upx;
		// font-family: FZZHJW--GB1-0;
		font-weight: bold;
		color: rgba(254, 254, 255, 1);
		line-height: 74upx;
		text-align: center;
		line-height: 80upx;
		overflow: hidden;

		button {
			width: 600upx;
			height: 100upx;
			display: block;
			margin: -10upx 0 0 -90upx;
			line-height: 100upx;
			text-align: center;
			background: rgba(113, 133, 234, 1);
			color: #fff;
			
			text {
				display: block;
				width: 100%;
				height: 100%;
				background: rgba(113, 133, 234, 1);
			}
		}
	}
}
.footer {
	position: fixed;
	bottom: 100upx;
	font-size: 20upx;
	font-family: FZZHJW--GB1-0;
	font-weight: bold;
	color: rgba(200, 208, 250, 1);
	line-height: 32upx;
	display: flex;
	flex-direction: column;
	left: 50%;
	transform: translateX(-50%);
	align-items: center;
	.protocol {
		display: flex;

		navigator {
			color: #7185ea;
		}
	}
}
</style>
