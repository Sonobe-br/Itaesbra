//var path=window.location.origin+"/";
var path = "https://itaesbra.com.br/sandbox/";

var menuDesktopInternas=`
<li class="sub">
    <a href="` + path + `" rel="itaesbra" data-url="itaesbra" class="link">ITAESBRA</a>
    <ul class="sub-principal">
        <li><a href="` + path + `itaesbra/historia/">História</a>
        </li>
        <li><a href="` + path + `itaesbra/missao-visao-e-valores/">Missão Visão e Valores</a>
        </li>
        <li><a href="` + path + `itaesbra/localizacao/">Localização</a>
        </li>
    </ul>
</li>
<li class="sub">
    <a href="` + path + `estrutura/" rel="estrutura" data-url="estrutura" class="link">ESTRUTURA</a>
    <ul class="sub-principal">
        <li><a href="` + path + `estrutura/engenharia/">ENGENHARIA</a>
        </li>
        <li><a href="` + path + `estrutura/estamparia/">ESTAMPARIA</a>
        </li>
        <li><a href="` + path + `estrutura/ferramentaria/">FERRAMENTARIA</a>
        </li>
        <li><a href="` + path + `estrutura/solda/">SOLDA</a>
        </li>
    </ul>
</li>
<li class="sub">
    <a href="` + path + `produtos/" data-url="produtos" class="direct-link">PRODUTOS</a>
    <ul class="sub-principal">
        <li><a href="` + path + `produtos/automotivo/">AUTOMOTIVO</a>
        </li>
        <li><a href="` + path + `produtos/duas-rodas/">DUAS RODAS</a>
        </li>
        <li><a href="` + path + `produtos/linha-branca/">LINHA BRANCA</a>
        </li>
    </ul>
</li>
<li class="sub">
    <a href="#" data-url="fabricas" class="direct-link">FÁBRICAS</a>
    <ul class="sub-principal">
        <li><a href="` + path + `fabricas/planta-ibe-sp/">PLANTA IBE SP</a>
        </li>
        <li><a href="` + path + `fabricas/planta-ibe-pe/">PLANTA IBE PE</a>
        </li>
    </ul>
</li>
<li>
    <a href="` + path + `qualidade/" rel="qualidade" class="link">QUALIDADE</a>
</li>
<li>
    <a href="` + path + `premios/" rel="premios">PRÊMIOS</a>
</li>
<li>
    <a href="` + path + `clientes/" rel="premios">CLIENTES</a>
</li>
<li class="sub">
    <a href="` + path + `fale-conosco/" data-url="fale-conosco" class="direct-link">FALE CONOSCO</a>
    <ul class="sub-principal">
        <li>
            <a href="` + path + `fale-conosco/contato/">CONTATO</a>
        </li>
        <li><a href="https://trabalheconosco.vagas.com.br/itaesbra">TRABALHE CONOSCO</a>
        </li>
        <li><a href="https://datamace.itaesbra.com.br:80/Grhnet/Default.aspx">INTRANET</a>
        </li>
    </ul>
</li>
<li>
    <ul class="secundario">
        <li><img src="` + path + `content/images/download.jpg" />
        </li>
        <li><img src="` + path + `content/images/images.jpg" />
        </li>
    </ul>
</li>`;

