
// Implémenter ici les 4 classes du modèle.
// N'oubliez pas l'héritage !
function Drawing() {
    this.forms = [];
}

function Form(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}

function Rectangle(initX, initY, largeur, hauteur, epaisseur, couleur) {
    this.pointHautGauche = { x: initX, y: initY};
    this.largeur = largeur;
    this.hauteur = hauteur;
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}

Rectangle.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.lineWidth = this.epaisseur
    ctx.strokeStyle = this.couleur;
    ctx.strokeRect(this.getInitX(), this.getInitY(), this.getFinalX(),   this.getFinalY());
};
Rectangle.prototype.getInitX = function () {
    return this.pointHautGauche.x
}
Rectangle.prototype.getInitY = function () {
    return this.pointHautGauche.y
}
Rectangle.prototype.getFinalX = function () {
    return this.getInitX() + this.largeur
}
Rectangle.prototype.getFinalY = function () {
    return this.getInitY() + this.hauteur
}


function Line(initX, initY, finX, finY, epaisseur, couleur) {
    this.pointA = {x: initX, y: initY}
    this.pointB = {x: finX, y: finY}
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}

Line.prototype.paint = function(ctx) {
    //TODO Manager color
    ctx.beginPath();
    ctx.lineWidth = this.epaisseur
    ctx.moveTo(this.getInitX(), this.getInitY());
    ctx.lineTo(this.getFinalX(), this.getFinalY());
    ctx.strokeStyle = this.couleur;
    ctx.stroke();
};
Line.prototype.getInitX = function () {
    return this.pointA.x
}
Line.prototype.getInitY = function () {
    return this.pointA.y
}
Line.prototype.getFinalX = function () {
    return this.pointB.x
}
Line.prototype.getFinalY = function () {
    return this.pointB.y
}

Drawing.prototype.getForms = function () {
    return this.forms;
}

Drawing.prototype.paint = function(ctx) {
    console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.getForms().forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
