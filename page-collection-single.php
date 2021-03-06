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
    <div class="ibfix">
    <?php while ( $the_query->have_posts() ) : $the_query->the_post(); // Begin loop ?>
        <?php
            $image = get_field('featured_image');
            $attachment_id = $image['id'];

            $secondary_image = get_field('secondary_image');
            $secondary_attachment_id = $secondary_image['id'];

            $size = "large"; // (thumbnail, medium, large, full or custom size)
        ?>
                <div class="col4 ib collection-see-all">
                    <a class="api-product image-rollover nu" data-slug="<?php echo $post->post_name; ?>" href="<?php the_permalink(); ?>">
                <?php echo wp_get_attachment_image( $attachment_id, $size ); ?>
                <?php echo wp_get_attachment_image( $secondary_attachment_id, $size, false, array('class' => 'secondary-image') ); ?>
                    </a>
                    <a class="api-product nu title" data-slug="<?php echo $post->post_name; ?>" href="<?php the_permalink(); ?>">
                        <h2><?php the_title(); ?></h2>
                    </a>
                </div>
    <?php endwhile; // End loop ?>
    <?php wp_reset_postdata(); ?>
    </div>
<?php endif; ?>

<div class="collection-info">
    <div class="collection-image">
        <?php
            $attachment_id = get_field('collection_overview_image');
            $size = "full"; // (thumbnail, medium, large, full or custom size)
            echo wp_get_attachment_image( $attachment_id, $size ); // Echo our collection image
        ?>
    </div>
    <div class="collection-description">
        <?php the_field('description'); ?>
    </div>
</div>

</div><!-- .content -->
<?php get_footer() ?>
</body>
</html>
