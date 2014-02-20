<?php
/*
Template Name: Template - Two Column
*/
?>
<?php get_header() ?>
<div class="content">
<?php the_post() ?>
    <div class="col col2 col-first">
<?php 
if( have_rows('images') ):
    while ( have_rows('images') ) : the_row();
        $attachment_id = get_sub_field('image');
        $size = "full"; // (thumbnail, medium, large, full or custom size)
        echo wp_get_attachment_image( $attachment_id, $size );
    endwhile;
endif;
?>
    </div>
    <div class="col col2 col-last">
<?php the_field('content'); ?>
    </div>
</div><!-- .content -->
<?php get_footer() ?>
</body>
</html>