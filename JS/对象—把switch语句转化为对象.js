// 定义 phoneticLookup
function phoneticLookup(val) {
  var result = "";

  // 请只修改这条注释以下的代码
  var lookup = {
      alpha  :"Adams",
      bravo  :"Boston",
      charlie:"Chicago",
      delta  :"Denver",
      echo   :"Easy",
      foxtrot:"Frank"
    };
  result  = lookup[val];
  // 请只修改这条注释以上的代码
  return result;
}

// 你可以修改这一行来测试你的代码
phoneticLookup("echo");