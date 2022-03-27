<?php

/*****************************************
 **
 ** Plugin Name: Divi Switch
 ** Version: 2.1
 ** Plugin URI: https://www.divi.space
 ** Description: Hundreds of Divi Modifications at the flick of a switch. 
 ** Author: Gritty
 ** Author URI: http://gritty-social.com
 **
 ****************************************/
 
 function ds_ds_notice_active() {
    global $current_user ;
        $user_id = $current_user->ID;

    //Has the user already closed the message?

    if ( ! get_user_meta($user_id, 'ds_ig_ignore_welcome') ) {
        echo '<div class="updated"><p>';
        printf(__('Thank you for buying Divi Switch :) We\'ve moved things around a bit. <br><br>
		You\'ll now find the switches under the Divi Theme Options Tab. The knowledge base article for this plugin is <a href="https://divi.space/knowledge-base/divi-switch/">here</a>. | <a href="%1$s">Hide Message</a>'), '?ds_ds_notice_ignore=0');
        echo "</p></div>";
    }
}
 
function ds_ds_notice_ignore() {
    global $current_user;
        $user_id = $current_user->ID;
		
        //Save close to user meta
		
        if ( isset($_GET['ds_ds_notice_ignore']) && '0' == $_GET['ds_ds_notice_ignore'] ) {
             add_user_meta($user_id, 'ds_ig_ignore_welcome', 'true', true);
    }
}
 
// == Switch CSS ==
function ds_plugin_styles() { $plugin_url = plugin_dir_url( __FILE__ ); wp_enqueue_style( 'style', $plugin_url . 'switch-style.css' ); }

// == Switch Array ==
require( plugin_dir_path( __FILE__ ) . 'register-switches.php');

// == Include the updater script ==
require 'plugin-updates/plugin-update-checker.php';

$secret=base64_decode('dXBkYXRhYmxlL2I3YmZnaGJmYnJvMzRoYjk4ZmcvZGl2aS1zd2l0Y2gtcGx1Z2lu');

// == Let's make some switches ==
if ( isset($_POST[MD5("DiviSwitch")]) ) { foreach ( $_POST as $key => $val ) { SS($key, $val); exit(1); } }

function SS($key, $val) { update_option( "ds_{$key}", $val ); }

function GS($key, $default = false) { return get_option( "ds_{$key}", $default); }

function ds_admin_head_scripts() {
	
?>

<script type="text/javascript" id="Gritty_WidgetLinks">

(function($) {
    $(function() {
        $("LABEL[for^=myonoffswitch]")
        .each(function() {
            // == Which label was clicked? ==
            var which = $(this).attr("for");
            var cls = $(this).data("class");
            if ( $("INPUT[id=" + which + "]").is(":checked") ) {
                $("BODY").addClass(cls);
            } else {
                $("BODY").removeClass(cls);
            }
        })
        .on("click", function() {
            // == Which label was clicked? ==
            var which = $(this).attr("for");
            var cls = $(this).data("class");
            
            if ( !$("INPUT[id=" + which + "]").is(":checked") ) {
                $("BODY").addClass(cls);
            } else {
                $("BODY").removeClass(cls);
            }
            
            $.ajax({
                url: './',
                type: "POST",
                data: $("INPUT[id=" + which + "]").attr("name") + "=" + ($("INPUT[id=" + which + "]").is(":checked")?"0":"1") + "&<?php echo MD5("DiviSwitch");?>=1", // == Save check state == Hat tip to Terry @ https://www.facebook.com/mizagorn/ 
                success: function(response) {
                },
                error: function(jqXhr, e, responseText) {
                    alert("Failed to update: " + responseText);
                }
            })
        });
    });
})(jQuery);
</script>
<?php
}

// == Search for updates every 12 hours ==
$SwitchUpdateChecker = PucFactory::buildUpdateChecker('https://divi.space/'.$secret.'.json',__FILE__);

