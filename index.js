function sendRequestPromise() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            // resolve("I'm Roger Lo");
            reject("I'm Server Error!")
        }, 2000);
    });
}

// let myPromise = sendRequestPromise();
// console.log(`myPromise : `, myPromise); // 沒有用 then，會是 Promise { <Pending> }
// console.log("=================================");
// myPromise.then(username => console.log(username)); // 需用 then，才可取得回傳值

// ------------------------- Promise -------------------------
// sendRequestPromise()
//     .then(res => res.json())
//     .catch(err => {
//         console.error(`Promise Error: ${err}`)
//     })

// ------------------------- async/await -------------------------
// async function getRequest() {
//     try {
//         let myPromise = await sendRequestPromise();
//         console.log(`myPromise in Async: ${myPromise}`);
//     } catch (err) {
//         console.error(`err: ${err}`);
//     }
// }

// getRequest()

// ------------------------- async/await: 改搭配 fetch -------------------------
import fetch from "node-fetch";

(async function getRequest() {
    try {
        const URI = `https://jsonplaceholder.typicode.com/todos`;
        let todoData = await fetch(URI, {
            method: "GET", 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        let todoDataJson = await todoData.json();
        console.table(todoDataJson.slice(0, 5));
    } catch (err) {
        console.error(`err: ${err}`);
    }
})()

// ------------------------- async/await: 使用 IIFAE -------------------------
// let myPromise = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("... resolve ...")
//         }, 3000);
//     });
// }

// // IIFAE: 我是立即執行的，ASYNC函數
// ~async function() {
//     let prms = await myPromise(); // 可將 await 移除，觀察 print 的結果
//     console.log(prms)
//     console.log('Hello World!');
// }()