<!-- 首页 -->
<template>
	<view>
		<view class="search">
			<u-search placeholder="请输入关键词" v-model="keyword" shape="square" :clearabled="true" :showAction="true"
				:animation="true">
			</u-search>
		</view>

		<u-swiper :list="banners" @click="clickBanners" previousMargin="30" nextMargin="30" circular :autoplay="false"
			radius="5" bgColor="#ffffff" keyName="image"></u-swiper>

		<u-grid :border="false" col="4">
			<u-grid-item v-for="(listItem,listIndex) in sort_list" :key="listIndex">
				<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="listItem.name" :size="22"></u-icon>
				<text class="grid-text">{{listItem.title}}</text>
			</u-grid-item>
		</u-grid>



		<u-tabbar :value="tabbar_value" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item v-for="(item,index) in vuex_tabbar" :key="index" :text="item.text" :icon="item.icon"
				@click="clickTabbar(item,index)">
			</u-tabbar-item>
		</u-tabbar>


		<u-toast ref="uToast" />
	</view>
</template>

<script>
	export default {
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
				uni.$u.vuex('tabbar_value',index)
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

	.grid-text {
		font-size: 14px;
		color: #909399;
		padding: 10rpx 0 20rpx 0rpx;
		/* #ifndef APP-PLUS */
		box-sizing: border-box;
		/* #endif */
	}
</style>
