/*
* Formulario de contato para Blogger
* Source code by http://bit.ly/modifymsg_kompiajaib and http://bit.ly/contactform_kompiajaib
* Modificado por http://www.kouttak.blogspot.com/
* Copyright 2016 - 2018
*/
function getselect(e){for(var t=document[_0xefb9[0]](e),o=0;o<t[_0xefb9[1]];o++)if(t[o][_0xefb9[2]])return t[o][_0xefb9[3]];return _0xefb9[4]}function generate(){var e=document[_0xefb9[6]](_0xefb9[5])[_0xefb9[3]],t=document[_0xefb9[6]](_0xefb9[7])[_0xefb9[3]],o=getselect(_0xefb9[8]),c=document[_0xefb9[6]](_0xefb9[9])[_0xefb9[3]],a=document[_0xefb9[6]](_0xefb9[10])[_0xefb9[3]],n=document[_0xefb9[6]](_0xefb9[11])[_0xefb9[3]],_=document[_0xefb9[6]](_0xefb9[12])[_0xefb9[3]],f=getselect(_0xefb9[13]),s=getselect(_0xefb9[14]),b=document[_0xefb9[6]](_0xefb9[15])[_0xefb9[3]],x=document[_0xefb9[6]](_0xefb9[16]),i=document[_0xefb9[6]](_0xefb9[17]);return x[_0xefb9[3]]=sett[_0xefb9[18]]+_0xefb9[19]+e+sett[_0xefb9[20]]+sett[_0xefb9[21]]+_0xefb9[19]+t+sett[_0xefb9[20]]+sett[_0xefb9[8]]+_0xefb9[19]+o+sett[_0xefb9[20]]+sett[_0xefb9[22]]+_0xefb9[19]+c+sett[_0xefb9[20]]+sett[_0xefb9[23]]+_0xefb9[19]+a+sett[_0xefb9[20]]+sett[_0xefb9[24]]+_0xefb9[19]+n+sett[_0xefb9[20]]+sett[_0xefb9[25]]+_0xefb9[19]+_+sett[_0xefb9[20]]+sett[_0xefb9[13]]+_0xefb9[19]+f+sett[_0xefb9[20]]+sett[_0xefb9[14]]+_0xefb9[19]+s+sett[_0xefb9[20]]+sett[_0xefb9[26]]+_0xefb9[19]+b,i[_0xefb9[27]](),!1}function closedialog(){document[_0xefb9[6]](_0xefb9[29])[_0xefb9[28]]()}var _0xefb9=["getElementsByName","length","selected","value","","ContactForm1_contact-form-name","getElementById","ContactForm1_contact-form-email","gender","ContactForm1_contact-form-age","ContactForm1_contact-form-domicele","ContactForm1_contact-form-urlfb","ContactForm1_contact-form-contact","jobs","lvl","ContactForm1_contact-form-reason","ContactForm1_contact-form-email-message","ContactForm1_contact-form-submit","name"," : ","br","email","age","domicele","urlfb","contact","reason","click","remove","contact_layout","Nome","Email","Sexo","Idade","Como gostaria de ser chamado","Url Facebook","Contact","Motivo","Nota","Algumas palavras sobre a menssagem ou sobre o    review","\n","oninput","slice","val","each","#us_contact input,#ContactForm1_contact-form-reason","disabled","attr","#sendform","removeAttr","keyup"],sett={name:_0xefb9[30],email:_0xefb9[31],gender:_0xefb9[32],age:_0xefb9[33],domicele:_0xefb9[34],urlfb:_0xefb9[35],contact:_0xefb9[36],jobs:_0xefb9[37],lvl:_0xefb9[38],reason:_0xefb9[39],br:_0xefb9[40]},ageinput=document[_0xefb9[6]](_0xefb9[9]);ageinput[_0xefb9[41]]=function(){this[_0xefb9[3]][_0xefb9[1]]>2&&(this[_0xefb9[3]]=this[_0xefb9[3]][_0xefb9[42]](0,2))},$(function(){$(_0xefb9[45])[_0xefb9[50]](function(){var e=!1;$(_0xefb9[45])[_0xefb9[44]](function(){_0xefb9[4]==$(this)[_0xefb9[43]]()&&(e=!0)}),e?$(_0xefb9[48])[_0xefb9[47]](_0xefb9[46],_0xefb9[46]):$(_0xefb9[48])[_0xefb9[49]](_0xefb9[46])})}),"undefined"!=typeof BLOG_attachCsiOnload&&null!=BLOG_attachCsiOnload&&(window.blogger_templates_experiment_id="templatesV1",window.blogger_blog_id=blogsid,BLOG_attachCsiOnload("")),_WidgetManager._Init("//www.blogger.com/rearrange?blogID="+blogsid,nameblog,blogsid),_WidgetManager._RegisterWidget("_ContactFormView",new _WidgetInfo("ContactForm1","footer1",null,document.getElementById("ContactForm1"),{contactFormMessageSendingMsg:"Enviando...",contactFormMessageSentMsg:"<div id='contact_layout'><div class='contact_message'><div class='contact_top'><i class='fas fa-check'></i></div><div class='contact_des'><b>Formulário foi enviado</b><p>Nós nos esforçaremos responder dentro de 24 horas .Se você não obter resposta dentro de 24 horas, por favor contacte o administrador através do fanspage.</p></div><a href='#us_contact' onclick='closedialog()' class='contact_close'>Fechar</a></div></div>",contactFormMessageNotSentMsg:"<div id='contact_layout'><div class='contact_message error_message'><div class='contact_top'><i class='fas fa-times'></i></div><div class='contact_des'><b>Mensagem não pode ser enviada</b><p>Por favor, tente novamente mais tarde</p></div><a href='#us_contact' class='contact_close' onclick='closedialog()'>Fechar</a></div></div>",contactFormInvalidEmailMsg:"<div id='contact_layout'><div class='contact_message error_message'><div class='contact_top'><i class='fas fa-envelope'></i></div><div class='contact_des'><b>>Um endereço de e-mail válido é necessário</b><p>Você deve preencher seu endereço de e-mail corretamente.</p></div><a href='#us_contact' class='contact_close' onclick='closedialog()'>Fechar</a></div></div>",contactFormEmptyMessageMsg:"O campo mensagem/review não pode ser vazio..",title:"Contact Form",blogId:blogsid,contactFormNameMsg:"Name",contactFormEmailMsg:"Email",contactFormMessageMsg:"Message",contactFormSendMsg:"Send",submitUrl:"https://www.blogger.com/contact-form.do"},"displayModeFull"));
