<?php /* Template Name: CustomPageVideos */ ?>
    
<?php get_header(); //appel du template header.php  ?>
    <main id="archives-main" class="archives-main">
        <div class="articles-container">
            <?php
                // boucle WordPress
                $posts = get_posts('numberposts=-1');
                    foreach ($posts as $post) {
                        the_post();
            ?>
                <a href="<?= get_permalink(); ?>" class="article">
                    <div class="video_intro">
                        <iframe src="https://player.vimeo.com/video/344552400?rel=0&amp;title=0&amp;byline=0&amp;portrait=0" width="100%" height="680px" frameborder="0" webkitallowfullscreen="" mozallowfullscreen="" allowfullscreen=""></iframe>  
                    </div>
                </a>
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
    </main> <!-- /content -->

<?php get_footer(); //appel du template footer.php ?>