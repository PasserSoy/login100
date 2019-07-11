$(function(){
  // 输入框获取焦点时，label文字往上移
  $('.int input').on('focus',function(){
    var _t=$(this),_s=_t.next('span');
    _s.css({'bottom':'20px'});
  });
  // 输入框移除焦点时，如果input有文字则span不落下
  $('.int input').on('blur',function(){
    var _t=$(this),_s=_t.next('span');
    if(_t.val()==''){
      _s.css({'bottom':'0'});
    };
  });
  // 输入框失去焦点
  $('input').on('keyup blur change', function () {
    var inputL = $('input').length;
    var emptyL = $('input').filter(function () {
      return this.value === '';
    }).length;
    var r = (emptyL / inputL) * 100 + '%';
    $('.login i').css({ 'right': r });
    if (emptyL == 0) {
      $('.login').removeAttr('disabled');
    } else {
      $('.login').attr('disabled', 'disabled');
    }
  });
  // 处理密码
  $('#pw').on('keyup blur',function(){
    var _t=$(this),_v=_t.val();
    console.log(_v.replace(/\w/gi,'-'))
  });
})