// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.initialX = 0;
    this.initialY = 0;
    this.finalX = 0;
    this.finalY = 0;
    let isMouseDown = false;


    // Developper les 3 fonctions gérant les événements
    this.pression = function pression(event) {
        isMouseDown = true;
        const coord = getMousePosition(canvas, event)
        this.initialX = coord.x
        this.intialY = coord.y
        console.log("presser")
        interactor.onInteractionStart(this)
    }

    this.deplacer = function deplacer(event) {
        if (isMouseDown) {
            const coord = getMousePosition(canvas, event)
            this.finalX = coord.x
            this.finalY = coord.y
            console.log("deplacer")
        }
        interactor.onInteractionUpdate(this)
    }

    this.relacher = function relacher(event) {
        if (isMouseDown) {
            const coord = getMousePosition(canvas, event)
            this.finalX = coord.x
            this.finalY = coord.y
        }
        console.log("relacher")
        isMouseDown = false;
        interactor.onInteractionEnd(this)
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



