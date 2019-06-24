<?php /* Template Name: CustomPageAbout */ ?>
    
<?php get_header(); //appel du template header.php  ?>
    <main id="about-main" class="about-main">
        <h1 class="bar-after">Pourquoi The Dot ?</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, eum consequuntur? Id nostrum in vel voluptatum, tenetur aut aliquid nobis. Laboriosam vitae atque exercitationem alias cumque nisi, rem dolor nostrum!</p>
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