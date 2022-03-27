<?php

$dsmatrix = Array(

// =============================== MENU ITEMS ====================================

    Array(
        "title"         => "First menu Link fly in on scroll",
        "description"   => "Make your first menu item enter from the left as you scroll down. Combine this option with any of the 'menu CTA' switches for a unique style.",
        "option"        => "left_flyin_menu_item",
        "class"         => "first_link_slide_left",
	    "image"         => "images/fly-in-link.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "'Flat' menu CTA buttons",
        "description"   => "Turn any menu link into a stylish button. Just add one of the following classes to the menu item CSS box in menu options: </br></br>
		                   button-dark</br>
						   button-light</br> 
						   button-blue</br>
						   button-yellow</br>
						   button-red</br>
						   button-green",
        "option"        => "flat_menu_buttons",
        "class"         => "ds_flat_buttons",
	    "image"         => "images/menu-button-flat.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "'3D' menu CTA buttons",
        "description"   => "Turn any menu link into a stylish 3D button. Just add one of the following classes to the menu item CSS box in menu options:</br></br> 
		                   button-dark-3d</br>
						   button-light-3d</br>
						   button-blue-3d</br>
						   button-yellow-3d</br>
						   button-red-3d</br>
						   button-green-3d",
        "option"        => "3d_menu_buttons",
        "class"         => "ds_3d_buttons",
	    "image"         => "images/menu-button-3d.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "App style Menu",
        "description"   => "Position the logo and menu a fixed width from the left and right instead of a percentage based change, for a clean 'app style'",
        "option"        => "app_style_menu",
        "class"         => "ds-app-menu",
	    "image"         => "images/app-style.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Mobile Menu on Desktop",
        "description"   => "Get the Divi hamburger mobile menu on desktops and other larger devices.",
        "option"        => "hamburger_menu",
        "class"         => "ds_mobile-desktop",
	    "image"         => "images/mobile-desktop.png",
        "admin"         => true,
        "client"        => true
    ),
    
    Array(
        "title"         => "Remove the menu bottom line",
        "description"   => "Remove the line and shadow underneath the main menu.",
        "option"        => "menu_line",
        "class"         => "ds_remove_menu_line",
	    "image"         => "images/no-menu-line.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Center align top header",
        "description"   => "Put the top header items into the middle",
        "option"        => "center_top_header",
        "class"         => "ds_center_top_header",
	    "image"         => "images/center-top-menu.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Enlarge the phone and email info in top header",
        "description"   => "Make the info in the top header bigger.",
        "option"        => "larger_info",
        "class"         => "ds_larger_info",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Hide the logo before scroll",
        "description"   => "Set the logo to appear as the user scrolls down.",
        "option"        => "logo_hide",
        "class"         => "ds_logo_hide",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Remove the border line on top of submenus",
        "description"   => "Get rid of that default blue line on top of submenus",
        "option"        => "no_border_top",
        "class"         => "ds_border_top",
	    "image"         => "images/submenu-line.png",
        "admin"         => true,
        "client"        => true
    ),
	
// =============================== MOBILE MENU ITEMS ====================================

    Array(
        "title"         => "Fixed header on mobile",
        "description"   => "Stop the header scrolling off the page in mobile",
        "option"        => "fixed_mobile_header",
        "class"         => "ds_fixed_mobile_header",
	    "image"         => "images/fixed-header.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Side Menu - Light",
        "description"   => "Mobile menu slides in from the right. Use this switch for the light version.",
        "option"        => "side_mobile_menu_light",
        "class"         => "ds_mobile_side_light",
	    "image"         => "images/side-menu-light.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Side Menu - Dark",
        "description"   => "Mobile menu slides in from the right. Use this switch for the dark version.",
        "option"        => "side_mobile_menu_dark",
        "class"         => "ds_mobile_side_dark",
	    "image"         => "images/side-menu-dark.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Show 'select page' on mobile menu - light",
        "description"   => "Show the select page text next to the burger menu even if you haven't used a centered logo menu.",
        "option"        => "ds_select_page_1",
        "class"         => "ds_select_page_light",
	    "image"         => "images/select-page-light.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Show 'select page' on mobile menu - dark",
        "description"   => "Show the select page text next to the burger menu even if you haven't used a centered logo menu.",
        "option"        => "ds_select_page_2",
        "class"         => "ds_select_page_dark",
	    "image"         => "images/select-dark.png",
        "admin"         => true,
        "client"        => true
    ),

	    Array(
        "title"         => "Replace Burger Menu with word 'MENU'",
        "description"   => "Turn the hamburger icon into the word 'menu' when it's closed and the word 'close' when it's open.",
        "option"        => "replace_burger",
        "class"         => "ds_menu_word_replace",
	    "image"         => "images/add-menu.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Add the word 'MENU' to the burger icon",
        "description"   => "Add the word menu to the left side of the burger icon, so there's no doubt what it is and what it does.",
        "option"        => "append_burger",
        "class"         => "ds_menu_word",
	    "image"         => "images/add-menu-plus.png",
        "admin"         => true,
        "client"        => true
    ),
	
// =============================== FOOTER ITEMS ====================================

    Array(
        "title"         => "Remove bullet points from footer",
        "description"   => "Remove the footer bullets and reposition the links properly.",
        "option"        => "footer_bullets",
        "class"         => "ds_footer_bullets",
	    "image"         => "images/no-bullets.png",
        "admin"         => true,
        "client"        => true
    ),
	

    Array(
        "title"         => "Hide Bottom Footer",
        "description"   => "Remove the bottom footer, the one with the ET links.",
        "option"        => "footer_hide_option",
        "class"         => "ds_footer_hide_option",
	    "image"         => "images/remove-bottom-footer.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Stop the footer floating on empty pages",
        "description"   => "Pages with little or no content show the bottom footer in the center of the page. Not any more.",
        "option"        => "footer_push",
        "class"         => "ds_footer_push",
	    "image"         => "images/floating-footer.png",
        "admin"         => true,
        "client"        => true
    ),

// =============================== THEME ITEMS ====================================
	
    Array(
        "title"         => "Remove the dividing sidebar line",
        "description"   => "Get rid of the thin grey line that separates the sidebar from the main content.",
        "option"        => "sidebar_line",
        "class"         => "ds_remove_line",
	    "image"         => "images/sidebar-line.png",
        "admin"         => true,
        "client"        => true
    ),

	    Array(
        "title"         => "Home Page Pre-loader (dark)",
        "description"   => "Show a cool loading screen while your page objects load.",
        "option"        => "loader_dark",
        "class"         => "load-dark",
	    "image"         => "images/load-dark.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Home Page Pre-loader (light)",
        "description"   => "Show a cool loading screen while your page objects load.",
        "option"        => "loader_light",
        "class"         => "load-light",
	    "image"         => "images/load-light.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Top Section Separators",
        "description"   => "You can add three different separator styles to the tops of your sections. Just add one of the following classes to any section.</br></br>
		                   CSS classes can be added under the custom CSS tab.</br></br>
		                   ds_up_arrow_section</br>
						   ds_slant_top</br>
						   ds_up_circle_section",
        "option"        => "top_section_separators",
        "class"         => "section_separators",
	    "image"         => "images/top-separators.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Bottom Section Separators",
        "description"   => "You can add three different separator styles to the bottoms of your sections. Just add one of the following classes to any section.</br></br>
		                   CSS classes can be added under the custom CSS tab.</br></br>
		                   ds_down_arrow_section</br>
						   ds_slant_bottom</br>
						   ds_down_circle_section",
        "option"        => "bottom_section_separators",
        "class"         => "section_separators_down",
	    "image"         => "images/bottom-separators.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Cleaner blog comments",
        "description"   => "Nest replies properly, fix the reply button positioning and clean up the form for logged out users.",
        "option"        => "clean_comments",
        "class"         => "ds_clean_comments",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Square buttons",
        "description"   => "An alternative button style if border radiuses aren't your thing.",
        "option"        => "square_buttons",
        "class"         => "ds_square_buttons",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Add Code boxes",
        "description"   => "Switch on and whenever you use the 'pre' font format in your text editor menu, the contents will appear in a code box.",
        "option"        => "pretext_code",
        "class"         => "ds_pretext_code",
	    "image"         => "images/codebox.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Style Contact Form 7",
        "description"   => "Divi styles for CF7 users with one switch!",
        "option"        => "style_cf7",
        "class"         => "ds_style_cf7",
	    "image"         => "images/cf7.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Better archive pages - Two columns",
        "description"   => "Change the archive and category pages into a better looking two column layout. Works very well when you remove the sidebar on archive pages.",
        "option"        => "two-column-archive",
        "class"         => "ds_two_columns",
	    "image"         => "images/two-columns.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Remove sidebar on archive pages",
        "description"   => "Make archive pages full width for a cleaner look. Works great with a two column archive layout.",
        "option"        => "full-width-archive",
        "class"         => "ds_clean_archive",
        "admin"         => true,
        "client"        => true
    ),
		
// =============================== MODULE ITEMS ====================================

	    Array(
        "title"         => "Replace the toggle plus icon with rotating arrow",
        "description"   => "A mobile style menu on desktops and other larger devices.",
        "option"        => "toggle_arrow_mod",
        "class"         => "ds_toggle_arrow",
	    "image"         => "images/toggle-arrow.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Square portfolio images",
        "description"   => "Make portfolio grid images perfectly square",
        "option"        => "square_portfolio_images",
        "class"         => "ds_square_portfolio",
	    "image"         => "images/square-portfolio.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "'Book' portfolio images",
        "description"   => "Make portfolio grid images the same aspect ratio as a book cover",
        "option"        => "book_portfolio_images",
        "class"         => "ds_book_portfolio",
	    "image"         => "images/book-portfolio.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "'Cinema' portfolio images",
        "description"   => "Make portfolio grid images the same aspect ratio as a widescreen. Great for showing off video stills or images.",
        "option"        => "cinema_portfolio_images",
        "class"         => "ds_cinema_portfolio",
	    "image"         => "images/cinema-portfolio.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Blurb icon grow",
        "description"   => "Make blurb icons grow on hover",
        "option"        => "blurb_icon_grow",
        "class"         => "ds_blurb_grow",
	    "image"         => "images/blurb-grow.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Blurb icon spin",
        "description"   => "Make blurb icons spin on hover",
        "option"        => "blurb_icon_spin",
        "class"         => "ds_blurb_spin",
	    "image"         => "images/blurb-spin.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Stop Gallery images opening a lightbox",
        "description"   => "Stop the gallery opening up the lightbox when clicked.",
        "option"        => "no_lightbox",
        "class"         => "ds_no_lightbox",
	    "image"         => "images/no-lightbox.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Hide counter when it hits zero",
        "description"   => "Set the timer/counter module to dissappear when it gets to zero.",
        "option"        => "counter_hide",
        "class"         => "ds_counter_hide",
	    "image"         => "images/hide-counter.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Project Overlay - ZOOM",
        "description"   => "Make project overlays zoom on hover. One of three overlay hover effects available in Divi Switch",
        "option"        => "overlay_zoom",
        "class"         => "ds_overlay_zoom",
	    "image"         => "images/overlays.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Project Overlay - SPIN",
        "description"   => "Make project overlays spin on hover. One of three overlay hover effects available in Divi Switch",
        "option"        => "overlay_spin",
        "class"         => "ds_overlay_spin",
	    "image"         => "images/overlays.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Project Overlay - SLIDE UP",
        "description"   => "Make project overlays slide up on hover. One of three overlay hover effects available in Divi Switch",
        "option"        => "overlay_slide_up",
        "class"         => "ds_overlay_slide_up",
	    "image"         => "images/overlays.png",
        "admin"         => true,
        "client"        => true
    ),
	
// =============================== TRANSITION ITEMS ====================================

    Array(
        "title"         => "Hover.CSS Transition Effects",
        "description"   => "A collection of 27 CSS transitions and animations by Ian Lunn, adjusted for Divi. 
		                   Just turn on the switch and add any of the following classes to the image or module you want to effect.</br></br>
                           Classes can be added in the 'custom CSS' tab in sections, rows and modules</br></br>
						   hover_grow </br>
						   hover_shrink </br>
						   hover_pulse </br>
						   hover_pulse_grow </br>
						   hover_pulse_shrink </br>
						   hover_push </br>
						   hover_pop </br>
						   hover_bounce_out </br>
						   hover_bounce_in </br>
						   hover-rotate </br>
						   hover_grow-rotate </br>
						   hover-float </br>
						   hover-sink </br>
						   hover-bob </br>
						   hover-hang </br>
						   hover-skew </br>
						   hover-skew-forward </br>
						   hover-skew-backward </br>
						   hover-wobble-vertical </br>
						   hover-wobble-horizontal </br>
						   hover-wobble-to-bottom-right </br>
						   hover-wobble-to-top-right </br>
						   hover-wobble-top </br>
						   hover-wobble-bottom </br>
						   hover-wobble-skew </br>
						   hover-buzz </br>
						   hover-buzz-out",
        "option"        => "hover-animations",
        "class"         => "ds_animate",
	    "image"         => "images/hover-css.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Slide decription fly in left",
        "description"   => "Change the slider description default transition to fly in left",
        "option"        => "slide_transition_left",
        "class"         => "ds_fade_left",
	    "image"         => "images/slide-transitions.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Slide decription fly in right",
        "description"   => "Change the slider description default transition to fly in right",
        "option"        => "slide_transition_right",
        "class"         => "ds_fade_right",
	    "image"         => "images/slide-transitions.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Slide decription flip on Y axis",
        "description"   => "Change the slider description default transition to flip on Y axis",
        "option"        => "slide_transition_flipY",
        "class"         => "ds_flip_y",
	    "image"         => "images/slide-transitions.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Slide decription flip on X axis",
        "description"   => "Change the slider description default transition to flip on X axis",
        "option"        => "slide_transition_flipX",
        "class"         => "ds_flip_x",
	    "image"         => "images/slide-transitions.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Slide image & video fly in left",
        "description"   => "Change the slider image default transition to fly in left",
        "option"        => "slide_image_transition_left",
        "class"         => "ds_slide_fade_left",
	    "image"         => "images/slide-transitions.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Slide image & video fly in right",
        "description"   => "Change the slider image default transition to fly in left",
        "option"        => "slide_image_transition_right",
        "class"         => "ds_slide_fade_right",
	    "image"         => "images/slide-transitions.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Slide image & video flip on Y axis",
        "description"   => "Change the slider image default transition to flip on Y axis",
        "option"        => "slide_image_transition_flipY",
        "class"         => "ds_slide_flip_y",
	    "image"         => "images/slide-transitions.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Slide image & video flip on X axis",
        "description"   => "Change the slider image default transition to flip on X axis",
        "option"        => "slide_image_transition_flipY",
        "class"         => "ds_slide_flip_x",
	    "image"         => "images/slide-transitions.png",
        "admin"         => true,
        "client"        => true
    ),

// =============================== FILTER ITEMS ========================================

    Array(
        "title"         => "CSS Filters",
        "description"   => "Get beautiful filters. Just add one of the following 'custom CSS classes' in the custom CSS tab of any section, row or module. They work best on images:</br></br> 
		                   ds_grayscale</br>
						   ds_saturate</br>
						   ds_blur</br>
						   ds_invert</br>
						   ds_brighter</br>
						   ds_sepia",
        "option"        => "down_arrow_section",
        "class"         => "ds_up_arrow_section",
	    "image"         => "images/filters.png",
        "admin"         => true,
        "client"        => true
    ),
	
    Array(
        "title"         => "Instagram Filters",
        "description"   => "Add beautiful Instagram style filters to your images, modules or sections. 
		                   Just turn on the switch and add any of the following classes to the image or module you want to effect.</br></br>
                           Classes can be added in the 'custom CSS' tab in sections, rows and modules</br></br>
						   xpro2 </br>
						   walden </br>
						   valencia </br>
						   toaster </br>
						   sutro </br>
						   rise </br>
						   nashville </br>
						   mayfair </br>
						   kelvin </br>
						   hudson </br>
						   1977 </br>
						   earlybird </br>",
        "option"        => "ds_instagram_filters",
        "class"         => "ig_filters",
	    "image"         => "images/instagram.png",
        "admin"         => true,
        "client"        => true
    ),

// =============================== Square Portfolio Items ====================================

    Array(
        "title"         => "Square 'Full Width' Portfolio Modules",
        "description"   => "Force the full width portfolio module to display square projects",
        "option"        => "full_width_square_portfolios",
        "class"         => "full-width-square",
	    "image"         => "images/fullwidth-portfolio.png",
        "admin"         => true,
        "client"        => true
    ),

// =============================== Text Shadow ====================================

    Array(
        "title"         => "Text Shadow - Dark",
        "description"   => "Provide a dark shadow behind text for better visibility on light backgrounds <br>
		Just add the class 'shad-dark' to any module, row or section.",
        "option"        => "dark-text-shadow",
        "class"         => "dark-shadow-text",
	    "image"         => "images/dark-shadow.png",
        "admin"         => true,
        "client"        => true
    ),

    Array(
        "title"         => "Text Shadow - Light",
        "description"   => "Provide a light shadow behind text for better visibility on dark backgrounds <br>
		Just add the class 'shad-light' to any module, row or section.",
        "option"        => "light-text-shadow",
        "class"         => "light-shadow-text",
	    "image"         => "images/light-shadow.png",
        "admin"         => true,
        "client"        => true
    )
);

// =============================== END ========================================

function ds_classes($classes) {
    global $dsmatrix;
    $ia = is_admin();
    for ( $i = 0; $i < count($dsmatrix); $i++ ) {
        $obj = $dsmatrix[$i];
        $via = $obj['admin'];
        $vic = $obj['client'];
        $opt = isset($obj['option'])?$obj['option']:"unknown_{$n}";
        $enabled = GS($opt, '0');
        
        if ( $ia && $via && $enabled == '1' ) {
            $classes[] = $obj['class'];
        }
        if ( !$ia && $vic && $enabled == '1' ) {
            $classes[] = $obj['class'];
        }
    }
    
    return $classes;
}