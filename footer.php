    </div><!-- .wrapper -->
    </div>
    <footer>
        <div id="to-top" class="button1 to-top">Back to top</div>
        <ul class="contact-info social-media">
            <li class="copyright">© 2014 Banner</li>
            <!-- <li><a href="mailto:studio@bannerfurniture.com">studio@bannerfurniture.com</a></li>
            <li>347-799-1932</li> --><!--
        </ul>
        <ul class="social-media"> -->
            <li><a href="http://instagram.com/bannerfurniture" target="_blank">Instagram</a></li>
            <li><a href="https://www.facebook.com/BannerStudio" target="_blank">Facebook</a></li>
            <li><a href="https://twitter.com/Banner_Studio" target="_blank">Twitter</a></li>
            <li><a class="credits" href="/credits">Credits</a></li>
        </ul>
    </footer><!-- #footer -->
</div><!-- .page-wrap -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min.js"></script>
        <script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>
        <script>window.jQuery || document.write('<script src="<?php echo get_bloginfo('template_url'); ?>/js/jquery-1.10.1.min.js"><\/script>')</script>
        <script>window.jQuery.ui || document.write('<script src="<?php echo get_bloginfo('template_url'); ?>/js/jquery-ui.min.js"><\/script>')</script>
        <script src="<?php echo get_bloginfo('template_url'); ?>/js/build/application.min.js"></script>
        <script id="loading-verbs" type="verbs/text"><?php
            // check if the repeater field has rows of data
            if( have_rows('loading_verbs', 22) ):
                // loop through the rows of data
                while ( have_rows('loading_verbs', 22) ) : the_row();
                    // display a sub field value
                    $verb = get_sub_field('verb') . ',';
                    $loading_verbs[] = $verb;
                endwhile;
                // join(',', $loading_verbs);
                $verb_list = implode ($loading_verbs);
                $verb_remove_comma = rtrim($verb_list, ",");
            endif;
            ?><?php echo $verb_remove_comma; ?></script>
    <?php wp_footer() ?>
