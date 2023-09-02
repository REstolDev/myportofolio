# Portfolio Personal - Proyecto Frontend con Angular

Este proyecto personal en Angular es parte de mi portafolio como desarrollador frontend. Incluye un formulario de contacto y un cursor personalizado, además de seguir las mejores prácticas de desarrollo web, como el uso de SCSS, la metodología BEM, responsive design y enfoque mobile-first.

## Características Destacadas

### Formulario de Contacto

- El formulario de contacto permite a los usuarios enviar mensajes directamente desde el sitio web.
- Incluye campos para nombre, correo electrónico, asunto y mensaje.
- Se realizan validaciones en tiempo real para garantizar que los datos sean correctos antes de enviar el formulario.
- Los mensajes de error y éxito se muestran de manera amigable al usuario.
- Los datos del formulario se envían de manera segura a través de una solicitud HTTP POST a un servicio externo.

#### Imports Relacionados

```typescript

//utilizan para definir un componente Angular y el ciclo de vida ngOnInit.
import { Component, OnInit } from '@angular/core';

//se utilizan para crear y validar el formulario de contacto.
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//se utilizan para realizar solicitudes HTTP para enviar los datos del formulario.
import { HttpClient, HttpHeaders } from '@angular/common/http';

//e utiliza para esperar la respuesta de la solicitud HTTP POST al servicio externo (en este caso, Formspree) antes de continuar. Cuando se obtiene la respuesta, se maneja de acuerdo a si es exitosa o si hay un error en el envío del formulario.
import { firstValueFrom } from 'rxjs';
```

### Cursor Personalizado
El proyecto incluye un cursor personalizado que sigue la posición del mouse en la ventana cuando navegamos desde pantallas grandes.
El cursor personalizado se implementa utilizando Angular y manipulación del DOM.
Proporciona una experiencia de usuario única y atractiva.

#### Imports Relacionados

```typescript
import { Component, Renderer2 } from '@angular/core';
```

Se utilizan para definir un componente Angular y para manipular el DOM de manera segura para el cursor personalizado.

## Estilos y Diseño

Se utilizan hojas de estilo SCSS para una organización y mantenimiento más sencillos del código CSS.
Se sigue la metodología BEM (Block, Element, Modifier) para estructurar las clases CSS y mantener un código limpio y escalable.
El diseño es completamente responsive, siguiendo la filosofía mobile-first para garantizar una experiencia óptima en dispositivos móviles y de escritorio.

