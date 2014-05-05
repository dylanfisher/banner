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
        <img src="http://localhost:3000/banner/wp-content/uploads/2014/04/Helm-Collection.jpg">
    </div>

    <div class="collection-description">
        <p>The Helm Collection is a set of furniture built with time in mind. We created a group of pieces we feel are essential for the contemporary home and constructed them to last into the next generation.</p>
        <p>The juxtaposition of the wild and the man made is the inspiration for our Helm Collection. Along the industrial waterfront of Greenpoint, Brooklyn, where the Banner studio is located, remnants line the coast: chain link fences, steel pipes, posts, and driftwood. Along the shore, an abandoned pier rots away, sharing the view of the Manhattan skyline with its incredible landscape of skyscrapers and glass.</p>
        <p>The collection is built with torched, sandblasted wood, architectural glass elements, blackened brass, and clean edges.</p>
    </div>

    <a class="button1 back-to-collections" href="collections">Back to Collections</a>

</div>

</div><!-- .content -->
<?php get_footer() ?>
</body>
</html>
