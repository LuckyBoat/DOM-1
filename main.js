const div = dom.create("<div>newDiv</div>");
console.log(div);

dom.after(test, div);

const div3 = dom.create('<div id="parent"></div>');

dom.wrap(test, div3);

const nodes = dom.empty(window.empty);
console.log(nodes);

dom.attr(test, "title", "Hi,I'm fine!");
const title = dom.attr(test, "title");
console.log(`title: ${title}`);

dom.text(test, "你好啊，我实现了text");

dom.style(test, { border: "1px solid red", color: "blue" });
console.log(dom.style(test, "border"));
dom.style(test, "color", "black");

dom.class.add(test, "red");
dom.class.remove(test, "red");
console.log(dom.class.has(test, "red"));

const fn = () => {
  console.log("点击了");
};
dom.on(test, "click", fn);
dom.off(test, "click", fn);

const testDiv = dom.find("#test")[0];
console.log(testDiv);
const test2 = dom.find("#test2")[0];
console.log(dom.find(".red", test2)[0]);

console.log(dom.parent(test));

const s2 = dom.find("#s2")[0];
console.log(dom.siblings(s2));
console.log(dom.next(s2));
console.log(dom.previous(s2));

const t = dom.find("#travel")[0];
dom.each(dom.children(t), (n) => dom.style(n, "color", "red"));
console.log(dom.index(s2));
