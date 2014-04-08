<?php
/*
Template Name: Template - Two Column
*/
?>
<?php get_header() ?>
<div class="content">
    <div class="ibfix">
<?php the_post() ?>
<?php
// check if the repeater field has rows of data
if( have_rows('content_module') ):
    // loop through the rows of data
    while ( have_rows('content_module') ) : the_row();
        // display a sub field value
        $attachment_id = get_sub_field('image');
        $size = "full"; // (thumbnail, medium, large, full or custom size)
?>
        <div class="col col2 col-first ib">
        <?php echo wp_get_attachment_image( $attachment_id, $size ); ?>
        </div>
        <div class="col col2 col-last ib">
        <?php the_sub_field('content'); ?>
        </div>
<?php
    endwhile;
endif;
?>
    </div>
</div><!-- .content -->
<?php get_footer() ?>
</body>
</html>