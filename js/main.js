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
  var p_info,
      educ,
      tbody;
  setTimeout(function() {
    // Setup
    controls.events();
    $('.main').css("visibility" , "visible");
    $('body p:nth-child(1)').css("display" , "none");
    $('.gnb-img').dimmer({on:'hover'});
  }, 1000);
  $('.ui.sticky').sticky({context: '#context'});
  p_info = [
      ['Name' ,'Genesis N. Bertiz'],
      ['Address' , '<i class="marker red left icon"></i>#156 Buklod ng Nayon St., Sangandaan, Caloocan City'],
      ['Age' , '24 yrs'],
      ['Date of Birth' , '<i class="calendar teal left icon"></i>August 8, 1993'],
      ['Place of Birth' , 'Manila'],
      ['Gender' , '<i class="male orange left icon"></i>Male'],
      ['Height' , '5 \' 2'],
      ['Weight' , '62 kgs'],
      ['Citizenship' , '<i class="ph flag"></i>Filipino'],
      ['Civil Status' , 'Single'],
  ];
  educ = [
    ["Tertiary", ["University of Caloocan City" , "Computer Science" , "2013-2017"]]
  ];
  tbody = "";
  $.each(p_info , function(i , v) {
    tbody += '<tr>' +
    '<td>' + p_info[i][0] + '</td>' +
    '<td>' + p_info[i][1] + '</td>' +
    '</tr>';
  });
  $('.ui.definition.table .tbody_personal').html(tbody);
  tbody = "";
  $.each(educ , function(i , v) {
    tbody += '<tr>' +
    '<td>' + p_info[i][0] + '</td>' +
    '<td>' + p_info[i][1] + '</td>' +
    '</tr>';
  });
  // $('.ui.definition.table .tbody_educ').html(tbody);
});
