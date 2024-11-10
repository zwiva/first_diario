  <footer class="footer">
    <div class="container">
      <div class="content has-text-centered">
        <div class="soc">
          <a href="#"><i class="fa fa-github-alt fa-lg" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-youtube fa-lg" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></a>
          <a href="#"><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
        </div>
        <p>
          <strong>Bulma</strong> by <a href="http://jgthms.com">Pamela Hernández</a>.
          The source code is licensed <a href="http://opensource.org/licenses/mit-license.php">MIT</a>. <br>
        </p>
      </div>
    </div>
  </footer>

  <script src="/proyecto_web_el_faro_php/js/cardsData.js"></script>

  <!-- Using Vue to populate cards to reduce redundant code -->
  <script>
    var app = new Vue({
      el: '#app',
      data: {
        cardData: cardsData
      }
    })

  </script>
</body>

</html>