// == Register a settings page ==
class divi_switch_settings {
	function divi_switch_settings() { add_action('admin_menu', array(&$this, 'admin_menu')); }

// == Place that page in the Divi section ==	
	function admin_menu() {
		$page = add_submenu_page('admin.php', 'Divi Switch', 'Divi Switch', 'manage_options', 'divi-switch-settings', array(&$this, 'switch_page'));
		add_submenu_page( 'et_divi_options',__( 'Divi Switch', 'Divi' ), __( 'Divi Switch', 'Divi' ), 'manage_options', 'admin.php?page=divi-switch-settings', 'divi-switch-settings' );
	}

// ===================== DIVI SWITCH PAGE STRUCTURE ===========================

function switch_page() { ?>
    <div id="top"></div>
	<div class="btt-button"><a href="#top">^</a></div>
	<div class="switch-page">
	  <div class="switch-title">
	   <h1>Divi Switch 2.1</h1>
	  </div>
	  <div class="switch-types">
	   <ul class="type-list">
	     <li><a href="#top">Menu</a></li>
	     <li><a href="#switch-box-9">Mobile Menu</a></li>
	     <li><a href="#switch-box-17">Footer</a></li>
	     <li><a href="#switch-box-20">Theme</a></li>
	     <li><a href="#switch-box-30">Modules</a></li>
	     <li><a href="#switch-box-42">Transitions</a></li>
	     <li><a href="#switch-box-51">Filters</a></li>
	   </ul>
	  </div>
	<div class="page-container">
	<?php
    global $dsmatrix;
    for ( $i = 0; $i < count($dsmatrix); $i++ ) {
        $obj = $dsmatrix[$i];
        $n = ($i+1);
        $opt = isset($obj['option'])?$obj['option']:"unknown_{$n}";
    ?>
	
    <div class="divi-switch" id="switch-box-<?php echo $n;?>">
	  <div class="small-container">
	    <div class="image-container">
		  <img src="<?php echo plugins_url( isset($obj['image'])?$obj['image']:"images/placeholder.png", __FILE__ ) ?>" >
        </div>
        <div class="title-container">
          <h3><?php echo isset($obj['title'])?$obj['title']:"Unkown";?></h3>
        </div>
        <div class="info-container">
          <p><?php echo isset($obj['description'])?$obj['description']:"No description";?></p>
        </div>
	  </div>
      <div class="onoffswitch">
        <input type="checkbox" name="<?php echo $opt;?>" class="onoffswitch-checkbox" id="myonoffswitch-<?php echo $n;?>" value="1"<?php echo (GS($opt, '0') == '0' ? "" : " checked='checked'");?> /> 
          <label class="onoffswitch-label" for="myonoffswitch-<?php echo $n;?>" data-class="<?php echo $obj['class'];?>">
            <span class="onoffswitch-inner"></span>
            <span class="onoffswitch-switch"></span>
          </label>
      </div>
    </div>

    <?php
    }
	?>
	</div>
    </div>
	
<style type="text/css">

.btt-button a,.type-list li a{color:#fff;text-decoration:none}.divi-switch{padding:30px 18px 18px;border-bottom:3px solid #f1f1f1;position:relative;background:#fff;margin-bottom:12px;min-height:162px}.onoffswitch{width:70px;height:30px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;position:absolute;right:34px;top:52px}.onoffswitch-checkbox{display:none}.onoffswitch-label{margin-top:-40px;display:block;overflow:hidden;cursor:pointer;height:34px;padding:0;line-height:26px;border:2px solid #CCC;border-radius:4px;background-color:#CCC;transition:background-color .3s ease-in}.onoffswitch-label:before{content:"";display:block;width:32px;background:#fff;position:absolute;top:-20px;bottom:16px;right:31px;border:2px solid #CCC;border-radius:4px;transition:all .3s ease-in 0s}.onoffswitch-checkbox:checked+.onoffswitch-label{background-color:#20BF55}.onoffswitch-checkbox:checked+.onoffswitch-label,.onoffswitch-checkbox:checked+.onoffswitch-label:before{border-color:#20BF55}.onoffswitch-checkbox:checked+.onoffswitch-label:before{right:2px}input.onoffswitch-checkbox{visibility:hidden}.switch-page{position:relative;display:block;background:#fff;width:90%;max-width:980px;margin:50px auto;border-radius:4px;min-width:300px}.switch-title h1{padding:26px 12px 26px 94px;color:#fff;background:#5B279B;font-weight:100;border-radius:5px 5px 0 0}.switch-title h1:after,.switch-title h1:before{display:block;content:"";border-radius:4px;position:absolute}.switch-title h1:before{width:54px;height:30px;background:#fff;top:20px;left:28px}.switch-title h1:after{width:26px;height:24px;background:#5B279B;top:23px;left:31px}.page-container{padding:0 16px 10px;border-radius:5px}.small-container{margin-right:122px;margin-left:230px}.title-container h3{text-transform:uppercase}.info-container p{font-size:1.2em;line-height:1.8em}.image-container{position:absolute;width:200px;height:160px;overflow:hidden;left:16px;top:16px;border:3px solid #dedede}.image-container img{width:100%;height:100%;object-fit:cover}.switch-title h1:hover:after{margin-left:22px;transition:.5s ease margin-left}.switch-title h1:after{margin-left:0;transition:.5s ease margin-left}.btt-button a{position:fixed;width:50px;height:29px;padding-top:18px;bottom:30px;right:20px;background:#303030;font-size:2em;text-align:center;z-index:99}#top{position:absolute;height:0;top:-32px}.type-list{background:#4F2387;margin-top:-18px}.type-list li{display:inline-block;margin-right:-4px;padding:14px 0;margin-bottom:-2px}.type-list li a{background:#471F79;font-size:1.1em;padding:12px 15px;transition:.5s ease all}.type-list li a:hover{background:#4F2387}@media (max-width:800px){.onoffswitch-label:before{top:-18px!important;height:30px!important}.image-container{position:relative!important;margin-bottom:50px!important;width:160px!important;height:124px!important;margin-left:-18px!important;margin-top:-18px!important}.small-container{margin-left:0!important;margin-right:0!important}.onoffswitch{top:46px!important;right:10px!important}}

</style>
<?php
	}
}
new divi_switch_settings();

add_action( 'admin_head', 'ds_admin_head_scripts' );
add_filter( 'body_class', 'ds_classes' );
add_action( 'wp_enqueue_scripts', 'ds_plugin_styles' );