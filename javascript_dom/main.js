function main() {
    lesson1()

    const lesson2 = () => {

        const btn2 = document.querySelector('#btn2')
        btn2.onclick = () => alert("I'm standing... BEHIND YOU");

        const btn3 = document.querySelector('#btn3');
        btn3.addEventListener('click', () => {
            alert("Hello World")
        });

        btn3.addEventListener('mouseover', () => {
            console.log("hover over ", btn3.nodeName, " #3")
        })

        // selecting the container lesson 2 is in
        const lesson2 = document.querySelector("#lesson2");
        // creating a new button
        const button4 = document.createElement('button');
        button4.id = "btn4";
        let x = 4;
        button4.textContent = ("Button " + x);

        button4.addEventListener('click', () => {
            x += 1;
            button4.textContent = ("Button " + x)

        })

        button4.addEventListener('dblclick', () => {
            x *= 2;
            button4.textContent = ("Button " + x)
        })
        lesson2.appendChild(button4);

    }

    lesson2();

    function NodeListMagic() {
        const GetAllNodeListID = document.querySelectorAll('#nodelist');
        GetAllNodeListID.forEach((button) => {
            button.addEventListener('click', () => {
                alert(button.className);
            })
        })
    }

    NodeListMagic();

}

function lesson1() {
    document.querySelector("body").style.backgroundColor = "rgb(160,180,200";
    //grab the newly minted container
    const container = document.querySelector('#container');
    container.style.backgroundColor = "rgb(0, 0, 0";

    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = 'This is the glorious text-content!';

    container.appendChild(content);

    //creating element <p>  when using elements you get an object so you have to treat it similar to array to select
    // item(0) order of <p> if you have more than 1
    const p = document.createElement('p');
    var ptext = document.createTextNode("Hey I'm Red!");
    // don't need to get the document since it's already a variable
    // document.getElementsByName('p').style.color = "red";
    p.appendChild(ptext);
    container.appendChild(p);

    // document.getElementsByTagName('p').item(0).style.color = "#f00";
    // I think this is the best way
    p.setAttribute('style', 'color: red;  font-weight: bold;');

    // creating elment <h2> and setting it to be blue
    //best way to handle this after creating is to select with docuement.querySelector('h3')
    const h2 = document.createElement('h2');

    h2.appendChild(document.createTextNode("I'm a blue h2!"));
    container.appendChild(h2);
    // document.querySelector('h2').style.color = "blue";

    // this way is pretty cool too
    h2.style.cssText = 'color: blue; font-family: cursive;';


    // creating element <div id="PinkBackground">
    const blackborder = document.createElement('div');
    blackborder.id = 'PinkBackground';
    blackborder.textContent = "making a black border"
    container.appendChild(blackborder);
    const EditBorder = document.getElementById('PinkBackground');

    //this sets a thick solid blue line
    EditBorder.style.border = "thick solid rgb( 255, 255, 255)";
    EditBorder.style.backgroundColor = "pink";
    EditBorder.style.margin = "2% 2%";
    blackborder.style.alignItems = "center";

    // this makes an easyway to create an element inside of another
    // then give it an id and some text
    const h1 = EditBorder.appendChild(document.createElement("div"))
    h1.id = "h1"
    h1.textContent = "I'm in a div"


    EditBorder.appendChild(Object.assign(document.createElement('p'), { textContent: "Me Too!" }))
    EditBorder.appendChild(Object.assign(document.createElement('div'), { id: "hey", textContent: "heyhey" }))
    // a <p> with red text that says “Hey I’m red!”
    // an <h3> with blue text that says “I’m  blue h3!”
    // a <div> with a black border and pink background color with the following elements inside of it:
    //     another <h1> that says “I’m in a div”
    //     a <p> that says “ME TOO!”
    //     Hint for this one: after creating the <div> with createElement, append the <h1> and <p> to it before adding it to the container.

}

main();
