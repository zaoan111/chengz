// 1.广告
const ads = document.querySelector('.ads')

ads.children[1].addEventListener('click',function(){
  ads.style.display = 'none'
})

// 2.登录电梯+侧边电梯
const bottomLog = document.querySelector('.bottom-log')
const lift = document.querySelector('.lift')
const main = document.querySelector('.main')
const header = document.querySelector('.header')


bottomLog.children[2].addEventListener('click',function(){
  bottomLog.style.display = 'none'
})

let scrollTimer = 0
window.addEventListener('scroll',function(){
  clearTimeout(scrollTimer)
  bottomLog.style.opacity = '0'
  // 通过定时器判断页面停止滚动
  scrollTimer = setTimeout(function(){
    bottomLog.style.opacity = '1'
  },2000)
  // 侧边电梯
  if(document.documentElement.scrollTop>=main.offsetTop){
    lift.style.display='block'
  }else{
    lift.style.display='none'
  }
})

lift.addEventListener('mouseenter',function(){
  lift.style.backgroundColor='red'
  lift.children[0].style.color='white'
  lift.children[1].style.color='white'
})
lift.addEventListener('mouseleave',function(){
  lift.style.backgroundColor='cornflowerblue'
  lift.children[0].style.color='black'
  lift.children[1].style.color='red'
})
lift.addEventListener('click',function(){
  document.documentElement.scrollTop=0
})

// 3.登录
const log = document.querySelectorAll('.log')
log[0].addEventListener('click',function(){
  location.href = 'D:/项目/京东网页/login.html'
})

// 4.用户导航栏
// 悬停在文本上，导航栏出现
const areaTxt = document.querySelector('.user-tab .area-txt')
const areaTab = document.querySelector('.user-tab .area-tab')
const area = document.querySelector('.user-tab .area')
// 鼠标悬停在左栏第一个元素上时,地区栏出现
areaTxt.addEventListener('mouseenter',function(){
  areaTab.style.display='block'
})
// 鼠标离开li,地区栏和地区都消失
areaTxt.parentNode.parentNode.addEventListener('mouseleave',function(){
  areaTab.style.display='none'
  area.style.display='none'
  areaTab.style.borderRadius='5px'
  areaTab.children[0].style.borderRight='solid 1px transparent'
})
// 地区栏点击更换
areaTab.children[0].addEventListener('click',function(e){
  if(e.target.tagName==='LI'){
    document.querySelector('.user-tab .area-tab .active').classList.remove('active')
    e.target.classList.add('active')
    e.target.classList.remove('hover')
  }
})
// 地区点击更换
area.children[0].addEventListener('click',function(e){
  if(e.target.tagName==='LI'){
    document.querySelector('.user-tab .area .active').classList.remove('active')
    e.target.classList.remove('hover')
    e.target.classList.add('active')
  }
})
// 鼠标悬停在地区栏第一个元素,地区选项出现
areaTab.children[0].children[0].addEventListener('mouseenter',function(){
  area.style.display='block'
  areaTab.style.borderRadius='5px 0 0 5px'
  areaTab.children[0].style.borderRight='solid 1px rgba(128,128,128,0.5)'
})
// 鼠标悬停在地区选项中的地区,添加悬停效果
area.children[0].addEventListener('mouseover',function(e){
  if(e.target.tagName==='LI'){
    e.target.classList.add('hover')
    document.querySelector('.user-tab .area .active').classList.remove('hover')
    if(document.querySelector('.user-tab .area .hover')){
      document.querySelector('.user-tab .area .hover').addEventListener('mouseleave',function(e){
        e.target.classList.remove('hover')
      })
    }
  }
})
// 鼠标悬停在地区栏中的地区,添加悬停效果
areaTab.children[0].addEventListener('mouseover',function(e){
  if(e.target.tagName==='LI'){
    e.target.classList.add('hover')
    document.querySelector('.user-tab .area-tab .active').classList.remove('hover')
    area.style.display='none'
    areaTab.children[0].style.borderRight='solid 1px transparent'
    if(document.querySelector('.user-tab .area-tab .hover')){
      document.querySelector('.user-tab .area-tab .hover').addEventListener('mouseleave',function(e){
        e.target.classList.remove('hover')
      })
    }
  }
})

