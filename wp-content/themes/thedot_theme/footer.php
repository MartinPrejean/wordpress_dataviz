        <footer id="footer">
            <?php // SYNTAXE : wp_nav_menu( array $args = array() )
                $args=array(
                    'theme_location' => 'footer', // nom du slug
                    'menu' => 'footermenu', // nom à donner cette occurence du menu
                    'menu_class' => 'menu_footer', // class à attribuer au menu
                    'menu_id' => 'menu_id' // id à attribuer au menu
                );
                wp_nav_menu($args);
            ?>
        </footer>

        <!-- Execution de la fonction wp_footer() obligatoire ! -->
        <?php wp_footer();  ?>
    </body>
</html>