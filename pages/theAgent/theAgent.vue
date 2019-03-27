<template>
	<view class="theAgent">
		<swiper class="swiper" skip-hidden-item-layout="true" circular="true">
			<swiper-item><view class="theAgent-view">
			<img class='img-top' src="../../static/daili/top.png" alt="">
			<img class='img-center' src="../../static/daili/center.png" alt="">
			<img class='img-bottom' src="../../static/daili/bottom.png" alt="">
			</view></swiper-item>
			<swiper-item>
				<view class="theAgents theAgentone">
					<span class='spanone'>猜猜你的月收入多少</span>
					<img src="../../static/daili/theAgentone.png" alt="" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="theAgents theAgenttwo">
					<span>猜猜你的月收入多少</span>
					<img src="../../static/daili/theAgenttwo.png" alt="" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="theAgents theAgentthree">
					<span>猜猜你的月收入多少</span>
					<img src="../../static/daili/theAgentthree.png" alt="" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="theAgents theAgentfour">
					<span>猜猜你的月收入多少</span>
					<img src="../../static/daili/theAgentfour.png" alt="" />
				</view>
			</swiper-item>
			<swiper-item>
				<view class="theAgents theAgentfour">
					<span>猜猜你的月收入多少</span>
					<img src="../../static/daili/theAgentfive.png" alt="" />
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
	data() {
		return {};
	},
	computed: { ...mapState(['token', 'id', 'type', 'username', 'theIndex']) },
	methods: {
		...mapMutations(['theIndexStorage'])
	},
	onLoad() {
		this.theIndexStorage(2);
		// 修改底部stab样式
		uni.setTabBarItem({
			index: this.theIndex,
			selectedIconPath: '/static/tab/daili.png'
		});
	}
};
</script>

<style lang="scss">
.swiper {
	width: 100%;
	height: 100%;
}
.theAgent {
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
}
.theAgent-view {
	width: 100%;
	height: 100%;
	img{
		position: absolute;
	}
	.img-top{
		width: 656upx;
		height: 493upx;
		top: 80upx;
		left: 51upx;
	}
	.img-center{
		width: 548upx;
		height: 219upx;
		top: 50%;
		transform: translateY(-50%);
		left: 89upx;
	}
	.img-bottom{
		width: 601upx;
		height: 260upx;
		bottom: 204upx;
		left: 66upx;
	}
}
.theAgents {
	width: 100%;
	height: 100%;
	line-height: 100%;
	background-size: 750upx 1334upx;
	.spanone{
		top: 93upx !important;
	}
	span{
		position: absolute;
		top: 123upx;
		left: 72upx;
		color: #7185EA;
		font-size: 40upx;
	}
	img {
		display: block;
		width: 654upx;
		height: 918upx;
		position: absolute;
		bottom: 163upx;
		top: 253upx;
		left: 48upx;
		right: 48upx;
	}
}
</style>