// 5.网站导航
const userRightNav = document.querySelector('.user-tab .right ul .nav')
userRightNav.previousElementSibling.addEventListener('mouseenter',function(){
  userRightNav.style.display='flex'
  userRightNav.parentNode.style.borderLeft='solid 1px rgba(128,128,128,0.5)'
  userRightNav.parentNode.style.borderRight='solid 1px rgba(128,128,128,0.5)'
  userRightNav.previousElementSibling.style.borderRight='none'
  userRightNav.previousElementSibling.style.borderLeft='none'
})
userRightNav.parentNode.addEventListener('mouseleave',function(){
  userRightNav.style.display='none'
  userRightNav.parentNode.style.borderLeft='none'
  userRightNav.parentNode.style.borderRight='none'
  userRightNav.previousElementSibling.style.borderRight='solid 1px rgba(128,128,128,0.5)'
  userRightNav.previousElementSibling.style.borderLeft='solid 1px white'
})

// 6.主体区域
// 6.1 隐藏板块
// 鼠标悬停在显示模块上,隐藏模块弹出
const hide = document.querySelector('.main .hide')
hide.children[0].addEventListener('mouseenter',function(){
  hide.children[1].style.translate='0px'
}) 
hide.addEventListener('mouseleave',function(){
  hide.children[1].style.translate='-600px'
})
// 取消按钮
hide.children[1].children[0].addEventListener('click',function(){
  hide.children[1].style.translate='-600px'
})

// 6.2 侧导航
// 鼠标悬停在侧导航上,隐藏部分出现
const mainSubnav = document.querySelector('.main .wrapper .subnav')


mainSubnav.addEventListener('mouseenter',function(){
  mainSubnav.style.overflow='visible'
  mainSubnav.children[0].style.backgroundColor = 'aliceblue'
})
// 离开侧导航,隐藏部分消失
mainSubnav.addEventListener('mouseleave',function(){
  mainSubnav.style.overflow='hidden'
  mainSubnav.children[0].style.backgroundColor = 'none'
})
// 鼠标悬停在li上,对应右边栏出现
mainSubnav.children[0].addEventListener('mouseover',function(e){
  if(e.target.tagName==='LI'){
    if(+e.target.dataset.id){
      mainSubnav.children[1].style.display='flex'
      mainSubnav.children[2].style.display='none'
    }else{
      mainSubnav.children[2].style.display='flex'
      mainSubnav.children[1].style.display='none'
    }
  }
})
// 6.2.1 右边栏
// 鼠标悬停在右边栏导航栏li上,背景色和字体颜色改变
const mainSubnavHidden1Ul = document.querySelector('.main .wrapper .subnav .hidden1 ul')
const mainSubnavHidden2Ul = document.querySelector('.main .wrapper .subnav .hidden2 ul')

