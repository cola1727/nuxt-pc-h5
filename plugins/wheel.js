/**
 * @params
 * 动画时间线
 * 第一区间 手机右移 电脑操作区淡入左移
 * 第二区间 文字上移淡出 手机左移淡出 操作区左移更换内容 ppt左移淡入 移动图片从操作区淡入到ppt后淡出 ppt图片淡入
 * 第三区间 电脑左下移动放大（transform scale动态计算） 文字淡入 手机上移淡入  手机更换图片 电脑文字添加覆盖层
 * 第四区间 电脑上移 手机上移 文字延时淡入
 * 第五区间 电脑PPT消失 手机左下移动 到位置换图 文字淡入 图片闪烁 电脑图片左移进入 文字
 *
 * 监听鼠标滚动事件
 */
var delta = 0;

const wheelEvent = (event) => { 
    debugger
  if (!event) event = window.event;
  if (event.wheelDelta) {
    //IE、chrome浏览器使用的是wheelDelta，并且值为“正负120”
    delta = event.wheelDelta / 120;
    if (window.opera) delta = -delta; //因为IE、chrome等向下滚动是负值，FF是正值，为了处理一致性，在此取反处理
  } else if (event.detail) {
    //FF浏览器使用的是detail,其值为“正负3”
    delta = -event.detail / 3;
  }
  if (event.preventDefault) {
    event.preventDefault();
  }
  return false;
};
