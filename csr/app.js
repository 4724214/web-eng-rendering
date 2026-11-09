"use strict";
const app = document.querySelector("#app");
if (app === null) {
    throw new Error("#app not found");
}
let title = "画面生成方式の比較";
let messeage = "この文章はTypeScriptから追加した。";
app.innerHTML = `
    <h1>${title}</h1>
    <p>${messeage}</p>
`;
window.addEventListener("hashchange", () => {
    const page = location.hash;
    switch (page) {
        case "#compare":
            title = "これは比較ページです。";
            messeage = "#compareから遷移しました。";
            break;
        case "#detail":
            title = "これは詳細ページです。";
            messeage = "#detailから遷移しました。";
            break;
        default:
            title = "Unknown page";
            messeage = "";
    }
    app.innerHTML = `
        <h1>${title}</h1>
        <p>${messeage}</p>
    `;
});
