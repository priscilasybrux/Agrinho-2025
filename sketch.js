let estagioBananeira = 0; // Começa no estágio 0 (semente/broto)
const MAX_ESTAGIOS = 5; // Total de estágios de crescimento

function setup() {
  createCanvas(600, 500); // Cria uma tela maior para a bananeira
  background(173, 216, 230); // Céu azul claro
  noLoop(); // O desenho só será atualizado quando houver uma ação (clique do mouse)
}

function draw() {
  background(173, 216, 230); // Limpa a tela a cada atualização (céu azul claro)

  // Desenha o "chão" ou a "terra"
  fill(139, 69, 19); // Cor marrom
  rect(0, height - 100, width, 100); // Retângulo para o chão

  // Desenha a bananeira de acordo com o estágio atual
  switch (estagioBananeira) {
    case 0:
      // Estágio 0: Broto
      fill(34, 139, 34); // Verde escuro
      ellipse(width / 2, height - 110, 20, 40); // Broto pequeno
      textAlign(CENTER);
      textSize(20);
      fill(0);
      text("Estágio: Broto", width / 2, 40);
      break;
    case 1:
      // Estágio 1: Pequena Muda (com algumas folhas incipientes)
      fill(34, 139, 34); // Verde escuro
      rect(width / 2 - 10, height - 150, 20, 60); // Tronco fino
      triangle(width / 2, height - 150, width / 2 - 30, height - 120, width / 2 - 10, height - 130); // Folha pequena à esquerda
      triangle(width / 2, height - 150, width / 2 + 30, height - 120, width / 2 + 10, height - 130); // Folha pequena à direita
      textAlign(CENTER);
      textSize(20);
      fill(0);
      text("Estágio: Muda Jovem", width / 2, 40);
      break;
    case 2:
      // Estágio 2: Muda Média (tronco mais grosso, mais folhas)
      fill(102, 51, 0); // Marrom avermelhado para o tronco
      rect(width / 2 - 15, height - 200, 30, 110); // Tronco médio

      fill(46, 139, 87); // Verde médio
      // Folhas
      triangle(width / 2, height - 200, width / 2 - 60, height - 150, width / 2 - 20, height - 160);
      triangle(width / 2, height - 200, width / 2 + 60, height - 150, width / 2 + 20, height - 160);
      triangle(width / 2, height - 180, width / 2 - 40, height - 120, width / 2, height - 130);
      triangle(width / 2, height - 180, width / 2 + 40, height - 120, width / 2, height - 130);
      textAlign(CENTER);
      textSize(20);
      fill(0);
      text("Estágio: Bananeira Média", width / 2, 40);
      break;
    case 3:
      // Estágio 3: Bananeira Quase Adulta (tronco robusto, folhas grandes)
      fill(102, 51, 0); // Marrom avermelhado para o tronco
      rect(width / 2 - 20, height - 300, 40, 210); // Tronco robusto

      fill(0, 100, 0); // Verde escuro
      // Folhas grandes
      beginShape();
      vertex(width / 2, height - 300);
      bezierVertex(width / 2 - 100, height - 250, width / 2 - 120, height - 150, width / 2 - 40, height - 110);
      bezierVertex(width / 2 - 80, height - 180, width / 2 - 10, height - 280, width / 2, height - 300);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 300);
      bezierVertex(width / 2 + 100, height - 250, width / 2 + 120, height - 150, width / 2 + 40, height - 110);
      bezierVertex(width / 2 + 80, height - 180, width / 2 + 10, height - 280, width / 2, height - 300);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 270);
      bezierVertex(width / 2 - 70, height - 220, width / 2 - 90, height - 120, width / 2 - 30, height - 80);
      bezierVertex(width / 2 - 60, height - 150, width / 2 - 5, height - 250, width / 2, height - 270);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 270);
      bezierVertex(width / 2 + 70, height - 220, width / 2 + 90, height - 120, width / 2 + 30, height - 80);
      bezierVertex(width / 2 + 60, height - 150, width / 2 + 5, height - 250, width / 2, height - 270);
      endShape(CLOSE);
      textAlign(CENTER);
      textSize(20);
      fill(0);
      text("Estágio: Bananeira Adulta (sem frutas)", width / 2, 40);
      break;
    case 4:
      // Estágio 4: Bananeira com Flor (coração da bananeira)
      fill(102, 51, 0); // Marrom avermelhado para o tronco
      rect(width / 2 - 20, height - 300, 40, 210); // Tronco robusto

      fill(0, 100, 0); // Verde escuro
      // Folhas grandes (iguais ao estágio 3)
      beginShape();
      vertex(width / 2, height - 300);
      bezierVertex(width / 2 - 100, height - 250, width / 2 - 120, height - 150, width / 2 - 40, height - 110);
      bezierVertex(width / 2 - 80, height - 180, width / 2 - 10, height - 280, width / 2, height - 300);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 300);
      bezierVertex(width / 2 + 100, height - 250, width / 2 + 120, height - 150, width / 2 + 40, height - 110);
      bezierVertex(width / 2 + 80, height - 180, width / 2 + 10, height - 280, width / 2, height - 300);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 270);
      bezierVertex(width / 2 - 70, height - 220, width / 2 - 90, height - 120, width / 2 - 30, height - 80);
      bezierVertex(width / 2 - 60, height - 150, width / 2 - 5, height - 250, width / 2, height - 270);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 270);
      bezierVertex(width / 2 + 70, height - 220, width / 2 + 90, height - 120, width / 2 + 30, height - 80);
      bezierVertex(width / 2 + 60, height - 150, width / 2 + 5, height - 250, width / 2, height - 270);
      endShape(CLOSE);

      // Flor da bananeira (coração)
      fill(178, 34, 34); // Vermelho escuro
      ellipse(width / 2, height - 250, 40, 60); // Coração da bananeira
      textAlign(CENTER);
      textSize(20);
      fill(0);
      text("Estágio: Com Flor", width / 2, 40);
      break;
    case 5:
      // Estágio 5: Bananeira com Cacho de Bananas
      fill(102, 51, 0); // Marrom avermelhado para o tronco
      rect(width / 2 - 20, height - 300, 40, 210); // Tronco robusto

      fill(0, 100, 0); // Verde escuro
      // Folhas grandes (iguais ao estágio 3)
      beginShape();
      vertex(width / 2, height - 300);
      bezierVertex(width / 2 - 100, height - 250, width / 2 - 120, height - 150, width / 2 - 40, height - 110);
      bezierVertex(width / 2 - 80, height - 180, width / 2 - 10, height - 280, width / 2, height - 300);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 300);
      bezierVertex(width / 2 + 100, height - 250, width / 2 + 120, height - 150, width / 2 + 40, height - 110);
      bezierVertex(width / 2 + 80, height - 180, width / 2 + 10, height - 280, width / 2, height - 300);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 270);
      bezierVertex(width / 2 - 70, height - 220, width / 2 - 90, height - 120, width / 2 - 30, height - 80);
      bezierVertex(width / 2 - 60, height - 150, width / 2 - 5, height - 250, width / 2, height - 270);
      endShape(CLOSE);

      beginShape();
      vertex(width / 2, height - 270);
      bezierVertex(width / 2 + 70, height - 220, width / 2 + 90, height - 120, width / 2 + 30, height - 80);
      bezierVertex(width / 2 + 60, height - 150, width / 2 + 5, height - 250, width / 2, height - 270);
      endShape(CLOSE);

      // Cacho de bananas
      fill(255, 255, 0); // Amarelo para as bananas
      for (let i = 0; i < 5; i++) {
        // Desenha algumas bananas
        ellipse(width / 2 - 10, height - 220 + (i * 15), 10, 30);
        ellipse(width / 2 + 10, height - 210 + (i * 15), 10, 30);
      }
      textAlign(CENTER);
      textSize(20);
      fill(0);
      text("Estágio: Cacho de Bananas!", width / 2, 40);
      break;
  }
}

function mousePressed() {
  // Avança para o próximo estágio ao clicar no mouse
  estagioBananeira++;
  if (estagioBananeira > MAX_ESTAGIOS) {
    estagioBananeira = 0; // Volta para o estágio inicial se passar do máximo
  }
  redraw(); // Redesenha a tela para mostrar o novo estágio
}