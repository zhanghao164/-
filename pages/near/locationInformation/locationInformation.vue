<template>
	<!-- 点击详情导航页面 -->
	<view class="near">
		<view class="page-body">
			<view class="page-section page-section-gap">
				<map
					style="width: 100%;height: 100%;"
					:latitude="latitude"
					:longitude="longitude"
					id="mymap"
					show-location="true"
					:markers="covers"
				>
				</map>
			</view>
		</view>
		<view>
			<button @click="tobtn"></button>
		</view>
	</view>
</template>

<script>
import amap from '../../../common/amap-wx.js';
	export default {
		data() {
			return {
				key: '65bbf9c5a0ba3a024378876049a0fcc9',
				markes: '',
				origin: '',
				longitude: '',
				latitude: '',
				amapPlugin: null,
				covers: [{
					latitude: 39.9,
					longitude: 116.39,
					fillColor: '#FFC41F', //填充颜色
					color: '#12A1DD', //描边的颜色
					radius: 500, //半径
					strokeWidth: 2 //描边的宽度
				}]
			};
		},
		onLoad(data) {
			// this.markes = data.markes;
			this.covers[0].longitude = data.markes;
			this.covers[0].latitude = data.latitude;
			console.log(data);
			uni.getLocation({
				//获取当前的位置坐标
				type: 'gcj02',
				success: res => {
					this.longitude = res.longitude;
					this.latitude = res.latitude;
					this.origin =res.longitude+','+res.latitude
					this.amapPlugin = new amap.AMapWX({
						key: this.key
					});
					// this.getWalkingRoute();
					wx.openLocation({
					  latitude:res.latitude,
					  longitude: res.longitude,
					  scale: 18
					})
				}
			});
		},
		methods:{
			getWalkingRoute() {
				this.amapPlugin.getWalkingRoute({
					origin: this.origin,
					destination: this.markes,
					success: data => {
						console.log(data);
						console.log('成功了');
					},
					fail: (info) => {
						console.log(info);
						console.log('失败了');
					}
				})
			},
			tobtn() {
				
			}
		}
	}
</script>

<style lang="scss">
map {
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.near {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 100upx;
}
.controls-play {
	display: block;
	position: absolute;
	bottom: 100upx;
	right: 35upx;
	width: 93upx;
	height: 93upx;
}
.controls-list {
	display: block;
	position: absolute;
	bottom: 223upx;
	right: 35upx;
	width: 93upx;
	height: 93upx;
}
.controls-search {
	display: block;
	position: absolute;
	top: 52upx;
	left: 10upx;
	width: 511upx;
	height: 89upx;
}
.page-body {
	width: 100%;
	height: 100%;
	padding-top: constant(safe-area-inset-top); //88px
}
.active-pos {
	width: 200upx;
	height: 280upx;
}
.poi-list {
	ul {
		li {
			width: 200upx;
			height: 280upx;
		}
	}
}
.page-section {
	width: 100%;
	height: 100%;
	position: relative;
}
</style>
