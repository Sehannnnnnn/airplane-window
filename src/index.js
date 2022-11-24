require("./assets/imgs/airplanewindow.png")
require("./assets/imgs/skybackground.jpg")
require("./style.css")

const root = document.getElementById('root');

const createDOMElements = () => {
    return new Promise((resolve, reject) => {
        const container = document.createElement('div');
        container.className = 'container';


        const h1 = document.createElement('h1');
        h1.className = 'title1';
        const skyBackGround = document.createElement('div');
        skyBackGround.style.backgroundImage = "url(assets/imgs/skybackground.jpg)"
        skyBackGround.className = 'sky-background';
        const planeWindow = document.createElement('img');
        planeWindow.className = 'plane-window';

        skyBackGround.append(planeWindow);

        const context = document.createElement('p');
        context.className = 'context'

        container.append(h1, skyBackGround, context);
        root.append(container);
        resolve({h1, planeWindow, context});
    })
}

const drawDetails = ({h1, planeWindow, context}) => {
    h1.textContent = "Adventure is worthwhile."
    planeWindow.src = 'assets/imgs/airplanewindow.png'
    context.innerHTML = "Travel makes one modest.<br> You see what tiny place you occupy in the world."
}

createDOMElements().then((elements) => {
    drawDetails(elements);
});

console.log('hi!')
