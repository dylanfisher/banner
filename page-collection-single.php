<?php
/*
Template Name: -- Single Collection
*/
?>
<?php $nonce = wp_create_nonce('my-nonce'); ?>
<?php get_header() ?>
        <div class="content" id="content" data-nonce="<?php echo $nonce; ?>">
<?php
$category = get_field('category_association');
$args = array(
    'post_type' => 'post',
    'cat' => $category,
    'posts_per_page' => -1
);
$the_query = new WP_Query( $args ); ?>
<?php if ( $the_query->have_posts() ) : ?>
    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); // Begin loop ?>
        <?php
            $image = get_field('featured_image');
            $attachment_id = $image['id'];
            $size = "full"; // (thumbnail, medium, large, full or custom size)
        ?>
            <div class="product">
                <a class="api-product" data-slug="<?php echo $post->post_name; ?>" href="<?php the_permalink(); ?>">
            <?php echo wp_get_attachment_image( $attachment_id, $size ); ?>
                    <div><?php the_title(); ?></div>
                </a>
            </div>
    <?php endwhile; // End loop ?>
    <?php wp_reset_postdata(); ?>
<?php endif; ?>
        </div><!-- .content -->
<?php get_footer() ?>
</body>
</html>