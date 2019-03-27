<template>
	<view class="theAgent">
		<swiper class="swiper" circular="true" vertical="true">
			<swiper-item>
				<view class="theAgent-view">
					<view class="top-one">吉电诚邀代理 百元创业好项目</view>
					<view class="top-two">快至16天回本，15-20倍回报率拥有国内外万家合作商家</view>
					<view class="top-three">
						不收取任何分润，快速回本
						<br />
					</view>
					<view class="top-four">
						不收取
						<span>然后分润</span>
						,代理商可自定义租金。平均
						<span>一个月</span>
						收回成本。
					</view>
					<view class="bottom-one">打造自己品牌</view>
					<view class="bottom-two">
						代理商可展示
						<span>广告</span>
						及
						<span>自定义品牌</span>
						。大大
						<span>增加产品使用率</span>
						。
					</view>
					<view class="bottom-three">低成本起步代理商</view>
					<view class="bottom-four">
						任何人都可以低成本成为代理商。并且实力保证：
						<p>
							软件
							<span>免费</span>
							提供。硬件
							<span>保质一年</span>
							。
						</p>
					</view>
				</view>
			</swiper-item>
			<swiper-item>
				<swiper class="swiper" skip-hidden-item-layout='true' circular="true">
					<swiper-item>
						<view class="theAgent theAgentone">
							<img src="../../static/daili/theAgentone.png" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="theAgent theAgenttwo">
							<img src="../../static/daili/theAgenttwo.png" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="theAgent theAgentthree">
							<img src="../../static/daili/theAgentthree.png" alt="">
						</view>
					</swiper-item>
					<swiper-item>
						<view class="theAgent theAgentfour">
							<img src="../../static/daili/theAgentfour.png" alt="">
						</view>
					</swiper-item>
				</swiper>
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
	computed: { ...mapState(['token', 'id', 'type', 'username','theIndex']) },
	methods: {
		...mapMutations(['theIndexStorage']),
	},
	onLoad() {
		this.theIndexStorage(2)
		// 修改底部stab样式
		uni.setTabBarItem({
			index: this.theIndex,
			selectedIconPath: "/static/tab/daili.png"
		});
	}
};
</script>

<style lang="scss">
.swiper{
	width: 100%;
	height: 1334upx;
}
.theAgent {
	width: 100%;
	height: 1334upx;
	background-color: #fffcf8;
}
.theAgent-view {
	width: 100%;
	height: 1334upx;
	background: url(../../static/daili/jiqi.png) no-repeat 53upx 281upx,
		url(../../static/daili/shouji.png) no-repeat 472upx 595upx,
		url(../../static/daili/renwu.png) no-repeat 66upx 870upx;
	background-size: 333upx 262upx, 165upx 219upx, 272upx 260upx;
	position: relative;
	view {
		position: absolute;
	}
	span {
		color: #feb64d;
	}
	.top-one {
		width: 280upx;
		height: 86upx;
		font-size: 40upx;
		color: rgba(254, 182, 77, 1);
		text-align: left;
		top: 54upx;
		left: 52upx;
	}
	.top-two {
		width: 340upx;
		height: 59upx;
		font-size: 24upx;
		color: #656565;
		text-align: left;
		top: 163upx;
		left: 52upx;
		line-height: 33upx;
	}
	.top-three {
		width: 320upx;
		height: 27upx;
		font-size: 26upx;
		color: #feb64d;
		top: 336upx;
		right: 107upx;
		font-weight: 500;
	}
	.top-four {
		width: 410upx;
		height: 59upx;
		font-size: 24upx;
		color: #656565;
		text-align: center;
		top: 382upx;
		right: 62upx;
		line-height: 46.5upx;
	}
	.bottom-one {
		width: 164upx;
		height: 25upx;
		font-size: 26upx;
		color: #feb64d;
		top: 647upx;
		left: 183upx;
	}
	.bottom-two {
		width: 360upx;
		height: 62upx;
		font-size: 24upx;
		color: #656565;
		text-align: center;
		top: 687upx;
		left: 83upx;
		line-height: 46.5upx;
	}
	.bottom-three {
		width: 217upx;
		height: 25upx;
		font-size: 26upx;
		color: #feb64d;
		top: 860upx;
		left: 384upx;
		font-weight: 600;
	}
	.bottom-four {
		width: 360upx;
		height: 102upx;
		font-size: 24upx;
		color: #656565;
		text-align: center;
		top: 900upx;
		right: 88upx;
		line-height: 46.5upx;
	}
}
.theAgent{
	width: 100%;
	height: 1334upx;
	background-size:  750upx 1334upx;
	// line-height: 1334upx;
	img{
		display: block;
		margin: 94upx auto;
		width: 654upx;
		height: 1000upx;
	}
}
.theAgentone{
	img{
		margin-left: 20upx;
	}
}
</style>
