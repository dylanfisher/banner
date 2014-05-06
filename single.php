<?php
$nonce = wp_create_nonce('my-nonce');
$slug = $post->post_name;
?>
<?php get_header() ?>
    <div class="content single-page-content" id="content" data-nonce="<?php echo $nonce; ?>">
        <div class="single-page-wrapper">
<?php if ( in_category( 'collections' )): ?>

      <ul class="product-images">
  <?php if( have_rows('images') ):
      while ( have_rows('images') ) : the_row();
          $attachment_id = get_sub_field('image')['id'];
          $size = "full"; // (thumbnail, medium, large, full or custom size)
  ?>
        <li><?php echo wp_get_attachment_image( $attachment_id, $size, false, array('class' => "attachement-$size product") ); ?></li>
  <?php
      endwhile;
  endif;
  ?>
      </ul>
      <div class="ibfix">
          <div class="col col2 ib left product-details">
              <h2 class="product-title"><?php echo the_title(); ?></h2>
              <?php the_field('description'); ?>
              <?php if(get_field('tear_sheet')): ?>
                  <a class="download-tear-sheet" href="<?php the_field('tear_sheet') ?>" target="_blank">Download PDF tear sheet</a>
              <?php endif; ?>
          </div>
          <div class="col col2 ib right product-details">
              <?php the_field('details'); ?>
              <a class="button1 product-inquiry single-page-inquiry" href="#" data-slug="<?php echo $slug; ?>">Contact us to purchase</a>
          </div>
      </div>
      <div class="button1 lightbox-close mobile">Back</div>

<?php endif; // End if(in_category('collections'));  ?> 

      </div><!-- .single-page-wrapper -->
    </div><!-- .content -->
<?php get_footer() ?>
</body>
</html>
