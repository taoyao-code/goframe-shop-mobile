<!-- 首页 -->
<template>
	<view>
		<!-- 搜索 -->
		<view class="search">
			<u-search placeholder="请输入关键词" v-model="keyword" shape="square" :clearabled="true" :showAction="true"
				:animation="true">
			</u-search>
		</view>
		<!-- 头部轮播图 -->
		<u-swiper :list="banners" @click="clickBanners" previousMargin="30" nextMargin="30" circular :autoplay="false"
			radius="5" bgColor="#ffffff" keyName="image"></u-swiper>
		<!-- 分类 -->
		<view class="sort">
			<u-grid :border="false" col="4">
				<u-grid-item v-for="(listItem,listIndex) in sort_list" :key="listIndex">
					<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
					<text class="grid-text">{{listItem.title}}</text>
				</u-grid-item>
			</u-grid>
		</view>
		
		<view>
			<u--text suffixIcon="tags" iconStyle="font-size: 20px;color: red" text="热销商品" style="padding: 10rpx;"></u--text>
			<!-- 商品 -->
			<GoodsItem></GoodsItem>
		</view>

		<!-- 底部导航栏 -->
		<u-tabbar :value="tabbar_value" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item v-for="(item,index) in vuex_tabbar" :key="index" :text="item.text" :icon="item.icon"
				@click="clickTabbar(item,index)">
			</u-tabbar-item>
		</u-tabbar>


		<u-toast ref="uToast" />
	</view>
</template>

<script>
	import GoodsItem from "@/components/Goods/GoodsItem.vue"
	export default {
		components:{
			GoodsItem
		},
		data() {
			return {
				keyword: "", // 搜索
				sort_list: [{
						name: 'photo',
						title: '图片'
					},
					{
						name: 'lock',
						title: '锁头'
					},
					{
						name: 'star',
						title: '星星'
					},
					{
						name: 'hourglass',
						title: '沙漏'
					},
					{
						name: 'home',
						title: '首页'
					},
					{
						name: 'star',
						title: '音量'
					},
				],
				// 轮播图列表
				banners: [{
					image: 'https://cdn.uviewui.com/uview/swiper/swiper2.png',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东',
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper1.png',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				}, {
					image: 'https://cdn.uviewui.com/uview/swiper/swiper3.png',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}],
			};
		},
		onLoad(e) {

		},
		methods: {
			// 点击底部导航栏
			clickTabbar(item, index) {
				if (index === 2) {
					return uni.$u.toast('请您先登录')
				}
				uni.$u.vuex('tabbar_value', index)
				uni.$u.route(item.url);
			},
			// 点击分类
			click(name) {
				this.$refs.uToast.success(`点击了第${name}个`)
			},
			// 点击轮播图
			clickBanners(i) {
				console.log(
					this.banners[i]
				);
			}
		}
	}
</script>

<style lang="scss">
	.search {
		margin: 10rpx;
	}
	
	.sort{
		// border: 1px solid red;
		margin: 20rpx 10rpx;
		box-shadow: 0 4rpx 8rpx 0 rgba(0, 0, 0, 0.2), 0 6rpx 10rpx 0 rgba(0, 0, 0, 0.09);
	}

	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
</style>
