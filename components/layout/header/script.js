export default {
  methods: {
    menuClick() {
        $('.navbar-toggler').on('click', function(){
          $('#navbar').toggleClass('active');
        });
    }
  },  
  mounted: function() {
    this.menuClick();
  }
}
