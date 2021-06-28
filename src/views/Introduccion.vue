<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    figure.mb-5
      img(src="@/assets/curso/banner-intro.svg", alt="Redes")
    
    p.mb-5 Para la construcción de software se hace evidente la importancia de la utilización de modelos ya que representan el aspecto y la dirección de una necesidad. Esa “necesidad” puede existir, estar en un estado de desarrollo o en un estado de planeación. Los diseñadores del modelo deben realizar un levante de los requerimientos del producto y dichos requerimientos pueden incluir áreas tales como funcionalidad, performance y confiabilidad. El modelo se divide en un número de vistas, cada una de las cuales describe un aspecto específico del producto o sistema en construcción. Un modelo permite documentar la estructura y conducta de un sistema antes de que sea codificado.
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
