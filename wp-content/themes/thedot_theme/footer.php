        <footer id="footer">
            <a class="logo-footer" href="<?php bloginfo('url'); ?>"><?= file_get_contents(IMAGES_URL . "/global_logo.svg"); ?></a>
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
        <script>
            <?php $datasUrl = JS_URL . '/scripts'; ?>
            let CSVF2015 = `<?= plugin_dir_path($datasUrl); ?>/bubbleChartFrance2015.csv`
            let CSVF2010 = `<?= plugin_dir_path($datasUrl); ?>/bubbleChartFrance2010.csv`
            let CSVF2005 = `<?= plugin_dir_path($datasUrl); ?>/bubbleChartFrance2005.csv`
            let CSVW2015 = `<?= plugin_dir_path($datasUrl); ?>/bubbleChartFrance2015.csv`
            let CSVW2010 = `<?= plugin_dir_path($datasUrl); ?>/bubbleChartFrance2010.csv`
            let CSVW2005 = `<?= plugin_dir_path($datasUrl); ?>/bubbleChartFrance2005.csv`
        </script>
        <!-- Execution de la fonction wp_footer() obligatoire ! -->
        <?php wp_footer();  ?>
    </body>
</html>