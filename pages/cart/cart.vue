<!-- 购物车 -->
<template>
	<view>
		购物车
		<u-tabbar :value="tabbar_value" :fixed="true" :placeholder="true" :safeAreaInsetBottom="true">
			<u-tabbar-item v-for="(item,index) in vuex_tabbar" :key="index" :text="item.text" :icon="item.icon"
				@click="clickTabbar(item,index)">
			</u-tabbar-item>
		</u-tabbar>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			// 点击底部导航栏
			clickTabbar(item, index) {
				if (index === 2) {
					return uni.$u.toast('请您先登录')
				}
				uni.$u.vuex('tabbar_value', index)
				uni.$u.route(item.url);
			}
		}
	}
</script>

<style>

</style>
