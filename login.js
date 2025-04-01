// 点击更换登录方式
const logUl = document.querySelector('.wrapper .login .log-tab ul')
const logManner = document.querySelector('.wrapper .login .log-cont')

logUl.addEventListener('click',function(e){
  if(e.target.tagName === 'LI'){
    // 自定义属性值有双引号，为字符串类型，需转换为数字型
    if(+e.target.dataset.id){
      logUl.children[0].classList.remove('active')
      logUl.children[1].classList.add('active')
      logManner.children[0].style.display='none'
      logManner.children[1].style.display='block'
    }else{
      logUl.children[1].classList.remove('active')
      logUl.children[0].classList.add('active')
      logManner.children[1].style.display='none'
      logManner.children[0].style.display='block'
    }
  }
})

// 密码登录
// 框中有文本，删除按钮出现
const pswLog = document.querySelector('.login .psw-log')

// 删除按钮注册点击事件
pswLog.addEventListener('click',function(e){
  if(e.target.tagName==='DIV'){
    // 删除框中的内容
    pswLog.children[+e.target.dataset.id].value=''
    e.target.style.display = 'none'
    // 禁用登录按钮
    pswLog.children[4].disabled=true
  }
})

// 给输入框注册输入事件
pswLog.children[0].addEventListener('input',function(){
  if(pswLog.children[0].value){
    // 删除按钮出现
    pswLog.children[5].style.display='block'
    
  }else{
    pswLog.children[5].style.display='none'
  }
  // 当两个框中都有文本，登录按钮启用
  pswLog.children[4].disabled=pswLog.children[0].value&&pswLog.children[2].value?false:true
})
pswLog.children[2].addEventListener('input',function(){
  if(pswLog.children[2].value){
    // 删除按钮出现
    pswLog.children[6].style.display='block'
    
  }else{
    pswLog.children[6].style.display='none'
  }
  // 当两个框中都有文本，登录按钮启用
  pswLog.children[4].disabled=pswLog.children[0].value&&pswLog.children[2].value?false:true
})

// 短信登录
// 提示文本 请输入手机号
const msgLog = document.querySelector('.login .left .msg-log')
msgLog.children[1].addEventListener('focus',function(){
  if(!msgLog.children[1].value){
    // 提示文本出现
    msgLog.children[3].style.display='block'
    // 输入框内提示文本消失
    msgLog.children[1].placeholder=''
    msgLog.children[8].style.marginTop='15px'
  }
})
msgLog.children[1].addEventListener('blur',function(){
  if(!msgLog.children[1].value){
    // 提示文本消失
    msgLog.children[3].style.display='none'
    // 输入框内提示文本出现
    msgLog.children[1].placeholder='请输入手机号'
    msgLog.children[8].style.marginTop='0'
  }
})

msgLog.children[1].addEventListener('input',function(){
  if(msgLog.children[1].value){
    msgLog.children[3].style.display='none'
    msgLog.children[8].style.marginTop='0'
    msgLog.children[8].style.color='red'
    msgLog.children[8].style.cursor='pointer'
    // 获取验证码点击事件
    const getNum = function(){
      if(msgLog.children[1].value.length>=11){
        msgLog.children[6].style.display='none'
        // 点击验证码
        msgLog.children[8].removeEventListener('click',getNum)
        msgLog.children[8].innerHTML='重新获取(5s)'
        msgLog.children[8].style.color='rgba(0,0,0,0.3)'
        let i = 4
        let m = setInterval(function(){
          if(i===0){
            clearInterval(m)
            msgLog.children[8].innerHTML=`重新获取`
            msgLog.children[8].style.color=`red`
            msgLog.children[8].addEventListener('click',getNum)
          }else{
            msgLog.children[8].innerHTML=`重新获取(${i}s)`
            i--
          }
          
        },1000)
      }else{
        msgLog.children[6].style.display='block'
      }
    }
    msgLog.children[8].addEventListener('click',getNum)
  }else{
    msgLog.children[3].style.display='block'
    msgLog.children[8].style.marginTop='15px'
    msgLog.children[8].style.color='rgba(0,0,0,0.3)'
    msgLog.children[8].style.cursor='not-allowed'
  }
  msgLog.children[7].disabled=msgLog.children[1].value&&msgLog.children[4].value?false:true
})

msgLog.children[4].addEventListener('input',function(){
  msgLog.children[7].disabled=msgLog.children[1].value&&msgLog.children[4].value?false:true
})