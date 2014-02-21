<!-- TEMP STUFF FIX LOOP AND ACF FIELDS -->
<?php get_header() ?>
    <div class="content">
<?php if( have_rows('images') ):
    while ( have_rows('images') ) : the_row();
        $attachment_id = get_sub_field('image');
        $size = "full"; // (thumbnail, medium, large, full or custom size)
        echo wp_get_attachment_image( $attachment_id, $size, false, array('class' => "attachement-$size product") );
    endwhile;
endif; 
?>
    </div><!-- .content -->
<?php get_footer() ?>
</body>
</html>