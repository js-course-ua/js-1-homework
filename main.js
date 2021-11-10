// - Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10,
// -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
{
    let a = 'hello';
    let b = 'owu';
    let c = 'com';
    let d = 'ua';
    let e = 1;
    let f = 10;
    let g = -999;
    let h = 123;
    let i = 3.14;
    let j = 2.7;
    let k = 16;
    let l = true;
    let m = false;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(f);
    document.write(g);
    document.write(h);
    document.write(i);
    document.write(j);
    document.write(k);
    document.write(l);
    // alert(m);
}

// - Переприсвоїти кожній змінній з завдання значення на довільне.
//     Вивести кожну змінну за допомогою: console.log , alert, document.write
{
    let a = 'hello';
    a = 'hi';
    let b = 'owu';
    b = 'course'
    let c = 'com';
    c = 'front';
    let d = 'ua';
    d = 'end'
    let e = 1;
    e = 2;
    let f = 10;
    f = 20;
    let g = -999;
    g = -1998;
    let h = 123;
    h = 321;
    let i = 3.14;
    i = 'William Jones';
    let j = 2.7;
    j = 4.4
    let k = 16;
    k = 32;
    let l = true;
    l = false;
    let m = false;
    m = true;

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(f);
    document.write(g);
    document.write(h);
    document.write(i);
    document.write(j);
    document.write(k);
    document.write(l);
    // alert(m);
}

// - Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
// З'єднати їх в одну змінну person. (Не об'єкт)

{
    let firstName = 'Oleg';
    let middleName = 'Andriyovich';
    let lastName = 'Andriyenko';

    let person = `${firstName}${middleName}${lastName}`;
    console.log(person)
}

// - За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//     Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років"

// {
//     let firstName = prompt('Ваше імя?')
//     let middleName = prompt('Як вас по-Батькові?')
//     let age = prompt('Ваш вік?')
//
//     alert(`Вітаю ${firstName} ${middleName}. Тобі ${age} років!`)
// }



// - За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.

{
    let a = 100;
    let b = '100';
    let c = true;

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof c)
}

// - Визначити відповідний оператор в виразах що б вийшов відповідний результат.

{
    console.log(5 < 6);
    console.log(5 > 6);
    console.log(5 == 6);
    console.log(5 === 6)
    console.log(10 == 10)
    console.log(10 === 10)
    console.log(10 < 10)
    console.log(10 > 10)
    console.log(10 != 10)
    console.log(123 < 123)
    console.log(123 == 123)
}

{
    let str = "20";
    let a = 5;
    document.write(str + a + "<br/>");
    document.write(str - a + "<br/>");
    document.write(str * "2" + "<br/>");
    document.write(str / 2 + "<br/>");
}

