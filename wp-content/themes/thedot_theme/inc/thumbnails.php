<?php

add_action( 'wp_enqueue_scripts', 'ajout_scripts' );

add_action( 'after_setup_theme', 'thumbnails_theme_support' );
function thumbnails_theme_support(){
    add_theme_support( 'post-thumbnails' );
}

add_action('after_setup_theme','h2g2_add_thumbnails');
function h2g2_add_thumbnails(){
    add_image_size('blog_thumbnail', 200, 200, true);
    add_image_size('single_thumbnail', 600, 400, false);
}