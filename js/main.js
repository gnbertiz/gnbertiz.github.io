var controls = {
  events: function() {
    $('body').on("click" , ".gnb-img" , function() {
      init.modal();
    });
  }
}
var init = {
  modal: function() {
    obj = {
        modalClass: 'basic',
        headerType: true,
        iconClass: 'archieve',
        headerContent: 'Genesis N. Bertiz',
        bodyContent: '<img src="img/gnb.jpg" class="ui medium centered circular image modal-gnb-img">' +
                     '<div class="ui grid centered"><div class="mobile only row"><div>' +
                       '<li><i class="marker left icon"></i>#156 Buklod ng Nayon St.,<br>Sangandaan, Caloocan City</li>'+
                       '<li><i class="phone left icon"></i>+639067557278</li>' +
                       '<li><i class="mail left icon"></i>gnbertiz.dev@outlook.com</li>' +
                       '<li><i class="github left icon"></i>gnbertiz01@gmail.com</li>' +
                       '<li><i class="facebook left icon"></i>www.facebook.com/genbertiz</li>' +
                     '</div></div></div>',
        actions: [
          // Click, Class, IconClass, Content
          ['' , 'ui red basic cancel inverted button', 'remove icon' , 'Exit']
        ]
    }
    obj.modalClass = "ui " + obj.modalClass + " modal";
    obj.headerType = "ui " + (obj.headerType ? 'icon': '') + " header";
    obj.iconClass = "<i class='" + obj.iconClass + " icon'></i>";
    obj.bodyContent = "<p>" + obj.bodyContent + "</p>";

    $('#modal').addClass(obj.modalClass);
    $('#modal-header').addClass(obj.headerType);
    $('#modal-header').html(obj.iconClass + obj.headerContent);
    $('#modal div:nth-child(2)').html(obj.bodyContent);
    $('#modal .actions').html("");
    for(var i = 0; i < obj.actions.length; ++i) {
        $('#modal .actions').append(
          " <div onclick='"+obj.actions[i][0]+"' class='"+obj.actions[i][1]+"'> <i class='"+obj.actions[i][2]+"'></i> "+obj.actions[i][3]+"</div>"
        );
    }
    $('#modal').modal('show');
  }
}
$(document).ready(function() {
  setTimeout(function() {
    // Setup
    controls.events();

    $('.main').css("visibility" , "visible");
    $('body p:nth-child(1)').css("display" , "none");
  }, 1000);
});
