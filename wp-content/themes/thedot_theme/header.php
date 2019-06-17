<!DOCTYPE html>
<html <?php language_attributes(); ?>>
    <head>
        <meta charset="<?php bloginfo( 'charset' ); ?>" />

        <!-- Appel du fichier style.css de notre thème -->
        <link rel="stylesheet" href="<?php bloginfo('stylesheet_url'); ?>">

        <!--
            Tout le contenu de la partie head de mon site
         -->

        <!-- Execution de la fonction wp_head() obligatoire ! -->
        <?php wp_head(); ?>
    </head>
    <body <?php body_class(); ?>>
        <header id="header">
            <!-- Tout le contenu de l entête de mon site -->
            <?php // SYNTAXE : wp_nav_menu( array $args = array() )
                $args=array(
                    'theme_location' => 'header', // nom du slug
                    'menu' => 'headermenu', // nom à donner cette occurence du menu
                    'menu_class' => 'menu_header', // class à attribuer au menu
                    'menu_id' => 'menu_id' // id à attribuer au menu
                );
                wp_nav_menu($args);
            ?>
        </header>