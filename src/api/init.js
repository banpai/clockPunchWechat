import axios from 'axios'
import { host } from './config'
import weui from 'weui.js'
import router from './../router'

// 获取地址上的参数
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

// 封装参数
function changeData(date) {
  var code = getQueryString('code')
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid')
    data.openid = openid
    data.code = code
    date.baseurl = location.href.split('#')[0]
    return Promise.resolve(date)
  } else {
    router.replace('/loading')
  }
}


// 获取jssd初始化接口
export function getJssdk() {
  var url = host + '/api/clockPunch/jssdk'
  changeData({}).then(data => {
    var loading = weui.loading('加载中……', {
      className: 'custom-classname'
    });
    return axios.post(url, data).then((res) => {
      loading.hide(function () {
        console.log('`loading` has been hidden');
      });
      return Promise.resolve(res.data)
    })
  })
}

// 初始化列表接口
export function discList() {
  var url = host + '/api/clockPunch/discList'
  changeData({}).then(data => {
    return axios.post(url, data).then((res) => {
      return Promise.resolve(res.data)
    })
  })
}

// 判断有没有参加打卡活动
export function isHasOpenid() {
  var url = host + '/api/clockPunch/isHasOpenid'
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var code = getQueryString('code')
  var data = {
    baseurl: location.href.split('#')[0],
    code: code,
    openid: openid
  }
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 初始化我要参加页面的数据
export function getProjectData() {
  var url = host + '/api/clockPunch/cms/getProgectData';
  var loading = weui.loading('加载中……', {
    className: 'custom-classname'
  });
  return axios.post(url, {}).then((res) => {
    loading.hide(function () {
      console.log('`loading` has been hidden');
    });
    res.data.host = host;
    return Promise.resolve(res.data)
  })
}

// 点击我要参加该活动，添加数据
export function joinProject() {
  var url = host + '/api/clockPunch/joinProject'
  changeData({}).then(data => {
    var loading = weui.loading('参加中……', {
      className: 'custom-classname'
    });
    return axios.post(url, data).then((res) => {
      loading.hide(function () {
        console.log('`loading` has been hidden');
      });
      return Promise.resolve(res.data)
    })
  })

}

// 点击打卡接口
export function punchDay() {
  var url = host + '/api/clockPunch/punchDay'
  changeData({}).then(data => {
    var loading = weui.loading('打卡中……', {
      className: 'custom-classname'
    });
    return axios.post(url, data).then((res) => {
      loading.hide(function () {
        console.log('`loading` has been hidden');
      });
      return Promise.resolve(res.data)
    })
  })
}

// 点击点赞接口
export function likeDay(o) {
  var url = host + '/api/clockPunch/likeDay'
  changeData({}).then(data => {
    data.otheropenid = o
    var loading = weui.loading('点赞中……', {
      className: 'custom-classname'
    });
    return axios.post(url, data).then((res) => {
      loading.hide(function () {
        console.log('`loading` has been hidden');
      });
      return Promise.resolve(res.data)
    })
  })
}

// 初始化打卡数据页面的接口
export function punchInit() {
  var url = host + '/api/clockPunch/punchInit'
  changeData({}).then(data => {
    var userInfoFlag = false;
    if (localStorage.getItem('userInfo')) {
      userInfoFlag = true;
    }
    data.userInfoFlag = userInfoFlag
    var loading = weui.loading('初始化……', {
      className: 'custom-classname'
    });
    return axios.post(url, data).then((res) => {
      loading.hide(function () {
        console.log('`loading` has been hidden');
      });
      return Promise.resolve(res.data)
    })
  })
}

// 点击提醒
export function warnTip(m) {
  var url = host + '/api/clockPunch/warn'
  changeData(m).then(data => {
    var userInfoFlag = false;
    if (localStorage.getItem('userInfo')) {
      userInfoFlag = true;
    }
    data.userInfoFlag = userInfoFlag;
    var loading = weui.loading('提醒中……', {
      className: 'custom-classname'
    });
    return axios.post(url, data).then((res) => {
      loading.hide(function () {
        console.log('`loading` has been hidden');
      });
      return Promise.resolve(res.data)
    })
  }) 
}

// 点击发送邀请卡
export function sendInvitationCard(m) {
  var url = host + '/api/clockPunch/sendInvitationCard'
  changeData(m).then(data => {
    var userInfoFlag = false;
    if (localStorage.getItem('userInfo')) {
      userInfoFlag = true;
    }
    data.userInfoFlag = userInfoFlag;
    return axios.post(url, data).then((res) => {
      return Promise.resolve(res.data)
    })
  })
}

// 点击发送打卡图
export function sendPunchCard(m) {
  var url = host + '/api/clockPunch/sendPunchCard'
  changeData(m).then(data => {
    var userInfoFlag = false;
    if (localStorage.getItem('userInfo')) {
      userInfoFlag = true;
    }
    data.userInfoFlag = userInfoFlag;
    return axios.post(url, data).then((res) => {
      return Promise.resolve(res.data)
    })
  })
}

// 测试调用微信服务器的接口
export function sendTest(data) {
  var url = host + '/api/clockPunch/sendImg';
  changeData(m).then(data => {
    var userInfoFlag = false;
    if (localStorage.getItem('userInfo')) {
      userInfoFlag = true;
    }
    data.userInfoFlag = userInfoFlag;
    return axios.post(url, data).then((res) => {
      return Promise.resolve(res.data)
    })
  })
}