<?php get_header(); //appel du template header.php  ?>
    <main id="homepage-main" class="homepage-main">
        <p class="homepage-description">Nous sommes un média neutre sur l’impact économique et politique de la consommation d’énergie.</p>
        <div class="articles-container before">
            <?php
                // boucle WordPress
                if (have_posts()){
                    while (have_posts()){
                        the_post();
            ?>
                <div class="article">
                    <?php the_post_thumbnail('single_thumbnail'); ?>
                    <h2 class="article-title"><?php the_title(); ?></h2>
                    <div class="texts"><?php $content = get_the_content(); echo mb_strimwidth($content, 0, 100, '...');?></div>
                    <div class="article-bottom">
                        <span>By <?php the_author() ?></span>
                        <span><?php the_time('F jS, Y') ?></span>
                    </div>
                </div>
            <?php
                }
                }
                else {
                    ?>
                        Nous n'avons pas trouvé d'article répondant à votre recherche
                    <?php
                }
            ?>
        </div>
    </main> <!-- /content -->

<?php get_footer(); //appel du template footer.php ?>