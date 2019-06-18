<?php

function ajout_scripts() {

    // enregistrement d'un nouveau script
    wp_register_script('glide_script', get_template_directory_uri() . '/assets/scripts/glide.min.js', array('jquery'),'1.1', true);

    // appel du script dans la page
    wp_enqueue_script('glide_script');

    // enregistrement d'un nouveau script
    wp_register_script('main_script', get_template_directory_uri() . '/assets/scripts/main.js', array('jquery'),'1.1', true);

    // appel du script dans la page
    wp_enqueue_script('main_script');

    // enregistrement d'un nouveau style
    wp_register_style( 'main_style', get_template_directory_uri() . '/assets/styles/main.css' );

    // appel du style dans la page
    wp_enqueue_style( 'main_style' );

    // enregistrement d'un nouveau style
    wp_register_style( 'glide_style', get_template_directory_uri() . '/assets/styles/glide.min.css' );

    // appel du style dans la page
    wp_enqueue_style( 'glide_style' );

}