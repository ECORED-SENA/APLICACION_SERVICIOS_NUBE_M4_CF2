<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Introducción a UML

    figure.mb-5
      img(src="@/assets/curso/banner-tema1.svg", alt="Computador con lenguaje de programación en la pantalla")  

    p.mb-4 Los UML se consideran técnicas para la especificación de sistemas. En la siguiente presentación interactiva podrá conocer su definición y principales características. 

    figure.mb-5
      img(src="@/assets/curso/UML.svg", alt="UML")  

    .row.mb-4
      .col-lg-7.mb-2
        p UML, es una técnica para la especificación de sistemas en todas sus fases. Nació en 1994 cubriendo los aspectos principales de todos los métodos de diseño antecesores y precisamente, los padres de UML son Grady Booch, autor del método Booch; James Rumbaugh, autor del método OMT e Ivar Jacobson, autor de los métodos OOSE y Objectory. La versión 1.0 de UML fue liberada en enero de 1997 y ha sido utilizado con éxito en sistemas construidos para toda clase de industrias alrededor del mundo: hospitales, bancos, comunicaciones, aeronáutica, finanzas, etc. (2009, March 04).
        p UML por sus siglas en inglés (Unified Modeling Language), lenguaje unificado de modelado, es el lenguaje de modelado de sistemas de software más conocido y utilizado en la actualidad, permite visualizar, especificar, construir y documentar sistemas con una perspectiva orientada a objetos (Rumbaugh et al., 2004).
      .col-lg-5.mb-2
        figure
          img(src='@/assets/curso/imagen-tema1.svg', alt='Imagen decorativa')   
    
    .row.justify-content-center
      .col-lg-11.col-12
        figure.mb-5
          img(src='@/assets/curso/infografia-tema1.svg', alt='Infografia sobre para que se usa el modelado en la construcciíon de software') 


    p UML, es una técnica para la especificación de sistemas en todas sus fases. Nació en 1994 cubriendo los aspectos principales de todos los métodos de diseño antecesores y precisamente, los padres de UML son Grady Booch, autor del método Booch; James Rumbaugh, autor del método OMT e Ivar Jacobson, autor de los métodos OOSE y Objectory. La versión 1.0 de UML fue liberada en enero de 1997 y ha sido utilizado con éxito en sistemas construidos para toda clase de industrias alrededor del mundo: hospitales, bancos, comunicaciones, aeronáutica, finanzas, etc. (2009, March 04).

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
