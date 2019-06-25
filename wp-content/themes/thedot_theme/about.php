<?php /* Template Name: CustomPageAbout */ ?>
    
<?php get_header(); //appel du template header.php  ?>
    <main id="about-main" class="about-main">
        <h1 class="bar-after">Pourquoi The Dot ?</h1>
        <p>
            Nous sommes une équipe d’étudiants qui souhaitent, par la vulgarisation, changer le modèle énergétique présent et éveiller la population sur l’impasse énergétique actuelle. 
            Pourquoi ? Car cet enjeu nous concerne tous, de par son impact environnemental, économique et sociétal.
            Comment ? En “choquant” le lecteur avec des données qui le feront réfléchir.
            <br>
            Nous vous souhaitons également une bonne lecture !
        </p>
        <h2 class="bar-after">L'équipe</h2>
        <div class="team">
            <div class="people">
                <div class="people-img">
                    <img src="<?= IMAGES_URL . "/moi-min.jpg"; ?>" alt="">
                </div>
                <p>Maillot Romain</p>
            </div>
            <div class="people">
                <div class="people-img">
                    <img src="<?= IMAGES_URL . "/moi-min.jpg"; ?>" alt="">
                </div>
                <p>Prejean Martin</p>
            </div>
            <div class="people">
                <div class="people-img">
                    <img src="<?= IMAGES_URL . "/moi-min.jpg"; ?>" alt="">
                </div>
                <p>Vezier Clément</p>
            </div>
            <div class="people">
                <div class="people-img">
                    <img src="<?= IMAGES_URL . "/moi-min.jpg"; ?>" alt="">
                </div>
                <p>Peralta Raphaël</p>
            </div>
            <div class="people">
                <div class="people-img">
                    <img src="<?= IMAGES_URL . "/moi-min.jpg"; ?>" alt="">
                </div>
                <p>Guilpain Maxence</p>
            </div>
        </div>
    </main> <!-- /content -->

<?php get_footer(); //appel du template footer.php ?>