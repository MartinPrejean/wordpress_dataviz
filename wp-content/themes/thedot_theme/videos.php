<?php /* Template Name: CustomPageVideos */ ?>
    
<?php get_header(); //appel du template header.php  ?>
    <main id="archives-main" class="archives-main">
        <div class="articles-container">
            <?php
                // boucle WordPress
                $posts = get_posts('numberposts=-1');
                    foreach ($posts as $key => $post) {
                        the_post();
            ?>
                <a href="<?= get_permalink(); ?>" class="article">
                    <div class="video-container">
                        <?php $content = '[video id="'.$key.'"]' ; echo do_shortcode($content); ?>
                    </div>
                    <div class="article-description">
                        <h2 class="article-title"><?php the_title(); ?></h2>
                        <div class="texts"><?php awesome_excerpt(get_the_content(), the_excerpt());?></div>
                        <div class="article-bottom">
                            <span>By <?php the_author() ?></span>
                            <span><?php the_time('F jS, Y') ?></span>
                        </div>
                    </div>
                </a>
            <?php
                }
            ?>
        </div>
        <div class="newsletter before">
            <h2 class="newsletter-title">S’inscrire à la newsletter et recevoir des données exclusifs toutes les semaines.</h2>
            <form action="#" method="get">
                <input type="text" placeholder="thedot@gmail.com" name="email">
                <button type="submit">S'inscrire</button>
            </form>
        </div>
    </main> <!-- /content -->

<?php get_footer(); //appel du template footer.php ?>