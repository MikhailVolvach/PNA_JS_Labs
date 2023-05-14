// class Ajax {
//     post(url, cb) {
//         const xhr = new XMLHttpRequest()
//         xhr.open("POST", url);
//         xhr.send()

//         xhr.onreadystatechange = () => {
//             if (xhr.readyState === 4) {
//                 const data = JSON.parse(xhr.response);
//                 cb(data);
//             }
//         }
//     }
// }

class AjaxPromise {
    post(url) {
        let ft = fetch(url);
        ft.then((response) => {
            return response;
        })
        .catch((error) => {
            throw new Error(error);
        })
    }
}

export const ajax = async (url) => {
    const ft = await fetch(url);

    const result = await ft.json();
    return result;
}

// export const ajax = new AjaxPromise();