mainSubnavHidden1Ul.addEventListener('mouseover',function(e){
  if(e.target.tagName==='LI'){
    e.target.style.backgroundColor='rgba(255,0,0,0.1)'
    e.target.style.color='red'
    e.target.addEventListener('mouseleave',function(e){
      e.target.style.backgroundColor='aliceblue'
      e.target.style.color='black'
    })
  }
})
mainSubnavHidden1Ul.addEventListener('mouseleave',function(e){
  if(e.target.tagName==='LI'){
    e.target.style.backgroundColor='sliceblue'
    e.target.style.color='black'
  }
})
mainSubnavHidden2Ul.addEventListener('mouseover',function(e){
  if(e.target.tagName==='LI'){
    e.target.style.backgroundColor='rgba(255,0,0,0.1)'
    e.target.style.color='red'
    e.target.addEventListener('mouseleave',function(e){
      e.target.style.backgroundColor='aliceblue'
      e.target.style.color='black'
    })
  }
})
mainSubnavHidden2Ul.addEventListener('mouseleave',function(e){
  if(e.target.tagName==='LI'){
    e.target.style.backgroundColor='sliceblue'
    e.target.style.color='black'
  }
})
// 鼠标悬停在右边栏dt上，字体图标颜色改变
const mainSubnavHidden1Dl = document.querySelectorAll('.main .wrapper .subnav .hidden1 dl')
const mainSubnavHidden2Dl = document.querySelectorAll('.main .wrapper .subnav .hidden2 dl')
// 返回的是nodelist,可以使用数组的方法,有下标
for(let i = 0;i<mainSubnavHidden1Dl.length;i++){
  mainSubnavHidden1Dl[i].children[0].addEventListener('mouseover',function(){
    mainSubnavHidden1Dl[i].children[0].children[1].style.color='red'
  })
}
for(let i = 0;i<mainSubnavHidden1Dl.length;i++){
  mainSubnavHidden1Dl[i].children[0].addEventListener('mouseleave',function(){
    mainSubnavHidden1Dl[i].children[0].children[1].style.color='gray'
  })
}
for(let i = 0;i<mainSubnavHidden2Dl.length;i++){
  mainSubnavHidden2Dl[i].children[0].addEventListener('mouseover',function(){
    mainSubnavHidden2Dl[i].children[0].children[1].style.color='red'
  })
}
for(let i = 0;i<mainSubnavHidden2Dl.length;i++){
  mainSubnavHidden2Dl[i].children[0].addEventListener('mouseleave',function(){
    mainSubnavHidden2Dl[i].children[0].children[1].style.color='gray'
  })
}

// 6.3 中间区域
// 6.3.1 顶部列表
const mainBtnPrev = document.querySelector('.main .banner .center .prev')
const mainBtnNext = document.querySelector('.main .banner .center .next')
let mainBtnNextTimes = 0
let mainBtnPrevTimes = 0
function mainBtn(mainBtnPrevTimes,mainBtnNextTimes){
  if(mainBtnPrevTimes===-1||mainBtnPrevTimes===-2){
    mainBtnPrev.style.display='block'
  }else{
    mainBtnPrev.style.display='none'
  }
  if(mainBtnNextTimes===0||mainBtnNextTimes===1){
    mainBtnNext.style.display='block'
  }else{
    mainBtnNext.style.display='none'
  }
}
mainBtnNext.addEventListener('click',function(){
  mainBtnNextTimes+=1
  mainBtnPrevTimes-=1
  mainBtn(mainBtnPrevTimes,mainBtnNextTimes)
  mainBtnNext.parentNode.children[0].style.left=`${20-mainBtnNextTimes*310}px`
})
mainBtnPrev.addEventListener('click',function(){
  mainBtnPrevTimes+=1
  mainBtnNextTimes-=1
  mainBtn(mainBtnPrevTimes,mainBtnNextTimes)
  mainBtnNext.parentNode.children[0].style.left=`${20-mainBtnNextTimes*310}px`
})

// 6.3.2 轮播图
// 隔一段时间自动切换
const pics = document.querySelector('.main .banner .center .bottom .left .ads')
const dots = document.querySelector('.main .banner .center .bottom .left .dots')
let i = 0
function startBroadcast(){
  i++
  if(i===5){
    i=0
    dots.children[0].style.flex='1'
    dots.children[4].style.flex='none'
  }else{
    dots.children[i].style.flex='1'
    dots.children[i-1].style.flex='none'
  }
  pics.style.left=`-${i*177}px`
}
let a = setInterval(startBroadcast,3000)
// 鼠标悬停，停止播放
pics.addEventListener('mouseenter',function(){
  clearInterval(a)
})
// 鼠标离开，继续播放
pics.addEventListener('mouseleave',function(){
  clearInterval(a)
  a = setInterval(startBroadcast,3000)
})
// 鼠标悬停在li上，跳转至对应图片
dots.addEventListener('mouseover',function(e){
  if(e.target.tagName==='LI'){
    i=+e.target.dataset.id
    pics.style.left=`-${e.target.dataset.id*177}px`
    for(let i = 0;i<=4;i++){
      dots.children[i].style.flex='none'
    }
    dots.children[e.target.dataset.id].style.flex='1'
  }
})
