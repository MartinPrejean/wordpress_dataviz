<?php get_header(); //appel du template header.php  ?>
    <main id="homepage-main" class="homepage-main">
        <p class="homepage-description"> Pensons ensemble au modèle énergétique de demain.</p>
        <div class="latest-post">
            <?php
                // boucle WordPress
                if (have_posts()){
                    the_post();
            ?>
                <a href="<?= get_permalink(); ?>" class="latest-article">
                    <div class="thumbnail"><?php the_post_thumbnail('single_thumbnail'); ?></div>
                    <div class="latest-article-content">
                        <h2 class="article-title"><?php the_title(); ?></h2>
                        <div class="texts"><?php $content = get_the_content(); echo mb_strimwidth($content, 0, 100);?></div>
                        <div class="article-bottom">
                            <span>By <?php the_author() ?></span>
                            <span><?php the_time('F jS, Y') ?></span>
                        </div>
                    </div>
                </a>
            <?php
                }
                else {
                    ?>
                        Nous n'avons pas trouvé d'article répondant à votre recherche
                    <?php
                }
            ?>
        </div>
        <div class="articles-container before">
            <?php
                // boucle WordPress
                if (have_posts()){
                    while (have_posts()){
                        the_post();
            ?>
                <a href="<?= get_permalink(); ?>" class="article">
                    <div class="thumbnail"><?php the_post_thumbnail('single_thumbnail'); ?></div>
                    <h2 class="article-title"><?php the_title(); ?></h2>
                    <div class="texts"><?php $content = get_the_content(); echo mb_strimwidth($content, 0, 100);?></div>
                    <div class="article-bottom">
                        <span>By <?php the_author() ?></span>
                        <span><?php the_time('F jS, Y') ?></span>
                    </div>
                </a>
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
        <div class="newsletter before">
            <h2 class="newsletter-title">S’inscrire à la newsletter et recevoir des données exclusifs toutes les semaines.</h2>
            <form action="#" method="get">
                <input type="text" placeholder="xxxx@xxxx.com" name="email">
                <button type="submit">S'inscrire</button>
            </form>
        </div>
        <div class="articles-container before">
            <?php
                // boucle WordPress
                if (have_posts()){
                    while (have_posts()){
                        the_post();
            ?>
                <a href="#" class="article">
                    <div class="thumbnail"><?php the_post_thumbnail('single_thumbnail'); ?></div>
                    <h2 class="article-title"><?php the_title(); ?></h2>
                    <div class="texts"><?php $content = get_the_content(); echo mb_strimwidth($content, 0, 100);?></div>
                    <div class="article-bottom">
                        <span>By <?php the_author() ?></span>
                        <span><?php the_time('F jS, Y') ?></span>
                    </div>
                </a>
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