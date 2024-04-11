<script>
  $(document).ready(function(){
    $('.video-carousel').slick({
      slidesToShow: 3, /* Cantidad de videos mostrados a la vez */
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000, /* Velocidad del carrusel en milisegundos */
      prevArrow: '<button type="button" class="slick-prev">Previous</button>',
      nextArrow: '<button type="button" class="slick-next">Next</button>',
    });
  });
</script>
