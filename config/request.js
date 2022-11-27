// 此vm参数为页面的实例，可以通过它引用vuex中的变量
module.exports = vm => {
  // 初始化请求配置
  uni.$u.http.setConfig(config => {
    /* config 为默认全局配置*/
    config.baseURL = ""; /* 根域名 */

    config = {
      ...config,
      // #ifndef MP-ALIPAY
      responseType: "text",
      // #endif
      // 注：如果局部custom与全局custom有同名属性，则后面的属性会覆盖前面的属性，相当于Object.assign(全局，局部)
      custom: {}, // 全局自定义参数默认值
      // #ifdef H5 || APP-PLUS || MP-ALIPAY || MP-WEIXIN
      timeout: 60000,
      // #endif
      // #ifdef APP-PLUS
      sslVerify: true,
      // #endif
      // #ifdef H5
      // 跨域请求时是否携带凭证（cookies）仅H5支持（HBuilderX 2.6.15+）
      withCredentials: true,
      // #endif
      // #ifdef APP-PLUS
      firstIpv4: false, // DNS解析时优先使用ipv4 仅 App-Android 支持 (HBuilderX 2.8.0+)
      // #endif
      // 局部优先级高于全局，返回当前请求的task,options。请勿在此处修改options。非必填
      // getTask: (task, options) => {
      // 相当于设置了请求超时时间500ms
      //   setTimeout(() => {
      //     task.abort()
      //   }, 500)
      // },
      // 全局自定义验证器。参数为statusCode 且必存在，不用判断空情况。
      validateStatus: statusCode => {
        // statusCode 必存在。此处示例为全局默认配置
        return statusCode >= 200 && statusCode < 300;
      },
    };
    return config;
  });

  // 请求拦截
  uni.$u.http.interceptors.request.use(
    config => {
      // 可使用async await 做异步操作
      // 初始化请求拦截器时，会执行此方法，此时data为undefined，赋予默认{}
      config.data = config.data || {};
      console.log(config);

      // 根据custom参数中配置的是否需要token，添加对应的请求头
      if (config?.custom?.auth) {
        // 可以在此通过vm引用vuex中的变量，具体值在vm.$store.state中
        // config.header.token = vm.$store.state?.userInfo?.token
      }
      return config;
    },
    config => {
      // 可使用async await 做异步操作
      return Promise.reject(config);
    }
  );

  // 响应拦截
  uni.$u.http.interceptors.response.use(
    response => {
      /* 对响应成功做点什么 可使用async await 做异步操作*/
      const data = response.data;
      // 自定义参数
      const custom = response.config?.custom;

      if (data.code !== 0) {
        // 如果没有显式定义custom的toast参数为false的话，默认对报错进行toast弹出提示
        if (custom.toast !== false) {
          uni.$u.toast(data.message);
          console.log("toast 提示");
        }

        // 如果需要catch返回，则进行reject
        if (custom?.catch) {
          console.log("catch err 提示", data);
          return Promise.reject(data);
        } else {
          // 否则返回一个pending中的promise，请求不会进入catch中
          return new Promise(() => {});
        }
      }
      console.log(data);
      return data.data === undefined ? {} : data.data;
    },
    response => {
      // 对响应错误做点什么 （statusCode !== 200）
      if (response.statusCode === 401) {
        uni.$u.toast("login statusCode is 401");
        console.log("login statusCode is 401");
      }
      switch (response.statusCode) {
        case 404:
          console.log("login statusCode is 404");
          break;
        case 500:
          console.log("login statusCode is 500");

          break;
      }
      console.log("response err: ", response);
      return Promise.reject(response);
    }
  );
};
