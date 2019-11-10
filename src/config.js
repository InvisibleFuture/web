export default {
    server: 'http://127.0.0.1',
    user: {
        id: '',
        token: '',
        name: '',
        avatar: '',
    },
    // 存储事件, 只在登录时触发, 登录不存在服务端渲染
    StorageSet: function (name, val) {
        try {
            localStorage.setItem(name, val)
        } catch (e) {
            let exp = new Date()
            exp.setTime(exp.setTime() + 2505600 * 1)
            document.cookie = name + "=" + escape(val) + ";expires=" + exp.toGMTString() + ";path=/";
        }
    },
    StorageGet: function (name) {
        try {
            let val = localStorage.getItem(name);
            return val
        } catch (e) {
            let arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
            if (arr == document.cookie.match(reg)) {
                if (!arr[2]) {
                    return null;
                } else if (arr[2] != 'null') {
                    return unescape(arr[2]);
                } else {
                    return null;
                }
            } else {
                return null;
            }
        }
    },
    StorageDel: function (name) {
        try {
            localStorage.setItem(name, 'test');//正常清除
            localStorage.removeItem(name);
        } catch (e) {
            document.cookie = name + "=" + null + ";expires=" + 0 + ";path=/";//抛出异常，存储到了cookie，因此清除cookie。
        }
    }
}