var menuMobile=`
<li class="sub" onclick="subOpen(this)">
    <a href="javascript:;" rel="itaesbra" data-url="itaesbra" class="link">ITAESBRA <i class="fa fa-angle-down"></i></a>
        <ul class="sub-principal sub-mobile">
            <li><a href="` + path + `itaesbra/historia/">História</a>
            </li>
            <li><a href="` + path + `itaesbra/missao-visao-e-valores/">Missão Visão e Valores</a>
            </li>
            <li><a href="` + path + `itaesbra/localizacao/">Localização</a>
            </li>
        </ul>
</li>
<li class="sub" onclick="subOpen(this)">
    <a href="javascript:;" rel="estrutura" data-url="estrutura" class="link">ESTRUTURA <i class="fa fa-angle-down"></i></a>
        <ul class="sub-principal sub-mobile">
            <li><a href="` + path + `estrutura/engenharia/">ENGENHARIA</a>
            </li>
            <li><a href="` + path + `estrutura/estamparia/">ESTAMPARIA</a>
            </li>
            <li><a href="` + path + `estrutura/ferramentaria/">FERRAMENTARIA</a>
            </li>
            <li><a href="` + path + `estrutura/solda/">SOLDA</a>
            </li>
        </ul>
</li>
<li class="sub" onclick="subOpen(this)">
    <a href="javascript:;" data-url="produtos" class="direct-link">PRODUTOS <i class="fa fa-angle-down"></i></a>
        <ul class="sub-principal sub-mobile">
            <li><a href="` + path + `produtos/automotivo/">AUTOMOTIVO</a>
            </li>
            <li><a href="` + path + `produtos/duas-rodas/">DUAS RODAS</a>
            </li>
            <li><a href="` + path + `produtos/linha-branca/">LINHA BRANCA</a>
            </li>
        </ul>
</li>
<li class="sub" onclick="subOpen(this)">
    <a href="#" data-url="fabricas" class="direct-link">FÁBRICAS <i class="fa fa-angle-down"></i></a>
        <ul class="sub-principal sub-mobile">
            <li><a href="` + path + `fabricas/planta-ibe-sp/">PLANTA IBE SP</a>
            </li>
            <li><a href="` + path + `fabricas/planta-ibe-pe">PLANTA IBE PE</a>
            </li>
        </ul>
</li>
<li>
    <a href="` + path + `qualidade/" rel="qualidade" class="link">QUALIDADE</a>
</li>
<li>
    <a href="` + path + `premios/" rel="premios">PRÊMIOS</a>
</li>
<li>
    <a href="` + path + `clientes/" rel="premios">CLIENTES</a>
</li>
<li class="sub" onclick="subOpen(this)">
    <a href="javascript:;" rel="fale-conosco" data-url="fale-conosco" class="link">FALE CONOSCO <i class="fa fa-angle-down"></i></a>
    <ul class="sub-principal">
        <li><a href="` + path + `fale-conosco/contato/">CONTATO</a>
        </li>
        <li><a href="https://datamace.itaesbra.com.br:80/Etalent/Home">TRABALHE CONOSCO</a>
        </li>
        <li><a href="https://datamace.itaesbra.com.br:80/Grhnet/Default.aspx">INTRANET</a>
        </li>
    </ul>
</li>
<li>
    <ul class="secundario">
        <li><img src="` + path + `content/images/download.jpg" />
        </li>
        <li><img src="` + path + `content/images/images.jpg" />
        </li>
    </ul>
</li>`;

$(window).ready(function(){$(this).width()<600?($(".principal").addClass("menuMobile"),$(".principal").html(menuMobile)):($(".principal").removeClass("menuMobile"),$(".principal").html(menuDesktopInternas),$(".link").click(function(e){600<=$(window).width()?scrollToAnchor(e.currentTarget.attributes[1].nodeValue):console.log(e.currentTarget.attributes[2].nodeValue)}))}),$(window).resize(function(){$(this).width()<600?($(".principal").addClass("menuMobile"),$(".principal").html(menuMobile)):($(".principal").removeClass("menuMobile"),$(".principal").html(menuDesktopInternas),$(".link").click(function(e){600<=$(window).width()?scrollToAnchor(e.currentTarget.attributes[1].nodeValue):console.log(e.currentTarget.attributes[2].nodeValue)}))}),$(".open-menu").click(function(e){$(".principal").html(menuMobile)});var subOpen=function(val){console.log(val),$(val).find(".sub-principal").attr("style")?$(val).find(".sub-principal").removeAttr("style"):$(val).find(".sub-principal").show()};$(window).resize(function(){600<$(this).width()&&$(".principal").removeAttr("style")}),$(".block").click(function(e){$(this).toggleClass("active"),$(".principal").hasClass("openMenu")?$(".principal").removeClass("openMenu"):$(".principal").addClass("openMenu")}),$(".logo-mobile").click(function(){window.location.href=window.location.origin}),$(".fa-facebook-square").click(function(){window.open("https://www.facebook.com/itaesbra/","_blank")}),$(".fa-youtube").click(function(){window.open("https://www.youtube.com/channel/UCRilicyCyUU5t61g8hzqhvQ","_blank")}),$(".fa-twitter-square").click(function(){window.open("https://www.facebook.com/itaesbra/","_blank")}),$(".fa-linkedin").click(function(){window.open("https://br.linkedin.com/company/itaesbra-ind-stria-mec-nica-ltda","_blank")});
