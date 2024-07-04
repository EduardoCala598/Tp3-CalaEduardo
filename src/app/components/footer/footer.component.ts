import { Component,OnInit  } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit  {
  texts: string[] = [
    "Vivir, aprender y subir de nivel un día a la vez.",
    "¡Bienvenido a mi página!",
    "Developer Robinson Eduardo Cala"
  ];
  currentIndex: number = 0;
  currentText: string = this.texts[this.currentIndex];
  letterIndex: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.animateText();
  }

  animateText(): void {
    const textElement = document.getElementById('text');
    if (textElement) {
      if (this.letterIndex <= this.currentText.length) {
        textElement.innerText = this.currentText.substring(0, this.letterIndex);
        this.letterIndex++;
        setTimeout(() => this.animateText(), 100); // Ajusta la velocidad aquí
      } else {
        setTimeout(() => this.eraseText(), 1000); // Ajusta la pausa antes de borrar
      }
    }
  }

  eraseText(): void {
    const textElement = document.getElementById('text');
    if (textElement) {
      if (this.letterIndex >= 0) {
        textElement.innerText = this.currentText.substring(0, this.letterIndex);
        this.letterIndex--;
        setTimeout(() => this.eraseText(), 50); // Ajusta la velocidad de borrado
      } else {
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        this.currentText = this.texts[this.currentIndex];
        setTimeout(() => this.animateText(), 500); // Ajusta la pausa antes del siguiente texto
      }
    }
  }

}
