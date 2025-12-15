/**
 * @fileoverview stories
 * 
 * Configuración estructurada de las historias
 */
import historia1 from "@/assets/home/historias/historia1/historia1.webp";
import cajaFuerte from "@/assets/home/historias/historia1/caja_fuerte.webp";

import historia2 from "@/assets/home/historias/historia2/historia2.webp";
import planta from "@/assets/home/historias/historia2/planta.webp";

export const stories = [
    {
        titulo: "Una caja fuerte",
        image: historia1.src,
        image_popup: cajaFuerte.src,
    
        paragraphs: [
            "Hola, soy una caja. Pero no cualquier caja.",
            "Aún recuerdo cuando no era más que una lámina delgada de cartón, y mi mamá me decía que no me acercara mucho al agua porque podría arrugarme. Claramente no le hice caso, y todavía conservo algunas marcas de aquellas gotas que sentí por primera vez.",
            "Siempre he creído que fui diseñada para cosas grandes. Y no lo digo por mi textura, ni por mi grosor, ni por aquella vez que me usaron de ejemplo para calcular el área superficial de un paralelepípedo rectangular.",
            "Soy una caja profunda. De capacidad y de sentimientos.",
            "Algunos dicen que siempre he sido una caja misteriosa. Yo, por el contrario, creo que no. Solo soy una caja que sueña.",
            "Como aquella vez que soñé con ser la caja donde duermen los perritos que recogen en la calle. O la vez que soñé con ser la caja en la que las parejas guardan sus más grandes secretos.",
            "También quise ser, alguna vez, la caja de cambios de un carro... Pero me pareció que Bogotá era un lugar muy hostil para conducir.",
            "En fin. Un día, una chica dejó un volante de una agencia que decía que trabajaban en el negocio de los sueños. Y aunque muchos piensen que una caja de cartón no puede ser una caja fuerte, me arriesgué. Y ahora, estoy en el negocio.",
            "Para las cajas de cartón que creen que pueden ser cajas fuertes: Creamos para los que creen."
        ],
    },
    {
        titulo: "La vegetariana",
        image: historia2.src,
        image_popup: planta.src,
      
        paragraphs: [
            "¿Por qué debería ser diferente?",
            "No me importaba morirme de hambre la primera vez que lo intentara. Estaba dispuesta a no comer, a trasnochar, a desgastarme hasta los átomos si era necesario. Todo por cumplir con mi propósito.",
            "Siempre supe que era la hierba mala de este jardín. Me lo hicieron sentir una y mil veces. Me estigmatizaron, me señalaron, me exigieron que cambiara.",
            "Me dijeron que tenía que evolucionar, que debía tener ideas menos progresivas, ideas más fáciles de tragar. Que alguien como yo no podía seguir pensando como pienso.",
            "¿Qué van a entender mis hermanas, si no saben lo que es intentarlo?",
            "Para las plantas carnívoras que creen que pueden ser vegetarianas. Creamos para los que creen."
        ],
    },
];
