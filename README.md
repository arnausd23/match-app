Proyecto de React usando Hooks para los servicios

## Folder structure

### `/dyson`
Contiene nuestra configuración de (dyson)[https://github.com/webpro/dyson] para poder simular nuestras peticiones http.

Dentro encontramos la carpeta `/methods` con las carpetas `/get` y `/post` con ficheros para cada uno de nuestros endpoints.
También podremos encontrar la carpeta `/data` con nuestros ficheros `json` con datos para poder exponer desde nuestros endpoints.  

### `/models`
Contiene nuestras entidades con 2 métodos estáticos `fromJSON` y `toJSON que serán los únicos métodos que podremos usar para crear o serializar nuestra entidad, ya que nuestro `constructor` es privado.

Haciendo esto nos aseguramos de encapsular la lógica de creación en este fichero y al tener el constructor privado nos aseguramos también que toda instancia de esta clase ha pasado nuestas reglas de validación, por lo que nunca será incorrecta.

### `/services`
Contiene nuestros servicios compuestos principalmente por `Hooks`. Agruparemos los diferentes Hooks según el dominio al que pertenezcan por lo que, por ejemplo todos nuestros Hooks relaionados con la entidad `Player` estarán dentro de `PlayerService`.
