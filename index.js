

let i = 0;
let type1 = 'CodeWithHarry';
let functype1 = () => {
    if (i < type1.length) {
        document.getElementById('cwh').innerText += type1.charAt(i)
        i++;
        setTimeout(() => {
            functype1()
        }, 100);
    }
}

functype1();

