        <footer id="footer">
            <h1>The Dot</h1>
            <nav>
                <div class="logos">
                <a class="logo_facebook" href="https://facebook"><?= file_get_contents(IMAGES_URL . "/logos/facebook.svg"); ?></a>
                    <a class="logo_twitter" href="https://twitter.com"><?= file_get_contents(IMAGES_URL . "/logos/twitter.svg"); ?></a>
                    <a class="logo_search" href="#"><?= file_get_contents(IMAGES_URL . "/logos/search.svg"); ?></a>
                </div>
                <?php // SYNTAXE : wp_nav_menu( array $args = array() )
                    $args=array(
                        'theme_location' => 'footer', // nom du slug
                        'menu' => 'footermenu', // nom à donner cette occurence du menu
                        'menu_class' => 'menu_footer', // class à attribuer au menu
                        'menu_id' => 'menu_id' // id à attribuer au menu
                    );
                    wp_nav_menu($args);
                ?>
            </nav>
        </footer>

        <!-- Execution de la fonction wp_footer() obligatoire ! -->
        <?php wp_footer();  ?>
    </body>
</html>