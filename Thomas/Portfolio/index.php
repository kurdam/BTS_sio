<!DOCTYPE html>

<?php
require("banner.php");
?>

<header>
  <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <!-- Slide One - Set the background image for this slide in the line below -->
      <div class="carousel-item active" style="background-image: url('img/car1.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3>Networking</h3>
          <p>Réseau et serveurs</p>
        </div>
      </div>
      <!-- Slide Two - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('img/car2.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3>Programing</h3>
          <p>Programmation et développement</p>
        </div>
      </div>
      <!-- Slide Three - Set the background image for this slide in the line below -->
      <div class="carousel-item" style="background-image: url('img/car3.jpg')">
        <div class="carousel-caption d-none d-md-block">
          <h3>Hardware</h3>
          <p>Réparation et maintenance materiel</p>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</header>
    <!-- Page Content -->
    <div class="container">

      <h1 class="my-4">Sommaire</h1>

      <!-- Marketing Icons Section -->
      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-ite">
          <div class="card h-100">
            <h4 class="card-header">Mon GitHub</h4>
            <div class="card-body">
              <p class="card-text"><img src="img/github.png" height="200" width="200"><br>Découvrez mes créations de programmation</p>
            </div>
            <div class="card-footer">
              <a href="https://github.com/kurdam/BTS_sio" class="btn btn-primary">Cliquez ici</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-ite">
          <div class="card h-100">
            <h4 class="card-header">Mon CV</h4>
            <div class="card-body">
              <p class="card-text"><img src="img/cv.png" height="200" width="200"></p>
            </div>
            <div class="card-footer">
              <a href="cv.php" class="btn btn-primary">Cliquez ici</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-ite">
          <div class="card h-100">
            <h4 class="card-header">Mon Pearltrees</h4>
            <div class="card-body">
              <p class="card-text"><img src="img/pearltrees.png" height="200" width="200"><br>Contient les références de ma veille technologique</p>
            </div>
            <div class="card-footer">
              <a href="http://www.pearltrees.com/thomasgrezy" class="btn btn-primary">Cliquez ici</a>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-ite">
          <div class="card h-100">
            <h4 class="card-header">Mon Compte linkedin</h4>
            <div class="card-body">
              <p class="card-text"><img src="img/linkedin.png"height="200" width="200"></p>
            </div>
            <div class="card-footer">
              <a href="https://www.linkedin.com/in/thomas-grezy-214810151/" class="btn btn-primary">Cliquez ici</a>
            </div>
          </div>
        </div>
      </div>
      <!-- Portfolio Section -->
      <h2>Quelques Projets</h2>

      <div class="row">
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-ite">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="img/waze.png" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <p>Projet Waze CCP</p>
              </h4>
              <p class="card-text">Mise en place des applications Waze Adaptées aux communes dans les batiments publics de la ville ce Cassis</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-ite">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="img/googlebusiness.png" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <p>Projet d'amélioration du SEO avec Google business</p>
              </h4>
              <p class="card-text">Référencement des bâtiments publics de la ville de cassis</p>
            </div>
          </div>
        </div>
        <div class="col-lg-3 col-md-4 col-sm-6 portfolio-ite">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="img/sp.png" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <p>Project Sharepoint</p>
              </h4>
              <p class="card-text">Préparation du portail Microsoft Sharepont pour le développement dans tous les services de la ville de Cassis</p>
            </div>
          </div>
        </div>
        <!--
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project Four</a>
              </h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project Five</a>
              </h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 portfolio-item">
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="http://placehold.it/700x400" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="#">Project Six</a>
              </h4>
              <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque earum nostrum suscipit ducimus nihil provident, perferendis rem illo, voluptate atque, sit eius in voluptates, nemo repellat fugiat excepturi! Nemo, esse.</p>
            </div>
          </div>
        </div>
      </div>
    -->
      <!-- /.row -->

      <!-- Features Section -->
      <div class="row">
        <div class="col-lg-6">
          <h2>Projet Applifrais</h2>
          <p>Dans le cardre de mon BTS SIO:</p>
          <br>
          <p> J'ai du réparer et améliorer une application web de gestion des frais de déplacement pour des visiteurs médicaux avec toutes les implications de gestion et de reglementation</p>
          </div>
        <div class="col-lg-6">
          <img class="img-fluid rounded" src="img/gsb.png" alt="">
        </div>
      </div>
      <!-- /.row -->

      <hr>

    </div>
    <!-- /.container -->

<?php
require("footer.php");
?>


  </body>

</html>
