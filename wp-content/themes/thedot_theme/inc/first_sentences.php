<?php
    function awesome_excerpt($text, $raw_excerpt) {
        if( ! $raw_excerpt ) {
            $content = apply_filters( 'the_content', get_the_content() );
            $text = substr( $content, 0, strpos( $content, '</p>' ) + 4 );
        }
        $text = preg_replace("/<img[^>]+\>/i", "", $text); 
        return $text;
    }
    add_filter( 'wp_trim_excerpt', 'awesome_excerpt', 10, 2 );