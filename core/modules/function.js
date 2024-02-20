/**
 * Functional
 * Пример: <Form>{children}</Form>
 *
 * Не подойдёт для React
 * https://filipmolcik.com/react-children-vanilla-html-element/
 *
 * Варианты
 * 1. юзать отдельные html файлы под компоненты, дёргать контент document.getElementById("test") и уже сверху навешивать пропсы
 * 2. createElement, appendChild и прочая дрочь. Собирать по кирпичикам.
 * */
// const FormFunction = ({children}) => {
//
//     const element = (`
//         <div>
//             <div>TestModule</div>
//             ${children}
//         </div>
//     `);
//
//     // var div = document.createElement("div");
//     // div.innerHTML = element;
//     // div.append(children)
//     // return div.innerHTML;
//
//     function html2dom(str) {
//         return (new DOMParser).parseFromString(str, 'text/html');
//     }
//     const res = html2dom(element).body.childNodes[0];
//     console.log(res)
//
//     return res.innerHtml;
// }
// exports.Form = FormFunction