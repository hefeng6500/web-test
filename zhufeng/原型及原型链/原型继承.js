    /**
     * 
     * 原型继承
     * 道格拉斯·克罗克福在《javascript 中原型式继承》中提出：
     * 借助原型prototype可以根据已有的对象创建一个新对象，同时不必创建新的自定义对象类型。
     * 
     * 
    */

    function inheritObject(o) {
      function F() { }
      F.prototype = o
      return new F()
    }

    var book = {
      name: 'js book',
      alikeBook: ['css book', 'html book']
    }

    var newBooks = inheritObject(book)
    newBooks.name = 'Ajax book'
    newBooks.alikeBook.push('xml book')

    var otherBooks = inheritObject(book)
    otherBooks.name = 'flash book'
    otherBooks.alikeBook.push('as book')

    console.log(newBooks.name) // Ajax book
    console.log(newBooks.alikeBook) // ["css book", "html book", "xml book", "as book"]

    console.log(otherBooks.name) // flash book
    console.log(otherBooks.alikeBook) // ["css book", "html book", "xml book", "as book"]

    /**
     * 
     * 结果看出： 跟类式继承一样，父类对象的引用类型的属性被公用
     * newBooks改变alikeBook时，otherBooks的alikeBook也被改变
    */