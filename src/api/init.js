import axios from 'axios'
import { host } from './config'
import weui from 'weui.js'

// 获取地址上的参数
function getQueryString(name) {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}

// 获取jssd初始化接口
export function getJssdk() {
  var url = host + '/api/clockPunch/jssdk'
  var code = getQueryString('code')
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var data = {
    baseurl: location.href.split('#')[0],
    code: code,
    openid: openid
  }
  var loading = weui.loading('加载中……', {
    className: 'custom-classname'
  });
  return axios.post(url, data).then((res) => {
    loading.hide(function () {
      console.log('`loading` has been hidden');
    });
    return Promise.resolve(res.data)
  })
}

// 初始化列表接口
export function discList() {
  var url = host + '/api/clockPunch/discList'
  var openid = '';
  if (localStorage.getItem('userInfo')) {
    var userInfo = JSON.parse(localStorage.getItem('userInfo'));
    openid = userInfo.openid;
  }
  var data = {
    openid: openid
  }
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
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
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var data = {
    baseurl: location.href.split('#')[0],
    openid: openid
  }
  var loading = weui.loading('参加中……', {
    className: 'custom-classname'
  });
  return axios.post(url, data).then((res) => {
    loading.hide(function () {
      console.log('`loading` has been hidden');
    });
    return Promise.resolve(res.data)
  })
}

// 点击打卡接口
export function punchDay() {
  var url = host + '/api/clockPunch/punchDay'
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var data = {
    baseurl: location.href.split('#')[0],
    openid: openid
  }
  var loading = weui.loading('打卡中……', {
    className: 'custom-classname'
  });
  return axios.post(url, data).then((res) => {
    loading.hide(function () {
      console.log('`loading` has been hidden');
    });
    return Promise.resolve(res.data)
  })
}

// 点击点赞接口
export function likeDay(o) {
  var url = host + '/api/clockPunch/likeDay'
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  console.log(o)
  var data = {
    baseurl: location.href.split('#')[0],
    openid: openid,
    otheropenid: o
  }
  var loading = weui.loading('点赞中……', {
    className: 'custom-classname'
  });
  return axios.post(url, data).then((res) => {
    loading.hide(function () {
      console.log('`loading` has been hidden');
    });
    return Promise.resolve(res.data)
  })
}

// 初始化打卡数据页面的接口
export function punchInit() {
  var url = host + '/api/clockPunch/punchInit'
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var userInfoFlag = false;
  if(localStorage.getItem('userInfo')){
    userInfoFlag = true;
  }
  var data = {
    baseurl: location.href.split('#')[0],
    openid: openid,
    userInfoFlag: userInfoFlag
  }
  var loading = weui.loading('初始化……', {
    className: 'custom-classname'
  });
  return axios.post(url, data).then((res) => {
    loading.hide(function () {
      console.log('`loading` has been hidden');
    });
    return Promise.resolve(res.data)
  })
}

// 点击提醒
export function warnTip(data) {
  var url = host + '/api/clockPunch/warn'
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var userInfoFlag = false;
  if(localStorage.getItem('userInfo')){
    userInfoFlag = true;
  }
  data.openid = openid;
  data.baseurl = location.href.split('#')[0];
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
}

// 点击发送邀请卡
export function sendInvitationCard(data) {
  var url = host + '/api/clockPunch/sendInvitationCard'
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var userInfoFlag = false;
  if(localStorage.getItem('userInfo')){
    userInfoFlag = true;
  }
  data.openid = openid;
  data.baseurl = location.href.split('#')[0];
  data.userInfoFlag = userInfoFlag;
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 点击发送打卡图
export function sendPunchCard(data) {
  var url = host + '/api/clockPunch/sendPunchCard'
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var userInfoFlag = false;
  if(localStorage.getItem('userInfo')){
    userInfoFlag = true;
  }
  data.openid = openid;
  data.baseurl = location.href.split('#')[0];
  data.userInfoFlag = userInfoFlag;
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}

// 测试调用微信服务器的接口
export function sendTest(data) {
  var url = host + '/api/clockPunch/sendImg';
  var openid = '';
  if (localStorage.getItem('openid')) {
    openid = localStorage.getItem('openid');
  }
  var userInfoFlag = false;
  if(localStorage.getItem('userInfo')){
    userInfoFlag = true;
  }
  data.openid = openid;
  data.baseurl = location.href.split('#')[0];
  data.userInfoFlag = userInfoFlag;
  return axios.post(url, data).then((res) => {
    return Promise.resolve(res.data)
  })
}