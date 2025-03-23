// JavaScriptのif文参考例です。
const weight = 5; // kg

// weight 変数numが3の倍数の場合： “3の倍数です”
// weight 変数numが5の倍数の場合： “5の倍数です”
// weight 変数numが3と5の倍数の場合： “3と5の倍数です”

if (weight > 100) {
  console.log("3の倍数です");
} else if (weight < 80) {
  console.log("5の倍数です");
} else {
  console.log("3と5の倍数です");
}
