// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    var initialX = 0;
    var intialY = 0;
    var finalX = 0;
    var finalY = 0;
    let isMouseDown = false;


    // Developper les 3 fonctions gérant les événements
    this.pression = function pression(event) {
        isMouseDown = true;
        const coord = getMousePosition(canvas, event)
        initialX = coord.x
        intialY = coord.y
        console.log("presser")
    }

    this.deplacer = function deplacer(event) {
        if (isMouseDown) {
            const coord = getMousePosition(canvas, event)
            finalX = coord.x
            finalY = coord.y
            console.log("deplacer")
        }
    }

    this.relacher = function relacher(event) {
        if (isMouseDown) {
            const coord = getMousePosition(canvas, event)
            finalX = coord.x
            finalY = coord.y
        }
        console.log("relacher")
        isMouseDown = false;
    }

    // Associer les fonctions précédentes aux évènements du canvas.
    canvas.addEventListener('mousedown', this.pression)
    canvas.addEventListener('mousemove', this.deplacer)
    canvas.addEventListener('mouseup', this.relacher)
};


// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



