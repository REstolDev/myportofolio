import { Component, Renderer2   } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
// Inyectar el Renderer2 en el constructor para manipular el DOM de manera segura
constructor(private renderer: Renderer2) { }

// Método llamado cuando el componente es inicializado
ngOnInit(): void {
  // Usar el Renderer2 para escuchar el evento 'mousemove' en la ventana
  this.renderer.listen('window', 'mousemove', (event: MouseEvent) => {
    // Obtener el elemento del cursor por su ID
    const cursor = document.getElementById('cursor');
    
    // Verificar si el elemento del cursor existe
    if (cursor) {
      // Usar el Renderer2 para establecer las posiciones izquierda y arriba del cursor
      this.renderer.setStyle(cursor, 'left', event.pageX + 'px');
      this.renderer.setStyle(cursor, 'top', event.pageY + 'px');
    }
  });
}
}






