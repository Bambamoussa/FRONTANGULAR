var editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;
    this.shapeList = []

    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.
    this.setCurrEditingMode = function (currEditingMode) {
        this.currEditingMode = currEditingMode
    }
    this.setCurrLineWidth = function (currLineWidth) {
        this.currLineWidth = currLineWidth
    }
    this.setCurrColour = function (currColour) {
        this.currColour = currColour
    }
    new DnD(canvas, this);


    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = function onInteractionStart(dnd) {
    }

    this.onInteractionUpdate = function onInteractionUpdate(dnd) {
        let form
        switch (this.currEditingMode) {
            case 0 :
                form = new Rectangle(
                    dnd.initialX,
                    dnd.initialY,
                    dnd.initialX + dnd.finalX,
                    dnd.initialY + dnd.finalY,
                    this.currLineWidth,
                    this.currColour
                )
                break
            case 1 :
                form = new Line(
                    dnd.initialX,
                    dnd.initialY,
                    dnd.finalX,
                    dnd.finalY,
                    this.currLineWidth,
                    this.currColour
                )
        }
        form.paint()
    }

    this.updateShapeList = function (form) {
        const shapeList = document.getElementById("shapeList")
        const li = document.createElement("li");
        let textNode = document.createTextNode(`${this.currEditingMode === 0 ? 'rec' : 'line'}(${form.initialX}, ${form.initialY}, ${form.finalX, form.finalY})`);
        li.appendChild(textNode);

        // btn
        const btn = document.createElement("button")
        btn.classList.add("btn", "btn-default")
        const span = document.createElement("span")
        span.classList.add("glyphicon", "glyphicon-remove-sign")
        btn.appendChild(span)

        li.appendChild(btn)

        shapeList.appendChild(li);
    }

    this.onInteractionEnd = function onInteractionEnd(dnd) {
        let form

        switch (this.currEditingMode) {
            case 0 :
                form = new Rectangle(
                    dnd.initialX,
                    dnd.initialY,
                    dnd.initialX + dnd.finalX,
                    dnd.initialY + dnd.finalY,
                    this.currLineWidth,
                    this.currColour
                )
                break
            case 1 :
                form = new Line(
                    dnd.initialX,
                    dnd.initialY,
                    dnd.finalX,
                    dnd.finalY,
                    this.currLineWidth,
                    this.currColour
                )
        }
        drawing.forms.push(form)
        this.updateShapeList(form)
        form.paint()
    }
};


