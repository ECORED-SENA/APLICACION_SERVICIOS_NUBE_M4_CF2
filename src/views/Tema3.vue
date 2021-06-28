<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal
      .titulo-principal__numero
        span 3
      h1 Herramientas CASE

    figure.mb-5
      img(src="@/assets/curso/banner-tema3.svg", alt="Cubos interconectandose")  

    .row.mb-3
      .col-lg-7.mb-3
        p De acuerdo con Pressman tiempo atrás la ingeniería del software, era principalmente una actividad manual, utilizando las herramientas únicamente en las etapas finales del proceso, los ingenieros de software en la actualidad hacen notar que necesitan herramientas más variadas ya que las herramientas manuales no satisfacen las demandas de los sistemas basados en computadoras (S. Pressman,1998).
        p Las herramientas Case son un complemento de la caja de herramientas de un ingeniero del software que le proporciona la posibilidad de automatizar actividades manuales, ayudan a asegurar que la calidad sea algo diseñado antes de llegar a construir el producto.
      .col-lg-5
        figure
          img(src='@/assets/curso/imagen-tema3.svg', alt='Imagen decorativa')   
    
    p 
      strong CASE 
      | es una sigla, que corresponde a las iniciales de: 
      strong Computer Aided Software Engineering
      | ; y en su traducción al español significa Ingeniería de Software Asistida por Computación.
    p La tecnología CASE corresponde a la Ingeniería de software apoyado por computadora. Es un conjunto de herramientas de software para automatizar las tareas del desarrollo del software, la idea es facilitar un conjunto integrado de herramientas que enlazan y automatizan las fases del ciclo de vida del desarrollo del software. (Cuevas,1991).
    p.mb-5 Según (Pressman ,1998) los objetivos de las herramientas Case son:

    .row.justify-content-center
      .col-lg-11
        figure.mb-5
          img(src='@/assets/curso/infografia-tema3.svg', alt='Infografia sobre los objetivos de las herramientas Case') 

    h2 Clasificación de las Herramientas CASE
    p Las herramientas CASE en función de las fases del ciclo de vida que abarcan, se pueden agrupar de la forma siguiente:

    .row.mb-5
      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.tarjeta-sin-bordes
          .p-2.text-white.text-center 
            p.mb-0 
              strong Herramientas integradas, I-CASE 
              | (Integrated CASE, CASE integrado)  
        .tarjeta.color-amarillo3.tarjeta-sin-bordes2
          .p-3.text-center 
            p Abarcan todas las fases del ciclo de vida del desarrollo de sistemas. Son llamadas también CASE workbench.  

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.tarjeta-sin-bordes
          .p-2.text-white.text-center 
            p.mb-0 
              strong Herramientas de alto nivel, U-CASE
              | (Upper CASE - CASE superior) o front-end 
        .tarjeta.color-amarillo3.tarjeta-sin-bordes2
          .p-3.text-center 
            p Orientadas a la automatización y soporte de las actividades desarrolladas durante las primeras fases del desarrollo: análisis y diseño.  

      .col-md-6.col-lg.mb-4.mb-lg-0
        .tarjeta.color-acento-contenido.tarjeta-sin-bordes
          .p-2.text-white.text-center 
            p.mb-0 
              strong Herramientas de bajo nivel, L-CASE
              | (Lower CASE - CASE inferior) o back-end
        .tarjeta.color-amarillo3.tarjeta-sin-bordes2
          .p-3.text-center 
            p Dirigidas a las últimas fases del desarrollo: construcción e implantación. 

      .col-md-6.col-lg.mb-lg-0
        .tarjeta.color-acento-contenido.tarjeta-sin-bordes
          .p-2.text-white.text-center 
            p.mb-0 
              strong Juegos de herramientas o Tools-Case,
              | son el tipo más simple de herramientas CASE.
        .tarjeta.color-amarillo3.tarjeta-sin-bordes2
          .p-3.text-center 
            p Automatizan una fase dentro del ciclo de vida. Dentro de este grupo se encontrarán las herramientas de reingeniería, orientadas a la fase de mantenimiento. 

    p.mb-4 A continuación, se presentan ejemplos de las herramientas CASE por ámbitos:

    .row.mb-5
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/investigacion.svg' alt='Icono sobre investigacion')
          .tarjeta.color-amarillo2
            .p-4.text-center 
              h3.text-center Análisis y Diseño
              p.mb-0 Workbench 
              p.mb-0 GUI Design Studio 
              p.mb-0 DIA
              p StarUML
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/coding-cloud-web design-programing-server.svg' alt='Icono sobre bases de datos')
          .tarjeta.color-amarillo2
            .p-4.text-center 
              h3.text-center Diseño de Archivos y Base de Datos
              p.mb-0 Power Designer
              p.mb-0 Oracle Designer
              p EasyCase
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/seo.svg' alt='Icono sobre programación')
          .tarjeta.color-amarillo2
            .p-4.text-center 
              h3 Programación
              p.mb-0 NetBeans
              p Eclipse/Omondo 

    .row.justify-content-center.mb-4
      .col-lg-11
        .row
          .col-lg-6.mb-4
            a.anexo(href="https://herramientascase.wordpress.com/las-mas-utilizadas/" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p 
                  strong Enlace web. 
                  | Herramientas CASE: Profundiza en las herramientas CASE a partir de unas breves descripciones.
          .col-lg-6.mb-4
            a.anexo(href="https://www.google.com/url?q=https://sites.google.com/site/herramientascaseudelp/lista-de-herramientas&sa=D&source=editors&ust=1623971253888000&usg=AOvVaw0D0VpYgGkei97gMjJsu6NV" target="_blank")
              .anexo__icono
                img(src="@/assets/template/icono-link.svg")
              .anexo__texto
                p 
                  strong Enlace web. 
                  | Herramientas CASE: Conoce otras herramientas CASE

    p Los diagramas de clase se diagraman con las herramientas que hacen parte del grupo de 
      strong Herramientas de alto nivel, U-CASE
      | , entre las que encontramos 
      span.cursiva StartUML, Lucichart, ArgoUML, MagicDraw.
    
    p.mb-5 El manejo de cualquiera de estas herramientas es sencillo, a continuación, se mostrarán 	los pasos básicos para el manejo de 
      span.cursiva StartUML.
  
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2cnKTwQ85fg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .row.justify-content-center.mb-4
      .col-lg-7.mb-4
        a.anexo(href="https://youtu.be/7WRYH2ei5Rw" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-link.svg")
          .anexo__texto
            p 
              strong Enlace web. 
              | Curso UML diagrama de clases: Profundiza en la creación de los diagramas de clase en 
              span.cursiva StarUML


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
