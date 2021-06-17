<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-tasks" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-segundo
      h2 Actividad didáctica (Complete los espacios en blanco)

    .row.mb-5.justify-content-center.align-items-center
      .col-6.col-md-4.col-lg-3.mb-4.mb-md-0
        .tarjeta.tarjeta--gris.h-100.d-flex.align-items-center
          figure
            img.p-lg-5(src="@/assets/curso/actividad-didactica.svg", alt="Complete los espacios en blanco")
      .col-12.col-md-8.col-lg-9
        .col-lg-6
          p.mb-4 Identifique y escriba las relaciones que se muestran en los ejemplos.
        .tarjeta.tarjeta--azul2.p-3
          .row.justify-content-around.align-items-center            
            .col-sm.mb-3.mb-sm-0
              p.fw-bold.mb-0.text-white Escribir en los espacios en blanco según corresponda
            .col-auto
              a.boton.boton--b(:href="obtenerLink('/actividades/actividad.html')" target="_blank")
                span Realizar
                i.fas.fa-puzzle-piece

    
</template>

<script>
export default {
  name: 'Actividad',
}
</script>

<style lang="sass" scoped></style>
