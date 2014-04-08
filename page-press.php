<?php
/*
Template Name: Page - Press
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
        <?php $image = get_field('featured_image'); ?>
        <div class="col4 ib">
            <a class="api-press" href="<?php the_permalink(); ?>" data-slug="<?php echo $post->post_name; ?>">
                <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
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