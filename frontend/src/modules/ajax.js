export const ajax = async (url) => {
    const ft = await fetch(url);

    const result = await ft.json();
    return result;
}
