// document.getElementById("title")
// <h1 id=​"title" class=​"heading">​DOM Manipulation on chai or code​</h1>​

// document.getElementById("title").id
// 'title'

// document.getElementById("title").class
// undefined

// document.getElementById("title").className
// 'heading'

// document.getElementById("title").getAttribute('class')
// 'heading'

// document.getElementById("title").setAttribute('class' , "para")
// undefined

// document.getElementById("title").setAttribute('class' , 'heading para')
// undefined

// document.getElementById("title").getAttribute('class')
// 'heading para'

// title.style.backgroundColor = 'green'
// 'green'

// title.style.padding = '15px'
// '15px'

// title.innerText
// 'DOM Manipulation on chai or code'

// title.textContent
// 'DOM Manipulation on chai or code text inside span'

// title.innerHTML
// 'DOM Manipulation on chai or code <span style="display: none;">text inside span</span>'

// document.querySelector('h2')
// <h2>​Heading 1​</h2>​

// document.querySelector('#title')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('.heading')
// <h1 id=​"title" class=​"heading">​…​</h1>​

// document.querySelector('ul')
// <ul>​…​</ul>​<li>​…​</li>​<li>​…​</li>​<li>​…​</li>​</ul>​

// document.querySelector('li')
// <li>​…​</li>​::marker​"One"</li>​

// const list1 = document.querySelector('li')
// undefined

// list1
// <li>​…​</li>​::marker​"One"</li>​

// list1.style.backgroundColor = "green"
// 'green'

// list1.style.padding = '17px'
// '17px'

// document.querySelector('ul li')
// <li style=​"background-color:​ green;​ padding:​ 17px;​">​…​</li>​::marker​"One"</li>​

// document.querySelectorAll('li')
// NodeList(3) [li, li, li]0: liattributeStyleMap: StylePropertyMap {size: 0}attributes: NamedNodeMap {length: 0}baseURI: "http://127.0.0.1:5500/index.html"childNodes: NodeList [text]children: HTMLCollection []classList: DOMTokenList [value: '']clientHeight: 18clientWidth: 562contentEditable: "inherit"currentCSSZoom: 1dataset: DOMStringMap {}firstChild: textinnerHTML: "One"innerText: "One"isConnected: truelastChild: textlocalName: "li"namespaceURI: "http://www.w3.org/1999/xhtml"nextElementSibling: linextSibling: textnodeName: "LI"nodeType: 1offsetHeight: 18offsetLeft: 48offsetParent: body.bg-blackoffsetTop: 299offsetWidth: 562outerHTML: "<li>One</li>"outerText: "One"ownerDocument: documentparentElement: ulparentNode: ulpart: DOMTokenList [value: '']previousSibling: textscrollHeight: 18scrollWidth: 562spellcheck: truestyle: CSSStyleDeclaration {accentColor: '', additiveSymbols: '', alignContent: '', alignItems: '', alignSelf: '', …}tabIndex: -1tagName: "LI"textContent: "One"translate: truewritingSuggestions: "true"[[Prototype]]: HTMLLIElement1: li2: lilength: 3[[Prototype]]: NodeListentries: ƒ entries()forEach: ƒ forEach()item: ƒ item()keys: ƒ keys()length: (...)values: ƒ values()constructor: ƒ NodeList()Symbol(Symbol.iterator): ƒ values()Symbol(Symbol.toStringTag): "NodeList"get length: ƒ length()[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()

// const myAllLiList = document.querySelectorAll('li')
// undefined

// myAllLiList
// NodeList(3) [li, li, li]

// myAllLiList[1].style.backgroungColor = 'red'
// 'red'

// myAllLiList[1].style.backgroundColor = 'red'
// 'red'

// const allLi = document.querySelectorAll('li')
// undefined

// allLi
// NodeList(3) [li, li, li]

// allLi.forEach((v)=> v.style.padding = "20px") --> Done

// ------------------------------------------------------------
// 21 / july /2026
// ------------------------------------------------------------

// const lists = document.getElementsByClassName('list-item')
// undefined

// lists
// HTMLCollection(3) [li.list-item, li.list-item, li.list-item]0: li.list-item1: li.list-item2: li.list-itemlength: 3[[Prototype]]: HTMLCollection

// const ArrLists = Array.from(lists)
// undefined

// ArrLists
// (3) [li.list-item, li.list-item, li.list-item]

// ArrLists.forEach((v) => {
//     console.log(v)
// })

// VM6734:2 <li class=​"list-item">​…​</li>​::marker​"One"</li>​
// VM6734:2 <li class=​"list-item">​…​</li>​::marker​"Two"</li>​
// VM6734:2 <li class=​"list-item">​…​</li>​
// undefined

// ArrLists.forEach((v) => {
//     console.log(v.innerText)
// })

// VM6805:2 One
// VM6805:2 Two
// VM6805:2 Three
// undefined

// ArrLists.forEach((v) => {
//     console.log(v.innerHTML)
// })

// VM6838:2 One
// VM6838:2 Two
// VM6838:2 Three
// undefined

// ArrLists.forEach((v) => {
//     v.style.color = "orange"
// })


// --------------------------------------------
//  Create New Element in DOM 
// -------------------------------------------

// const parent = document.querySelector('.parent')
// console.log(parent);
// console.log(parent.children);
// console.log(parent.children[1].innerText);

// for(i = 0 ; i < parent.children.length ; i++){
//     console.log(parent.children[i].innerHTML);
// }

// parent.children[1].style.color = "orange"
// parent.children[3].style.color = "red"

// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

// const dayOne = document.querySelector('.day')
// console.log(dayOne);
// console.log(dayOne.parentElement);
// console.log(dayOne.nextElementSibling);

// console.log("Nodes : " , parent.childNodes); // 11

// -----------------------------------------
// creating element in DOM
// -----------------------------------------

// const div = document.createElement('div')
// // console.log(div);
// // div.className = 'main'
// // div.id = Math.round(Math.random() * 10 + 1)
// // div.setAttribute('title' , 'generate title')

// // div.innerText = 'Hello world'
// // OR
// const addText = document.createTextNode("Hello word")
// div.appendChild(addText)

// const display = document.body.appendChild(div)
// display.style.color = "black"
// display.style.backgroundColor = "orange"
// display.style.padding = "10px"

//  -------------------------------
// Edit remove

