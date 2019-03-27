<script>
export default {
	onLaunch: function() {
		wx.getSetting({
			success: res => {
				if (res.authSetting['scope.userInfo']) {
					// 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框

					// console.log(1)
					wx.getUserInfo({
						success: res => {
							// console.log(res.userInfo);
							// 可以将 res 发送给后台解码出 unionId
							let userInfo = res.userInfo;
							uni.setStorageSync('userInfo', userInfo);
							// 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
							// 所以此处加入 callback 以防止这种情况
							if (this.userInfoReadyCallback) {
								this.userInfoReadyCallback(res);
							}
						}
					});
					uni.reLaunch({
						url: '/pages/near/near'
					});
				}
			}
		});
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
/*每个页面公共css */

.masking {
	position: absolute;
	background: #000;
	opacity: 0.1;
	top: 50%;
	transform: translateY(-50%);
	border-radius: 97upx;
	width: 0;
	height: 100%;
	z-index: 99;
}
.maskingLeft {
	right: 20%;
}
.maskingLeftShow {
	transition: all 0.3s;
	width: 780upx;

	right: -100upx;
	top: 0;
	transform: translateY(0);
}
.maskingRight {
	left: 20%;
}
.maskingRightShow {
	transition: all 0.2s;
	width: 780upx;
	left: -100upx;
	top: 0;

	transform: translateY(0);
}

body {
	background: #fff;
}
</style>
