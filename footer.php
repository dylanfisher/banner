    </div><!-- .wrapper -->
    </div>
    <footer>
        <div id="to-top" class="button1 to-top">Back to top</div>
        <ul class="social-media">
            <li><a href="http://instagram.com/bannerfurniture" target="_blank"><img src="<?php echo get_bloginfo('template_url'); ?>/images/instagram.png"></a></li>
            <li><a href="https://www.facebook.com/BannerStudio" target="_blank"><img src="<?php echo get_bloginfo('template_url'); ?>/images/facebook.png"></a></li>
            <li><a href="https://twitter.com/Banner_Studio" target="_blank"><img src="<?php echo get_bloginfo('template_url'); ?>/images/twitter.png"></a></li>
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
        <script>
            var _gaq=[['_setAccount','UA-29627774-1'],['_trackPageview']];
            (function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
            g.src='//www.google-analytics.com/ga.js';
            s.parentNode.insertBefore(g,s)}(document,'script'));
        </script>
    <?php wp_footer() ?>