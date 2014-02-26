<?php
/*
Template Name: Page - Collections - See All
*/
?>
<?php get_header() ?>
<div class="content">
<?php
$args = array(
    'post_type' => 'post',
    'cat' => 6,
    'posts_per_page' => -1
);
$the_query = new WP_Query( $args ); ?>
<?php if ( $the_query->have_posts() ) : ?>
    <div class="ibfix">
    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); // Begin loop ?>
        <?php
            $image = get_field('featured_image');
            $attachment_id = $image['id'];
            $size = "full"; // (thumbnail, medium, large, full or custom size)
        ?>
                <div class="col4 ib">
                    <a href="<?php the_permalink(); ?>">
                <?php echo wp_get_attachment_image( $attachment_id, $size ); ?>
                        <div><?php the_title(); ?></div>
                    </a>
                </div>
    <?php endwhile; // End loop ?>
    <?php wp_reset_postdata(); ?>
    </div>
<?php endif; ?>
</div><!-- .content -->
<?php get_footer() ?>
</body>
</html>