// 변수 유효범위 (Variable Scope)
// var, let, const

// let, const -> 블록단위
function scopeLetConst() {
  if (true) {
    const a = 123;
  }
  console.log(a);
}

scopeLetConst();

// var -> 함수단위
function scopeVar() {
  if (true) {
    var a = 123;
  }
  console.log(a);
}

scopeVar();
