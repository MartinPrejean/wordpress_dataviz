<?php
    // création du shortcode dans functions.php
    add_shortcode('dataviz', 'callDataviz');

    // création de la fonction associée au shortcode.
    function callDataviz( $atts ) {
        $atts =  shortcode_atts(
                array(
                'id' => 1 // id par défaut
                ),
                $atts
                );
        $html = '<div>Test</div>';
        $html2 = file_get_contents(THEME_PATH.'/template-parts/page/content-dataviz'.$atts['id'].'.php');
        // echo $html2;
        return $html2;
        // return 'dataviz'.$atts['id'];
        // return get_template_part( 'template-parts/page/content', 'dataviz'.$atts['id'] );
        // return (include THEME_PATH.'/template-parts/page/content-dataviz1.php');
    }