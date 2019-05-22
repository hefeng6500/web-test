# JavaScript设计模式 #

简介： JavaScript设计模式学习之路



### 一、简单工厂模式

> 需求: 原生js实现一个登陆验证的提示，当用户输入用户名或者密码不正确时，给出提示

    var LoginAlert = function (text) {
      this.content = text
    }
    LoginAlert.prototype.show = function () {
      alert(this.content)
    }
    
    var userNameAlert = new LoginAlert('用户名不能多于16个字母和数字')
    userNameAlert.show()
    
    var pasWordAlert = new LoginAlert('输入密码不正确')
    pasWordAlert.show()



> 新需求： 再加一个注册按钮，同样进行输入框的验证

    var RegisterAlert = function (text) {
      this.content = text
    }
    RegisterAlert.prototype.show = function () {
      alert(this.content)
    }
    
    var RegisterFailedAlert = new RegisterAlert('用户名已存在，请重新输入')
    RegisterFailedAlert.show()



> 新需求： 再添加一个登录成功的提示框

    var LoginPrompt = function (text) {
      this.content = text
    }
    LoginPrompt.prototype.show = function () {
      alert(this.content)
    }
    var loginSuccess = new LoginPrompt('登录成功，填写今天的心情吧~~~')
    loginSuccess.show()



> **点评：** 这么写已经能够满足于需求，只是比较零散，如果将上述类封装在一个类，复用重复性代码，然后调用一个类，从而实现需求的功能，岂不是好？


    var Factory = function (name) {
      switch (name) {
        case 'alert':
          return new LoginAlert();
        case 'register':
          return new RegisterAlert()
        case 'LoginPrompt':
          return new LoginPrompt()
      }
    }




> **点评：**上述代码虽然将多个类封装在一个函数里面，但是存在大量的重复性代码，可以继续优化下

    var LoginValid = function (tips) {
      this.content = tips
    }
    LoginValid.prototype.show = function () {
      alert(this.content)
    }
    var FactoryFun = function (type, tips) {
      var obj = new Object();
      obj.content = tips;
      obj.show = function () {
        alert(this.content)
      }
      if (type === 'alert') {
    
      }
      if (type === 'register') {
    
      }
      if (type === 'LoginPrompt') {
    
      }
      return obj
    }
    
    var loginInstance = FactoryFun('alert', '用户名输入错误')
    loginInstance.show()

​    

> **点评：** 上述代码相对首次书写定义多个类进行验证是不是优雅很多呢？ 提供一个工厂函数，根据传入参数判断类型、提示语。
> 在团队项目开发，我们应该尽可能少的创建全局变量。同一类对象的不同需求，重复性代码可以提取出来，代码复用是面向对象编程的一条准则；