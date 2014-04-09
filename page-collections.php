<?php
/*
Template Name: - Collection Container
*/
?>
<?php get_header() ?>
        <div class="content collection-content">
<?php
$args = array(
    'post_type' => 'page',
    'post_parent' => $post->ID,
    'post__not_in' => array(140), // Don't get the 'see all' post
    'posts_per_page' => -1,
    'order' => 'ASC',
    'orderby' => 'menu_order'
);
$the_query = new WP_Query( $args ); ?>
<?php if ( $the_query->have_posts() ) : ?>
    <div class="ibfix">
    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); // Begin loop 
        $attachment_id = get_field('collection_image');
        $size = "full"; // (thumbnail, medium, large, full or custom size) ?>
                <div class="collection ib">
                    <a class="collection-link-container" href="<?php the_permalink(); ?>">
            <?php echo wp_get_attachment_image( $attachment_id, $size ); ?>
                        <div class="collection-rollover"><?php the_field('description'); ?></div>
                    </a>
                    <a class="nu" href="<?php the_permalink(); ?>">
                        <h2><?php the_title(); ?></h2>
                    </a>
                </div>
    <?php endwhile; // End loop ?>
    <?php wp_reset_postdata(); ?>
    </div>
<?php endif; ?>
            <div class="center">
                <a class="see-all" href="<?php echo get_permalink(140); ?>">See all</a>
            </div>
        </div><!-- .content -->
<?php get_footer() ?>
</body>
</html>