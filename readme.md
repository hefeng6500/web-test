个人前端技术测试仓库：https://github.com/hefeng6500/web-test.git

------

2019.03.12 学习总结

弹性布局Flex

display: flex | inline-flex

flex-direction: row | row-reverse | column | column-reverse 

flex-wrap: nowrap | wrap | wrap-reverse

justify-content:  flex-start | flex-end | center | space-between | space-around;

align-items: flex-start | flex-end | center | baseline | stretch

align-content: flex-start | flex-end | center | space-between | space-around | stretch;



order: number // 决定排列顺序，越小越前

flex-grow: <number>; /* default 0 */

flex-shrink: <number>; /* default 1 */

flex-basis: <length> | auto; /* default auto */



前三者合并为 flex，默认值为 flex: 0 1 auto， 后两者属性可选

flex: 1 | auto | 1 1 auto

flex: none | 0 0 auto

