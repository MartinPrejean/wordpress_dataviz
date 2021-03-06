<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />

        <!-- Appel du fichier style.css de notre thème -->
        <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">
        <!-- <link rel="stylesheet" href=""> -->
		
		<script src="https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js" charset="utf-8"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.8.3/underscore-min.js"></script>
        <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600,700,900|Source+Serif+Pro&display=swap" rel="stylesheet">
        <!-- Execution de la fonction wp_head() obligatoire ! -->
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <header id="header">
            <div class="toggle-button"></div>
            <a href="<?php bloginfo('url'); ?>"><?= file_get_contents(IMAGES_URL . "/global_logo.svg"); ?></a>
            <nav>
                <div class="logos">
                    <a class="logo_facebook" href="https://facebook"><?= file_get_contents(IMAGES_URL . "/logos/facebook.svg"); ?></a>
                    <a class="logo_twitter" href="https://twitter.com"><?= file_get_contents(IMAGES_URL . "/logos/twitter.svg"); ?></a>
                    <a class="logo_search" href="#"><?= file_get_contents(IMAGES_URL . "/logos/search.svg"); ?></a>
                </div>
                <?php // SYNTAXE : wp_nav_menu( array $args = array() )
                    $args=array(
                        'theme_location' => 'header', // nom du slug
                        'menu' => 'headermenu', // nom à donner cette occurence du menu
                        'menu_class' => 'menu_header', // class à attribuer au menu
                        'menu_id' => 'menu_id' // id à attribuer au menu
                    );
                    wp_nav_menu($args);
                ?>
            </nav>
        </header>